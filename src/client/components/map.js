import * as React from "react";
import {Map, TileLayer} from "react-leaflet";
import "../../../node_modules/leaflet/dist/leaflet.css";
import "../mystyles.scss";

const MapLeaflet = () => (
    <Map className={"=mobile"} center={[50.64, 5.57]} zoom={12}>
        <TileLayer
            url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
            attribution={
                '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            }
        />
    </Map>
);

export default MapLeaflet;
