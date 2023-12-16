import { DownloadIcon } from "@heroicons/react/solid";
import React from "react";


export default function NavBar() {
  return (
    <div className="text-red">
      <nav className="fixed h-screen text-lg w-28 flex flex-col justify-center items-end">
        <a href="/" className="py-2 hover:text-black">
          Home/Dev
        </a>
        <a href="/art" className="py-2 hover:text-black">
          Art
        </a>
        <a href="/taiko" className="py-2 hover:text-black">
          Taiko
        </a>
        {/* <a href="/translation" className="py-2 hover:text-black">
          Translation
        </a> */}
        <a href="/contact" className="py-2 hover:text-black">
          Contact
        </a>
      </nav>
    </div >
  );
}