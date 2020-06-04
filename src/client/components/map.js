import * as React from "react";
import {Map, TileLayer} from "react-leaflet";
import "../../../node_modules/leaflet/dist/leaflet.css";
import "../mystyles.scss";

const MapLeaflet = () => (
    <Map center={[50.64, 5.57]} zoom={12}>
        <TileLayer
            url={
                "https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
            }
            maxZoom={20}
            attribution={
                '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
            }
        />
    </Map>
);

export default MapLeaflet;
