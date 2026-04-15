import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

function OvenOClockDetails() {
  return (
    <div className="aura-container">
      <div className="aura"></div>
      <div className="px-40 sm:px-5">
        <Header />

        <div className="h-[40vh] flex flex-col justify-start items-center gap-8 py-10">
          <div className="text-center mt-20">
            <h1 className="text-6xl sm:text-3xl text-black font-bold mb-4">
              Oven O' Clock
            </h1>
            <p className="text-black">Baking Timer & Recipe App UI</p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-md shadow-lg mb-8">
          <div className="flex items-center justify-center mb-4" style={{ backgroundColor: "#f5e6c8", borderRadius: "0.375rem" }}>
            <img
              src="/projects/oven-o-clock/cover.jpg"
              alt="Oven O' Clock App"
              className="rounded-md"
              style={{ maxHeight: "320px", objectFit: "contain" }}
            />
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-4">Overview</h2>
          <p className="text-gray-700">
            Oven O' Clock is a mobile app UI design for a baking companion
            application. The app helps users browse recipes by category, set
            precise bake times and temperatures, and listen to music while they
            wait for their treats. The design embraces a warm, playful aesthetic
            with a pink-and-red color scheme inspired by bakery culture.
          </p>
        </div>

        <div className="bg-white p-8 rounded-md shadow-lg mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Design Elements
          </h2>

          <p className="text-gray-700">
            <strong>Visual Style: </strong>The interface features a retro-inspired
            typographic treatment paired with whimsical food photography. The
            warm cream and pink palette creates an inviting, cozy atmosphere
            perfect for a baking app.
          </p>
          <p className="text-gray-700 mb-6">
            <strong>User Experience: </strong>The app follows an intuitive flow —
            users select a recipe category, choose a specific baked good, set
            their preferred cook time and music genre, then enjoy a built-in
            music player while the timer counts down.
          </p>

          {/* Two images side by side */}
          <div className="flex gap-4 mb-4 sm:flex-col">
            <div className="flex-1 flex items-center justify-center" style={{ backgroundColor: "#f5e6c8", borderRadius: "0.375rem" }}>
              <img
                src="/projects/oven-o-clock/screens.jpg"
                alt="Oven O' Clock Screens"
                className="rounded-md"
                style={{ maxHeight: "280px", objectFit: "contain", width: "100%" }}
              />
            </div>
            <div className="flex-1 flex items-center justify-center" style={{ backgroundColor: "#f5e6c8", borderRadius: "0.375rem" }}>
              <img
                src="/projects/oven-o-clock/screens2.jpg"
                alt="Oven O' Clock Additional Screens"
                className="rounded-md"
                style={{ maxHeight: "280px", objectFit: "contain", width: "100%" }}
              />
            </div>
          </div>

          {/* Single image below */}
          <div className="flex items-center justify-center" style={{ backgroundColor: "#f5e6c8", borderRadius: "0.375rem" }}>
            <img
              src="/projects/oven-o-clock/screens3.jpg"
              alt="Oven O' Clock Timer Screens"
              className="rounded-md"
              style={{ maxHeight: "280px", objectFit: "contain", width: "100%" }}
            />
          </div>
        </div>

        <div className="bg-white p-8 rounded-md shadow-lg mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            User Flow
          </h2>

          <p className="text-gray-700 mb-6">
            A comprehensive user flow was created mapping the entire journey
            from sign-in through recipe browsing, timer setup, and the baking
            experience with integrated music playback.
          </p>
          <div className="flex items-center justify-center" style={{ backgroundColor: "#f5e6c8", borderRadius: "0.375rem" }}>
            <img
              src="/projects/oven-o-clock/userflow.jpg"
              alt="Oven O' Clock User Flow"
              className="rounded-md"
              style={{ maxHeight: "400px", objectFit: "contain", width: "100%" }}
            />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default OvenOClockDetails;
