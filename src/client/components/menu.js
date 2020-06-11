import * as React from "react";
// require("../styles/mystyles.css");

const Menu = () => (
    <nav
        className={"navbar is-success"}
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
                <span className={"icon is-medium has-text-dark"}>
                    <i className={"fas fa-lg fa-tree"} />
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
                <a className={"navbar-item"}>
                    <span className={"icon is-large has-text-dark"}>
                        <i className={"fas fa-list-ol"} />
                    </span>
                    {"Ranking"}
                </a>
                <hr className={"navbar-divider"} />

                <a href={""} className={"navbar-item"}>
                    <span className={"icon is-large has-text-dark"}>
                        <i className={"far fa-file-alt"} />
                    </span>
                    {"Gamelogs"}
                </a>
                <hr className={"navbar-divider"} />
                <a href={""} className={"navbar-item"}>
                    <span className={"icon is-large has-text-dark"}>
                        <i className={"far fa-user"} />
                    </span>
                    {"My Profile"}
                </a>
            </div>
        </div>
    </nav>
);

export default Menu;
