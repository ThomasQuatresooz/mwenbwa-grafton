import mongoose from "mongoose";
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    date: {type: Date, default: Date.now()},
    author: {type: Schema.Types.ObjectId, ref: "User"},
    msg: String,
});

const treeSchema = new Schema({
    name: String,
    diameter: {type: Number, required: true},
    height: {type: Number, required: true},
    value: Number,
    owner: {type: Schema.Types.ObjectId, ref: "User"},
    coordinates: {
        lat: {type: Number, unique: true},
        lgt: {type: Number, unique: true},
    },

    species: String,
    isLocked: Boolean,
    buyHistory: [
        {date: Date, user: {type: Schema.Types.ObjectId, ref: "User"}},
    ],
    wikiLink: String,
    comments: {type: [commentSchema]},
});

const tree = mongoose.model("Tree", treeSchema);
const comment = mongoose.model("Comment", commentSchema);

module.exports = {Tree: tree, Comment: comment};
