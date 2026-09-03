// src/Pages/CommercialPage.jsx
import React, { useEffect, useState } from "react";
import Card from "../components/ImageSection";

const CommercialPage = () => {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    const fetchWorks = async () => {
      const response = await fetch("/data/data.json");
      const data = await response.json();
      // Filter only commercial category
      const commercialWorks = data.filter(
        (work) => work.category.toLowerCase() === "commercial"
      );
      setWorks(commercialWorks);
    };
    fetchWorks();
  }, []);

  return (
    <div className="px-4 py-10 sm:px-6 md:px-10 lg:px-15 xl:px-30">
      <h2 className="text-2xl sm:text-3xl md:text-4xl py-10 sm:py-14 md:py-20">
        Commercial Works
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 lg:gap-10">
        {works.map((work) => (
          <Card
            key={work.id}
            image={work.image}
            title={work.title}
            para={`${work.category} / ${work.year}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CommercialPage;
