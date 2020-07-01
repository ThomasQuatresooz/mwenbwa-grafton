import React, {useState, useEffect} from "react";
import MapLeaflet from "./map";
import Menu from "./menu";

import {UserProvider} from "./mwenbwa-context";
import EE from "eventemitter3";
import io from "socket.io-client";

require("../styles/mystyles.css");

const Game = () => {
    const [EventEmitter] = useState(new EE());
    const [user, setUser] = useState(null);
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        if (user) {
            const trees = io.connect(`${document.baseURI}trees`);
            trees.on("tree.updated", data => {
                EventEmitter.emit(data.updatedTree._id);
            });

            const logs = io.connect(`${document.baseURI}logs`);
            logs.on("log.created", data => {
                console.log(data);
            });

            setSocket({trees, logs});
        }

        return () => {
            if (socket) {
                socket.trees.disconnect();
                socket.logs.disconnect();
            }
        };
    }, [user]);

    return (
        <div className={"content"}>
            <UserProvider value={{EventEmitter, user, setUser}}>
                <Menu />
                <MapLeaflet
                    center={
                        user
                            ? [user.startPosition[1], user.startPosition[0]]
                            : null
                    }
                />
            </UserProvider>
        </div>
    );
};

export default Game;
