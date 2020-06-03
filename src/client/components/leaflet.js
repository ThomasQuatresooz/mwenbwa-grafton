import React from "react";
import {Map, TileLayer, Marker} from "react-leaflet";
import "../../style.css";
import "../../../node_modules/leaflet/dist/leaflet.css";
import "../../../node_modules/leaflet.markercluster/dist/MarkerCluster.Default.css";
import MarkerClusterGroup from "react-leaflet-markercluster";

export default function LeafletMap() {
    return (
        <Map center={[50.6326, 5.5797]} zoom={12}>
            <TileLayer
                url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
                attribution={
                    '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                }
            />
            <MarkerClusterGroup>
                <Marker position={[50.6326, 5.5797]} />
                <Marker position={[50.6326, 5.5797]} />
                <Marker position={[50.6326, 5.5797]} />
            </MarkerClusterGroup>
            <Marker position={[50.6411, 5.5797]} />
        </Map>
    );
}
