// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import PortfolioPage from "./Pages/PortfolioPage";
import ServicesPage from "./Pages/ServicesPage";
import InquiryPage from "./Pages/InquiryPage";
import ConsultationPage from "./Pages/ConsultationPage"; 
import PhilosophyPage from "./Pages/PhilosophyPage";

const App = () => {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          {/* Portfolio page */}
          <Route path="/" element={<PortfolioPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />

          {/* Services page */}
          <Route path="/services" element={<ServicesPage />} />

          {/* Inquiry page */}
          <Route path="/inquiry" element={<InquiryPage />} />

          {/* Consultation page */}
          <Route path="/consultation" element={<ConsultationPage />} />

          {/* Philosophy Page */}
           <Route path="/philosophy" element={<PhilosophyPage />} /> 
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
