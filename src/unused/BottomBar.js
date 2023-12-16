import React from "react";

export default function BottomBar() {
    return <footer className="bg-gray fixed bottom-0 inset-x-0 z-10" >
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

            <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 	flex flex-wrap items-center justify-center">
                <a href="mailto: zhang.alexh@gmail.com" className="mr-5 text-gray-700 hover:text-black">
                    zhang.alexh@gmail.com
                </a>
                <a href="https://www.linkedin.com/in/alexander-zhang-088026116/" target="_blank" rel="noopener noreferrer" className="mr-5 text-gray-700 hover:text-black">
                    LinkedIn
                </a>
            </nav>
        </div>
    </footer >
};