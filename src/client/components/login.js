/* eslint-disable react/jsx-max-depth */
/* eslint-disable react/button-has-type */
import React from "react";

export default function LoginPage() {
    return (
        <div className={"container"}>
            <h2 className={"title is-3 is-centered has-text-centered"}>
                {"Login"}
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
                                className={"input"}
                                type={"text"}
                                placeholder={"Text input"}
                            />
                            <span className={"icon is-small is-left"}>
                                <i className={"fas fa-user"} />
                            </span>
                            {/* <span className={"icon is-small is-right"}>
                                        <i className={"fas fa-check"} />
                                    </span> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className={"field is-horizontal"}>
                <div className={"field-label is-normal"}>
                    <label className={"label"}>{"Password"}</label>
                </div>
                <div className={"field-body"}>
                    <div className={"field"}>
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
                                {"Login"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
