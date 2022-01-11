import { DownloadIcon } from "@heroicons/react/solid";
import React from "react";


export default function Resume() {
  return (
    <div className="fixed h-screen w-screen flex items-end">
      <div className="mb-4 w-24 flex flex-row justify-end">
        <a href="/files/AlexZhangResume.pdf" className="text-black" target="_blank" download>
          Resume
        </a>
        <DownloadIcon className="self-center w-4 h-4" />
      </div>

    </div>
  );
}