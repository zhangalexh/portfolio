import { CalculatorIcon, CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects, skills, smallskills, } from "../data";


export default function GameDev() {
  return (
    <section id="gamedev" className="body-font">
      <div className="px-4 py-8 mx-auto text-center lg:px-24">
        <div className="flex flex-col pb-8">
          <CodeIcon className="mx-auto inline-block w-10 pb-4" />
          <h1 className="text-4xl font-medium title-font pb-4">
            Game Dev
          </h1>
          <p className="md:w-3/4 w-full mx-auto leading-relaxed text-base">
            I have experience in both mobile industry and indie. I'm primarily an engineer, but I've worn many hats
            in my time as a game developer, from game design, to writing, to production, & even to simple art.
            My goals are to develop not only my skills in gameplay programming & technical design, but also to build
            my production skills. I'd like to lead a team and touch every part of a game's development cycle.
          </p>
        </div>

        <h2 className="text-3x1 font-medium pb-4 text-red">
          I have a lot of experience with...
        </h2>
        <div id="skills" className="flex flex-wrap lg:w-4/5 sm:mx-auto pb-4 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-red rounded flex p-4 h-full items-center">
                {skill.type === "language" && <CodeIcon className="text-white w-6 h-6 flex-shrink-0 mr-4" />}
                {skill.type === "tool" && <CalculatorIcon className="text-white w-6 h-6 flex-shrink-0 mr-4" />}
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
            <div key={skill} className="p-2 sm:w-1/3 w-full">
              <div className="bg-darkergray rounded flex p-4 h-full items-center">
                {skill.type === "language" && <CodeIcon className="text-white w-6 h-6 flex-shrink-0 mr-4" />}
                {skill.type === "tool" && <CalculatorIcon className="text-white w-6 h-6 flex-shrink-0 mr-4" />}
                <span className="title-font font-medium text-white">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div id="asitis" className="py-8">
          <h1 className="text-2xl underline font-medium title-font text-red hover:text-opacity-80">
            <a href="https://egghouse.itch.io/as-it-is" target="_blank" rel="noopener noreferrer">
              As It Is
            </a>
          </h1>
          <h2 className="font-medium italic title-font text-tan">
            Egghouse - Creative Director, Engineer, Producer
          </h2>
          <h2 className="text-sm font-medium italic title-font pb-4 text-gray">
            Dec 2017 - Sep 2020
          </h2>
          <img
            className="object-cover mx-auto w-full xl:w-2/3 mb-4 rounded-md"
            src="./pictures/asitis.png"
            alt="As It Is"
          />
          <img
            className="object-cover mx-auto w-full xl:w-2/3 mb-4 rounded-md"
            src="./gifs/asitis.gif"
            alt="As It Is Gif"
          />
          <p className="w-full sm:w-2/3 mx-auto leading-relaxed text-base">
            <i>As It Is</i> is a 2D, watercolor narrative game about a socially anxious hedgehog and a disillusioned hawk.
            On <i>As It Is</i>, I led weekly meetings, managed tasks & production, brought the game to festivals, created pitch presentations,
            and wrote all game code. Given financial resources, I would get this game published.
          </p>
        </div>

        <div id="tetris" className="container py-8">
          <h1 className="text-2xl underline font-medium title-font text-red hover:text-opacity-80">
            <a href="https://www.tetrismobileapp.com/" target="_blank" rel="noopener noreferrer">
              Tetris© Mobile App
            </a>
          </h1>
          <h2 className="font-medium italic title-font text-tan">
            N3TWORK - Client Engineer
          </h2>
          <h2 className="text-sm font-medium italic title-font pb-4 text-gray">
            May 2019 - Jan 2021
          </h2>
          <div className="flex-1 flex flex-col sm:flex-row items-center sm:items-start justify-center">
            <img
              className="w-full sm:w-1/4 xl:w-1/5 sm: mb-4 h-auto rounded-md"
              src="./gifs/tetris.gif"
              alt="Tetris Gif"
            />
            <div className="px-4 flex-shrink w-full sm:w-1/3 flex-col items-center text-left">
              <p>
                On Tetris©, I delivered client-side features such as Name Selection, Leaderboards,
                and Tournaments for a player-base of over 10 million.
              </p>
              <br />
              <p>
                Lots of my work involved development of Client-Server protocol design, in-client user interfaces,
                and Live-Ops-friendly client behavior.
              </p>
            </div>
          </div>
        </div>

        <div id="tetrisclash" className="container py-8">
          <h1 className="text-2xl font-medium title-font text-red hover:text-opacity-80">
            Tetris© Clash
          </h1>
          <h2 className="font-medium italic title-font text-tan">
            N3TWORK - Client Engineer
          </h2>
          <h2 className="text-sm font-medium italic title-font pb-4 text-gray">
            May 2019 - Jan 2021
          </h2>
          <img
            className="object-cover mx-auto w-full xl:w-2/3 mb-4 rounded-md"
            src="./pictures/tetrisclash.png"
            alt="Tetris Clash"
          />
          <p className="w-full sm:w-2/3  mx-auto leading-relaxed text-base">
            On Tetris© Clash, I shipped a standalone app integrating the Skillz SDK in a 4-month development cycle.
            Tetris© Clash served asynchronous head-to-head battles between players for cash prizes.
          </p>
        </div>

        <div id="smallerprojects" className="py-4">
          <h1 className="text-2xl font-medium title-font text-red pb-4 hover:text-opacity-80">
            Smaller Projects
          </h1>
          <p className="w-full sm:w-2/3 mx-auto pb-4 leading-relaxed text-base">
            These are projects of either lesser scope or projects in which I had a smaller role. Most of these are
            small games I made for fun, school projects, or game jams.
          </p>

          <div className="flex flex-row w-full flex-wrap justify-center">
            {projects.map((project) => (
              <div className="py-4 w-full sm:w-80 h-auto mx-4 sm:mx-8" >
                {project.link !== "" ? (
                  <h1 className="text-4x1 underline font-medium text-red">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      {project.name}
                    </a>
                  </h1>
                ) : (
                  <h1 className="text-4x1 font-medium text-red">
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