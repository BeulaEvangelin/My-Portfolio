import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

function KioskRedesignDetails() {
  return (
    <div className="aura-container">
      <div className="aura"></div>
      <div className="px-40 sm:px-5">
        <Header />

        <div className="h-[40vh] flex flex-col justify-start items-center gap-8 py-10">
          <div className="text-center mt-20">
            <h1 className="text-6xl sm:text-3xl text-black font-bold mb-4">
              Kiosk Redesign
            </h1>
            <p className="text-black">Digital Interface Critique & Redesign</p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-md shadow-lg mb-8">
          <div className="flex items-center justify-center rounded-md mb-4" style={{ backgroundColor: "#f5f5f5" }}>
            <img
              src="/projects/kiosk/cover.jpg"
              alt="Kiosk Redesign Overview"
              className="rounded-md"
              style={{ maxHeight: "420px", objectFit: "contain", width: "100%" }}
            />
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-4">Overview</h2>
          <p className="text-gray-700">
            This project is a digital interface critique and redesign of a
            self-service key-cutting kiosk. The study analyzes the existing
            user interface — identifying usability pain points such as poor
            visual hierarchy, confusing payment flows, and lack of
            accessibility — then proposes a redesigned interface that improves
            clarity, ease of use, and overall customer experience.
          </p>
        </div>

        <div className="bg-white p-8 rounded-md shadow-lg mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Interface Analysis
          </h2>
          <p className="text-gray-700 mb-6">
            A thorough heuristic evaluation was performed on the existing kiosk
            interface, documenting issues across multiple screens including key
            selection, design customization, and payment processing. Key
            findings included low contrast text, inconsistent button placement,
            and a lack of clear user feedback during transactions.
          </p>

          {/* Two images side by side */}
          <div className="flex gap-4 mb-4 sm:flex-col">
            <div className="flex-1 flex items-center justify-center bg-gray-50 rounded-md p-3">
              <img
                src="/projects/kiosk/page4.jpg"
                alt="Kiosk Analysis - Design Selection"
                className="rounded-md"
                style={{ maxHeight: "380px", objectFit: "contain", width: "100%" }}
              />
            </div>
            <div className="flex-1 flex items-center justify-center bg-gray-50 rounded-md p-3">
              <img
                src="/projects/kiosk/page5.jpg"
                alt="Kiosk Analysis - Key Selection"
                className="rounded-md"
                style={{ maxHeight: "380px", objectFit: "contain", width: "100%" }}
              />
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-md shadow-lg mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Redesign Proposal
          </h2>
          <p className="text-gray-700 mb-6">
            The redesigned interface addresses the identified usability issues
            with improved visual hierarchy, clearer call-to-action buttons,
            better progress indicators, and an accessible color scheme that
            meets WCAG guidelines.
          </p>

          {/* Two images side by side */}
          <div className="flex gap-4 mb-4 sm:flex-col">
            <div className="flex-1 flex items-center justify-center bg-gray-50 rounded-md p-3">
              <img
                src="/projects/kiosk/page6.jpg"
                alt="Kiosk Redesign Proposal"
                className="rounded-md"
                style={{ maxHeight: "380px", objectFit: "contain", width: "100%" }}
              />
            </div>
            <div className="flex-1 flex items-center justify-center bg-gray-50 rounded-md p-3">
              <img
                src="/projects/kiosk/page9.jpg"
                alt="Kiosk Redesign - Accessibility"
                className="rounded-md"
                style={{ maxHeight: "380px", objectFit: "contain", width: "100%" }}
              />
            </div>
          </div>

          {/* Page 10 left, Page 8 right */}
          <div className="flex gap-4 sm:flex-col">
            <div className="flex-1 flex items-center justify-center bg-gray-50 rounded-md p-3">
              <img
                src="/projects/kiosk/page10.jpg"
                alt="Kiosk Redesign - Final"
                className="rounded-md"
                style={{ maxHeight: "380px", objectFit: "contain", width: "100%" }}
              />
            </div>
            <div className="flex-1 flex items-center justify-center bg-gray-50 rounded-md p-3">
              <img
                src="/projects/kiosk/page8.jpg"
                alt="Kiosk Redesign - Interface Improvements"
                className="rounded-md"
                style={{ maxHeight: "380px", objectFit: "contain", width: "100%" }}
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default KioskRedesignDetails;
