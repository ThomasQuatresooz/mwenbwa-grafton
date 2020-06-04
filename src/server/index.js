/* becodeorg/mwenbwa
 *
 * /src/server/index.js - Server entry point
 *
 * coded by leny@BeCode
 * started at 18/05/2020
 */
/*
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

    
    app.get("/hello", (req, res) => {
        console.log(`ℹ️  (${req.method.toUpperCase()}) ${req.url}`);
        res.send("Hello, World!");
    });
    
    app.listen(APP_PORT, () =>
    console.log(`🚀 Server is listening test on port ${APP_PORT}.`),
    ); */

const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
import path from "path";

mongoose
    .connect(
        "mongodb+srv://USER1:JV4jvvRMEN5xcGDX@cluster-mwenbwa-nsqdi.gcp.mongodb.net/Trees?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        },
    )
    .then(() => console.log("Connexion à MongoDB réussie !"))
    .catch(() => console.log("Connexion à MongoDB échouée !"));

const app = express();
app.use(express.static(path.resolve(__dirname, "../../bin/client")));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization",
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    );
    next();
});

app.use(bodyParser.json());

module.exports = app;
