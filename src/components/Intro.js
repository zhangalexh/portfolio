import React from "react";

export default function Intro() {
  return (
    <section id="intro">
      <div className="flex container h-screen flex-1 w-1/2" >
        <div className="flex-1 flex flex-col md:flex-row items-center justify-center md:space-x-20">
          <div className="">
            <img
              className="sm:flex ml-0 sm:w-full object-cover"
              alt="hero"
              src="pictures/meramen.png"
            />
          </div>
          <div className="">
            <img
              className="sm:flex ml-0 sm:w-full object-cover"
              alt="hero"
              src="pictures/logo.png"
            />
          </div>
        </div>
      </div>
    </section >
  );
}