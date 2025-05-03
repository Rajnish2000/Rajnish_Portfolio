import React, { useEffect, useState } from "react";
import Card from "./Card";

const projects = [
  {
    title: "IntervueAI",
    description:
      "Real-time mock interviews with AI. No forms or clicks, just natural, personalized conversations.",
    image: "/images/intervueai.png",
    demo: "#",
    details: "#",
  },
  {
    title: "Blendy",
    description:
      "A social app where you can connect in real-time, log in with one click, share moments, posts instantly.",
    image: "/images/blendy.png",
    demo: "#",
    details: "#",
  },
  {
    title: "WATCHit",
    description:
      "A video streaming app made for easy, personal entertainment and everything you love to binge.",
    image: "/images/watchit.png",
    demo: "#",
    details: "#",
  },
  {
    title: "WATCHit",
    description:
      "A video streaming app made for easy, personal entertainment and everything you love to binge.",
    image: "/images/watchit.png",
    demo: "#",
    details: "#",
  },
  {
    title: "WATCHit",
    description:
      "A video streaming app made for easy, personal entertainment and everything you love to binge.",
    image: "/images/watchit.png",
    demo: "#",
    details: "#",
  },
  {
    title: "WATCHit",
    description:
      "A video streaming app made for easy, personal entertainment and everything you love to binge.",
    image: "/images/watchit.png",
    demo: "#",
    details: "#",
  },
  {
    title: "WATCHit",
    description:
      "A video streaming app made for easy, personal entertainment and everything you love to binge.",
    image: "/images/watchit.png",
    demo: "#",
    details: "#",
  },
  {
    title: "WATCHit",
    description:
      "A video streaming app made for easy, personal entertainment and everything you love to binge.",
    image: "/images/watchit.png",
    demo: "#",
    details: "#",
  },
  {
    title: "WATCHit",
    description:
      "A video streaming app made for easy, personal entertainment and everything you love to binge.",
    image: "/images/watchit.png",
    demo: "#",
    details: "#",
  },
  {
    title: "WATCHit",
    description:
      "A video streaming app made for easy, personal entertainment and everything you love to binge.",
    image: "/images/watchit.png",
    demo: "#",
    details: "#",
  },
  {
    title: "WATCHit",
    description:
      "A video streaming app made for easy, personal entertainment and everything you love to binge.",
    image: "/images/watchit.png",
    demo: "#",
    details: "#",
  },
  {
    title: "WATCHit",
    description:
      "A video streaming app made for easy, personal entertainment and everything you love to binge.",
    image: "/images/watchit.png",
    demo: "#",
    details: "#",
  },
];

export default function Projects() {
  const [showMore, setShowMore] = useState(false);
  const [projectTemp, setProjectTemp] = useState([...projects]);
  useEffect(() => {
    setProjectTemp([...projectTemp.slice(0, 3)]);
  }, [showMore]);
  return (
    <>
      <div className="grid md:grid-cols-3 gap-6">
        {(showMore ? projects : projectTemp).map((project, index) => (
          <Card project={project} key={index} />
        ))}
      </div>
      <button
        onClick={() => setShowMore(!showMore)}
        className="border border-white hover:bg-white hover:text-black px-4 py-2 my-5 mx-2 rounded"
      >
        {showMore ? "Show Less" : "Show More"}
      </button>
    </>
  );
}
