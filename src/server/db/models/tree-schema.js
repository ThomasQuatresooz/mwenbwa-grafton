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
        lat: Number,
        lgt: Number,
    },

    species: String,
    isLocked: Boolean,
    buyHistory: [{date: Date, username: String}],
    wikiLink: String,
    comments: [commentSchema],
});

export default treeSchema;
