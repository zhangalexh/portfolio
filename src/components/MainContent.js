import React from "react";
import GameDev from "./GameDev"
import Intro from "./Intro";
import Translation from "./Translation";
import Taiko from "./Taiko";
import About from "./About";

export default function MainContent() {
    return (
        <div className="text-black body-font">
            <Intro />
            <GameDev />
            {/*<Translation/>*/}
            <Taiko />
            {/*<About />*/}
        </div>
    );
}