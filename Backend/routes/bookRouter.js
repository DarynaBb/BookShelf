import express from "express";
import {
    deleteFavoriteBook,
    addNewBook,
    getAllBooks,
    addBookToUser,
    getAllUsersBooks,
    updateBook
  } from "../controllers/bookController.js";

  const bookRouter = express.Router();

  bookRouter 
    .post("/addBook", addNewBook) 
    .patch("/addBook/:id", addBookToUser)
    .patch("/updateBook/:userId/:bookId", updateBook)
    .delete("/deleteBook/:userId/:bookId", deleteFavoriteBook)
    .get("/:userId", getAllUsersBooks)
  


  
    

    
    export default bookRouter;    
