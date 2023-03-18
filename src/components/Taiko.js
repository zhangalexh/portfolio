import React from "react";
import { EmojiHappyIcon } from "@heroicons/react/solid";

export default function Taiko() {
    return (
        <section id="taiko" className="bg-gray-300">
            <div className="mx-auto sm:w-10/12 px-5 py-8">
                <div className="text-center mb-20">
                    <EmojiHappyIcon className="w-10 inline-block mb-4" />
                    <h1 className="text-4xl font-medium title-font mb-4">
                        Taiko
                    </h1>
                    <img
                        className="mx-auto w-full lg:w-3/4 mb-4 rounded-md"
                        src="./pictures/kazantaiko.jpg"
                        alt="Kazan Taiko">
                    </img>
                    <p className="text-xl leading-relaxed w-full md:w-4/5 xl:w-2/3 mb-4 mx-auto">
                        I've been taiko drumming since 2017. I started drumming at USC's collegiate group,
                        Kazan Taiko. After graduation, I played for a few months with Kinnara Taiko in Los Angeles.
                        Upon moving to Seattle, I joined Seattle Kokon Taiko as an apprentice.
                        I'm currently inactive.
                    </p>
                    <div className="mx-auto w-full lg:w-3/4">
                        <div className="mx-auto aspect-w-16 aspect-h-9 rounded-md">
                            <iframe
                                className=""
                                src="https://www.youtube.com/embed/sQlv_C04FAQ"
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen>
                            </iframe>
                        </div>
                    </div>
                    <p className="text-base w-full md:w-4/5 mb-4 mx-auto text-gray italic">
                        A piece from our 2019 Spring Concert at USC.
                    </p>
                </div>
            </div>
        </section>
    );
}