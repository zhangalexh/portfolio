import { DownloadIcon } from "@heroicons/react/solid";
import React from "react";


export default function Resume() {
  return (
    <div className="fixed bottom-0">
      <div className="ml-4 mb-4 flex justify-end space-x-2">
        <a href="https://www.linkedin.com/in/alex-zhang-088026116/" target="_blank" className="self-center w-4 h-4">
          <img src="./icons/linkedin.svg" ></img>
        </a>
        <a href="/files/AlexZhangDevResume.pdf" className="flex text-xl text-black" target="_blank" download>
          Resume
          <DownloadIcon className="self-center w-4 h-4" />
        </a>
      </div>

    </div>
  );
}