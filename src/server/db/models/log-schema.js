import mongoose from "mongoose";
const Schema = mongoose.Schema;

const logSchema = new Schema({
    date: {type: Date, default: Date.now()},
    msg: {type: String, default: "Something happened"},
});

const Log = mongoose.model("Log", logSchema);

module.exports = {Log};
