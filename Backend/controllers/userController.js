import bcrypt from "bcrypt";
import User from "../models/UserModel.js";
import { Book } from "../models/BookModel.js";
import jwt from "jsonwebtoken";
import "dotenv/config";

export const registerUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email) {
    return res.status(400).send("Please provide email for registration");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUserLoginData = new User({
    email: email,
    password: hashedPassword,
  });

  try {
    await newUserLoginData.save();
    res.status(201).send("User's login data was successfully saved");
  } catch (error) {
    if (error.code === 11000) {
      console.error("Error during registration:", error.message);
      return res
        .status(400)
        .send("Email or phone number is already registered.");
    } else {
      console.error("Error during registration:", error.message);
      return res.status(500).send("Internal Server Error");
    }
  }
};

export const login = async (req, res) => {
  try {
    const loggedUser = await User.findOne({ email: req.body.email });

    if (!loggedUser) {
      return res
        .status(401)
        .send("Invalid email or password. Please check your credentials.");
    }
    const userPassword = loggedUser.password;
    const registerPassword = req.body.password;
    const isPasswordValid = await bcrypt.compare(
      registerPassword,
      userPassword
    );

    if (isPasswordValid) {
      const expiresInMs = 30 * 60 * 1000;
      const expiresInDate = new Date(Date.now() + expiresInMs);

      const secret = process.env.JWT_SECRET;

      const token = jwt.sign({ userId: loggedUser._id }, secret, {
        expiresIn: expiresInMs / 1000,
      });

      const cookieOptions = {
        httpOnly: true,
        maxAge: expiresInMs,
        sameSite: "None",
      };

      res.cookie("jwtLogin1", token, cookieOptions);
      console.log("token :", token);
      const options = {
        maxAge: expiresInMs,
      };
      const payload = {
        expires: expiresInDate.toISOString(),
        email: loggedUser.email,
      };

      res.cookie("loginInfo", payload, options);

      res.send("Welcome back!");
    } else {
      return res
        .status(401)
        .send("Invalid email or password. Please check your credentials.");
    }
  } catch (error) {
    console.error("Error during login:", error.message);
    return res.status(500).send("Internal Server Error");
  }
};

export const logout = async (req, res) => {
  res.clearCookie("jwtLogin1");
  res.clearCookie("loginInfo");
  res.send(
    "You have been successfully logged out. Thank you for using our services!"
  );
};
