/* eslint-disable react/jsx-max-depth */
/* eslint-disable react/button-has-type */
import React from "react";
import "../../../node_modules/jscolor-2.1.0/jscolor";

export default function RegisterPage() {
    return (
        <div className={"container"}>
            <h2 className={"title is-3 is-centered has-text-centered"}>
                {"Register"}
            </h2>
            <div className={"field is-horizontal"}>
                <div className={"field-label is-normal"}>
                    <label className={"label"}>{"Username"}</label>
                </div>
                <div className={"field-body"}>
                    <div className={"field"}>
                        <div
                            className={
                                "control has-icons-left has-icons-right"
                            }>
                            <input
                                className={"input is-success"}
                                type={"text"}
                                placeholder={"Text input"}
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
                </div>
            </div>
            <div className={"field is-horizontal"}>
                <div className={"field-label is-normal"}>
                    <label className={"label"}>{"Email"}</label>
                </div>
                <div className={"field-body"}>
                    <div className={"field"}>
                        <div
                            className={
                                "control has-icons-left has-icons-right"
                            }>
                            <input
                                className={"input is-danger"}
                                type={"email"}
                                placeholder={"Email input"}
                            />
                            <span className={"icon is-small is-left"}>
                                <i className={"fas fa-envelope"} />
                            </span>
                            <span className={"icon is-small is-right"}>
                                <i className={"fas fa-exclamation-triangle"} />
                            </span>
                        </div>
                        <p className={"help is-danger"}>
                            {"This email is invalid"}
                        </p>
                    </div>
                </div>
            </div>
            <div className={"field is-horizontal"}>
                <div className={"field-label is-normal"}>
                    <label className={"label"}>{"Password"}</label>
                </div>
                <div className={"field-body"}>
                    <div className={"field"}>
                        <p className={"control has-icons-left has-icons-right"}>
                            <input
                                className={"input is-danger"}
                                type={"password"}
                                placeholder={"Password"}
                            />
                            <span className={"icon is-small is-left"}>
                                <i className={"fas fa-lock"} />
                            </span>
                            <span className={"icon is-small is-right"}>
                                <i className={"fas fa-exclamation-triangle"} />
                            </span>
                        </p>
                        <p className={"help is-danger"}>
                            {"This field is required"}
                        </p>
                    </div>
                </div>
            </div>
            <div className={"field is-horizontal"}>
                <div className={"field-label is-normal"}>
                    <label className={"label"}>{"Confirm password"}</label>
                </div>
                <div className={"field-body"}>
                    <div className={"field"}>
                        <p className={"control has-icons-left has-icons-right"}>
                            <input
                                className={"input is-danger"}
                                type={"password"}
                                placeholder={"Password"}
                            />
                            <span className={"icon is-small is-left"}>
                                <i className={"fas fa-lock"} />
                            </span>
                            <span className={"icon is-small is-right"}>
                                <i className={"fas fa-exclamation-triangle"} />
                            </span>
                        </p>
                        <p className={"help is-danger"}>
                            {"This field is required"}
                        </p>
                    </div>
                </div>
            </div>
            <div className={"field is-horizontal"}>
                <div className={"field-label is-normal"}>
                    <label className={"label"}>{"Pick a color"}</label>
                </div>
                <div className={"field-body"}>
                    <div className={"field"}>
                        <div
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
                        </div>
                    </div>
                </div>
            </div>
            <div className={"field is-horizontal"}>
                <div className={"field-label"} />
                <div className={"field-body"}>
                    <div className={"field"}>
                        <div className={"control"}>
                            <button
                                type={"button"}
                                className={
                                    "button is-success is-fullwidth is-outlined"
                                }>
                                {"Register"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
