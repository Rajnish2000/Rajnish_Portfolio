import React from "react";
const techs1 = [
  {
    name: "HTML",
    icon: "/images/logos/html5.png",
  },
  { name: "CSS", icon: "/images/logos/css.png", scale: "scale-x-200" },
  { name: "JavaScript", icon: "/images/logos/js.png" },
  { name: "TypeScript", icon: "/images/logos/typescript.png" },
  { name: "ReactJS", icon: "/images/logos/reactjs.png" },
  { name: "Angular JS", icon: "/images/logos/angular.png" },
  { name: "Bootstrap", icon: "/images/logos/Bootstrap.png" },
  { name: "Tailwind CSS", icon: "/images/logos/tailwindcss.png" },
  { name: "Redux", icon: "/images/logos/redux.png" },
  { name: "C++", icon: "/images/logos/c++.png", scale: "" },
  { name: "Python", icon: "/images/logos/pythonlogo.png" },
  { name: "Node JS", icon: "/images/logos/Nodejs.png" },
  { name: "Nest JS", icon: "/images/logos/Nestjs.png" },
  { name: "MongoDB", icon: "/images/logos/mongoDB.png" },
  { name: "Three Js", icon: "/images/logos/three.png", scale: "" },
  { name: "Git", icon: "/images/logos/git.png" },
  { name: "GitHub", icon: "/images/logos/github.png" },
  { name: "FireBase", icon: "/images/logos/firebase.png" },
];
const techs2 = [
  { name: "C", icon: "/images/logos/C.png" },
  { name: "CSharp", icon: "/images/logos/CSharp.png" },
  { name: "Nextjs", icon: "/images/logos/Nextjs.png" },
  { name: "Net", icon: "/images/logos/NET.png" },
  { name: "Express", icon: "/images/logos/Express.png" },
  { name: "MySQL", icon: "/images/logos/MySQL.png" },
  { name: "Docker", icon: "/images/logos/Docker.png" },
  { name: "Jenkins", icon: "/images/logos/Jenkins.png" },
  { name: "Kubernetes", icon: "/images/logos/Kubernetes.png" },
  { name: "AWS", icon: "/images/logos/AWS.png" },
  { name: "NumPy", icon: "/images/logos/NumPy.png" },
  { name: "Figma", icon: "/images/logos/Figma.png" },
  { name: "Wordpress", icon: "/images/logos/wordpress.png" },
  { name: "Jupyter", icon: "/images/logos/Jupyter.png" },
];

export default function TechStack() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {techs1.map((tech, index) => (
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
      {techs2.map((tech, index) => (
        <div
          key={index}
          className="bg-gray-700 rounded-xl flex flex-col items-center justify-center p-4 shadow hover:scale-105 transition-transform"
        >
          {/* ${tech.scale ?? "scale-400"} */}
          <img src={tech.icon} alt={tech.name} className={`w-12 h-12 mb-4`} />
          <p className="text-sm text-gray-200">{tech.name}</p>
        </div>
      ))}
    </div>
  );
}
