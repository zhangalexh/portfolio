import React from "react";
import GameDev from "./GameDev"
import Intro from "./Intro";
import Translation from "./Translation";

export default function MainContents() {
    return (
        <div className="flex-1 text-black bg-olive body-font">
            <Intro />
            <GameDev />
            <Translation />
            {/*
            <Taiko />
<BottomBar />*/}
        </div>
    );
}