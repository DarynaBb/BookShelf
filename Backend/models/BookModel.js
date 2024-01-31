import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String },
  publishedDate: { type: String },
  averageRating: {type: String},
  imageLinks: {
    thumbnail: { type: String },
    large: { type: String },
    medium: { type: String },
  },
});

export const Book = mongoose.model("Book", bookSchema);


// export const AlreadyRead = mongoose.model("AlreadyRead", userBookSchema);
// export const WantRead = mongoose.model("WantRead", userBookSchema);
// export const CurrentlyReading = mongoose.model("CurrentlyReading", userBookSchema);
