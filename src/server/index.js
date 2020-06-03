/* becodeorg/mwenbwa
 *
 * /src/server/index.js - Server entry point
 *
 * coded by leny@BeCode
 * started at 18/05/2020
 */

import express from "express";
import path from "path";

//const mongoose = require("mongoose");

//import {Tree} from "./db/models/tree-schema";

const {APP_PORT} = process.env;

const app = express();

app.use(express.static(path.resolve(__dirname, "../../bin/client")));

app.get("/hello", (req, res) => {
    console.log(`ℹ️  (${req.method.toUpperCase()}) ${req.url}`);
    res.send("Hello, World!");
});

app.listen(APP_PORT, () =>
    console.log(`🚀 Server is listening test on port ${APP_PORT}.`),
);

/**mongoose
    .connect(
        "mongodb+srv://dbUser:dbUserPassword@mwenbwa-xsu1h.gcp.mongodb.net/test?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
    )
    .then(() => {
        console.log("Connexion à MongoDB réussie !");
        const baby = new Tree({
            diameter: 410,
            height: 888,
            coordinates: {lat: 66.6, lgt: 66.6},
        });

        baby.save();
    })
    .catch((reason) => console.log("Connexion à MongoDB échouée ! " + reason)); **/
