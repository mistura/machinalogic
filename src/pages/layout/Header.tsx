type Props = {};

const Header = (props: Props) => {
  return (
    <div className="py-6 flex flex-col items-center justify-center fixed top-0 left-0 w-screen">
      <div className="max-w-7xl w-full">
        <LargeScreenMenuIcon />
      </div>
    </div>
  );
};

export default Header;

const LargeScreenMenuIcon = () => {
  const elements = document.getElementsByClassName("section-shrink");

  return (
    <div
      className="flex flex-col items-end gap-2 relative z-0 cursor-pointer"
      onClick={() => {
        document.getElementsByTagName("nav")[0].classList.add("nav-active");
        for (let i = 0; i < elements.length; i++) {
          elements[i].classList.add("menu-active");
        }
      }}
    >
      <div className="w-16 h-1.5 bg-black rounded-full"></div>
      <div className="w-8 h-1.5 bg-black rounded-full"></div>
    </div>
  );
};
