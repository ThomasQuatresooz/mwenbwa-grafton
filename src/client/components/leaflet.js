/* eslint-disable react/button-has-type */
import React from "react";
import {Map, TileLayer, Marker, Popup} from "react-leaflet";
import L from "leaflet";
import "../../../node_modules/leaflet/dist/leaflet.css";
import "../../../node_modules/react-leaflet-markercluster/dist/styles.min.css";
import "../../../node_modules/bulma/css/bulma.min.css";
import MarkerClusterGroup from "react-leaflet-markercluster";
import tree from "../images/tree.png";

const treeIcon = L.icon({
    iconUrl: tree,
    iconAnchor: [10, 0],
    popupAnchor: [0, 0],
});

export default function MapLeaflet() {
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
                    <div className={"content"}>
                        <h1 className={"title"}>{"name of the tree"}</h1>
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
                        <button className={"button is-success"} type={"button"}>
                            {"buy the tree"}
                        </button>
                        <button className={"button is-primary"} type={"button"}>
                            {"lock/unlock the tree"}
                        </button>
                    </div>
                </Popup>
            </Marker>
        </Map>
    );
}
