const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookSchema = new Schema({
  authors: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String },
  image: { type: String },
  link: { type: String },
//   user: {
//     type: Schema.Types.ObjectId,
//     ref: "User"
// }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
