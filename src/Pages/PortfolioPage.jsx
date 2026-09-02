// components/PortfolioPage.jsx
import React from "react";

// Example imports for images
import heroImg from "../asset/hero.png";        // Hero section image
import residentialImg from "../asset/residential.png";
import commercialImg from "../asset/commercial.png";
import interiorImg from "../asset/interior.png";

const PortfolioPage = () => {
  return (
    <div>
      {/* Hero Section with Image */}
      <section className="relative bg-gray-100 py-20 px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Text on the left */}
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-serif mb-4">Timeless Spaces, Refined Living</h2>
            <p className="max-w-xl text-gray-600">
              We craft environments that harmonize structure with nature, delivering architectural solutions of quiet authority and enduring elegance.
            </p>
            <button className="mt-6 bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
              Explore Works
            </button>
          </div>

          {/* Image on the right */}
          <div>
            <img
              src={heroImg}
              alt="Hero Architecture"
              className="rounded shadow w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Expertise Section with Emoji */}
      <section id="services" className="py-16 px-6 text-center">
        <h3 className="text-3xl font-serif mb-10">Our Expertise</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <span className="text-4xl">🏡</span>
            <h4 className="text-xl font-bold mt-2">Residential</h4>
            <p className="text-gray-600">
              Bespoke sanctuaries designed for private contemplation and modern luxury.
            </p>
          </div>
          <div>
            <span className="text-4xl">🏢</span>
            <h4 className="text-xl font-bold mt-2">Commercial</h4>
            <p className="text-gray-600">
              Commanding corporate structures that define skylines and corporate identity.
            </p>
          </div>
          <div>
            <span className="text-4xl">🛋️</span>
            <h4 className="text-xl font-bold mt-2">Interior Design</h4>
            <p className="text-gray-600">
              Curated interior landscapes focused on texture, light, and spatial poetry.
            </p>
          </div>
        </div>
      </section>

      {/* Selected Works Layout */}
      <section id="portfolio" className="py-16 px-6">
        <h3 className="text-3xl font-serif mb-10 text-center">Selected Works</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Large left image */}
          <img
            src={residentialImg}
            alt="Residential Work"
            className="rounded shadow w-full h-full object-cover"
          />

          {/* Two stacked images on the right */}
          <div className="space-y-6">
            <img
              src={commercialImg}
              alt="Commercial Work"
              className="rounded shadow w-full object-cover"
            />
            <img
              src={interiorImg}
              alt="Interior Work"
              className="rounded shadow w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-6 text-center bg-gray-50">
        <blockquote className="text-xl italic max-w-2xl mx-auto">
          "Aesthetique did not just design a building for us; they shaped an experience of light, space, and profound tranquility that redefines how we live daily."
        </blockquote>
        <p className="mt-4 font-bold">— Eleanor Vance, Private Client</p>
      </section>

      {/* Call to Action */}
      <section id="inquiry" className="py-20 px-6 text-center">
        <h3 className="text-3xl font-serif mb-4">Ready to begin?</h3>
        <p className="text-gray-600 mb-6">
          Schedule a private consultation to discuss your vision with our principal architects.
        </p>
        <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
          Start Your Project
        </button>
      </section>
    </div>
  );
};

export default PortfolioPage;
