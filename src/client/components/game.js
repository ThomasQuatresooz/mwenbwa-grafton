import * as React from "react";
import MapLeaflet from "./map";
import Menu from "./menu";
require("../styles/mystyles.css");

const Game = () => (
    <div className={"content"}>
        <Menu />
        <MapLeaflet />
    </div>
);

export default Game;
