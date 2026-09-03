// src/Pages/InteriorPage.jsx
import React, { useEffect, useState } from "react";

const InteriorPage = () => {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    const fetchWorks = async () => {
      const response = await fetch("/data/data.json");
      const data = await response.json();
      // Filter only interior category
      const interiorWorks = data.filter(
        (work) => work.category.toLowerCase() === "interior"
      );
      setWorks(interiorWorks);
    };
    fetchWorks();
  }, []);

  return (
    <div className="px-4 py-10 sm:px-6 md:px-10 lg:px-15 xl:px-30">
      <h2 className="text-2xl sm:text-3xl md:text-4xl py-10 sm:py-14 md:py-20">
        Interior Works
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 lg:gap-10">
        {works.map((work) => (
          <div
            key={work.id}
            className="relative rounded shadow overflow-hidden"
          >
            {/* Image from data.json */}
            <img
              src={work.image}
              alt={work.title}
              className="w-full h-64 object-cover"
            />

            {/* Overlay text */}
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white px-4 py-2">
              <h4 className="text-lg font-bold">{work.title}</h4>
              <p className="text-sm">{`${work.category} / ${work.year}`}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InteriorPage;
