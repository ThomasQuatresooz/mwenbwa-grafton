/* eslint-disable react/button-has-type */
import React from "react";
import {Map, TileLayer, Marker, Popup} from "react-leaflet";
import L from "leaflet";
import "../../../node_modules/leaflet/dist/leaflet.css";
import "../../../node_modules/react-leaflet-markercluster/dist/styles.min.css";
import MarkerClusterGroup from "react-leaflet-markercluster";

const treeIcon = L.icon({
    iconUrl: "../images/tree.png",
    iconAnchor: [10, 0],
    popupAnchor: [0, 0],
});

export default function MapLeaflet() {
    return (
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
            <MarkerClusterGroup>
                <Marker icon={treeIcon} position={[50.6326, 5.5797]} />
                <Marker icon={treeIcon} position={[50.6326, 5.5797]} />
                <Marker icon={treeIcon} position={[50.6326, 5.5797]} />
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
