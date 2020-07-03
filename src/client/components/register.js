/* eslint-disable react/jsx-max-depth */
/* eslint-disable react/button-has-type */
/* eslint-disable no-invalid-this */
/* eslint-disable react/jsx-handler-names*/
import React from "react";
import "../../lib/jscolor-2.1.0/jscolor";
//import {ChromePicker} from "react-color";
//import {icon} from "leaflet";

class RegisterPage extends React.Component {
    constructor() {
        super();

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePasswordCheck = this.handlePasswordCheck.bind(this);

        this.state = {
            username: "",
            email: "",
            password: "",
            passwordConfirmation: "",
            color: "",
            iconPass1: "",
            iconPass2: "",
        };
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
        console.log(e.target.value);
    }

    // handleUsername() {
    //     const username = document.querySelector("#username").value;
    //     console.log(username);
    //     const userInput = document.querySelector("#username");
    //     const userWarning = document.querySelector("#usernameUsed");
    //     // e.preventDefault();

    //     const url = "api/auth/checkusername";
    //     const options = {
    //         method: "GET",
    //         headers: {
    //             // accept: "application/json",
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(username),
    //         withCredentials: true,
    //     };

    //     // console.log pour être sûr qu'on a les données bien formatées en JSON
    //     console.log(JSON.stringify(username));

    //     fetch(url, options)
    //         .then((response) => {
    //             if (response == "Ce pseudo est déjà utilisé.") {
    //                 console.log(response.data);
    //                 userWarning.innerHTML =
    //                     "This username is incorrect. Please try another.";
    //                 userInput.classList.remove("is-success");
    //                 userInput.classList.add("is-danger");
    //             } else {
    //                 console.log(response.data);
    //                 userWarning.innerHTML = "";
    //                 userInput.classList.remove("is-danger");
    //                 userInput.classList.add("is-success");
    //             }
    //         })
    //         .catch((error) => {
    //             console.log(`Problem with fetch : ${error}`);
    //         });
    // }

    handlePasswordCheck() {
        const password = this.state.password;
        const passwordConfirmation = this.state.passwordConfirmation;
        const passwordLength = document.querySelector("#password").value;
        const passwordInput = document.querySelector("#password");
        const passwordConfirmationInput = document.querySelector(
            "#passwordConfirmation",
        );
        const verify1 = document.querySelector("#passwordLength");
        const verify2 = document.querySelector("#passwordMatch");
        // const iconPass1 = document.querySelector("#iconPass1");
        //const iconPass2 = document.querySelector("#iconPass2");

        // valeur mise à 4 pour les tests

        if (passwordLength.length < 4) {
            // this.state.iconPass1 = "fas fa-exclamation-triangle";
            this.setState({iconPass1: "not ok"});
            // this.state.iconPass1 = "not ok";
            verify1.innerHTML = "Your password needs at leat 4 characters.";
            passwordInput.classList.remove("is-success");
            passwordInput.classList.add("is-danger");
            // iconPass1.classList.remove("fas fa-check");
            // iconPass1.classList.add("fas fa-exclamation-triangle");s
            console.log(this.state.iconPass1);
        } else {
            // this.state.iconPass1 = "fas fa-check";
            this.setState({iconPass1: "ok"});
            verify1.innerHTML = "";
            passwordInput.classList.remove("is-danger");
            passwordInput.classList.add("is-success");
            console.log(this.state.iconPass1);
        }

        if (password !== passwordConfirmation && passwordConfirmation !== 0) {
            this.setState({iconPass2: "fas fa-exclamation-triangle"});
            verify2.innerHTML = "The two passwords do not match !";
            verify2.classList.remove("is-success");
            verify2.classList.add("is-danger");
            passwordConfirmationInput.classList.remove("is-success");
            passwordConfirmationInput.classList.add("is-danger");
        } else {
            this.setState({iconPass2: "fas fa-check"});
            verify2.innerHTML = "Passwords match !";
            verify2.classList.add("is-success");
            verify2.classList.remove("is-danger");
            passwordConfirmationInput.classList.add("is-success");
            passwordConfirmationInput.classList.remove("is-danger");
        }
    }

    handleChangeComplete = color => {
        this.setState({color: color.hex});
    };

    handleSubmit(e) {
        e.preventDefault();

        console.log(this.state);

        const data = this.state;

        // const user = {
        //     username: this.state.username,
        //     email: this.state.email,
        //     password: this.state.password,
        // };

        // axios
        //     .post(
        //         "api/auth/signup",
        //         data,
        //         // {
        //         //     username: this.state.username,
        //         //     email: this.state.email,
        //         //     password: this.state.password,
        //         // },
        //         // {
        //         //     withCredentials: true,
        //         // },
        //     )
        //     .then((response) => console.log(response.data))
        //     .catch((error) => console.log("Login error", error));

        // const myHeaders = new Header();
        // myHeaders.append("Content-Type", "application/json;charset=UTF-8");
        // myHeaders.append("accept", "application/json");

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
                                                    id={"username"}
                                                    className={"input"}
                                                    type={"text"}
                                                    name={"username"}
                                                    value={this.state.username}
                                                    onChange={this.handleChange}
                                                    placeholder={
                                                        "Your username here"
                                                    }
                                                    onBlur={this.handleUsername}
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
                                            <p
                                                id={"usernameUsed"}
                                                className={"help is-success"}>
                                                {""}
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
                                                    onBlur={this.handleEmail}
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
                                            <p
                                                id={"emailUsed"}
                                                className={"help is-danger"}>
                                                {""}
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
                                                    id={"password"}
                                                    className={"input"}
                                                    type={"password"}
                                                    name={"password"}
                                                    value={this.state.password}
                                                    onChange={this.handleChange}
                                                    placeholder={"Password"}
                                                    onKeyUp={
                                                        this.handlePasswordCheck
                                                    }
                                                    required
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
                                                        id={"iconPass1"}
                                                        className={
                                                            this.state
                                                                .iconPass1 ===
                                                            "ok"
                                                                ? "fas fa-check"
                                                                : "fas fa-exclamation-triangle"
                                                        }
                                                    />
                                                </span>
                                            </p>
                                            <p
                                                id={"passwordLength"}
                                                className={"help is-danger"}>
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
                                                    id={"passwordConfirmation"}
                                                    className={"input"}
                                                    name={
                                                        "passwordConfirmation"
                                                    }
                                                    type={"password"}
                                                    placeholder={
                                                        "Confirm your password"
                                                    }
                                                    onChange={this.handleChange}
                                                    onKeyUp={
                                                        this.handlePasswordCheck
                                                    }
                                                    required
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
                                                        id={"iconPass2"}
                                                        className={
                                                            this.state.iconPass2
                                                        }
                                                    />
                                                </span>
                                            </p>
                                            <p
                                                id={"passwordMatch"}
                                                className={"help"}>
                                                {""}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className={"field is-horizontal"}>
                                    <div className={"field-label is-normal"}>
                                        <label className={"label"}>
                                            {"Pick a color"}
                                        </label>
                                    </div>
                                    <div className={"field-body"}>
                                        <div className={"field"}>
                                            {/* <div
                                                className={
                                                    "control has-icons-left has-icons-right"
                                                }>
                                                <ChromePicker
                                                    disableAlpha={true}
                                                    color={this.state.color}
                                                    onChangeComplete={
                                                        this
                                                            .handleChangeComplete
                                                    }
                                                /> */}

                                {/* <span
                                                    className={
                                                        "icon is-small is-left"
                                                    }>
                                                    <i
                                                        className={
                                                            "fas fa-palette"
                                                        }
                                                    />
                                                </span> */}

                                {/* </div>
                                        </div>
                                    </div>
                                </div>  */}
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
                                                    id={"passwordConfirmation"}
                                                    className={"input"}
                                                    name={
                                                        "passwordConfirmation"
                                                    }
                                                    type={"password"}
                                                    placeholder={
                                                        "Confirm your password"
                                                    }
                                                    onChange={this.handleChange}
                                                    onKeyUp={
                                                        this.handlePasswordCheck
                                                    }
                                                    required
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
                                                        id={"iconPass2"}
                                                        className={
                                                            this.state.iconPass2
                                                        }
                                                    />
                                                </span>
                                            </p>
                                            <p
                                                id={"passwordMatch"}
                                                className={"help"}>
                                                {""}
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
                                                    id={"passwordConfirmation"}
                                                    className={"input"}
                                                    name={
                                                        "passwordConfirmation"
                                                    }
                                                    type={"password"}
                                                    placeholder={
                                                        "Confirm your password"
                                                    }
                                                    onChange={this.handleChange}
                                                    onKeyUp={
                                                        this.handlePasswordCheck
                                                    }
                                                    required
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
                                                        id={"iconPass2"}
                                                        className={
                                                            this.state.iconPass2
                                                        }
                                                    />
                                                </span>
                                            </p>
                                            <p
                                                id={"passwordMatch"}
                                                className={"help"}>
                                                {""}
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
                                                    id={"passwordConfirmation"}
                                                    className={"input"}
                                                    name={
                                                        "passwordConfirmation"
                                                    }
                                                    type={"password"}
                                                    placeholder={
                                                        "Confirm your password"
                                                    }
                                                    onChange={this.handleChange}
                                                    onKeyUp={
                                                        this.handlePasswordCheck
                                                    }
                                                    required
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
                                                        id={"iconPass2"}
                                                        className={
                                                            this.state.iconPass2
                                                        }
                                                    />
                                                </span>
                                            </p>
                                            <p
                                                id={"passwordMatch"}
                                                className={"help"}>
                                                {""}
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
