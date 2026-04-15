import React from "react";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div className="px-20 sm:px-10">
      {/* First Row */}
      <div className="flex mb-16 sm:flex-col mb-8">
        {/* First Square */}
        <Link
          to="/project-details/lemmeK"
          className="flex-1 mr-4 sm:mr-0 relative group"
        >
          <div className="bg-white p-4 rounded-md shadow-lg sm:mb-8">
            <div className="text-right">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                LemmeK
              </h2>
              <p className="text-gray-700 mb-2">Class Status App UI</p>
            </div>
            <img
              src="https://i.imgur.com/U6XFsz2.png"
              alt="Project Image"
              className="w-full h-64 object-cover rounded-md"
            />
          </div>
          {/* Icon container */}
          <div className="absolute top-0 left-0 mt-2 ml-2 transform scale-150 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
            <i className="ri-sparkling-2-line text-[#fef08a] text-4xl"></i>
          </div>
        </Link>
        {/* Second Square */}
        <Link
          to="/project-details/mushroomtrails"
          className="bg-white p-4 rounded-md shadow-lg flex-1 mr-4 sm:mr-0 relative group"
          style={{ flexBasis: "calc(30% - 4rem)" }}
        >
          <div className="text-right">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Mushroom Trails
            </h2>
            <p className="text-gray-700 mb-2">
              Mushroom Foraging Educational Game
            </p>
          </div>
          <img
            src="https://i.imgur.com/wmYGw3a.png"
            alt="Project Image"
            className="w-full h-64 object-cover rounded-md"
          />
          {/* Icon container */}
          <div className="absolute top-0 left-0 mt-2 ml-2 transform scale-150 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
            <i className="ri-sparkling-2-line text-[#fef08a] text-4xl"></i>
          </div>
        </Link>
      </div>

      {/* Second Row */}
      <div className="flex mb-16 sm:flex-col mb-8">
        {/* Third Square */}
        <Link
          to="/project-details/bbb"
          className="bg-white p-4 rounded-md shadow-lg flex-1 mr-4 sm:mr-0 mb-6 relative group"
          style={{ flexBasis: "calc(30% - 4rem)" }}
        >
          <div className="text-right">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Between Breads
            </h2>
            <p className="text-gray-700 mb-2">Bistro Website</p>
          </div>
          <img
            src="https://imgur.com/KV8HBBG.png"
            alt="Project Image"
            className="w-full h-64 object-cover rounded-md"
          />
          {/* Icon container */}
          <div className="absolute top-0 left-0 mt-2 ml-2 transform scale-150 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
            <i className="ri-sparkling-2-line text-[#fef08a] text-4xl"></i>
          </div>
        </Link>
        {/* Fourth Square */}
        <Link
          to="/project-details/valentineVault"
          className="bg-white p-4 rounded-md shadow-lg flex-1 ml-4 sm:ml-0 relative group"
        >
          <div className="text-right">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Valentine Vault
            </h2>
            <p className="text-gray-700 mb-2">Prompt Generator</p>
          </div>
          <img
            src="https://imgur.com/htXIb6C.png"
            alt="Project Image"
            className="w-full h-64 object-cover rounded-md"
          />
          {/* Icon container */}
          <div className="absolute top-0 left-0 mt-2 ml-2 transform scale-150 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
            <i className="ri-sparkling-2-line text-[#fef08a] text-4xl"></i>
          </div>
        </Link>
      </div>

      {/* Third Row */}
      <div className="flex mb-16 sm:flex-col mb-8">
        {/* Fifth Square */}
        <Link
          to="/project-details/canvasChronicles"
          className="bg-white p-4 rounded-md shadow-lg flex-1 mr-4 sm:mr-0 mb-6 relative group"
        >
          <div className="text-right sm: w-full">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Canvas Chronicles
            </h2>
            <p className="text-gray-700 mb-2">Photo Editing Website</p>
          </div>
          <img
            src="https://imgur.com/CA4uxqv.png"
            alt="Project Image"
            className="w-full h-64 object-cover rounded-md"
          />
          {/* Icon container */}
          <div className="absolute top-0 left-0 mt-2 ml-2 transform scale-150 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
            <i className="ri-sparkling-2-line text-[#fef08a] text-4xl"></i>
          </div>
        </Link>
        {/* Sixth Square */}
        <Link
          to="/project-details/illustrations"
          className="bg-white p-4 rounded-md shadow-lg flex-1 ml-4 sm:ml-0 relative group"
        >
          <div className="text-right">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Illustrations
            </h2>
            <p className="text-gray-700 mb-2">
              A collection of my illustrations
            </p>
          </div>
          <img
            src="https://imgur.com/UncvCi8.png"
            alt="Project Image"
            className="w-full h-64 object-cover rounded-md"
          />
          {/* Icon container */}
          <div className="absolute top-0 left-0 mt-2 ml-2 transform scale-150 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
            <i className="ri-sparkling-2-line text-[#fef08a] text-4xl"></i>
          </div>
        </Link>
      </div>

      {/* Fourth Row */}
      <div className="flex mb-16 sm:flex-col mb-8">
        {/* Terra Punch */}
        <Link
          to="/project-details/terraPunch"
          className="bg-white p-4 rounded-md shadow-lg flex-1 mr-4 sm:mr-0 mb-6 relative group"
        >
          <div className="text-right">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Terra Punch
            </h2>
            <p className="text-gray-700 mb-2">Brand Identity & Package Design</p>
          </div>
          <div className="w-full h-64 flex items-center justify-center bg-gray-900 rounded-md overflow-hidden">
            <img
              src="/projects/terra/mockup.jpg"
              alt="Terra Punch"
              className="w-full h-full object-contain"
            />
          </div>
          {/* Icon container */}
          <div className="absolute top-0 left-0 mt-2 ml-2 transform scale-150 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
            <i className="ri-sparkling-2-line text-[#fef08a] text-4xl"></i>
          </div>
        </Link>
        {/* Oven O' Clock */}
        <Link
          to="/project-details/ovenOClock"
          className="bg-white p-4 rounded-md shadow-lg flex-1 ml-4 sm:ml-0 relative group"
        >
          <div className="text-right">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Oven O' Clock
            </h2>
            <p className="text-gray-700 mb-2">Baking Timer & Recipe App UI</p>
          </div>
          <div className="w-full h-64 flex items-center justify-center rounded-md overflow-hidden" style={{ backgroundColor: "#f9ead7" }}>
            <img
              src="/projects/oven-o-clock/cover.jpg"
              alt="Oven O' Clock"
              className="w-full h-full object-contain"
            />
          </div>
          {/* Icon container */}
          <div className="absolute top-0 left-0 mt-2 ml-2 transform scale-150 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
            <i className="ri-sparkling-2-line text-[#fef08a] text-4xl"></i>
          </div>
        </Link>
      </div>

      {/* Fifth Row */}
      <div className="flex mb-16 sm:flex-col mb-8">
        {/* Kiosk Redesign */}
        <Link
          to="/project-details/kioskRedesign"
          className="bg-white p-4 rounded-md shadow-lg flex-1 mr-4 sm:mr-0 mb-6 relative group"
        >
          <div className="text-right">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Kiosk Redesign
            </h2>
            <p className="text-gray-700 mb-2">Digital Interface Critique & Redesign</p>
          </div>
          <div className="w-full h-64 flex items-center justify-center rounded-md overflow-hidden" style={{ backgroundColor: "#f5f5f5" }}>
            <img
              src="/projects/kiosk/cover.jpg"
              alt="Kiosk Redesign"
              className="w-full h-full object-contain"
            />
          </div>
          {/* Icon container */}
          <div className="absolute top-0 left-0 mt-2 ml-2 transform scale-150 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
            <i className="ri-sparkling-2-line text-[#fef08a] text-4xl"></i>
          </div>
        </Link>
        {/* Empty space for balance */}
        <div className="flex-1 ml-4 sm:ml-0"></div>
      </div>
    </div>
  );
}

export default Projects;
