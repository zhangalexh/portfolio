import React from "react";


export default function Secret() {
  return (
    <div className="fixed bottom-0 right-0 h-24 w-32 flex items-end">
      <div className="mb-4 w-28 flex flex-row justify-end">
        <a href="#/modelling" className="py-2 text-black text-opacity-0 hover:text-opacity-100">
          Ooh, a secret!
        </a>
      </div>

    </div>
  );
}