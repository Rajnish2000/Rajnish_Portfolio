import { navLinks } from "../constants";

const NavBar = () => {
  return (
    <div className="w-full flex-center fixed z-50 top-0 left-0 md:p-0 px-5 bg-[#040916]">
      <div className="container md:my-10 my-3 flex items-center justify-around">
        <div className="flex flex-row gap-3 justify-center items-center px-10">
          <img
            src="/images/myimage.jpg"
            alt="logo"
            className="md:size-12 size-10 object-cover object-center"
          />
          <h1 className="text-2xl font-bold text-white">
            .Rajnish <span className="text-blue-500">Singh</span>
          </h1>
        </div>
        <div className="md:flex items-center gap-7 hidden">
          {navLinks.map((item, index) => (
            <div
              key={index}
              className="relative after:absolute after:bg-gray-200 after:bottom-0 after:left-0 after:h-[2px]
               after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left
                hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"
            >
              <a className="gradient-title text-lg" href={item.link}>
                {item.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
