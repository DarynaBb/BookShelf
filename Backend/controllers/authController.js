import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import UserModel from '../models/UserModel.js';
import 'dotenv/config';

// JWT SECRET KEY
const JWT_SECRET = process.env.JWT_SECRET;

// LOGIN
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const foundUser = await UserModel.findOne({ email });

    if (foundUser) {
      const isPasswordValid = bcrypt.compareSync(password, foundUser.password);
      if (isPasswordValid) {
        jwt.sign(
          {
            userId: foundUser._id,
            firstName: foundUser.firstName,
            lastName: foundUser.lastName,
            email: foundUser.email,
          },
          JWT_SECRET,
          { expiresIn: '24h' },
          (err, token) => {
            if (err) throw err;
            res.cookie('token', token).status(200).json({
              message: 'your logged in',
            });
          }
        );
      } else {
        res.status(200).json('Invalid credentials');
      }
    } else {
      res.json('user not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).json('Server error');
  }
};

// SIGNUP
export const signup = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    const existingUser = await UserModel.findOne({ email });

    if (existingUser) {
      return res.status(200).json({ message: 'Email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const createdUser = await UserModel.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      id: createdUser._id,
      message: 'your are successfully registered',
    });
  } catch (err) {
    console.error(err);
    res.status(500).json('Server error');
  }
};

// CHECK WEB TOKEN
export const checkWebToken = (req, res) => {
  try {
    const { token } = req.body;

    if (!token) {
      return res.status(401).send('There is no token');
    }
    jwt.verify(token, JWT_SECRET, async (err, decodedToken) => {
      if (err) {
        return res.status(200).json({
          status: false,
          message: err.message,
        });
      }

      const existingUser = await UserModel.findOne({
        _id: decodedToken.userId,
      });

      if (existingUser) {
        const { firstName, lastName, email, _id } = existingUser;

        const userData = {
          firstName: firstName,
          lastName: lastName,
          email: email,
          userId: _id,
        };
        return res.status(200).json({
          status: true,
          userData: userData,
        });
      } else {
        return res.status(401).send('User not found');
      }
    });
  } catch (error) {
    return res.status(500).send('Internal Server Error');
  }
};
