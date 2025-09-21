import { Button } from "antd";
import { motion } from "framer-motion";
import HeaderTitle from "../HeaderTitle";

const About = () => {
  return (
    <div className="section bg-gradient-to-br from-blue-900 to-blue-600 py-24 lg:py-48 xl:h-screen  section-shrink md:flex md:flex-col justify-center items-center px-6">
      {/* <SectionLayout
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
      /> */}

      <motion.div
        initial={{ y: 200 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.2 }}
        className=" grid md:grid-cols-3 gap-y-[20px] grid-cols-1  text-white"
      >
        <div className="col-span-2 ">
          <HeaderTitle
          tagText={"Since 2015"}
          tagStyle="bg-white"
          Header={`Africa’s OT Cybersecurity Leader `}
          HeaderStyle={""}
        />
          <p className="text-white md:text-lg text-md lg:text-2xl md:pr-[100px] pt-4">
            Machina Logic is a leading OT cybersecurity partner, securing ICS
            and SCADA systems across Africa. We protect critical sectors with
            expertise in network security, data protection, and incident
            response, while also delivering IT security, managed networks, and
            fiber deployment.
          </p>
          <Button className="lg:hidden px-4 w-[164px] bg-transparent text-white border-[1.6px] h-12 font-bold text-base mt-12">
            <a href={"/about-us"} className="">
              Learn More
            </a>
          </Button>
        </div>

          <motion.div
          initial={{ y: -200 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.2 }}
          className="flex items-center col-span-1 text-center w-full"
        >
            <img
              src="/newLogo-removebg-preview.png"
              className="m-auto "
            />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
