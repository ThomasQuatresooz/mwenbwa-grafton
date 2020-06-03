import React from "react";
import {Map, TileLayer} from "react-leaflet";
import "../../style.css";

export default function App() {
    return (
        <Map center={[45.4, -75.7]} zoom={12}>
            <TileLayer
                url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
                attribution={
                    '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                }
            />
        </Map>
    );
}
