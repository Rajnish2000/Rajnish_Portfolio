import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export function ContactInfo() {
  return (
    <>
      <div className="flex flex-wrap">
        <div>
          <h3 className="font-semibold mb-1">Contact Information</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Fill up the form and I’ll get back to you as soon as possible.
          </p>

          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MdEmail className="text-blue-500 text-xl mt-0.5" />
              <div>
                <strong>Email</strong>
                <div>aathifzahir12@gmail.com</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MdPhone className="text-blue-500 text-xl mt-0.5" />
              <div>
                <strong>Phone</strong>
                <div>+94 76 527 1411</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MdLocationOn className="text-blue-500 text-xl mt-0.5" />
              <div>
                <strong>Location</strong>
                <div>Colombo, Sri Lanka</div>
              </div>
            </li>
          </ul>
        </div>

        <div className="mt-6">
          <h4 className="font-semibold mb-2">Connect with me</h4>
          <div className="flex gap-4">
            <a href="#" className="text-blue-500 hover:text-blue-700">
              <FaGithub size={24} />
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-700">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-700">
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
