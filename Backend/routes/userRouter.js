import express from "express";
import { registerUser, login, logout, getUsersBooks, getAllUsers, updateUser, getUserData } from "../controllers/userController.js";
import { validateRequest } from "../middleware/validateRequest.js";

const router = express.Router();

router
  .post("/register", validateRequest, registerUser)
  .post("/login", login)
  .post("/logout", logout)
  .get("/allBooks/:id", getUsersBooks)
  .get("/users", getAllUsers)
  .get("/user/:id", getUserData)
  .patch("/user/:id", updateUser)



export default router;
