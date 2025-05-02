import React from "react";
import PortfolioShowcase from "./PortfolioShowCase";
import { BackgroundLines } from "@/components/ui/background-lines";
const Project = () => {
  return (
    <section className="w-full md:mt-35 mt-30 section-padding xl:px-0 relative">
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 z-23">
        <div className="w-full h-full md:px-20 px-5 z-50">
          <PortfolioShowcase />
        </div>
      </BackgroundLines>
    </section>
  );
};

export default Project;
