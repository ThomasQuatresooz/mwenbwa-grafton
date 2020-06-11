import mongoose from "mongoose";
const Schema = mongoose.Schema;
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = new Schema({
    username: {type: String, unique: true, required: true},
    email: {type: String, unique: true},
    password: String,
    totalLeaves: Number,
    color: String,
});

userSchema.plugin(uniqueValidator);

const User = mongoose.model("User", userSchema);

module.exports = {User};
