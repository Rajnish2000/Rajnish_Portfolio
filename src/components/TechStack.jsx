import React from "react";
const techs = [
  {
    name: "HTML",
    icon: "/images/logos/html5.png",
  },
  { name: "Angular JS", icon: "/images/logos/angular.png" },
  { name: "Bootstrap", icon: "/images/logos/Bootstrap.png" },
  { name: "Firebase", icon: "/images/logos/firebase.png" },
  { name: "JavaScript", icon: "/images/logos/js.png" },
  { name: "Python", icon: "/images/logos/pythonlogo.png" },
  { name: "Tailwind CSS", icon: "/images/logos/tailwindcss.png" },
  { name: "CSS", icon: "/images/logos/css.png", scale: "scale-x-200" },
  { name: "Node JS", icon: "/images/logos/Nodejs.png" },
  { name: "Nest JS", icon: "/images/logos/Nestjs.png" },
  { name: "ReactJS", icon: "/images/logos/reactjs.png" },
  { name: "MongoDB", icon: "/images/logos/mongoDB.png" },
  { name: "Redux", icon: "/images/logos/redux.png" },
  { name: "Redis", icon: "/images/logos/redis.png" },
  { name: "C++", icon: "/images/logos/c++.png", scale: "" },
  { name: "TypeScript", icon: "/images/logos/typescript.png" },
  { name: "Jquery", icon: "/images/logos/jquery.png" },
  { name: "Three Js", icon: "/images/logos/three.png", scale: "" },
  { name: "Git", icon: "/images/logos/git.png" },
  { name: "GitHub", icon: "/images/logos/github.png" },
];

export default function TechStack() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {techs.map((tech, index) => (
        <div
          key={index}
          className="bg-gray-700 rounded-xl flex flex-col items-center justify-center p-4 shadow hover:scale-105 transition-transform"
        >
          <img
            src={tech.icon}
            alt={tech.name}
            className={`w-12 h-12 ${tech.scale ?? "scale-400"} mb-4`}
          />
          <p className="text-sm text-gray-200">{tech.name}</p>
        </div>
      ))}
    </div>
  );
}
