import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String },
  publishedDate: { type: String },
  imageLinks: {
    thumbnail: { type: String },
    large: { type: String },
    medium: { type: String },
  },
});

export const Book = mongoose.model("Book", bookSchema);

const userBookSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
});

export const AlreadyRead = mongoose.model("AlreadyRead", userBookSchema);
export const WantRead = mongoose.model("WantRead", userBookSchema);
export const CurrentlyReading = mongoose.model("CurrentlyReading", userBookSchema);
