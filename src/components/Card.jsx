"use client";
import React from "react";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
const Card = ({ project }) => (
  <div className="bg-gray-700 rounded-xl overflow-hidden shadow-lg">
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-2">{project.title}</h2>
      <p className="text-sm text-gray-300 mb-4">{project.description}</p>
      <div className="flex justify-between text-sm">
        <a
          href={project.demo}
          className="text-violet-400 hover:underline"
          target="_blank"
        >
          <span className="inline-flex gap-1 items-center">
            Live Demo <FiExternalLink />
          </span>
        </a>
        <a
          type="button"
          href={project.details}
          target="_blank"
          className="text-gray-300 hover:underline bg-gray-700 border border-gray-500 px-2 py-1 rounded-md md:text-sm flex flex-row items-center gap-x-1"
        >
          <BsGithub /> GitHub <FiExternalLink />
        </a>
      </div>
    </div>
  </div>
);

export default Card;
