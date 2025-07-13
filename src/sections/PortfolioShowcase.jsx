import React, { useState } from "react";
import Tabs from "../components/Tabs";
import Projects from "../components/Projects";
import Certificates from "../components/Certificates";
import TechStack from "../components/TechStack";

const PortfolioShowcase = () => {
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <div className="min-h-screen py-20 text-white" id="project">
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold text-violet-400">
          Portfolio Showcase
        </h1>
        <p className="text-sm mt-2 text-gray-300">
          Explore my journey through projects, certifications, and technical
          expertise.
        </p>
      </div>

      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="p-7 max-w-7xl mx-auto">
        {activeTab === "projects" && <Projects />}
        {activeTab === "certificates" && <Certificates />}
        {activeTab === "techstack" && <TechStack />}
      </div>
    </div>
  );
};

export default PortfolioShowcase;
