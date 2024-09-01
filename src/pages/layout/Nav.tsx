import { FaX } from "react-icons/fa6";
import { motion } from "framer-motion";

const navItems = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "Our company",
    url: "/about-us",
  },
  {
    label: "Industries",
    url: "/industries",
  },
  {
    label: "Solutions",
    url: "/solutions",
  },
  // {
  //   label: "Services",
  //   url: "/services",
  // },
  // {
  //   label: "Partners",
  //   url: "/partners",
  // },
  // {
  //   label: "Careers",
  //   url: "/careers",
  // },
  {
    label: "Contact",
    url: "/contact",
  },
];

const Nav = () => {
  return (
    <motion.nav
      layout
      initial={{ opacity: 0, y: -200 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 bg-[#2a2c39] bg-opacity-90 lg:bg-white lg:bg-opacity-100 lg:border-l border-gray-200 min-h-screen w-screen flex flex-col lg:items-start justify-center z-[99] p-6"
    >
      <FaX
        className="absolute right-5 top-8 mb-20 place-self-end lg:place-self-start lg:left-5 text-xl lg:text-3xl text-white lg:text-black hover:text-red-600 cursor-pointer"
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
      <motion.ol
        transition={{
          staggerChildren: 0.3,
        }}
        className="lg:pl-10 flex flex-col justify-center items-center lg:items-start w-full h-full  gap-6"
      >
        {navItems.map((item) => (
          <motion.li
            initial={{ x: 200 }}
            whileInView={{ x: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              staggerChildren: 200,
            }}
            className=""
            key={item.url}
          >
            <a
              href={item.url}
              className="font-black lg:font-bold uppercase text-xl text-white lg:text-gray-500 hover:text-secondary"
            >
              {item.label}
            </a>
          </motion.li>
        ))}
      </motion.ol>
    </motion.nav>
  );
};

export default Nav;
