import React from "react";
import L from "leaflet";
import {Marker, Popup} from "react-leaflet";
import tree from "../images/tree.png";

const treeIcon = L.icon({
    iconUrl: tree,
    iconAnchor: [10, 0],
    popupAnchor: [0, 0],
});

const MBMarker = props => (
    <React.Fragment>
        <Marker
            icon={treeIcon}
            position={[
                props.tree.position.coordinates[1],
                props.tree.position.coordinates[0],
            ]}>
            <Popup>
                <div>
                    <h1>{props.tree.specie}</h1>
                    <h4>
                        {"free/belongs to "}
                        <a href={"#"}>{"starfire"}</a>
                    </h4>
                    <p>
                        <a href={"#"}>{"tree's species"}</a>
                    </p>
                    <p>{`Tree's height : ${props.tree.hauteur_totale}`}</p>
                    <p>{`Tree's diameter : ${props.tree.circonf / Math.PI}`}</p>
                    <p>
                        {`Value : ${Math.ceil(
                            props.tree.hauteur_totale *
                                (props.tree.circonf / Math.PI),
                        )} leaves`}
                    </p>
                    {/*eslint-disable-next-line*/}
                    <button type="button">{"buy the tree"}</button>
                    {/*eslint-disable-next-line*/}
                    <button type="button">{"lock/unlock the tree"}</button>
                </div>
            </Popup>
        </Marker>
    </React.Fragment>
);

export default MBMarker;
