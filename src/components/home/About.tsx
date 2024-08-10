import { Button } from "antd";
import SectionLayout from "../../pages/layout/SectionLayout";

const About = () => {
  return (
    <div className="bg-gradient-to-br from-blue-900 to-blue-600 py-24 lg:py-48 xl:h-screen about section-shrink flex flex-col justify-center items-center px-6">
      <SectionLayout
        textOne={"Since"}
        textTwo={"2015"}
        leftChildren={
          <div className="">
            <p className="text-white text-lg lg:text-2xl">
              <span className="font-bold uppercase">Machina Logic</span> is your
              number one{" "}
              <span className="text-highlight uppercase font-bold">
                cybersecurity solutions company
              </span>{" "}
              with a track record that expands into network security, data
              protection, risk assessment and incident report.
            </p>
            <Button className="lg:hidden px-4 w-[164px] h-12 font-bold text-base mt-12">
              <a href={"/about-us"} className="">
                Learn More
              </a>
            </Button>
          </div>
        }
        url={"/"}
      />
    </div>
  );
};

export default About;
