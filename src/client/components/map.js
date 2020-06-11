/* eslint-disable react/button-has-type */
import React, {useCallback, useState} from "react";
import {Map, TileLayer, ScaleControl} from "react-leaflet";
import MBCluster from "./mwenbwa-cluster";
import "../../../node_modules/leaflet/dist/leaflet.css";
import {UserProvider} from "./mwenbwa-context";

import EE from "eventemitter3";

export default function MapLeaflet() {
    const [EventEmitter] = useState(new EE());

    /*eslint-disable no-use-before-define */
    const updateTree = useCallback(() => {
        EventEmitter.emit("MapUpdated");
    }, [updateTree]);

    return (
        <UserProvider value={EventEmitter}>
            <Map
                center={[50.64, 5.57]}
                zoom={17}
                maxZoom={19}
                onmoveend={updateTree}>
                <ScaleControl position={"bottomleft"} imperial={false} />

                <TileLayer
                    url={
                        "https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
                    }
                    maxZoom={20}
                    attribution={
                        '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
                    }
                />
                <MBCluster whenReady={updateTree} />
            </Map>
        </UserProvider>
    );
}
