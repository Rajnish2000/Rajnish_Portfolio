import React, { useEffect, useRef, useState } from "react";
import Header from "./sections/Header";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Project from "./sections/Project";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useGSAP } from "@gsap/react";
import NavBar from "./components/NavBar";
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);
const App = () => {
  const [scrollValue, setScrollValue] = useState(window.scrollY);
  useEffect(() => {
    console.log(scrollValue);
    setScrollValue(window.screenY);
  }, []);
  const main = useRef();
  const smoother = useRef();
  useGSAP(
    () => {
      smoother.current = ScrollSmoother.create({
        smooth: 1,
        effects: true,
      });
    },
    { scope: main }
  );
  return (
    <main>
      <div
        className="bg-[#0f172a] text-white font-sans"
        id="smooth-wrapper"
        ref={main}
      >
        <NavBar />
        <div id="smooth-content">
          <Header />
          <About />
          <Experience />
          <Project />
          <Contact />
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default App;
