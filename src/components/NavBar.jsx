import { useState } from "react";
import { navLinks } from "../constants";
import ScrollSmoother from "gsap/ScrollSmoother";
import gsap from "gsap";

gsap.registerPlugin(ScrollSmoother);
const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (targetId) => {
    const target = document.getElementById(targetId);
    if (target) {
      const smoother = ScrollSmoother.get(); // get the existing instance
      smoother.scrollTo(target, true, "top");
    }
    setMenuOpen(false); // Close menu after click
  };

  return (
    <div className="w-full flex-center fixed z-1000 top-0 left-0 md:p-0 px-10 bg-[#040916]">
      <div className="container md:my-5 my-3 flex items-center justify-between">
        <div className="flex flex-row gap-3 justify-center items-center px-10">
          <img
            src="/images/myimage.jpg"
            alt="logo"
            className="md:size-12 size-8 object-cover object-center"
          />
          <h1 className="text-2xl font-bold text-white">
            .Rajnish <span className="text-blue-500">Singh</span>
          </h1>
        </div>
        {/* Desktop Links */}
        <div className="md:flex items-center gap-7 hidden">
          {navLinks.map((item, index) => (
            <div
              key={index}
              className="relative after:absolute after:bg-gray-200 after:bottom-0 after:left-0 after:h-[2px]
               after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left
                hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"
            >
              <button
                onClick={() => handleScroll(item.link)}
                className="gradient-title text-lg"
              >
                {item.name}
              </button>
            </div>
          ))}
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#040916] shadow-lg py-4 z-40">
          <div className="flex flex-col items-center gap-5">
            {navLinks.map((item, index) => (
              <button
                key={index}
                onClick={() => handleScroll(item.link)}
                className="gradient-title text-lg w-full text-center py-2"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
