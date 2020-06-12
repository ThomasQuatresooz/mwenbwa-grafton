/* eslint-disable react/jsx-max-depth */
/* eslint-disable react/button-has-type */
import React from "react";

function RankByTrees() {
    document.querySelector("#clickedTree").setAttribute("class", "is-active");
    document.querySelector("#treeRanking").removeAttribute("style");
    document.querySelector("#clickedLeaf").removeAttribute("class");
    document
        .querySelector("#leafRanking")
        .setAttribute("style", "display: none");
}

function RankByLeaves() {
    document.querySelector("#clickedLeaf").setAttribute("class", "is-active");
    document.querySelector("#leafRanking").removeAttribute("style");
    document.querySelector("#clickedTree").removeAttribute("class");
    document
        .querySelector("#treeRanking")
        .setAttribute("style", "display: none");
}

export default function LeaderboardPage(props) {
    return (
        <div className={props.showLeaderboard ? "modal is-active" : "modal"}>
            <div
                className={"modal-background"}
                onClick={props.handleCloseLeaderboard}
            />
            <div className={"modal-card"}>
                <header className={"modal-card-head"}>
                    <p className={"modal-card-title"}>{"Login"}</p>
                    <button
                        className={"delete"}
                        aria-label={"close"}
                        onClick={props.handleCloseLeaderboard}
                    />
                </header>
                <section className={"modal-card-body has-text-centered"}>
                    <div className={"tabs is-centered"}>
                        <ul>
                            <li id={"clickedTree"} onClick={RankByTrees}>
                                <a>{"Rank by trees"}</a>
                            </li>
                            <li id={"clickedLeaf"} onClick={RankByLeaves}>
                                <a>{"Rank by leaves"}</a>
                            </li>
                        </ul>
                    </div>
                    <table
                        className={"table container is-hoverable"}
                        id={"treeRanking"}
                        style={{display: "none"}}>
                        <thead>
                            <tr>
                                <th title={"rank"}>{"Rank"}</th>
                                <th title={"nickname"}>{"Nickname"}</th>
                                <th title={"trees"}>{"Trees"}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>{"1"}</th>
                                <td>{"Starfire"}</td>
                                <td>{"6"}</td>
                            </tr>
                            <tr>
                                <th>{"2"}</th>
                                <td>{"Raven"}</td>
                                <td>{"4"}</td>
                            </tr>
                            <tr>
                                <th>{"3"}</th>
                                <td>{"Robin"}</td>
                                <td>{"3"}</td>
                            </tr>
                        </tbody>
                    </table>
                    <table
                        className={"table container is-hoverable"}
                        id={"leafRanking"}
                        style={{display: "none"}}>
                        <thead>
                            <tr>
                                <th title={"rank"}>{"Rank"}</th>
                                <th title={"nickname"}>{"Nickname"}</th>
                                <th title={"leaves"}>{"Leaves"}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>{"1"}</th>
                                <td>{"Starfire"}</td>
                                <td>{"234"}</td>
                            </tr>
                            <tr>
                                <th>{"2"}</th>
                                <td>{"Raven"}</td>
                                <td>{"200"}</td>
                            </tr>
                            <tr>
                                <th>{"3"}</th>
                                <td>{"Robin"}</td>
                                <td>{"199"}</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                <footer
                    className={"modal-card-foot"}
                    style={{justifyContent: "center"}}>
                    <button
                        type={"button"}
                        className={
                            "button is-success is-outlined is-fullwidth"
                        }>
                        {"Find me"}
                    </button>
                </footer>
            </div>
        </div>
    );
}
