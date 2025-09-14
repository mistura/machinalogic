"use client";
import { useState } from "react";
import { FaX } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const navItems = [
  { label: "Home", url: "/" },
  { label: "About Us", url: "/about-us" },
  {
    label: "Industries",
    url: null,
    submenu: [
      { label: "Government", url: "/industries/healthcare" },
      {label: "Oil & Gas", url: ''},
      { label: "Banking", url: "/industries/construction" },
      { label: "Aviation", url: "/industries/finance" },
      { label: "Utilities", url: "/industries/finance" },
    ],
  },
  {
    label: "Solutions",
    url: null,
    submenu: [
      { label: "OT Cybersecurity", url: "/solutions/cybersecurity" },
      { label: "IT Cybersecurity", url: "/solutions/cybersecurity" },
      { label: "Network Management", url: "/solutions/cloud" },
      { label: "Fibre Deployment & Operations", url: "/solutions/automation" },
    ],
  },
  { label: "Partners", url: "/partners" },
  { label: "Contact", url: "/contact" },
];

const Nav = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (label: string) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <motion.nav
      layout
      initial={{ opacity: 0, y: -200 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 bg-[#2a2c39] bg-opacity-90 lg:bg-[#2A2C39] lg:bg-opacity-100 lg:border-l border-gray-200 min-h-screen w-screen flex flex-col lg:items-start justify-center z-[99] p-6"
    >
      {/* Close Button */}
      <FaX
        className="absolute right-5 top-8 mb-20 place-self-end lg:place-self-start lg:left-5 text-xl lg:text-3xl text-white hover:text-red-600 cursor-pointer"
        onClick={() => {
          document
            .getElementsByTagName("nav")[0]
            .classList.remove("nav-active");
          document
            .getElementsByClassName("shrink")[0]
            .classList.remove("menu-active");
          document
            .getElementsByClassName("fa-bars")[0]
            .classList.remove("hide-bars");
          document
            .getElementsByClassName("large-screen-menu")[0]
            .classList.remove("hide-element");
        }}
      />

      {/* Nav Items */}
      <motion.ol
        transition={{ staggerChildren: 0.3 }}
        className="lg:pl-10 flex flex-col justify-center items-center lg:items-start w-full h-full gap-6"
      >
        {navItems.map((item) => (
          <motion.li
            key={item.url}
            initial={{ x: 200 }}
            whileInView={{ x: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              staggerChildren: 200,
            }}
            className="w-full"
          >
            {/* Parent Item */}
            <div
              onClick={() => item.submenu && toggleDropdown(item.label)}
              className="flex items-center justify-between font-black lg:font-bold uppercase text-xl text-white hover:text-[#00BFFF] cursor-pointer"
            >
            {item.submenu ? (
                <span>{item.label}</span>
              ) : (
                <a href={item.url!}>{item.label}</a>
              )}

              {item.submenu && (
                <FaChevronDown
                  className={`ml-2 transform transition-transform duration-300 ${
                    openDropdown === item.label ? "rotate-180" : "rotate-0"
                  }`}
                />
              )}
            </div>

            {/* Submenu */}
            <AnimatePresence>
              {item.submenu && openDropdown === item.label && (
                <motion.ul
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="pl-6 mt-2 flex flex-col gap-2"
                >
                  {item.submenu.map((sub) => (
                    <li key={sub.url}>
                      <a
                        href={sub.url}
                        className="text-white text-sm hover:text-[#00BFFF]"
                      >
                        {sub.label}
                      </a>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </motion.li>
        ))}
      </motion.ol>
    </motion.nav>
  );
};

export default Nav;
