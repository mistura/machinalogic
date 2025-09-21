import About from "../components/home/About";
import Contact from "../components/home/Contact";
import Expertise from "../components/home/Expertise";
import Hero from "../components/home/Hero";
import Industries from "../components/home/Industries";
import { LargeScreenMenuIcon, Search } from "./layout/Header";

const HomePage = () => {
  return (
    <div className="relative">
      {/* Fixed search & menu */}
      {/* <section className="fixed right-[2%] top-0 h-[70px] z-40 justify-end flex">
        <Search position="top-[32%] right-[140px] absolute" />
        <LargeScreenMenuIcon
          positionTop="absolute z-40"
          positionBottom="absolute bottom-6 z-40"
        />
      </section> */}

      {/* Sticky full-screen slides */}
     <div className="relative">
  {/* Hero */}
  <div className="min-h-screen w-screen flex items-center justify-center 
      bg-gradient-to-b from-gray-900 to-gray-700 text-white 
      md:sticky md:top-0 md:h-screen md:snap-start">
    <Hero />
  </div>

  <div className="min-h-screen w-screen flex items-center justify-center 
      bg-gradient-to-b from-blue-900 to-indigo-700 text-white 
      md:sticky md:top-0 md:h-screen md:snap-start">
    <About />
  </div>

  <div className="min-h-screen w-screen flex items-center justify-center 
      bg-gradient-to-b from-indigo-800 to-purple-700 text-white 
      md:sticky md:top-0 md:h-screen md:snap-start">
    <Industries />
  </div>

  {/* Expertise */}
  <div className="min-h-screen w-screen flex items-center justify-center 
      bg-gradient-to-b from-purple-800 to-pink-700 text-white 
      md:sticky md:top-0 md:h-screen md:snap-start">
    <Expertise />
  </div>

  <div className="min-h-screen w-screen flex items-center justify-center 
      bg-gradient-to-b from-gray-200 to-gray-100 text-black 
      md:sticky md:top-0 md:h-screen md:snap-start">
    <Contact />
  </div>
</div>

    </div>
  );
};

export default HomePage;
