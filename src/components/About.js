import React from "react";

export default function About() {
    return (
        <section id="about">
                <ul className="w-full h-screen">
                <li className="relative dropdown px-4 text-gray hover:text-red cursor-pointer font-bold text-base tracking-wide">
                    <a href="google.com">Dropdown</a>
                    <div className="top-0 dropdown-menu absolute hidden h-auto flex pt-4">
                        <ul className="block w-full bg-white shadow px-12 py-8">
                            <li className="py-1"><a href="google.com" className="block text-darkergray hover:text-red cursor-pointer">Item</a></li>
                            <li className="py-1"><a href="google.com" className="block text-darkergray hover:text-red cursor-pointer">Item 2</a></li>
                            <li className="py-1"><a href="google.com" className="block text-darkergray hover:text-red cursor-pointer">Item 3</a></li>
                            <li className="py-1"><a href="google.com" className="block text-darkergray hover:text-red cursor-pointer">Item 4</a></li>
                            <li className="py-1"><a href="google.com" className="block text-darkergray hover:text-red cursor-pointer">Item 5</a></li>
                        </ul>
                    </div>
                </li>
                </ul>
        </section>
    );
}
