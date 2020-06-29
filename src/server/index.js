/* eslint-disable no-console */
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
import compression from "compression";
import path from "path";

import routeTree from "./routes/route-tree";
import userRoutes from "./routes/user";
import statusRoutes from "./routes/status";
import routeLeaderboard from "./routes/leaderboard";

// const corsOptions = {
//     origin: "http://localhost:8080",
// };

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
    .catch(e => {
        console.log(`Connexion à MongoDB échouée !${e}`);
        process.exit();
    });

const app = express();
app.use(compression());

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

app.use(express.json());

app.use("/trees", routeTree);
app.use("/leaderboard", routeLeaderboard);
app.use("/api/auth", userRoutes); // point d'entrée pour les routes de signup et login
app.use("/api/status", statusRoutes); //permet de vérifier si bien connecté au serveur

module.exports = app;
