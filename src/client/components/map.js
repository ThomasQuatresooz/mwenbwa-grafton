/* eslint-disable react/button-has-type */
import React from "react";
import {Map, TileLayer, Marker, Popup} from "react-leaflet";
import L from "leaflet";
import "../../../node_modules/leaflet/dist/leaflet.css";
import "../../../node_modules/react-leaflet-markercluster/dist/styles.min.css";
import MarkerClusterGroup from "react-leaflet-markercluster";
import tree from "../images/tree.png";

const treeIcon = L.icon({
    iconUrl: tree,
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
                    <div className={"card"}>
                        <div className={"card-image"}>
                            <figure className={"image is-2by1"}>
                                <img src={"https://i.imgur.com/3zhuFWl.png"} />
                            </figure>
                        </div>
                        <div className={"card-content"}>
                            <div className={"media"}>
                                <div className={"media-content"}>
                                    <p className={"title is-4"}>
                                        {"Name of the tree"}
                                    </p>
                                    <p className={"subtitle is-6"}>
                                        {"Free/belongs to"}
                                    </p>
                                </div>
                            </div>
                            <div className={"content"}>
                                <p>
                                    <a href={"#"}>{"Tree's specie"}</a>
                                </p>
                                <p>{"Tree's height"}</p>
                                <p>{"Tree's diameter"}</p>
                                <p className={"title is-6"}>
                                    {"Price: 78 leaves"}
                                </p>
                            </div>
                        </div>
                        <footer className={"card-footer"}>
                            <a href={"#"} className={"button card-footer-item"}>
                                {"Buy the tree"}
                            </a>
                            <a href={"#"} className={"button card-footer-item"}>
                                {"Lock/unlock"}
                            </a>
                        </footer>
                    </div>
                </Popup>
            </Marker>
        </Map>
    );
}

// <div>
//     <h1>{"name of the tree"}</h1>
//     <h4>
//         {"free/belongs to "}
//         <a href={"#"}>{"starfire"}</a>
//     </h4>
//     <p>
//         <a href={"#"}>{"tree's species"}</a>
//     </p>
//     <p>{"tree's height"}</p>
//     <p>{"tree's diameter"}</p>
//     <p>{"price : 78 leaves"}</p>
//     <button className="button is-success" type={"button"}>
//         {"buy the tree"}
//     </button>
//     <button className="button is-primary" type={"button"}>
//         {"lock/unlock the tree"}
//     </button>
// </div>;
