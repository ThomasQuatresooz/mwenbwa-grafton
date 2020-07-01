/* eslint-disable react/jsx-max-depth */
/* eslint-disable react/button-has-type */
import React, {useContext, useState, useEffect} from "react";
import "../../lib/jscolor-2.1.0/jscolor";
import UserContext from "./mwenbwa-context";

export default function ProfilePage(props) {
    const UserCont = useContext(UserContext);
    const [viewInfo, setViewInfo] = useState([]);
    useEffect(() => {
        fetch(`api/user/${UserCont.user.userId}`, {
            headers: {
                Authorization: `bearer ${UserCont.user?.token}`,
            },
        })
            .then(res => res.json())
            .then(elem => {
                setViewInfo(elem);
            });
    }, []);
    function CloseProfile() {
        document.querySelector("#editProfile").removeAttribute("style");
        document.querySelector("#normalMode").removeAttribute("style");
        document
            .querySelector("#editMode")
            .setAttribute("style", "display: none");
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
    function EditProfile() {
        document
            .querySelector("#editProfile")
            .setAttribute("style", "display: none");
        document
            .querySelector("#normalMode")
            .setAttribute("style", "display: none");
        document.querySelector("#editMode").removeAttribute("style");
        document.querySelector("#saveProfile").removeAttribute("style");
        document.querySelector("#cancelProfile").removeAttribute("style");
        document.querySelector("#changeImage").removeAttribute("style");
    }

    return (
        <div className={props.showProfile ? "modal is-active" : "modal"}>
            <div
                className={"modal-background"}
                onClick={props.handleCloseProfile}
            />
            <div className={"modal-card"}>
                <header className={"modal-card-head"}>
                    <p className={"modal-card-title"}>{"Profile"}</p>
                    <button
                        className={"delete"}
                        aria-label={"close"}
                        onClick={props.handleCloseProfile}
                    />
                </header>
                <section className={"modal-card-body has-text-centered"}>
                    <div className={"columns is-centered"}>
                        <div className={"column is-5"}>
                            <img
                                className={"is-square"}
                                id={"profileImage"}
                                src={""}
                            />
                            <div
                                className={"file is-info is-centered"}
                                id={"changeImage"}
                                style={{display: "none"}}>
                                <label className={"file-label"}>
                                    <input
                                        className={"file-input"}
                                        type={"file"}
                                    />
                                    <span className={"file-cta"}>
                                        <span className={"file-icon"}>
                                            <i className={"fas fa-upload"} />
                                        </span>
                                        <span className={"file-label"}>
                                            {"Click to change"}
                                        </span>
                                    </span>
                                </label>
                            </div>
                        </div>
                        <div
                            id={"editMode"}
                            style={{display: "none"}}
                            className={"column is-5"}>
                            <div className={"field"}>
                                <label className={"label"}>{"Username"}</label>
                                <div
                                    className={
                                        "control has-icons-left has-icons-right"
                                    }>
                                    <input
                                        className={"input is-success"}
                                        type={"text"}
                                        placeholder={"Text input"}
                                        value={"bulma"}
                                    />
                                    <span className={"icon is-small is-left"}>
                                        <i className={"fas fa-user"} />
                                    </span>
                                    <span className={"icon is-small is-right"}>
                                        <i className={"fas fa-check"} />
                                    </span>
                                </div>
                                <p className={"help is-success"}>
                                    {"This username is available"}
                                </p>
                            </div>
                            <div className={"field"}>
                                <label className={"label"}>{"Email"}</label>
                                <div
                                    className={
                                        "control has-icons-left has-icons-right"
                                    }>
                                    <input
                                        className={"input is-danger"}
                                        type={"email"}
                                        placeholder={"Email input"}
                                        value={"hello@"}
                                    />
                                    <span className={"icon is-small is-left"}>
                                        <i className={"fas fa-envelope"} />
                                    </span>
                                    <span className={"icon is-small is-right"}>
                                        <i
                                            className={
                                                "fas fa-exclamation-triangle"
                                            }
                                        />
                                    </span>
                                </div>
                                <p className={"help is-danger"}>
                                    {"This email is invalid"}
                                </p>
                            </div>
                            <div className={"field"}>
                                <label className={"label"}>{"Password"}</label>
                                <p className={"control has-icons-left"}>
                                    <input
                                        className={"input"}
                                        type={"password"}
                                        placeholder={"Password"}
                                    />
                                    <span className={"icon is-small is-left"}>
                                        <i className={"fas fa-lock"} />
                                    </span>
                                </p>
                            </div>
                            <div className={"field"}>
                                <label className={"label"}>
                                    {"Confirm password"}
                                </label>
                                <p className={"control has-icons-left"}>
                                    <input
                                        className={"input"}
                                        type={"password"}
                                        placeholder={"Password"}
                                    />
                                    <span className={"icon is-small is-left"}>
                                        <i className={"fas fa-lock"} />
                                    </span>
                                </p>
                            </div>
                            <div className={"field"}>
                                <label className={"label"}>
                                    {"Pick a color"}
                                </label>
                                <p
                                    className={
                                        "control has-icons-left has-icons-right"
                                    }>
                                    <input
                                        className={"input jscolor"}
                                        placeholder={"Color picker"}
                                    />
                                    <span className={"icon is-small is-left"}>
                                        <i className={"fas fa-palette"} />
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div id={"normalMode"} className={"column is-5"}>
                            <h5 className={"title is-5"}>
                                {viewInfo.username}
                            </h5>
                            <p>{viewInfo.email}</p>
                            <p>{`My color : ${viewInfo.color}`}</p>
                        </div>
                    </div>
                    <div className={"columns is-centered"}>
                        <div className={"column is-2"}>
                            <span className={"icon"}>
                                <i className={"fas fa-lg fa-tree"} />
                            </span>
                            <p>{viewInfo.count}</p>
                        </div>
                        <div className={"column is-2"}>
                            <span className={"icon"}>
                                <i className={"fab fa-lg fa-envira"} />
                            </span>
                            <p>{viewInfo.totalLeaves}</p>
                        </div>
                    </div>
                </section>
                <footer
                    className={"modal-card-foot"}
                    style={{justifyContent: "center"}}>
                    <p id={"profileButtons"} className={"buttons"}>
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
                </footer>
            </div>
        </div>
    );
}
