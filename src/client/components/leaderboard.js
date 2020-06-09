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

export default function LeaderboardPage() {
    return (
        <div className={"container has-text-centered"}>
            <h2 className={"title is-2"}>{"Leaderboard"}</h2>
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
        </div>
    );
}
