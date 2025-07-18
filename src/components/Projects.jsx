import React, { useEffect, useState } from "react";
import Card from "./Card";

const projects = [
  {
    title: "MovieFlix",
    description:
      "A movie app crafted in React and TailwindCSS, optimizing development through Vite for fast and efficient project building.",
    image: "/images/projectImage/TMDB.png",
    demo: "https://the-movie-database-app.vercel.app/",
    details: "https://github.com/Rajnish2000/TMDB-movies_app",
  },
  {
    title: "IDOC_TOOL",
    description:
      "The IDOC_TOOL project is an application designed to detect and extract text from images using Python libraries like OpenCV, Tesseract, and Streamlit.",
    image: "/images/projectImage/IDOC_TOOL.jpg",
    demo: "#",
    details: "https://github.com/Rajnish2000/IDOC_TOOL",
  },
  {
    title: "Urbanutopia",
    description:
      "`urbanutopia` is a RESTful API that connects property owners looking to rent their spaces with individuals seeking short-term accommodation.",
    image: "/images/projectImage/urbanutopia.png",
    demo: "https://urbanutopia-q4lw.onrender.com/",
    details: "https://github.com/Rajnish2000/urbanutopia",
  },
  {
    title: "BlogApp",
    description:
      "This project enables users to Manages posts with CRUD, commenting, replies, and robust security: authentication, OTP, 2FA, and captcha.",
    image: "/images/projectImage/BlogApp.png",
    demo: "#",
    details: "https://gitlab.com/rajsinghdj4/angularproject",
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
      <div className="grid md:grid-cols-3 gap-4">
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
