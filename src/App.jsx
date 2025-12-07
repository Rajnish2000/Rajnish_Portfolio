import React, { useEffect, useRef, useState, lazy, Suspense } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useGSAP } from "@gsap/react";
import NavBar from "./components/NavBar";
import SplashCursor from "./components/SplashCursor";

const Header = lazy(() => import("./sections/Header"));
const About = lazy(() => import("./sections/About"));
const Experience = lazy(() => import("./sections/Experience"));
const Project = lazy(() => import("./sections/Project"));
const Contact = lazy(() => import("./sections/Contact"));
const Footer = lazy(() => import("./sections/Footer"));

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);
const App = () => {
  const [scrollValue, setScrollValue] = useState(0);
  useEffect(() => {
    setScrollValue(window.screenY);
  }, []);
  const main = useRef(null);
  const smoother = useRef();
  useGSAP(
    () => {
      smoother.current = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.6,
        effects: true,
      });
      return () => {
        if (smoother.current) {
          smoother.current.kill();
          smoother.current = null;
        }
      };
    },
    { scope: main }
  );
  return (
    <main>
      <SplashCursor />
      <div
        className="bg-[#0f172a] text-white font-sans"
        id="smooth-wrapper"
        ref={main}
      >
        <NavBar />
        <div id="smooth-content">
          <Suspense fallback={<div>Loading...</div>}>
            <Header />
            <About />
            <Experience />
            <Project />
            <Contact />
            <Footer />
          </Suspense>
        </div>
      </div>
    </main>
  );
};

export default App;
