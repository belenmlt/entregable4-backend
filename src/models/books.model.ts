import mongoose from "mongoose";

const BooksModelSchema = new mongoose.Schema({

    title: String

})

module.exports = mongoose.model("Book", BooksModelSchema);

