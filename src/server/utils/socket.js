import socket from "socket.io";
import {tree} from "../models/tree-schema";

module.exports.listen = app => {
    const io = socket.listen(app);

    const treeChannel = io.of("/trees");
    tree.watch().on("change", treeUpdated => {
        treeChannel.emit("tree.updated", {
            updatedTree: treeUpdated.documentKey,
        });
    });
};
