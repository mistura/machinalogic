import { FaBars } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="py-6 px-4 flex flex-col items-center justify-center fixed top-0 left-0 w-screen z-50">
      <div className="max-w-7xl w-full flex justify-end">
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
          className="fa-bars place-self-end text-3xl mt-1 hover:text-primary duration-200 cursor-pointer lg:hidden"
        />
      </div>
    </div>
  );
};

export default Header;

const LargeScreenMenuIcon = () => {
  return (
    <div
      className="lg:flex flex-col items-end gap-2 relative z-50 cursor-pointer mt-2 hidden large-screen-menu"
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
      <div className="w-16 h-1.5 bg-black rounded-full"></div>
      <div className="w-8 h-1.5 bg-black rounded-full"></div>
    </div>
  );
};
