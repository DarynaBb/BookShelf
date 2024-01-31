import express from "express";
import { registerUser, login, logout, getUsersBooks, getAllUsers } from "../controllers/userController.js";
import { validateRequest } from "../middleware/validateRequest.js";

const router = express.Router();

router
  .post("/register", validateRequest, registerUser)
  .post("/login", login)
  .post("/logout", logout)
  .get("/allBooks/:id", getUsersBooks)
  .get("/users", getAllUsers)


export default router;
