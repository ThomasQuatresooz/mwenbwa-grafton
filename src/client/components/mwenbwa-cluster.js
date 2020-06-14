/* eslint-disable react/button-has-type */

import React, {useState, useEffect, useContext, useCallback} from "react";
import {useLeaflet} from "react-leaflet";
import UserContext from "./mwenbwa-context";

import MarkerClusterGroup from "react-leaflet-markercluster";
import "../../../node_modules/react-leaflet-markercluster/dist/styles.min.css";

import MBMarker from "./mwenbwa-marker";

const MBCluster = props => {
    const leafContext = useLeaflet();
    const UserCont = useContext(UserContext);
    const [forest, plantTree] = useState([]);

    useEffect(() => {
        UserCont.on("MapUpdated", () => {
            fetch("http://localhost/tree", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(leafContext.map.getBounds()),
            })
                .then(res => {
                    res.json().then(value => {
                        plantTree(value);
                    });
                })
                .catch(err => {
                    console.error(err);
                });
        });
        props.whenReady();
        return () => {
            UserCont.off("MapUpdated");
        };
    }, []);

    /*eslint-disable no-use-before-define */
    const testUpdate = useCallback(() => {
        UserCont.emit("5ed763c0da18fc1c40ac9bb1");
    }, [testUpdate]);

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
            {/*eslint-disable-next-line*/}
            <button
                style={{
                    position: "fixed",
                    width: "300px",
                    height: "50px",
                    zIndex: "999999",
                }}
                type={"button"}
                onClick={testUpdate}>
                {"Test Event"}
            </button>
        </React.Fragment>
    );
};

export default MBCluster;
