/* eslint-disable react/jsx-max-depth */
/* eslint-disable react/button-has-type */
import React from "react";
import UserContext from "../components/mwenbwa-context";
// import axios from "axios";

class LoginPage extends React.Component {
    static contextType = UserContext;

    constructor() {
        super();

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            email: "",
            password: "",
        };
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        const data = this.state;

        const url = "api/auth/login";
        const options = {
            method: "POST",
            headers: {
                // accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
            // withCredentials: true,
        };

        console.log(JSON.stringify(data));

        fetch(url, options)
            .then(response => {
                if (response.ok) {
                    response.json().then(json => {
                        this.context.setUser(json);
                        console.log(json);
                        console.log("Connexion réussie. Bienvenue !");
                    });
                } else {
                    console.log(
                        `Request rejected with status ${response.status}`,
                    );
                }
            })
            .catch(error => {
                console.log(`Problem with fetch : ${error}`);
            });

        // axios
        //     .post(
        //         "http:localhost/api/auth/login",
        //         {
        //             user: {
        //                 email: this.state.email,
        //                 password: this.state.password,
        //             },
        //         },
        //         {
        //             withCredentials: true,
        //         },
        //     )
        //     .then(response => console.log(response.data))
        //     .catch(error => console.log("Login error", error));

        event.preventDefault();
    }

    render() {
        return (
            <div className={this.props.showLogin ? "modal is-active" : "modal"}>
                <div
                    className={"modal-background"}
                    onClick={this.props.handleCloseLogin}
                />
                <div className={"modal-card"}>
                    <header className={"modal-card-head"}>
                        <p className={"modal-card-title"}>{"Login"}</p>
                        <button
                            className={"delete"}
                            aria-label={"close"}
                            onClick={this.props.handleCloseLogin}
                        />
                    </header>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <section
                                className={"modal-card-body has-text-centered"}>
                                <div className={"field is-horizontal"}>
                                    <div className={"field-label is-normal"}>
                                        <label className={"label"}>
                                            {"Email"}
                                        </label>
                                    </div>
                                    <div className={"field-body"}>
                                        <div className={"field"}>
                                            <div
                                                className={
                                                    "control has-icons-left has-icons-right"
                                                }>
                                                <input
                                                    className={"input"}
                                                    type={"email"}
                                                    name={"email"}
                                                    value={this.state.email}
                                                    onChange={this.handleChange}
                                                    placeholder={
                                                        "Your email here"
                                                    }
                                                />
                                                <span
                                                    className={
                                                        "icon is-small is-left"
                                                    }>
                                                    <i
                                                        className={
                                                            "fas fa-user"
                                                        }
                                                    />
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
                                        <label className={"label"}>
                                            {"Password"}
                                        </label>
                                    </div>
                                    <div className={"field-body"}>
                                        <div className={"field"}>
                                            <p
                                                className={
                                                    "control has-icons-left"
                                                }>
                                                <input
                                                    className={"input"}
                                                    type={"password"}
                                                    name={"password"}
                                                    value={this.state.password}
                                                    onChange={this.handleChange}
                                                    placeholder={"Password"}
                                                />
                                                <span
                                                    className={
                                                        "icon is-small is-left"
                                                    }>
                                                    <i
                                                        className={
                                                            "fas fa-lock"
                                                        }
                                                    />
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
                                    type={"submit"}
                                    className={
                                        "button is-success is-outlined is-fullwidth"
                                    }>
                                    {"Login"}
                                </button>
                            </footer>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default LoginPage;
