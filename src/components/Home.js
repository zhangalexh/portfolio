import React from "react";
import GameDev from "./GameDev"
import Intro from "./Intro";
import Resume from "./Resume";

export default function Home() {
    return (
        <div className="px-4 lg:px-0 text-black body-font">
            <Intro />
            <GameDev />
        </div>
    );
}