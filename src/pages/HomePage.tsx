import About from "../components/home/About";
import Contact from "../components/home/Contact";
import Expertise from "../components/home/Expertise";
import Hero from "../components/home/Hero";
import Industries from "../components/home/Industries";
import { LargeScreenMenuIcon, Search } from "./layout/Header";

const HomePage = () => {
  return (
    <div className="relative snap-y">
      {/* Fixed search & menu */}
      {/* <section className="fixed w-1/6 right-[2%] h-[70px] z-40 justify-end flex">
        <Search position="top-[32%] md:right-[140px] md:flex hiddenl absolute" />
        <LargeScreenMenuIcon
          positionTop="absolute z-40"
          positionBottom="absolute bottom-6 z-40"
        />
      </section> */}

       <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-700 text-white snap-start">
        <Hero />
      </div>

      <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-b from-blue-900 to-indigo-700 text-white snap-start">
        <About />
      </div>

      <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-b from-indigo-800 to-purple-700 text-white snap-start">
        <Industries />
      </div>

      <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-b from-purple-800 to-pink-700 text-white snap-start">
        <Expertise />
      </div>

      <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-b from-gray-200 to-gray-100 text-black snap-start">
        <Contact />
      </div>
    </div>
  );
};

export default HomePage;
