import User from "../models/UserModel.js";
import {Book} from "../models/BookModel.js";

export const addNewBook = async (req, res) => {
    try {
      const newBook = new Book(req.body);
      await newBook.save();
      res.status(201).send(newBook);
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
  
export const addFavoriteBook = async (req, res) => {
    const { userId, bookId } = req.body;

    try {
        const user = await User.findById(userId);
        const book = await Book.findById(bookId);

        if (!user) {
            return res.status(404).send("User not found.");
        }

        if (!book) {
            return res.status(404).send("Book not found.");
        }

        // Check if the book is already in favorites
        if (user.favoriteBooks.includes(bookId)) {
            return res.status(400).send("Book is already in favorites.");
        }

        user.favoriteBooks.push(bookId);
        await user.save();
        res.status(200).send("Book added to favorites successfully.");
    } catch (error) {
        console.error("Error adding favorite book:", error.message);
        res.status(500).send("Internal Server Error");
    }
};

export const deleteFavoriteBook = async (req, res) => {
    const { userId, bookId } = req.params;

    try {
        const user = await User.findById(userId);
        const book = await Book.findById(bookId);

        if (!user) {
            return res.status(404).send("User not found.");
        }

        if (!book) {
            return res.status(404).send("Book not found.");
        }

        if (!user.favoriteBooks.includes(bookId)) {
            return res.status(400).send("Book is not in favorites.");
        }

        user.favoriteBooks = user.favoriteBooks.filter(favBook => favBook.toString() !== bookId);
        await user.save();
        res.status(200).send("Book removed from favorites successfully.");
    } catch (error) {
        console.error("Error deleting favorite book:", error.message);
        res.status(500).send("Internal Server Error");
    }
};
export const moveBookToCurrentlyReading = async (req, res) => {
    const { userId, bookId } = req.params;

    try {
        const user = await User.findById(userId);
        const book = await Book.findById(bookId);

        if (!user) {
            return res.status(404).send("User not found.");
        }

        if (!book) {
            return res.status(404).send("Book not found.");
        }

        // Check if the book is in favorites before updating status
        if (!user.favoriteBooks.includes(bookId)) {
            return res.status(400).send("Book is not in favorites.");
        }

        // Update status to "Currently Reading"
        user.wantReadBooks = user.wantReadBooks.filter(wantReadBook => wantReadBook.toString() !== bookId);
        user.currentlyReading.push(bookId);

        await user.save();
        res.status(200).send("Book moved to Currently Reading successfully.");
    } catch (error) {
        console.error("Error moving book to Currently Reading:", error.message);
        res.status(500).send("Internal Server Error");
    }
};

export const moveBookToAlreadyRead = async (req, res) => {
    const { userId, bookId } = req.params;

    try {
        const user = await User.findById(userId);
        const book = await Book.findById(bookId);

        if (!user) {
            return res.status(404).send("User not found.");
        }

        if (!book) {
            return res.status(404).send("Book not found.");
        }

        // Check if the book is in favorites before updating status
        if (!user.favoriteBooks.includes(bookId)) {
            return res.status(400).send("Book is not in favorites.");
        }

        // Update status to "Already Read"
        user.currentlyReading = user.currentlyReading.filter(currentReadBook => currentReadBook.toString() !== bookId);
        user.alreadyRead.push(bookId);

        await user.save();
        res.status(200).send("Book moved to Already Read successfully.");
    } catch (error) {
        console.error("Error moving book to Already Read:", error.message);
        res.status(500).send("Internal Server Error");
    }
};