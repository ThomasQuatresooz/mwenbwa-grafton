import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {type: String, unique: true},
    email: {type: String, unique: true},
    password: String,
    totalLeaves: Number,
    color: String,
});

const User = mongoose.model("User", userSchema);

module.exports = {User};
