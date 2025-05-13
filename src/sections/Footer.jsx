import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaMapMarkerAlt,
  FaDiscord,
  FaYoutube,
  FaFacebook,
  FaGitlab,
} from "react-icons/fa";
import { SiGooglecloud, SiLeetcode, SiMedium, SiRevue } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="border border-gray-500 px-4 md:px-20 py-10 text-sm">
      <div className="grid md:grid-cols-4 grid-cols-1 gap-10 justify-center m-auto">
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
          <h4 className="font-semibold mb-4">DEVELOPMENT SKILLS</h4>
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
            <a
              href="https://www.linkedin.com/in/rajnish-singh-5b7a371a6/"
              target="_blank"
            >
              <FaLinkedin className="text-xl" />
            </a>
            <a href="https://github.com/Rajnish2000" target="_blank">
              <FaGithub className="text-xl" />
            </a>
            <a href="https://gitlab.com/rajsinghdj4" target="_blank">
              <FaGitlab className="text-xl" />
            </a>
            <a
              href="https://www.facebook.com/mr.rajnishkumarsingh/"
              target="_blank"
            >
              <FaFacebook className="text-xl" />
            </a>
            <a href="https://leetcode.com/u/rajnish21/" target="_blank">
              <SiLeetcode className="text-xl" />
            </a>
            <a href="https://discord.com/channels/@me" target="_blank">
              <FaDiscord className="text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/rajnish-singh-5b7a371a6/"
              target="_blank"
            >
              <FaYoutube className="text-xl" />
            </a>
            <a
              href="https://www.cloudskillsboost.google/public_profiles/8e150d20-c04c-4a81-b530-7e32991323cc"
              target="_blank"
            >
              <SiGooglecloud className="text-xl" />
            </a>
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
