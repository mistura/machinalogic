import SectionLayout from "../../pages/layout/SectionLayout";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="bg-gradient-to-b from-primary to-blue-500 h-screen section-shrink flex flex-col justify-center items-center">
      <SectionLayout
        textOne={"Since"}
        textTwo={"2015"}
        leftChildren={
          <div className="">
            <p className="text-white text-2xl">
              <span className="font-bold uppercase">Machina Logic</span> is your
              number one{" "}
              <span className="text-highlight uppercase font-bold">
                cybersecurity solutions company
              </span>{" "}
              with a track record that expands into network security, data
              protection, risk assessment and incident report.
            </p>
          </div>
        }
        url={"/"}
      />
    </div>
  );
};

export default About;
