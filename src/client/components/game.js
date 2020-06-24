import React, {useState} from "react";
import MapLeaflet from "./map";
import Menu from "./menu";

import {UserProvider} from "./mwenbwa-context";
import EE from "eventemitter3";

require("../styles/mystyles.css");

const Game = () => {
    const [EventEmitter] = useState(new EE());
    const [user, setUser] = useState(null);
    return (
        <div className={"content"}>
            <UserProvider value={{EventEmitter, user, setUser}}>
                <Menu />
                <MapLeaflet />
            </UserProvider>
        </div>
    );
};

export default Game;
