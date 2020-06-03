import mongoose from "mongoose";

//TODO FIX CLEAR URI + PWD + USER
//? LOG MANAGER ?

// Build the connection string
const dbURI =
    "mongodb+srv://dbUser:dbUserPassword@mwenbwa-xsu1h.gcp.mongodb.net/test?retryWrites=true&w=majority";
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
};

class dbManager {
    instance;
    constructor() {
        // Create the database connection
        if (!this.instance) {
            this.instance = mongoose.createConnection(dbURI, options);
            // CONNECTION EVENTS
            // When successfully connected
            this.instance.on("connected", () => {
                console.log(`Mongoose default connection open to ${dbURI}`);
            });

            // If the connection throws an error
            this.instance.on("error", err => {
                console.log(`Mongoose default connection error: ${err}`);
            });

            // When the connection is disconnected
            this.instance.on("disconnected", () => {
                console.log("Mongoose default connection disconnected");
            });

            // If the Node process ends, close the Mongoose connection
            process.on("SIGINT", () => {
                this.instance.close(() => {
                    console.log(
                        "Mongoose default connection disconnected through app termination",
                    );
                    process.exit(0);
                });
            });
        }
        return this.instance;
    }
}

module.exports = new dbManager();
