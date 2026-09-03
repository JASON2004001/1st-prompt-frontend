// Pages/ConsultationPage.jsx
import React from "react";
import consultationImg from "../assetset/consultation.png"; 
// ✅ Make sure your image is inside /src/asset folder

const ConsultationPage = () => {
  return (
    <div className="bg-white text-black">
      {/* Top space for large image */}
      <div className="w-full mb-12">
        <img
          src={consultationImg}
          alt="Consultation"
          className="w-full h-[300px] md:h-[500px] object-cover"
        />
      </div>

      {/* Main content */}
      <div className="container mx-auto grid md:grid-cols-2 gap-12 px-6 pb-20">
        {/* Left side: Text description */}
        <div>
          <h2 className="text-3xl font-serif mb-4">Technical Briefing.</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            The Technical Briefing is a structured 90‑minute session dedicated to defining the foundational parameters of your vision. 
            It ensures technical feasibility aligns with aesthetic intent, serving as a blueprint for engagement. 
            Together, we explore site constraints, regulatory landscapes, and spatial philosophy to bring your project to realization.
          </p>
        </div>

        {/* Right side: Form */}
        <div className="bg-gray-50 p-6 rounded shadow">
          <form className="space-y-6">
            {/* Project Parameters */}
            <h3 className="text-xl font-serif mb-2">Project Parameters</h3>
            <div>
              <label className="block text-sm font-medium mb-1">Principal Contact</label>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Direct Email</label>
              <input
                type="email"
                placeholder="email@domain.com"
                className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            {/* Scope & Site */}
            <h3 className="text-xl font-serif mt-8 mb-2">Scope & Site</h3>
            <div>
              <label className="block text-sm font-medium mb-1">Project Scope</label>
              <select className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black">
                <option>Select Scope Category</option>
                <option>Residential</option>
                <option>Interior</option>
                <option>Commercial</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Site Information</label>
              <textarea
                placeholder="Location, acreage, known constraints..."
                rows="3"
                className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              ></textarea>
            </div>

            {/* Scheduling */}
            <h3 className="text-xl font-serif mt-8 mb-2">Scheduling</h3>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input type="radio" name="schedule" value="immediate" />
                <span>Immediate (1–2 weeks)</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="schedule" value="standard" />
                <span>Standard (3–4 weeks)</span>
              </label>
            </div>

            {/* Request Button */}
            <button
              type="submit"
              className="mt-6 bg-black text-white px-6 py-2 rounded hover:bg-gray-800 w-full"
            >
              Request Briefing
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConsultationPage;
