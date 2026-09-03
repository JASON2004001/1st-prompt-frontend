// components/PortfolioPage.jsx
import React from "react";
import { Link } from "react-router-dom";

// Example imports for images
import heroImg from "../assetset/hero.png";        
import residentialImg from "../assetset/residential.png";
import commercialImg from "../assetset/commercial.png";
import interiorImg from "../assetset/interior.png";

const PortfolioPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-100 py-20 px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-serif mb-4">Timeless Spaces, Refined Living</h2>
            <p className="max-w-xl text-gray-600">
              We craft environments that harmonize structure with nature, delivering architectural solutions of quiet authority and enduring elegance.
            </p>
            <button className="mt-6 bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
              Explore Works
            </button>
          </div>
          <div>
            <img src={heroImg} alt="Hero Architecture" className="rounded shadow w-full object-cover" />
          </div>
        </div>
      </section>

      {/* Selected Works with Text Overlay */}
      <section id="portfolio" className="py-16 px-6">
        <h3 className="text-3xl font-serif mb-10 text-center">Selected Works</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Residential */}
          <div className="relative">
            <Link to="/residential">
              <img src={residentialImg} alt="Residential Work" className="rounded shadow w-full h-full object-cover" />
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded">
                Residential Design
              </div>
            </Link>
          </div>

          {/* Commercial + Interior stacked */}
          <div className="space-y-6">
            <div className="relative">
              <Link to="/commercial">
                <img src={commercialImg} alt="Commercial Work" className="rounded shadow w-full object-cover" />
                <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded">
                  Commercial Design
                </div>
              </Link>
            </div>
            <div className="relative">
              <Link to="/interior">
                <img src={interiorImg} alt="Interior Work" className="rounded shadow w-full object-cover" />
                <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded">
                  Interior Design
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
