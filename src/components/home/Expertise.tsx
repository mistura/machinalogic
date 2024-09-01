import { AdjustedSectionLayout } from "./Industries";

const Expertise = () => {
  const LeftChildren = () => {
    return (
      <div className="grid md:grid-cols-2 gap-4 lg:gap-0 h-full w-full">
        <img
          src="./card 1.png"
          alt="secure your environment"
          className="h-full"
        />
        <img src="./Card 2.png" alt="managed services" className="" />
        <img
          src="./Card 3.png"
          alt="digital transformation"
          className="md:ml-[50%]"
        />
      </div>
    );
  };
  return (
    <div className="w-screen flex flex-col items-center justify-center">
      <AdjustedSectionLayout
        link="solutions"
        leftChildren={<LeftChildren />}
        textOne={"our"}
        textTwo={"expertise"}
        bg=" bg-[#7f069b]"
      />
    </div>
  );
};

export default Expertise;
