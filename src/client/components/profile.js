/* eslint-disable react/jsx-max-depth */
/* eslint-disable react/button-has-type */
import React from "react";

function EditProfile() {
    // let img = document.querySelector("#profileImage");
    // let nickname = document.querySelector("#profileNickname");
    // let email = document.querySelector("#profileEmail");
    document
        .querySelector("#editProfile")
        .setAttribute("style", "display: none");
    document.querySelector("#saveProfile").removeAttribute("style");
    document.querySelector("#cancelProfile").removeAttribute("style");
    document.querySelector("#changeImage").removeAttribute("style");
}

function CloseProfile() {
    document.querySelector("#editProfile").removeAttribute("style");
    document
        .querySelector("#saveProfile")
        .setAttribute("style", "display: none");
    document
        .querySelector("#cancelProfile")
        .setAttribute("style", "display: none");
    document
        .querySelector("#changeImage")
        .setAttribute("style", "display: none");
}

export default function ProfilePage() {
    return (
        <div className={"container has-text-centered"}>
            <h2 className={"title is-2"}>{"Profile"}</h2>
            <div className={"columns is-centered is-1"}>
                <div className={"column is-3"}>
                    <br />
                    <figure className={"image container is-128x128"}>
                        <img
                            className={"is-square"}
                            id={"profileImage"}
                            src={
                                "https://bulma.io/images/placeholders/128x128.png"
                            }
                        />
                    </figure>
                    <br />
                    <div
                        className={"file is-centered is-info"}
                        id={"changeImage"}
                        style={{display: "none"}}>
                        <label className={"file-label"}>
                            <input className={"file-input"} type={"file"} />
                            <span className={"file-cta"}>
                                <span className={"file-icon"}>
                                    <i className={"fas fa-upload"} />
                                </span>
                                <span className={"file-label"}>
                                    {"Choose an image…"}
                                </span>
                            </span>
                        </label>
                    </div>
                </div>
                <div className={"column is-3"}>
                    <br />
                    <h5 id={"profileNickname"} className={"title is-5"}>
                        {"Starfire"}
                    </h5>
                    <p id={"profileEmail"}>{"Starfire@titans.com"}</p>
                    <p>{"My color : "}</p>
                    <p>{"My ranking : #1"}</p>
                    <br />
                    <div className={"columns is-centered"}>
                        <div className={"column is-3"}>
                            <span className={"icon"}>
                                <i className={"fas fa-lg fa-tree"} />
                            </span>
                            <p>{"6"}</p>
                        </div>
                        <div className={"column is-3"}>
                            <span className={"icon"}>
                                <i className={"fab fa-lg fa-envira"} />
                            </span>
                            <p>{"234"}</p>
                        </div>
                    </div>
                </div>
            </div>
            <p id={"profileButtons"} className={"buttons is-centered"}>
                <button
                    className={"button is-success is-outlined"}
                    id={"editProfile"}
                    onClick={EditProfile}>
                    <span className={"icon"}>
                        <i className={"far fa-edit"} />
                    </span>
                    <span>{"Edit my profile"}</span>
                </button>
                <button
                    className={"button is-success is-outlined"}
                    id={"saveProfile"}
                    style={{display: "none"}}>
                    <span className={"icon is-small"}>
                        <i className={"fas fa-check"} />
                    </span>
                    <span>{"Save changes"}</span>
                </button>
                <button
                    className={"button is-danger is-outlined"}
                    id={"cancelProfile"}
                    style={{display: "none"}}
                    onClick={CloseProfile}>
                    <span>{"Cancel changes"}</span>
                    <span className={"icon is-small"}>
                        <i className={"fas fa-times"} />
                    </span>
                </button>
            </p>
        </div>
    );
}
