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
  favoriteGenres: [],
  favoriteBooks: [
    {
      book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
      shelfType: { type: String, default: "wantToRead"},
    },
  ]
    // { type: mongoose.Schema.Types.ObjectId, ref: 'Book' }],
});

const User = mongoose.model("User", userSchema);

export default User;
