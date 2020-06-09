import * as React from "react";
import MapLeaflet from "./map";
// import LoginPage from "./login";
// import RegisterPage from "./register";
// import ProfilePage from "./profile";
// import LeaderboardPage from "./leaderboard";
import Menu from "./menu";
require("../styles/mystyles.css");

const Game = () => (
    <div className={"content"}>
        <Menu />
        <MapLeaflet />
        {/* <LoginPage />
        <RegisterPage />
        <ProfilePage /> 
        <LoginPage />
        <LeaderboardPage /> */}
    </div>
);

export default Game;
