/* eslint-disable react/button-has-type */
import React, {useContext, useEffect} from "react";
import L from "leaflet";
import {Marker, Popup} from "react-leaflet";
import tree from "../images/tree.png";
import UserContext from "./mwenbwa-context";

const treeIcon = L.icon({
    iconUrl: tree,
    iconAnchor: [10, 0],
    popupAnchor: [0, 0],
});

const MBMarker = props => {
    const UserCont = useContext(UserContext);
    useEffect(() => {
        UserCont.on(props.tree._id, () => {
            console.log(`RECEIVED EVENT TO UPDATE TREE N:${props.tree._id}`);
        });
        return () => {
            UserCont.off(props.tree._id);
        };
    }, []);

    return (
        <React.Fragment>
            <Marker
                icon={treeIcon}
                position={[
                    props.tree.position.coordinates[1],
                    props.tree.position.coordinates[0],
                ]}>
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
                                        {props.tree.owner
                                            ? `Owned by ${props.tree.owner}`
                                            : "Free"}
                                    </p>
                                    <p>{props.tree._id}</p>
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
                            <div className={"content is-flex"}>
                                <a href={"#"} className={"button is-success"}>
                                    {"Buy the tree"}
                                </a>
                                <a href={"#"} className={"button is-primary"}>
                                    {"Lock/unlock"}
                                </a>
                            </div>
                        </div>
                    </div>
                </Popup>
            </Marker>
        </React.Fragment>
    );
};

export default MBMarker;
