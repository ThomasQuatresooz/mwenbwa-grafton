/* becodeorg/mwenbwa
 *
 * /src/server/index.js - Server entry point
 *
 * coded by leny@BeCode
 * started at 18/05/2020
 */

import express from "express";
import path from "path";
import {tree} from "./db/models/tree-schema";

import mongoose from "mongoose";

const {APP_PORT} = process.env;

const app = express();

const dbURI =
    "mongodb+srv://USER1:JV4jvvRMEN5xcGDX@cluster-mwenbwa-nsqdi.gcp.mongodb.net/Trees?retryWrites=true&w=majority";
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
};

mongoose
    .connect(dbURI, options)
    .then(() => {
        console.log("Connection DB OK");
    })
    .catch(e => {
        console.log(e);
        process.exit(0);
    });

app.use(express.static(path.resolve(__dirname, "../../bin/client")));

app.get("/tree", (req, res) => {
    console.log("ROUTE TREE");
    tree.find({arbotag: 1770}, (err, docs) => {
        if (err) {
            res.status(400).json(err);
        } else {
            res.status(200).json(docs);
        }
    });
});

app.listen(APP_PORT, () =>
    console.log(`🚀 Server is listening test on port ${APP_PORT}.`),
);
