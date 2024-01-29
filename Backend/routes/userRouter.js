import express from "express";
import { registerUser, login, logout } from "../controllers/userController.js";
import { validateRequest } from "../middleware/validateRequest.js";
import {
  addFavoriteBook,
  deleteFavoriteBook,
  moveBookToCurrentlyReading,
  moveBookToAlreadyRead,
  addNewBook,
  getAllBooks
} from "../controllers/bookController.js";
import isAuth from "../middleware/isAuth.js";

const router = express.Router();

router
  .post("/register", validateRequest, registerUser)
  .post("/login", login)
  .post("/logout", logout)
  .post("/addBook", addNewBook) 
  .get("/allBooks", getAllBooks)
  .patch("/addFavBook/:id",isAuth, addFavoriteBook)
  .patch("/toAlreadyread/:id", moveBookToAlreadyRead)
  .patch("/toCurrentlyread/:id", moveBookToCurrentlyReading)
  .delete("/deleteBook/:id", deleteFavoriteBook);

export default router;
