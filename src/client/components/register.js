/* eslint-disable react/jsx-max-depth */
/* eslint-disable react/button-has-type */
import React from "react";
import "../../lib/jscolor-2.1.0/jscolor";

class RegisterPage extends React.Component {
    constructor() {
        super();

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            username: "",
            email: "",
            password: "",
            color: "",
        };
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
        console.log(e.target.value);
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state);

        const data = this.state;

        const url = "api/auth/signup";
        const options = {
            method: "POST",
            headers: {
                // accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
            withCredentials: true,
        };

        // console.log pour être sûr qu'on a les données bien formatées en JSON
        console.log(JSON.stringify(data));

        fetch(url, options)
            .then(response => {
                if (response.ok) {
                    console.log(response.data);
                } else {
                    console.log(
                        `Request rejected with status ${response.status}`,
                    );
                }
            })
            .catch(error => {
                console.log(`Problem with fetch : ${error}`);
            });

        e.preventDefault();
    }

    render() {
        return (
            <div
                className={
                    this.props.showRegister ? "modal is-active" : "modal"
                }>
                <div
                    className={"modal-background"}
                    onClick={this.props.handleCloseRegister}
                />
                <div className={"modal-card"}>
                    <header className={"modal-card-head"}>
                        <p className={"modal-card-title"}>{"Register"}</p>
                        <button
                            className={"delete"}
                            aria-label={"close"}
                            onClick={this.props.handleCloseRegister}
                        />
                    </header>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <section
                                className={"modal-card-body has-text-centered"}>
                                <div className={"field is-horizontal"}>
                                    <div className={"field-label is-normal"}>
                                        <label className={"label"}>
                                            {"Username"}
                                        </label>
                                    </div>
                                    <div className={"field-body"}>
                                        <div className={"field"}>
                                            <div
                                                className={
                                                    "control has-icons-left has-icons-right"
                                                }>
                                                <input
                                                    className={
                                                        "input is-success"
                                                    }
                                                    type={"text"}
                                                    name={"username"}
                                                    value={this.state.username}
                                                    onChange={this.handleChange}
                                                    placeholder={
                                                        "Your username here"
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
                                                <span
                                                    className={
                                                        "icon is-small is-right"
                                                    }>
                                                    <i
                                                        className={
                                                            "fas fa-check"
                                                        }
                                                    />
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
                                                    className={
                                                        "input is-danger"
                                                    }
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
                                                            "fas fa-envelope"
                                                        }
                                                    />
                                                </span>
                                                <span
                                                    className={
                                                        "icon is-small is-right"
                                                    }>
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
                                                    "control has-icons-left has-icons-right"
                                                }>
                                                <input
                                                    className={
                                                        "input is-danger"
                                                    }
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
                                                <span
                                                    className={
                                                        "icon is-small is-right"
                                                    }>
                                                    <i
                                                        className={
                                                            "fas fa-exclamation-triangle"
                                                        }
                                                    />
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
                                        <label className={"label"}>
                                            {"Confirm password"}
                                        </label>
                                    </div>
                                    <div className={"field-body"}>
                                        <div className={"field"}>
                                            <p
                                                className={
                                                    "control has-icons-left has-icons-right"
                                                }>
                                                <input
                                                    className={
                                                        "input is-danger"
                                                    }
                                                    type={"password"}
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
                                                <span
                                                    className={
                                                        "icon is-small is-right"
                                                    }>
                                                    <i
                                                        className={
                                                            "fas fa-exclamation-triangle"
                                                        }
                                                    />
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
                                        <label className={"label"}>
                                            {"Color"}
                                        </label>
                                    </div>
                                    <div className={"field-body"}>
                                        <div className={"field"}>
                                            <div
                                                className={
                                                    "control has-icons-left has-icons-right"
                                                }>
                                                <input
                                                    name={"color"}
                                                    type={"text"}
                                                    className={"input jscolor"}
                                                    placeholder={"Pick a color"}
                                                    value={this.state.color}
                                                    onChange={this.handleChange}
                                                    data-jscolor={""}
                                                />

                                                <span
                                                    className={
                                                        "icon is-small is-left"
                                                    }>
                                                    <i
                                                        className={
                                                            "fas fa-palette"
                                                        }
                                                    />
                                                </span>
                                            </div>
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
                                    {"Register"}
                                </button>
                            </footer>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default RegisterPage;
