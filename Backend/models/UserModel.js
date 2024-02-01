import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {type: String},
  lastName: {type: String},
  photo: {type: String, default: "https://i.ibb.co/kGY5Pgn/userPic.jpg"},
  favoriteGenres: [],
  favoriteBooks: [
    {
      book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
      shelfType: { type: String, default: "wantToRead"},
    },
  ]
});

const User = mongoose.model("User", userSchema);

export default User;
