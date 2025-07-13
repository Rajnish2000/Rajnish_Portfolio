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
    <footer className="bg-gradient-to-br from-[#040916] via-[#0f172a] to-[#1e293b] text-white rounded-t-3xl shadow-2xl px-4 md:px-20 py-12 text-sm">
      <div className="grid md:grid-cols-4 grid-cols-1 gap-10 justify-center m-auto">
        {/* Contact Details */}
        <div>
          <h4 className="font-semibold mb-4 text-blue-400">CONTACT DETAILS</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <FaLinkedin className="text-blue-400" />
              <a
                href="https://www.linkedin.com/in/rajnish-singh-5b7a371a6/"
                target="_blank"
              >
                {" "}
                LinkedIn{" "}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaGithub className="text-gray-300" />
              <a href="https://github.com/Rajnish2000" target="_blank">
                {" "}
                GitHub
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-pink-400" /> rajsinghdj4@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-green-400" /> Gorakhpur, Uttar
              Pradesh, India
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-4 text-blue-400">
            DEVELOPMENT SKILLS
          </h4>
          <ul className="space-y-2">
            <li className="text-gray-300">Web Development</li>
            <li className="text-gray-300">Application Development</li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h4 className="font-semibold mb-4 text-blue-400">FOLLOW US</h4>
          <div className="flex gap-5 flex-wrap">
            <a
              href="https://www.linkedin.com/in/rajnish-singh-5b7a371a6/"
              target="_blank"
              className="hover:scale-125 transition-transform"
            >
              <FaLinkedin className="text-blue-400 text-2xl" />
            </a>
            <a
              href="https://github.com/Rajnish2000"
              target="_blank"
              className="hover:scale-125 transition-transform"
            >
              <FaGithub className="text-gray-300 text-2xl" />
            </a>
            <a
              href="https://gitlab.com/rajsinghdj4"
              target="_blank"
              className="hover:scale-125 transition-transform"
            >
              <FaGitlab className="text-orange-400 text-2xl" />
            </a>
            <a
              href="https://www.facebook.com/mr.rajnishkumarsingh/"
              target="_blank"
              className="hover:scale-125 transition-transform"
            >
              <FaFacebook className="text-blue-500 text-2xl" />
            </a>
            <a
              href="https://leetcode.com/u/rajnish21/"
              target="_blank"
              className="hover:scale-125 transition-transform"
            >
              <SiLeetcode className="text-yellow-400 text-2xl" />
            </a>
            <a
              href="https://discord.com/channels/@me"
              target="_blank"
              className="hover:scale-125 transition-transform"
            >
              <FaDiscord className="text-indigo-400 text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/rajnish-singh-5b7a371a6/"
              target="_blank"
              className="hover:scale-125 transition-transform"
            >
              <FaYoutube className="text-red-500 text-2xl" />
            </a>
            <a
              href="https://www.cloudskillsboost.google/public_profiles/8e150d20-c04c-4a81-b530-7e32991323cc"
              target="_blank"
              className="hover:scale-125 transition-transform"
            >
              <SiGooglecloud className="text-blue-300 text-2xl" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="text-center mt-10 border-t border-gray-700 pt-4">
        <p className="text-gray-300">
          © 2025 Made with <span className="text-pink-400">💘</span>{" "}
          <span className="text-blue-400 font-bold">By Rajnish Singh</span>
        </p>
      </div>
    </footer>
  );
}
