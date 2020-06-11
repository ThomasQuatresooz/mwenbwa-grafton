/* eslint-disable react/jsx-max-depth */
import * as React from "react";
// require("../styles/mystyles.css");
import ProfilePage from "./profile";

class Menu extends React.Component {
    constructor() {
        super();

        this.state = {
            isShowing: false,
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.closeModalHandler = this.closeModalHandler.bind(this);
    }

    handleOpenModal() {
        this.setState({
            isShowing: true,
        });
    }

    closeModalHandler() {
        this.setState({
            isShowing: false,
        });
    }

    render() {
        return (
            <div>
                <nav
                    className={"navbar is-success"}
                    role={"navigation"}
                    aria-label={"main navigation"}>
                    <div className={"navbar-brand"}>
                        <div className={"navbar-item is-expanded"}>
                            <span className={"icon is-medium"}>
                                <i className={"far fa-lg fa-clock"} />
                            </span>
                            <p>{"12:35"}</p>
                        </div>

                        <div className={"navbar-item is-expanded"}>
                            <span className={"icon is-medium"}>
                                <i className={"fas fa-lg fa-tree"} />
                            </span>
                            <p>{"64"}</p>
                        </div>

                        <div className={"navbar-item is-expanded"}>
                            <span className={"icon is-medium"}>
                                <i className={"fab fa-lg fa-envira"} />
                            </span>
                            <p>{"1087"}</p>
                        </div>

                        <a
                            role={"button"}
                            className={"navbar-burger burger"}
                            aria-label={"menu"}
                            aria-expanded={"false"}
                            onClick={() => {
                                const toggle = document.querySelector(
                                    ".navbar-burger",
                                );
                                const menu = document.querySelector(
                                    ".navbar-menu",
                                );
                                toggle.classList.toggle("is-active");
                                menu.classList.toggle("is-active");
                            }}>
                            <span aria-hidden={"true"} />
                            <span aria-hidden={"true"} />
                            <span aria-hidden={"true"} />
                        </a>
                    </div>
                    <div className={"navbar-menu"}>
                        <div className={"navbar-start"} />

                        <div className={"navbar-end"}>
                            <div className={"navbar-item"}>
                                <span className={"icon is-large"}>
                                    <i className={"fas fa-list-ol"} />
                                </span>
                                {"Ranking"}
                            </div>
                            <hr className={"navbar-divider"} />

                            <div className={"navbar-item"}>
                                <span className={"icon is-large"}>
                                    <i className={"far fa-file-alt"} />
                                </span>
                                {"Gamelogs"}
                            </div>
                            <hr className={"navbar-divider"} />
                            <a
                                className={"navbar-item"}
                                onClick={this.handleOpenModal}>
                                <span className={"icon is-large"}>
                                    <i className={"far fa-user"} />
                                </span>
                                {"My Profile"}
                            </a>
                        </div>
                    </div>
                </nav>
                <ProfilePage
                    show={this.state.isShowing}
                    handleClose={this.closeModalHandler}
                />
            </div>
        );
    }
}

export default Menu;
