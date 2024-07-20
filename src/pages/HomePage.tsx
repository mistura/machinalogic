import About from "../components/home/About";
import Hero from "../components/home/Hero";
import Industries from "../components/home/Industries";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <div className="">
      <Hero />
      <About />
      <Industries />
    </div>
  );
};

export default HomePage;
