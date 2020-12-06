import mongoose from "mongoose";
const Schema = mongoose.Schema;

const AuthorsModelSchema = new Schema({

    fullName: String,

});

module.exports = mongoose.model("Author", AuthorsModelSchema);

