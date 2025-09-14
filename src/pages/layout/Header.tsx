import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars } from "react-icons/fa6";
import { SiSearxng } from "react-icons/si";
import Logo from "../../../public/newLogo-removebg-preview.png";
import { Input } from "antd";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <>
      {/* Header Bar */}
      <div className="bg-[#2A2C39] py-2 px-4 flex flex-col items-center justify-center fixed top-0 left-0 w-screen z-50">
        <div className="relative w-full flex justify-between items-center lg:items-start">
          {/* Logo */}
          <div>
            <a href="/">
              <img
                src={Logo}
                alt="machina logics cybersecurity"
                className="max-w-[140px] pt-2 md:max-w-[160px] w-full"
              />
            </a>
          </div>

          {/* Search Icon */}
          <SiSearxng
            className="text-white text-3xl absolute md:right-[90px] right-[50px] md:top-5 top-4 hover:text-[#080827] cursor-pointer duration-300 ease-in-out"
            onClick={() => setShowSearch((prev) => !prev)}
          />

          {/* Menu icons */}
          <LargeScreenMenuIcon />
          <FaBars
            onClick={() => {
              document.getElementsByTagName("nav")[0].classList.add("nav-active");
              document
                .getElementsByClassName("shrink")[0]
                .classList.add("menu-active");
              document
                .getElementsByClassName("fa-bars")[0]
                .classList.add("hide-bars");
            }}
            className="fa-bars text-3xl text-white hover:text-primary duration-200 cursor-pointer lg:hidden"
          />
        </div>
      </div>

      {/* Full-width Search Overlay */}
      <AnimatePresence>
        {showSearch && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.4 }}
            className="fixed top-[60px] left-0 w-full h-[270px] bg-[#2A2C39] flex items-center justify-center z-40 shadow-lg"
          >
            <div className="w-11/12 md:w-2/3 lg:w-1/2 space-y-4 text-center">
            <h3 className="text-white text-2xl">Explore Operational Technology solutions!</h3>
              <Input.Search
                placeholder="Search here..."
                enterButton="Search"
                size="large"
                className="rounded-md"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;

const LargeScreenMenuIcon = () => {
  return (
    <div
      className="lg:flex flex-col items-end gap-2 relative z-50 cursor-pointer pr-3 mt-6 xl:mt-4 hidden large-screen-menu"
      onClick={() => {
        document.getElementsByTagName("nav")[0].classList.add("nav-active");
        document
          .getElementsByClassName("shrink")[0]
          .classList.add("menu-active");
        document
          .getElementsByClassName("large-screen-menu")[0]
          .classList.add("hide-element");
        document
          .getElementsByClassName("fa-bars")[0]
          .classList.add("hide-element");
      }}
    >
      <div className="w-16 h-1.5 bg-white rounded-full"></div>
      <div className="w-8 h-1.5 bg-white rounded-full"></div>
    </div>
  );
};
