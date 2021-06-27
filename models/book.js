import mongoose from 'mongoose'
const { Schema } = mongoose

const bookSchema = new Schema({
  authors: { type: String, required: true },
  description: { type: String },
  image: { type: String },
  link: { type: String },
  title: { type: String, required: true }
//   user: {
//     type: Schema.Types.ObjectId,
//     ref: "User"
// }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
