import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Button from "./../components/Button";
import HeaderModelExperience from "./../components/models/header_models/HeaderModelExperience";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
const Header = () => {
  const textContainerRef = useRef();

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
      <div className="relative z-10 xl:mt-20 mt-32 md:h-dvh h-[100vh] flex md:items-center items-start justify-between">
        <div className="flex flex-wrap items-center justify-between px-10 py-20 md:px-30">
          {/* Text and Buttons */}
          <div className="max-w-xl px-8" ref={textContainerRef}>
            <p className="text-blue-400">Hello! I'm</p>
            <h1 className="text-5xl font-bold text-white">
              Rajnish <span className="text-blue-500">Singh</span>
            </h1>
            <p className="text-gray-400 text-xl mt-4">
              Full-Stack Developer & Software Engineering Student
            </p>
            <p className="text-gray-500 mt-4">
              Building elegant solutions to complex problems with modern
              technologies.
            </p>

            <div className="flex gap-4 mt-6">
              <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white">
                Contact Me
              </button>
              <button className="border border-white hover:bg-white hover:text-black px-4 py-2 rounded">
                View Projects
              </button>
            </div>
          </div>

          {/* 3D Model (No Animation Here) */}
          <div className="sm:w-full ">
            <figure>
              <ShootingStars />
              <StarsBackground />
              <div className="hero-3d-layout sm:mt-10">
                <HeaderModelExperience />
              </div>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
