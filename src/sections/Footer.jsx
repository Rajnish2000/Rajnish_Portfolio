import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaMapMarkerAlt,
  FaDiscord,
  FaYoutube,
} from "react-icons/fa";
import { SiMedium, SiRevue } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="border border-gray-500 px-4 md:px-20 py-10 text-sm">
      <div className="grid md:grid-cols-4 grid-cols-1 gap-10">
        {/* Contact Details */}
        <div>
          <h4 className="font-semibold mb-4">CONTACT DETAILS</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <FaLinkedin /> LinkedIn
            </li>
            <li className="flex items-center gap-2">
              <FaGithub /> GitHub
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> rajsinghdj4@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt /> Gorakhpur, Uttar Pradesh, India
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-4">SERVICES</h4>
          <ul className="space-y-2">
            <li>Website Development</li>
            <li>App Development</li>
            <li>Others</li>
          </ul>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold mb-4">LINKS</h4>
          <ul className="space-y-2">
            <li>Summary</li>
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h4 className="font-semibold mb-4">FOLLOW US</h4>
          <div className="flex gap-7 flex-wrap">
            <FaLinkedin className="text-xl" />
            <FaGithub className="text-xl" />
            <SiMedium className="text-xl" />
            <SiRevue className="text-xl" />
            <FaDiscord className="text-xl" />
            <FaYoutube className="text-xl" />
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="text-center mt-10 border-t pt-4">
        <p>
          © 2025 Made with 💘
          <span className="text-blue-600">By Rajnish Singh</span>
        </p>
      </div>
    </footer>
  );
}
