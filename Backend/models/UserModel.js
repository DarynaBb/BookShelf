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
  photo: {type: String, default: "https://i.pinimg.com/564x/43/4f/12/434f12781a3eeb3b04dec93882ef503e.jpg"},
  favoriteGenres: [],
  favoriteBooks: [
    {
      book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
      shelfType: { type: String, default: "wantToRead"},
      progress: {type: Number, default: 0}
    },
  ]
});

const User = mongoose.model("User", userSchema);

export default User;
