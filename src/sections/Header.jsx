import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import HeaderModelExperience from "./../components/models/header_models/HeaderModelExperience";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import ScrollSmoother from "gsap/ScrollSmoother";
const Header = () => {
  const textContainerRef = useRef();
  const handleScroll = (targetId) => {
    const target = document.getElementById(targetId);
    if (target) {
      const smoother = ScrollSmoother.get(); // get the existing instance
      smoother.scrollTo(target, true, "top");
    }
  };
  useGSAP(() => {
    gsap.from(textContainerRef.current.children, {
      opacity: 0,
      y: 30,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
    });
  }, []);

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="relative z-10 xl:mt-20 mt-20 md:h-dvh h-[100vh] flex flex-col lg:flex-row lg:items-center items-start justify-between">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full px-4 md:px-10 py-15 md:py-20 gap-8 lg:gap-16">
          {/* Text and Buttons */}
          <div
            className="w-full lg:w-1/2 max-w-xl px-2 md:px-8"
            ref={textContainerRef}
          >
            <p className="text-blue-400 text-base md:text-lg">Hello! I'm</p>
            <h1 className="text-3xl md:text-5xl font-bold text-white">
              Rajnish <span className="text-blue-500">Singh</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl mt-4">
              Full-Stack Developer & Software Engineering Student
            </p>
            <p className="text-gray-500 text-base md:text-lg mt-4">
              Building elegant solutions to complex problems with modern
              technologies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <button
                onClick={() => handleScroll("contacts")}
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white text-center"
              >
                Contact Me
              </button>
              <button
                onClick={() => handleScroll("project")}
                className="border border-white hover:bg-white hover:text-black px-4 py-2 rounded text-center"
              >
                View Projects
              </button>
            </div>
          </div>

          {/* 3D Model (No Animation Here) */}
          <div className="w-full lg:w-1/2 flex justify-center items-center lg:min-h-[500px]">
            <figure className="w-full h-full flex flex-col items-center justify-center">
              <div className="relative w-full h-[350px] md:h-[400px] lg:h-[500px] flex items-center justify-center">
                <ShootingStars />
                <StarsBackground />
                <div className="hero-3d-layout absolute inset-0 w-full h-full">
                  <HeaderModelExperience />
                </div>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
