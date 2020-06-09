import * as React from "react";
// require("../styles/mystyles.css")import leaf from "../images/tree.png";

const Menu = () => (
    <nav
        className={"navbar is-success absolute"}
        role={"navigation"}
        aria-label={"main navigation"}>
        <div className={"navbar-brand"}>
            <div className={"navbar-item is-expanded"}>
                <span className={"icon is-medium has-text-dark"}>
                    <i className={"far fa-lg fa-clock"} />
                </span>
                <p>{"12:35"}</p>
            </div>

            <div className={"navbar-item is-expanded"}>
                <span>
                    <img src={"../images/tree.png"} />
                </span>
                <p>{"64"}</p>
            </div>

            <div className={"navbar-item is-expanded"}>
                <span className={"icon is-medium has-text-dark"}>
                    <i className={"fas fa-lg fa-leaf"} />
                </span>
                <p>{"1087"}</p>
            </div>

            <a
                role={"button"}
                className={"navbar-burger burger"}
                aria-label={"menu"}
                aria-expanded={"false"}
                onClick={() => {
                    const toggle = document.querySelector(".navbar-burger");
                    const menu = document.querySelector(".navbar-menu");
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
                    <span className={"icon is-large has-text-dark"}>
                        <i className={"fas fa-list-ol"} />
                    </span>
                    {"Ranking"}
                </div>
                <hr className={"navbar-divider"} />

                <div className={"navbar-item"}>
                    <span className={"icon is-large has-text-dark"}>
                        <i className={"far fa-file-alt"} />
                    </span>
                    {"Gamelogs"}
                </div>
                <hr className={"navbar-divider"} />
                <div className={"navbar-item"}>
                    <span className={"icon is-large has-text-dark"}>
                        <i className={"far fa-user"} />
                    </span>
                    {"My Profile"}
                </div>
            </div>
        </div>
    </nav>
);

export default Menu;
