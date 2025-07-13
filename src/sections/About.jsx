import React from "react";
import { FaFileDownload } from "react-icons/fa";
import { FaGraduationCap, FaBriefcase, FaUser } from "react-icons/fa";
import { BiSolidFilePdf } from "react-icons/bi";

const About = () => {
  return (
    <section className="px-8 md:px-20 pt-20 pb-15" id="about">
      <h2 className="text-4xl font-bold mb-4 border-b-4 border-blue-500 inline-block">
        About Me
      </h2>

      {/* Bio */}
      <div className="mt-6 flex flex-col lg:flex-row justify-between gap-12">
        <div className="lg:w-2/3">
          <h3 className="flex items-center text-xl font-semibold text-blue-400 mb-2">
            <FaUser className="mr-2" /> Bio
          </h3>
          <p className="text-gray-300">
            Software engineering student with a passion for creating innovative
            solutions. Specializing in full-stack development, I combine
            technical expertise with creative problem-solving to build
            user-centric applications.
          </p>

          {/* Education & Experience */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Education */}
            <div className="border border-gray-700 p-6 rounded-xl bg-[#1e293b]">
              <h4 className="text-lg font-bold flex items-center mb-2">
                <FaGraduationCap className="mr-2" /> Education
              </h4>
              <p className="font-semibold">B.Tech in Information Technology</p>
              <p className="text-gray-400">
                BIT (Buddha Institute of Information Technology)
              </p>
              <p className="text-gray-400">2022 - Present</p>
            </div>

            {/* Experience */}
            <div className="border border-gray-700 p-6 rounded-xl bg-[#1e293b]">
              <h4 className="text-lg font-bold flex items-center mb-2">
                <FaBriefcase className="mr-2" /> Experience
              </h4>
              <div>
                <p className="font-semibold">Full Stack Developer Intern</p>
                <p className="text-gray-400">Webiers Pvt. Ltd.</p>
                <p className="text-gray-400 mb-3">March 2022 -- Oct 2022</p>
              </div>
              <div>
                <p className="font-semibold">Backend Developer Intern</p>
                <p className="text-gray-400">KaryaNest Solutions LLP.</p>
                <p className="text-gray-400 mb-3">Oct 2024 -- Present</p>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Card */}
        <div className="lg:w-1/3 flex flex-col items-center text-center p-6 rounded-xl bg-[#0f172a]">
          <div className="relative">
            <img
              src="/images/myimage.jpg"
              alt="Rajnish Singh"
              className="w-32 h-32 object-cover rounded-full border-4 border-white"
            />
            <span className="absolute bottom-0 right-0 bg-blue-500 text-white text-sm px-2 py-1 rounded-full">
              7.78 CGPA
            </span>
          </div>
          <h3 className="text-xl font-bold mt-4">Rajnish Singh</h3>
          <p className="text-gray-400 mb-4">Software Engineering Student</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {["React", "Node", "UI/UX", "Full Stack"].map((skill) => (
              <span
                key={skill}
                className="bg-gray-700 px-3 py-1 rounded-full text-sm text-white"
              >
                {skill}
              </span>
            ))}
          </div>

          <a
            href="https://drive.usercontent.google.com/uc?id=1XjkGLFps8-reFab18N1r5YNZ5Sy3dDaZ&export=download" // Replace with actual path
            download
            className="mt-5 inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition"
            target="_blank"
          >
            <FaFileDownload className="mr-2" />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
