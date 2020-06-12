/* eslint-disable react/button-has-type */
import React from "react";

export default function GamelogPage(props) {
    return (
        <div className={props.showGamelog ? "modal is-active" : "modal"}>
            <div
                className={"modal-background"}
                onClick={props.handleCLoseGamelog}
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
                    <p>{"[date] - [time] : starfire bought a new tree"}</p>
                </section>
                <footer
                    className={"modal-card-foot"}
                    style={{justifyContent: "center"}}
                />
            </div>
        </div>
    );
}
