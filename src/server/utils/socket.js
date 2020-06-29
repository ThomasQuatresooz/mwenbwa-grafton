import socket from "socket.io";
import {tree} from "../models/tree-schema";
import {Log} from "../models/log-schema";

module.exports.listen = (app) => {
    const io = socket.listen(app);

    const logsChannel = io.of("/logs");
    Log.watch().on("change", (LogUpdated) => {
        logsChannel.emit("logs.created", LogUpdated.fullDocument);
    });

    const treeChannel = io.of("/trees");
    tree.watch().on("change", (treeUpdated) => {
        treeChannel.emit("tree.updated", {
            updatedTree: treeUpdated.documentKey,
        });
    });
};
