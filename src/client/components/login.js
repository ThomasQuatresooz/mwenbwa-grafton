/* eslint-disable react/jsx-max-depth */
/* eslint-disable react/button-has-type */
import React from "react";

export default function LoginPage(props) {
    return (
        <div className={props.showLogin ? "modal is-active" : "modal"}>
            <div
                className={"modal-background"}
                onClick={props.handleCLoseLogin}
            />
            <div className={"modal-card"}>
                <header className={"modal-card-head"}>
                    <p className={"modal-card-title"}>{"Login"}</p>
                    <button
                        className={"delete"}
                        aria-label={"close"}
                        onClick={props.handleCloseLogin}
                    />
                </header>
                <section className={"modal-card-body has-text-centered"}>
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
                </section>
                <footer
                    className={"modal-card-foot"}
                    style={{justifyContent: "center"}}>
                    <button
                        type={"button"}
                        className={
                            "button is-success is-outlined is-fullwidth"
                        }>
                        {"Login"}
                    </button>
                </footer>
            </div>
        </div>
    );
}
