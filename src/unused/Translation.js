import React from "react";
import { TranslateIcon } from "@heroicons/react/solid";
import { translations } from "../data";

export default function Translation() {
    return (
        <section id="translation">
            <div className="container py-8 sm:w-10/12 mx-auto">
                <div className="text-left lg:text-center mb-20">
                    <TranslateIcon className="w-10 inline-block mb-4" />
                    <h1 className="text-4xl font-medium title-font mb-4">
                        Translation
                    </h1>
                    <p className="text-xl leading-relaxed w-full lg:w-4/5 xl:w-2/3 mx-auto">
                        I started seriously self-teaching Japanese in fall of 2020. 
                        <br></br>
                        After 2 years of self-study, I obtained JLPT N2 Certification.
                        I volunteer part-time in a scanlation group translating Japanese manga.
                        I've translated over 17,000 words in manga.
                    </p>
                </div>

                {translations.map((translation) => (
                    <div className="flex flex-row w-full mx-auto md:w-3/4 xl:w-2/3  justify-center mb-4">
                        <div className="flex flex-col w-1/2 lg:w-2/3 mt-4 justify-start">
                            <h1 className="text-2xl flex-shrink mr-8 underline text-red">
                                <a href={translation.link}>
                                    {translation.name}
                                </a>
                            </h1>
                            <p className="text-xl flex flex-shrink mr-8">
                                {translation.progress}
                            </p>
                        </div>

                        <img className="w-1/2 lg:w-1/3" src={translation.image} alt={translation.name}></img>
                    </div>
                ))}
            </div>
        </section>
    );
}