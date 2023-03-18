import React from "react";
import GameDev from "./GameDev"
import Intro from "./Intro";
import Translation from "./Translation";
import Taiko from "./Taiko";
import Contact from "./Contact";

export default function MainContent() {
    return (
        <div className="ml-32 lg:ml-0 px-4 lg:px-0 text-black body-font">
            <Intro />
            <GameDev />
            <Translation/>
            <Taiko />
            <Contact/>
        </div>
    );
}