import React from "react";

import apexImg from "../asset/Apex Tower.png";

const InquiryPage = () => {
    return (
        <div className="grid md:grid-cols-2 gap-10 py-20 px-6 container mx-auto">
            {/* Left side: Inquiry Form */}
            <div>
                <h2 className="text-3xl font-serif mb-4">Begin a Dialogue.</h2>
                <p className="text-gray-600 mb-8">
                    We partner with visionaries to craft architectural legacies. Share the initial contours of your project.
                </p>

                <form className="space-y-6">
                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Name</label>
                        <input
                            type="text"
                            placeholder="Your full name"
                            className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Email Address</label>
                        <input
                            type="email"
                            placeholder="name@domain.com"
                            className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                        />
                    </div>

                    {/* Project Classification */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Project Classification</label>
                        <select className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black">
                            <option>Select classification...</option>
                            <option>Residential</option>
                            <option>Interior</option>
                            <option>Commercial</option>
                        </select>
                    </div>

                    {/* Project Vision */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Project Vision</label>
                        <textarea
                            placeholder="Describe the scale, intent, and location..."
                            rows="4"
                            className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
                    >
                        SUBMIT INQUIRY
                    </button>
                </form>
            </div>

            {/* Right side: Featured Work */}
            <div className="bg-gray-50 p-4 rounded shadow">
                {/* Image container */}
                <div className="relative rounded shadow overflow-hidden">
                    <img
                        src={apexImg}
                        alt="Apex Tower"
                        className="w-full h-[600px] object-cover"
                    />

                    {/* Overlay text inside image */}
                    <div className="absolute inset-0 flex flex-col justify-start items-start p-6">
                        <h3 className="text-3xl font-serif text-white drop-shadow-lg">Featured Work</h3>
                        <p className="text-xl font-bold text-white drop-shadow-lg">The Apex Tower</p>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default InquiryPage;
