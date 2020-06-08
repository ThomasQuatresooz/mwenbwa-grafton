import React, {useState, useEffect} from "react";
import {useLeaflet} from "react-leaflet";

import MarkerClusterGroup from "react-leaflet-markercluster";
import "../../../node_modules/react-leaflet-markercluster/dist/styles.min.css";

import MBMarker from "./mwenbwa-marker";

const MBCluster = () => {
    const lContext = useLeaflet();
    console.log(
        lContext.map.on("load", () => {
            console.log("LOADED !!!!");
        }),
    );

    const [forest, plantTree] = useState([]);

    useEffect(() => {
        fetch("http://localhost/tree", {
            body: JSON.stringify(),
        })
            .then(res => {
                res.json().then(value => {
                    plantTree(value);
                    console.table(value[1]);
                });
            })
            .catch(err => {
                console.error(err);
            });
    }, []);

    return (
        <React.Fragment>
            <MarkerClusterGroup
                maxClusterRadius={120}
                disableClusteringAtZoom={17}
                removeOutsideVisibleBounds={true}>
                {/* eslint-disable-next-line no-extra-parens */}
                {forest.length > 0 ? (
                    forest.map(tree => <MBMarker key={tree._id} tree={tree} />)
                ) : (
                    <></>
                )}
            </MarkerClusterGroup>
        </React.Fragment>
    );
};

export default MBCluster;
