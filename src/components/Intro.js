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
            <p>
              Art by <a className=" underline" href="https://twitter.com/Ryukocha_Art" target="_blank" rel="noopener noreferrer">@Ryukocha_Art</a>
            </p>
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
      <div className="py-8 sm:w-10/12 mx-auto text-left lg:text-center">
        <p className="lg:w-4/5 xl:w-2/3 text-xl mx-auto leading-relaxed">
            Hi! I'm Alex and this is my website. I'm a game developer, programmer, artist, and translator based in Seattle. 
            <br></br>
            Need a localizer, programmer, or just an extra set of hands for your indie game? Let me know!
        </p>
      </div>
    </section >
  );
}