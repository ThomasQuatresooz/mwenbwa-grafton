/* eslint-disable react/button-has-type */
import React, {useState, useEffect} from "react";
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
    const [forest, plantTree] = useState([]);

    useEffect(() => {
        fetch("http://localhost/tree")
            .then(res => {
                res.json().then(value => {
                    console.log("PARSED");
                    plantTree(value);
                });
            })
            .catch(err => {
                console.error(err);
            });
    }, []);

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
                {/* eslint-disable-next-line no-extra-parens */}
                {forest.length > 0 ? (
                    forest.map(pine => (
                        <Marker
                            key={pine._id}
                            icon={treeIcon}
                            position={[pine.geoloc.lat, pine.geoloc.lon]}
                        />
                    ))
                ) : (
                    <></>
                )}
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
