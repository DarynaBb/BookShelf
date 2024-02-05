import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: { type: String, required: false },
  author: { type: String, required: false },
  description: { type: String },
  publishedDate: { type: String },
  averageRating: {type: String},
  image: {type: String, default: "https://i.pinimg.com/564x/25/cb/0b/25cb0b4b31c9b5c0a82fbe15b4e10ad8.jpg"},
  pageCount: {type: Number, default: 439}
});

export const Book = mongoose.model("Book", bookSchema);
