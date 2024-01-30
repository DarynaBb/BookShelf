import express from "express";
import {
    // addFavoriteBook,
    deleteFavoriteBook,
    // moveBookToCurrentlyReading,
    // moveBookToAlreadyRead,
    addNewBook,
    getAllBooks,
    changeShelfType,
    addBookToUser,
    getAllUsersBooks
  } from "../controllers/bookController.js";
import isAuth from "../middleware/isAuth.js";
// import { getUsersBooks } from "../controllers/userController.js";


  const bookRouter = express.Router();

  bookRouter 
    .post("/addBook", addNewBook) 
    .patch("/addBook/:id", addBookToUser)
    .patch("/updateBook/:userId/:bookId", changeShelfType)
    .delete("/deleteBook/:userId/:bookId", deleteFavoriteBook)
    .get("/:userId", getAllUsersBooks)

    // .get("/allBooks", getAllBooks)
    // .patch("/addFavBook/:id",isAuth, addFavoriteBook)
    // .patch("/toAlreadyread/:id", moveBookToAlreadyRead)
    // .patch("/toCurrentlyread/:id", moveBookToCurrentlyReading)
   
    

    
    export default bookRouter;    
