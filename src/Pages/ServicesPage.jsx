
import React from "react";


import residentialImg from "../asset/scantuaries.png";
import interiorImg from "../asset/Sculting.png";
import commercialImg from "../asset/Atmospheres.png";

const ServicesPage = () => {
  return (
    <div className="bg-white text-black">
      {/* Residential Section */}
      <section className="grid md:grid-cols-2 gap-10 items-center py-20 px-6">
        {/* Text left */}
        <div>
          <h4 className="text-sm font-mono text-gray-500 mb-2">01 / Residential Architecture</h4>
          <h2 className="text-3xl font-serif mb-4">Sanctuaries of Concrete & Light</h2>
          <p className="text-gray-600 mb-6">
            Designing private residences that blur the boundary between interior comfort and natural landscapes.
            We utilize raw materials—exposed concrete, natural woods, and vast expanses of glass—to create homes
            that feel both monumental and intimately protective.
          </p>
          <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
            Explore Residential Portfolio →
          </button>
        </div>
        {/* Image right */}
        <div>
          <img src={residentialImg} alt="Residential Architecture" className="rounded shadow w-full object-cover" />
        </div>
      </section>

      {/* Interior Section */}
      <section className="grid md:grid-cols-2 gap-10 items-center py-20 px-6">
        {/* Text left */}
        <div>
          <h4 className="text-sm font-mono text-gray-500 mb-2">02 / Interior Masterplanning</h4>
          <h2 className="text-3xl font-serif mb-4">Sculpting Void & Form</h2>
          <p className="text-gray-600 mb-6">
            Our interior approach focuses on spatial choreography. We design not just rooms, but the transitions
            between them, employing sculptural elements like sweeping staircases and strategic skylights to guide
            movement and perception.
          </p>
          <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
            View Interior Works →
          </button>
        </div>
        {/* Image right */}
        <div>
          <img src={interiorImg} alt="Interior Masterplanning" className="rounded shadow w-full object-cover" />
        </div>
      </section>

      {/* Commercial Section */}
      <section className="grid md:grid-cols-2 gap-10 items-center py-20 px-6">
        {/* Text left */}
        <div>
          <h4 className="text-sm font-mono text-gray-500 mb-2">03 / Commercial Design</h4>
          <h2 className="text-3xl font-serif mb-4">Atmospheres of Authority</h2>
          <p className="text-gray-600 mb-6">
            We create commercial environments—galleries, boutiques, and headquarters—that project a quiet confidence.
            By prioritizing extreme clarity and deliberate restraint, we design spaces that elevate brand identity
            and eliminate cognitive load.
          </p>
          <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
            Discuss Commercial Projects →
          </button>
        </div>
        {/* Image right */}
        <div>
          <img src={commercialImg} alt="Commercial Design" className="rounded shadow w-full object-cover" />
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
