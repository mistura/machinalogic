import About from "../components/home/About";
import Contact from "../components/home/Contact";
import Expertise from "../components/home/Expertise";
import Hero from "../components/home/Hero";
import Industries from "../components/home/Industries";

const HomePage = () => {
  return (
    <div className="">
      <Hero />
      <About />
      <Industries />
      <Expertise />
      <Contact />
    </div>
  );
};

export default HomePage;
