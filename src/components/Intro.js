import React from "react";

export default function Intro() {
  return (
    <section id="intro">
      <div className="px-4 sm:px-16 py-10 flex-1">
        <div className="flex-1 flex flex-col sm:flex-row items-center justify-center">
          <div className="flex flex-col items-start text-left mb-16">
            <h1 className="title-font text-3xl mr-4 mb-16 font-medium text-red">
              Welcome to my tiny website!
            </h1>
            <p>
              I'm a game developer, programmer, translator, cat-owner, and taiko player currently based in Seattle, WA.
            </p>
            <br />
            <p>
              I'm interested in indie games and interactive experiences made by people with personal stories to tell.
              That picture there is me, in my happy place.
            </p>
            <br />
            <p className= "font-bold">
              (THIS WEBSITE IS STILL UNDER CONSTRUCTION. I APPRECIATE YOUR PATIENCE!!!)
            </p>
          </div>
          <div className="">
            <img
              className="sm:flex ml-0 sm:ml-8 sm:w-full object-cover rounded-lg"
              alt="hero"
              src="pictures/meramen.jfif"
            />
          </div>
        </div>
      </div>
    </section >
  );
}