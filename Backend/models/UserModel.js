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
  favoriteBooks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }],
});

const User = mongoose.model("User", userSchema);

export default User;
