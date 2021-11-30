import { DownloadIcon } from "@heroicons/react/solid";
import React from "react";


export default function NavBar() {
  return (
    <div className="bg-red w-auto text-olive">
      <div className="py-8 w-24 sm:w-40 mr-8">
        <div className="fixed ml-4 sm:ml-8 w-24 sm:w-32 title-font">
          <div className="text-right w-full font-medium text-xl ">
            <a href="#intro">Alex Zhang</a>
          </div>
          <a href="/files/AlexZhangResume.pdf" className="flex flex-row items-center justify-end font-medium hover:text-white" target="_blank" download>
            <div className="self-end">Resume</div>
            <DownloadIcon className="w-4 h-4" />
          </a>
          <nav className="mt-24 sm:mt-48 w-full flex flex-col items-end">
            <a href="#gamedev" className="py-2 hover:text-white">
              Game Dev
            </a>
            <a href="#translation" className="py-2 hover:text-white">
              Translation
            </a>
            <a href="#taiko" className="py-2 hover:text-white">
              Taiko
            </a>
            <a href="#About" className="py-2 hover:text-white">
              About
            </a>
          </nav>
        </div>

      </div>
    </div >
  );
}