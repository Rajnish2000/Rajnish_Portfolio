import React from "react";
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
];

export default function Projects() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <Card project={project} key={index} />
      ))}
    </div>
  );
}
