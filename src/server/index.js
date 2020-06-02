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

const {APP_PORT} = process.env;

const app = express();

app.use(express.static(path.resolve(__dirname, "../../bin/client")));

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

mongoose
    .connect(
        "mongodb+srv://gogo:V6i6FmVKD9IsIu20@cluster0-cob2w.gcp.mongodb.net/test?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
    )
    .then(() => console.log("Connexion à MongoDB réussie !"))
    .catch(() => console.log("Connexion à MongoDB échouée !"));

const app = express();

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
