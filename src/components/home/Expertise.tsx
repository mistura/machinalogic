import { AdjustedSectionLayout } from "./Industries";

const Expertise = () => {
  const LeftChildren = () => {
    return (
      <div className="grid md:grid-cols-2 gap-4 lg:gap-0 h-full w-full">
        <img src="./exp1.webp" alt="secure your environment" className="" />
        <img src="./exp2.webp" alt="managed services" className="" />
        <img
          src="./exp3.webp"
          alt="digital transformation"
          className="md:ml-[50%]"
        />
      </div>
    );
  };
  return (
    <div className="w-screen bg-red-600 flex flex-col items-center justify-center">
      <AdjustedSectionLayout
        leftChildren={<LeftChildren />}
        textOne={"our"}
        textTwo={"expertise"}
        bg="bg-primary"
      />
    </div>
  );
};

export default Expertise;
