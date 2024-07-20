import { FaX } from "react-icons/fa6";

type Props = {};

const navItems = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "Our company",
    url: "/our-company",
  },
  {
    label: "Industries",
    url: "/industries",
  },
  {
    label: "Solutions",
    url: "/solutions",
  },
  {
    label: "Services",
    url: "/services",
  },
  {
    label: "Partners",
    url: "/partners",
  },
  {
    label: "Careers",
    url: "/careers",
  },
  {
    label: "Contact",
    url: "/contact",
  },
];

const Nav = (props: Props) => {
  const elements = document.getElementsByClassName("section-shrink");

  return (
    <nav className="fixed -right-10 top-0 bg-white border-l border-gray-200 h-screen flex flex-col items-start z-50 p-6">
      <FaX
        className="mb-20 text-4xl hover:text-red-600 "
        onClick={() => {
          document
            .getElementsByTagName("nav")[0]
            .classList.remove("nav-active");
          for (let i = 0; i < elements.length; i++) {
            elements[i].classList.remove("menu-active");
          }
        }}
      />
      <ol className="pl-10 grid gap-6">
        {navItems.map((item) => (
          <li className="">
            <a
              href=""
              className="font-bold uppercase text-gray-500 hover:text-secondary"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Nav;
