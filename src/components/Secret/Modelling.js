import React from "react";
import { SparklesIcon } from "@heroicons/react/solid";
import {modelling} from "../../data"

export default function Modelling() {
    return (
        <section id="modelling" className="bg-gray-300">
            <div className="mx-auto sm:w-10/12 py-8">
                <div className="text-left lg:text-center">
                    <SparklesIcon className="w-10 inline-block mb-4" />
                    <h1 className="text-4xl font-medium title-font mb-4">
                        Modelling
                    </h1>
                    <p>You have found the secret modelling page!</p>
                    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto pb-4 -mx-2">
                      {modelling.map((model) => (
                        <div key={model.name} className="p-2 sm:w-1/2">
                          <div className="rounded flex p-4 h-full items-center">
                            <img src={model.src} className="rounded"></img>
                          </div>
                        </div>
                      ))}
                    </div>
                </div>
            </div>
        </section>
    );
}