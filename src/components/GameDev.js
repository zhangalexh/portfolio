import { CodeIcon, CheckIcon, BadgeCheckIcon } from "@heroicons/react/solid";
import React from "react";
import { projects, skills, smallskills, } from "../data";


export default function GameDev() {
  return (
    <section id="gamedev" className="body-font">
      <div className="py-8 sm:w-10/12 mx-auto text-left lg:text-center">
        <CodeIcon className="inline-block w-10 pb-4" />
          <h1 className="text-4xl font-medium title-font pb-4">
            Game Dev
          </h1>
          <p className="lg:w-4/5 xl:w-2/3 text-xl mx-auto leading-relaxed">
            I have experience in both mobile industry and in indie. I'm primarily an engineer, 
            but I have experience in production, direction, writing, and design. I've led my own
            indie-team and I've been part of a game studio serving users in the millions.
          </p>

        <h2 className="py-10 text-xl font-medium pb-4 text-red">
          I have a lot of experience with...
        </h2>
        <div id="skills" className="flex flex-wrap lg:w-4/5 sm:mx-auto pb-4 -mx-2">
          {skills.map((skill) => (
            <div key={skill.name} className="p-2 sm:w-1/2">
              <div className="bg-red rounded flex p-4 h-full items-center">
                {skill.type === "language" && <BadgeCheckIcon className="text-white w-6 h-6 flex-shrink-0 mr-4" />}
                {skill.type === "tool" && <CheckIcon className="text-white w-6 h-6 flex-shrink-0 mr-4" />}
                <span className="title-font font-medium text-white">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-3x1 font-medium pb-4 text-red">
          Additionally, I have a bit of experience with...
        </h2>

        <div id="smallskills" className="flex flex-wrap lg:w-4/5 sm:mx-auto pb-4 -mx-2">
          {smallskills.map((skill) => (
            <div key={skill.name} className="p-2 sm:w-1/3">
              <div className="bg-darkergray rounded flex p-4 h-full items-center">
                {skill.type === "language" && <BadgeCheckIcon className="text-white w-6 h-6 flex-shrink-0 mr-4" />}
                {skill.type === "tool" && <CheckIcon className="text-white w-6 h-6 flex-shrink-0 mr-4" />}
                <span className="title-font font-medium text-white">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div id="asitis" className="py-8">
          <h1 className="text-3xl underline font-medium title-font text-red hover:text-opacity-80">
            <a href="https://egghouse.github.io/" target="_blank" rel="noopener noreferrer">
              As It Is
            </a>
          </h1>
          <h2 className="text-xl font-medium italic title-font text-tan">
            Egghouse - Creative Director, Engineer, Producer
          </h2>
          <h2 className="text-sm font-medium italic title-font pb-4 text-gray">
            Dec 2017 - Sep 2020
          </h2>
          <img
            className="mx-auto lg:w-3/4 mb-4 rounded-md"
            src="./pictures/asitis.png"
            alt="As It Is"
          />
          <img
            className="mx-auto lg:w-3/4 mb-4 rounded-md"
            src="./gifs/asitis.gif"
            alt="As It Is Gif"
          />
          <p className="lg:w-4/5 xl:w-2/3 text-xl mx-auto leading-relaxed">
            <i>As It Is</i> is a 2D, watercolor narrative game about a socially anxious hedgehog and a disillusioned hawk.
            On <i>As It Is</i>, I led weekly meetings, managed tasks & production, brought the game to festivals, created pitch presentations,
            and wrote all the game code. <i>As It Is</i> has been to MAGFest 2019, PixelPop 2018, and IndieCade 2019.
          </p>
        </div>

        <div id="tetris" className="container py-8">
          <h1 className="text-3xl underline font-medium title-font text-red hover:text-opacity-80">
            <a href="https://www.tetrismobileapp.com/" target="_blank" rel="noopener noreferrer">
              Tetris© Mobile App
            </a>
          </h1>
          <h2 className="text-xl font-medium italic title-font text-tan">
            N3TWORK - Client Engineer
          </h2>
          <h2 className="text-sm font-medium italic title-font pb-4 text-gray">
            May 2019 - Jan 2021
          </h2>
          <div className="flex-1 flex flex-col md:flex-row items-start justify-center">
            <img
              className="sm:w-3/4 md:w-2/3 lg:w-1/3 xl:w-1/5 sm: mb-4 h-auto rounded-md"
              src="./gifs/tetris.gif"
              alt="Tetris Gif"
            />
            <div className="text-xl md:px-8 xl:px-16 flex-shrink sm:w-2/3 md:w-1/2 xl:w-1/3 flex-col items-center text-left">
              <p>
                Tetris© is the official mobile app for the world's favorite puzzle game.
                On Tetris©, I delivered client-side features such as Name Selection, Leaderboards,
                and Tournaments for a player-base of over 10 million.
              </p>
              <br />
              <p>
                My work involved development of client-server protocol design, in-client user interfaces,
                and Live-Ops-friendly client behavior.
              </p>
            </div>
          </div>
        </div>

        <div id="tetrisclash" className="container py-8">
          <h1 className="text-3xl font-medium title-font text-red hover:text-opacity-80">
            Tetris© Clash
          </h1>
          <h2 className="text-xl font-medium italic title-font text-tan">
            N3TWORK - Client Engineer
          </h2>
          <h2 className="text-sm font-medium italic title-font pb-4 text-gray">
            May 2019 - Jan 2021
          </h2>
          <img
            className="mx-auto lg:w-3/4 mb-4 rounded-md"
            src="./pictures/tetrisclash.png"
            alt="Tetris Clash"
          />
          <p className="text-xl lg:w-4/5 xl:w-2/3  mx-auto leading-relaxed">
            On Tetris© Clash, I shipped a standalone app integrating the Skillz SDK in a 4-month development cycle.
            Tetris© Clash served asynchronous head-to-head battles between players for cash prizes.
          </p>
        </div>

        <div id="smallerprojects" className="py-4">
          <h1 className="text-3xl font-medium title-font text-red pb-4 hover:text-opacity-80">
            Smaller Projects
          </h1>
          <p className="text-xl lg:w-4/5 xl:w-1/2 mx-auto pb-4 leading-relaxed">
            These are projects of either lesser scope or projects in which I had a smaller role. Most of these are
            small games I made for fun, school projects, or game jams.
          </p>

          <div className="lg:w-4/5 xl:w-2/3 mx-auto flex flex-row flex-wrap justify-center">
            {projects.map((project) => (
              <div className="py-4 sm:w-1/2 h-auto px-4" >
                {project.link !== "" ? (
                  <h1 className="text-xl underline font-medium text-red">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      {project.name}
                    </a>
                  </h1>
                ) : (
                  <h1 className="text-xl font-medium text-red">
                    {project.name}
                  </h1>
                )}

                <p className="text-sm italic title-font font-medium text-gray">
                  {project.date}
                </p>
                <img className="py-2" src={project.image} alt={project.image} />
                <p className="text-sm font-medium italic title-font text-tan">
                  {project.title}
                </p>
                <p className="italic text-sm text-darkergray">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section >
  );
}