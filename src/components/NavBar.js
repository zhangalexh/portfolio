import { DownloadIcon } from "@heroicons/react/solid";
import React from "react";


export default function NavBar() {
  return (
    <div className="text-red">
      <nav className="fixed h-screen w-24 flex flex-col justify-center items-end">
        <a href="#gamedev" className="py-2 hover:text-black">
          Game Dev
        </a>
        <a href="#taiko" className="py-2 hover:text-black">
          Taiko
        </a>
      </nav>
    </div >
  );
}