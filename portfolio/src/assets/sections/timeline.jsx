import React from "react";
import careerEvents from "../constants/experience";

const Timeline = () => {
  const list = careerEvents.map((e, index) => (
    <li key={index}>
      <div className="md:flex flex-start">
        <div className="bg-zinc-900 w-8 h-8 flex items-center justify-center rounded-full -ml-4 ">
          <img
            className="hover:scale-150"
            height={40}
            src={e.icon}
            alt={e.company}
          />
        </div>
      </div>
      <div className="block p-6 rounded-lg shadow-lg glass max-w-md ml-6 mb-10">
        <div className="flex justify-between mb-4">
          <button
            className="font-medium text-cyan-600 hover:text-cyan-700 focus:text-cyan-800 duration-300 transition ease-in-out text-sm"
          >
            {e.company}, {e.location}
          </button>
          <button
            to="#"
            className="font-medium text-cyan-600 hover:text-cyan-700 focus:text-cyan-800 duration-300 transition ease-in-out text-sm"
          >
            {e.date}
          </button>
        </div>
      </div>

      <div >
      <button id="accordion-icon" data-accordion="open"
        type="button"
        className="inline-block px-4 py-1.5 bg-cyan-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-cyan-700 hover:shadow-lg focus:bg-cyan-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-cyan-800 active:shadow-lg transition duration-150 ease-in-out"
        data-mdb-ripple="true" data-accordion-target="#accordion-body" aria-expanded="true" aria-controls="accordion-body-1"
      >
        <span id="accordion-heading">Read more...</span>
      </button>
      
      <div id="accordion-body" class="accordion" aria-labelledby="accordion-heading">      
      <p className="text-gray-700 mb-6">{e.description}</p>
      </div>
      </div>
    </li>
  ));

  return (
    <>
      <div className="container">
        <ol className="border-l-2 border-cyan-600 m-10">{list}</ol>
      </div>
    </>
  );
};

export default Timeline;
