import User from "../models/UserModel.js";
import {Book} from "../models/BookModel.js";
import mongoose from "mongoose";

export const addNewBook = async (req, res) => {
    try {
      const newBook = new Book(req.body);
      await newBook.save();
      res.status(201).send("Book was added");
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  export const getAllBooks = async (req, res) => {
    try {
      const allBooks = await Book.find()
      res.status(200).json(allBooks);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  export const getAllUsersBooks = async (req, res) => {
    const {userId} = req.params;

    try {
        const user = await User.findById(userId).populate('favoriteBooks.book');
        if (!user) {
            throw new Error('User not found');
        }
        const userFavoriteBooks = user.favoriteBooks.map((favoriteBook) => ({
            book: favoriteBook.book,
            shelfType: favoriteBook.shelfType,
          }));
        res.status(200).send(userFavoriteBooks); 
    } catch (error) {
        console.error("Error deleting favorite book:", error.message);
        res.status(500).send("Internal Server Error");
    }
  }

  export const deleteFavoriteBook = async (req, res) => {
    const { userId, bookId } = req.params;

    try {
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).send("User not found.");
        }

        const bookIndex = user.favoriteBooks.findIndex(
            (favoriteBook) => favoriteBook.book.toString() === bookId
          );
      
          if (bookIndex === -1) {
            throw new Error('Book not found in favorites');
          }

          user.favoriteBooks.splice(bookIndex, 1);
          await user.save();
        
        res.status(200).send("Book removed from favorites successfully.");
    } catch (error) {
        console.error("Error deleting favorite book:", error.message);
        res.status(500).send("Internal Server Error");
    }
};

export const changeShelfType = async (req, res) => {
    const bookId = req.params.bookId;
    const userId = req.params.userId;
    const newShelfType = req.body.shelfType;

    try {
        const updatedUser = await User.findOneAndUpdate(
            { _id: userId, "favoriteBooks.book": bookId },
            { $set: { "favoriteBooks.$.shelfType": newShelfType } },
            { new: true }
          );
          if (!updatedUser) {
            return res.status(404).send("User or book not found");
          }
          res.status(200).send("ShelfType updated successfully");
    } catch (error) {
        console.error(error);
      res
        .status(500)
        .json({ message: "Internal Server Error", error: error.message });
    }
} 

export const addBookToUser = async (req, res) => {
    const userId = req.params.id;
    const bookId = req.body.bookId;
    try {
      const user = await User.findById(userId);
      const targetBookId = new mongoose.Types.ObjectId(bookId);
      if (!user) {
        return res.status(404).send("User not found");
      }
      if (user.favoriteBooks.some((favBook) => favBook.book.equals(targetBookId))) {
        return res.status(400).send("Book is already in favorites.");
      } else {
        await User.findByIdAndUpdate(userId, { $push: { favoriteBooks: {book: bookId }}},
            { new: true });
        res.status(200).send("Book was added");
      }     
    } catch (error) {
        console.error(error);
        res
        .status(500)
        .json({ message: "Internal Server Error", error: error.message });
    }
}
  
// export const addFavoriteBook = async (req, res) => {
//     const { userId, bookId } = req.body;

//     try {
//         const user = await User.findById(userId);
//         const book = await Book.findById(bookId);

//         if (!user) {
//             return res.status(404).send("User not found.");
//         }

//         if (!book) {
//             return res.status(404).send("Book not found.");
//         }
//         if (user.favoriteBooks.includes(bookId)) {
//             return res.status(400).send("Book is already in favorites.");
//         }

//         user.favoriteBooks.push(bookId);
//         await user.save();
//         res.status(200).send("Book added to favorites successfully.");
//     } catch (error) {
//         console.error("Error adding favorite book:", error.message);
//         res.status(500).send("Internal Server Error");
//     }
// };



// export const moveBookToCurrentlyReading = async (req, res) => {
//     const { userId, bookId } = req.params;

//     try {
//         const user = await User.findById(userId);
//         const book = await Book.findById(bookId);

//         if (!user) {
//             return res.status(404).send("User not found.");
//         }

//         if (!book) {
//             return res.status(404).send("Book not found.");
//         }
//         if (!user.favoriteBooks.includes(bookId)) {
//             return res.status(400).send("Book is not in favorites.");
//         }
//         user.wantReadBooks = user.wantReadBooks.filter(wantReadBook => wantReadBook.toString() !== bookId);
//         user.currentlyReading.push(bookId);

//         await user.save();
//         res.status(200).send("Book moved to Currently Reading successfully.");
//     } catch (error) {
//         console.error("Error moving book to Currently Reading:", error.message);
//         res.status(500).send("Internal Server Error");
//     }
// };

// export const moveBookToAlreadyRead = async (req, res) => {
//     const { userId, bookId } = req.params;

//     try {
//         const user = await User.findById(userId);
//         const book = await Book.findById(bookId);

//         if (!user) {
//             return res.status(404).send("User not found.");
//         }

//         if (!book) {
//             return res.status(404).send("Book not found.");
//         }

        
//         if (!user.favoriteBooks.includes(bookId)) {
//             return res.status(400).send("Book is not in favorites.");
//         }

        
//         user.currentlyReading = user.currentlyReading.filter(currentReadBook => currentReadBook.toString() !== bookId);
//         user.alreadyRead.push(bookId);

//         await user.save();
//         res.status(200).send("Book moved to Already Read successfully.");
//     } catch (error) {
//         console.error("Error moving book to Already Read:", error.message);
//         res.status(500).send("Internal Server Error");
//     }
// };



