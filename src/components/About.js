import React from "react";

export default function About() {
    return (
        <section id="about">
            <div className="container w-full h-300">
                <ul className="w-full">
                <li className="relative dropdown px-4 text-purple-500 hover:text-red cursor-pointer font-bold text-base tracking-wide">
                    <a href="google.com">Dropdown</a>
                    <div className="top-0 dropdown-menu absolute hidden h-auto flex pt-4">
                        <ul className="block w-full bg-white shadow px-12 py-8">
                            <li className="py-1"><a href="google.com" className="block text-red font-bold text-base hover:text-red cursor-pointer">Item</a></li>
                            <li className="py-1"><a href="google.com" className="block text-red font-bold text-base hover:text-red cursor-pointer">Item 2</a></li>
                            <li className="py-1"><a href="google.com" className="block text-red font-bold text-base hover:text-red cursor-pointer">Item 3</a></li>
                            <li className="py-1"><a href="google.com" className="block text-red font-bold text-base hover:text-red cursor-pointer">Item 4</a></li>
                            <li className="py-1"><a href="google.com" className="block text-red font-bold text-base hover:text-red cursor-pointer">Item 5</a></li>
                        </ul>
                    </div>
                </li>
                <li className="inline px-4 text-purple-500 hover:text-purple-700 cursor-pointer font-bold text-base tracking-wide"><a href="google.com">Non-Dropdown</a></li>
                <li className="inline px-4 text-purple-500 hover:text-purple-700 cursor-pointer font-bold text-base tracking-wide"><a href="google.com">Non-Dropdown</a></li>
                <li className="inline px-4 text-purple-500 hover:text-purple-700 cursor-pointer font-bold text-base tracking-wide lg:pr-8"><a href="google.com">Non-Dropdown</a></li>
                </ul>
            </div>
        </section>
    );
}
