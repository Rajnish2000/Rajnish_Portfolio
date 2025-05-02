import React from "react";
import { JavascriptLogo } from "./models/tech_models/JavascriptLogo";
const techs = [
  {
    name: "HTML",
    icon: "",
  },
  // { name: "CSS", icon: "/tech/css.png" },
  // { name: "JavaScript", icon: "/tech/js.png" },
  // { name: "Tailwind CSS", icon: "/tech/tailwind.png" },
  // { name: "Express JS", icon: "/tech/express.png" },
  // { name: "Node JS", icon: "/tech/node.png" },
  // { name: "React + Native", icon: "/tech/react.png" },
  // { name: "MongoDB", icon: "/tech/mongodb.png" },
  // { name: "JWT", icon: "/tech/jwt.png" },
  // { name: "PostgreSQL", icon: "/tech/postgres.png" },
  // { name: "TypeScript", icon: "/tech/ts.png" },
  // { name: "Docker", icon: "/tech/docker.png" },
];

export default function TechStack() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {techs.map((tech, index) => (
        <div
          key={index}
          className="bg-gray-700 rounded-xl flex flex-col items-center justify-center p-4 shadow hover:scale-105 transition-transform"
        >
          {/* <img src={tech.icon} alt={tech.name} className="w-12 h-12 mb-2" /> */}
          {/* <div>{tech.icon}</div> */}
          {/* <div className="w-3xl h-4/5"></div> */}
          <JavascriptLogo />
          <p className="text-sm text-gray-200">{tech.name}</p>
        </div>
      ))}
    </div>
  );
}
