import React from "react";
import { TranslateIcon } from "@heroicons/react/solid";
import { translations } from "../data";

export default function Translation() {
    return (
        <section id="translation">
            <div className="container px-5 py-8 mx-auto">
                <div className="text-center mb-20">
                    <TranslateIcon className="w-10 inline-block mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-gray-800 mb-4">
                        Translation
                    </h1>
                    <p className="text-base leading-relaxed w-full sm:w-2/3 mx-auto">
                        I started seriously self-teaching Japanese in fall of 2020. Leveraging my knowledge of Chinese
                        & my countless hours consuming Japanese media, I've been able to learn at a brisk pace.
                        Now, I've gotten good enough to start doing manga translation work.
                        While translating is a hobby for me, I'd still like to show it off here.
                    </p>
                </div>

                {translations.map((translation) => (
                    <div className="flex flex-row justify-center mb-8">
                        <div className="flex flex-col w-2/3 sm:w-1/3 justify-start">
                            <h1 className="flex-shrink mr-8 text-sm sm:text-base text-left underline font-medium text-red">
                                <a href={translation.link}>
                                    {translation.name}
                                </a>
                            </h1>
                            <p className="flex-shrink mr-8">
                                Chapters Translated: {translation.progress}
                            </p>
                        </div>

                        <img className="w-1/4 place-self-start " src={translation.image} alt={translation.name}></img>
                    </div>
                ))}
            </div>
        </section>
    );
}