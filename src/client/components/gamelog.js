/* eslint-disable react/button-has-type */
import React, {useState, useEffect} from "react";

export default function GamelogPage(props) {
    const [viewLogs, setViewLogs] = useState([]);
    useEffect(() => {
        fetch("logs/1")
            .then(res => res.json())
            .then(elem => {
                setViewLogs(elem);
            });
    }, []);

    return (
        <div className={props.showGamelog ? "modal is-active" : "modal"}>
            <div
                className={"modal-background"}
                onClick={props.handleCloseGamelog}
            />
            <div className={"modal-card"}>
                <header className={"modal-card-head"}>
                    <p className={"modal-card-title"}>{"Gamelogs"}</p>
                    <button
                        className={"delete"}
                        aria-label={"close"}
                        onClick={props.handleCloseGamelog}
                    />
                </header>
                <section className={"modal-card-body has-text-centered"}>
                    <p>{viewLogs}</p>
                </section>
                <footer
                    className={"modal-card-foot"}
                    style={{justifyContent: "center"}}
                />
            </div>
        </div>
    );
}
