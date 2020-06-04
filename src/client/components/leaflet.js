/* eslint-disable react/button-has-type */
import React from "react";
import {Map, TileLayer, Marker, Popup} from "react-leaflet";
import L from "leaflet";
import "../../style.css";
import "../../../node_modules/leaflet/dist/leaflet.css";
import "../../../node_modules/leaflet.markercluster/dist/MarkerCluster.Default.css";
import MarkerClusterGroup from "react-leaflet-markercluster";

const treeIcon = L.icon({
    iconUrl: "../images/tree.png",
    iconAnchor: [10, 0],
    popupAnchor: [0, 0],
});

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
            <Marker icon={treeIcon} position={[50.6411, 5.5888]}>
                <Popup>
                    <div>
                        <h1>{"name of the tree"}</h1>
                        <h4>
                            {"free/belongs to "}
                            <a href={"#"}>{"starfire"}</a>
                        </h4>
                        <p>
                            <a href={"#"}>{"tree's species"}</a>
                        </p>
                        <p>{"tree's height"}</p>
                        <p>{"tree's diameter"}</p>
                        <p>{"price : 78 leaves"}</p>
                        <button type={"button"}>{"buy the tree"}</button>
                        <button type={"button"}>
                            {"lock/unlock the tree"}
                        </button>
                    </div>
                </Popup>
            </Marker>
        </Map>
    );
}
