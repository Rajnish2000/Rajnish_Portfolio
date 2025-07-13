import React from "react";
import { expCards } from "./../constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BackgroundLines } from "@/components/ui/background-lines";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  useGSAP(() => {
    gsap.to(".timeline", {
      transformOrigin: "bottom bottom",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        end: "70% center",
        onUpdate: (self) => {
          gsap.to(".timeline", {
            scaleY: 1 - self.progress,
          });
        },
      },
    });
    gsap.utils.toArray(".expText").forEach((text) => {
      gsap.from(text, {
        xPercent: 0,
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: text,
          start: "top 90%",
        },
      });
    });
  }, []);
  return (
    <section
      className="w-full md:mt-20 py-20 section-padding xl:px-0 relative"
      id="experience"
    >
      <div className="w-full h-full md:px-20 px-5">
        <div className="w-full">
          <h2 className="text-4xl font-bold mb-4 border-b-4 border-blue-500 inline-block">
            Work Experience
          </h2>
        </div>
        {/* <BackgroundLines> */}
        <div className="mt-10 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {expCards.map((card, i) => {
              return (
                <div className="xl:w-5/6" key={i}>
                  <div className="flex item-start">
                    <div className="timeline-wrapper">
                      {/* Use Tailwind's responsive classes for background color */}
                      <div className="timeline bg-[#020817] md:bg-[#020818] lg:bg-[#020817]" />
                      <div className="gradient-line w-1 h-full" />
                    </div>
                    <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                      <div className="timeline-logo">
                        <img
                          src={card.logoPath}
                          alt="logo"
                          className="rounded-4xl"
                        />
                      </div>
                      <div className="">
                        <h1 className="font-semibold text-3xl">{card.title}</h1>
                        <p className="my-5 text-white-50">{card.date}</p>
                        <p className="text-[#839cb5] italic">Responsibilites</p>
                        <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                          {card.responsibilities.map((response) => {
                            return (
                              <li className="text-lg" key={response}>
                                {response}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* </BackgroundLines> */}
      </div>
    </section>
  );
};

export default Experience;
