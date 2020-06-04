import mongoose from "mongoose";
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    date: {type: Date, default: Date.now()},
    author: {type: Schema.Types.ObjectId, ref: "User"},
    msg: String,
});

const treeSchema = new Schema({
    nom_complet: {type: String, alias: "specie"},
    hauteur_totale: {type: Number, required: true, alias: "heigth"},
    value: Number,
    owner: {type: Schema.Types.ObjectId, ref: "User"},
    geoloc: {
        lat: Number,
        lon: Number,
    },

    name: String,
    isLocked: Boolean,
    buyHistory: [
        {date: Date, user: {type: Schema.Types.ObjectId, ref: "User"}},
    ],
    wikiLink: String,
    comments: {type: [commentSchema]},

    y_lambert72: Number,
    x_lambert72: Number,
    arbotag: Number,
    date_donnees: Date,
    x_lambda: Number,
    y_phi: Number,
    diametre_cime: Number,
    circonf: {type: Number, get: v => v / Math.PI, alias: "diameter"},
});

const tree = mongoose.model("Tree", treeSchema, "arbustum");
const comment = mongoose.model("Comment", commentSchema);

module.exports = {tree, comment};

/** */
