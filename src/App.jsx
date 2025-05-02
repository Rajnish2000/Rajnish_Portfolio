import React from "react";
import Header from "./sections/Header";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Project from "./sections/Project";
import Contact from "./sections/Contact";
const App = () => {
  return (
    <main>
      <div className="bg-[#0f172a] text-white font-sans">
        <Header />
        <About />
        <Experience />
        <Project />
        <Contact />
      </div>
    </main>
  );
};

export default App;
