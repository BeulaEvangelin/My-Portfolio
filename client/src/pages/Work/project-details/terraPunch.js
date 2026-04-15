import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

function TerraPunchDetails() {
  return (
    <div className="aura-container">
      <div className="aura"></div>
      <div className="px-40 sm:px-5">
        <Header />

        <div className="h-[40vh] flex flex-col justify-start items-center gap-8 py-10">
          <div className="text-center mt-20">
            <h1 className="text-6xl sm:text-3xl text-black font-bold mb-4">
              Terra Punch
            </h1>
            <p className="text-black">Brand Identity & Package Design</p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-md shadow-lg mb-8">
          <div className="flex items-center justify-center bg-gray-900 rounded-md mb-4">
            <img
              src="/projects/terra/mockup.jpg"
              alt="Terra Punch Mockup"
              className="rounded-md"
              style={{ maxHeight: "320px", objectFit: "contain" }}
            />
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-4">Overview</h2>
          <p className="text-gray-700">
            Terra Punch is a brand identity and packaging design project for an
            eco-conscious energy drink line. The project involved creating a
            complete visual identity system — from logo design to can packaging
            — for a beverage brand that prioritizes sustainability without
            compromising on bold, eye-catching aesthetics. The design features
            vibrant color-coded flavors including Mango Tango, Berry Blast,
            Watermelon Wave, and Lime Burst.
          </p>
        </div>

        <div className="bg-white p-8 rounded-md shadow-lg mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Design Elements
          </h2>

          <p className="text-gray-700">
            <strong>Visual Identity: </strong>The brand uses bold typography
            and a striking black-and-white organic pattern as a background
            motif, creating strong shelf presence. Each flavor variant has its
            own distinct color palette while maintaining brand cohesion.
          </p>
          <p className="text-gray-700 mb-6">
            <strong>Package Design: </strong>The can designs feature flowing,
            painterly textures that evoke natural ingredients. The zero-sugar
            badge and calorie count are prominently displayed, targeting
            health-conscious consumers.
          </p>
          <div className="flex items-center justify-center rounded-md overflow-hidden">
            <img
              src="/projects/terra/styletile.jpg"
              alt="Terra Punch Style Tile"
              className="rounded-md"
              style={{ maxHeight: "400px", objectFit: "contain", width: "100%" }}
            />
          </div>
        </div>

        <div className="bg-white p-8 rounded-md shadow-lg mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Deliverables
          </h2>

          <p className="text-gray-700">
            - Complete brand identity system including logo, typography, and color palette.
          </p>
          <p className="text-gray-700">
            - Packaging design for 5 flavor variants with production-ready mockups.
          </p>
          <p className="text-gray-700">
            - Style tile and brand guidelines document.
          </p>
          <p className="text-gray-700 mb-8">
            - Client presentation deck outlining design rationale and brand strategy.
          </p>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default TerraPunchDetails;
