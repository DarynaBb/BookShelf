import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: { type: String, required: false },
  author: { type: String, required: false },
  description: { type: String },
  publishedDate: { type: String },
  averageRating: {type: String},
  image: {type: String},
  pageCount: {type: Number}
});

export const Book = mongoose.model("Book", bookSchema);
