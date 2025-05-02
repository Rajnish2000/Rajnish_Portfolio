import React from "react";

const certificates = [
  {
    title: "Infosys Springboard",
    image: "/images/infosys.png",
  },
  {
    title: "Udemy Bootcamp",
    image: "/images/udemy.png",
  },
  {
    title: "Unnati Foundation",
    image: "/images/unnati.png",
  },
];

export default function Certificates() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {certificates.map((cert, index) => (
        <div key={index} className="bg-gray-700 rounded-xl overflow-hidden">
          <img
            src={cert.image}
            alt={cert.title}
            className="w-full h-60 object-contain p-4"
          />
        </div>
      ))}
    </div>
  );
}
