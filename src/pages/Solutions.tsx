import { Button } from "antd";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { FaArrowDown } from "react-icons/fa6";

const firstItems = [
  "manufacturing",
  "natural resources",
  "Power & utilities",
  "commercial",
  "healthcare",
];

const secondItems = [
  {
    label: "Historian",
    icon: "./solutions/historian.png",
  },
  {
    label: "RTU",
    icon: "./solutions/rtu.png",
  },
  {
    label: "SCADA",
    icon: "./solutions/scada.png",
  },
  {
    label: "Autonomous Things",
    icon: "./solutions/autonomous.png",
  },
  {
    label: "Sensors",
    icon: "./solutions/sensors.png",
  },
  {
    label: "Elevator",
    icon: "./solutions/elevator.png",
  },
  {
    label: "Smart Grid",
    icon: "./solutions/grid.png",
  },
  {
    label: "HMI",
    icon: "./solutions/hmi.png",
  },
  {
    label: "PLC",
    icon: "./solutions/plc.png",
  },
  {
    label: "DCS",
    icon: "./solutions/dcs.png",
  },
  {
    label: "Embedded Devices",
    icon: "./solutions/embedded.png",
  },
  {
    label: "IIOT Gateway",
    icon: "./solutions/iot.png",
  },
  {
    label: "BMS/BAS",
    icon: "./solutions/bms.png",
  },
  {
    label: "HVAC",
    icon: "./solutions/hvac.png",
  },
];

const thirdItems = [
  {
    label: "Physical Intrusion",
    icon: "./solutions/intrusion.png",
  },
  {
    label: "Card Access",
    icon: "./solutions/card.png",
  },
  {
    label: "Video",
    icon: "./solutions/video.png",
  },
  {
    label: "Lighting & Energy",
    icon: "./solutions/lighting.png",
  },
];

const fourthItems = [
  {
    label: "CT Scanner",
    icon: "./solutions/ct.png",
  },
  {
    label: "Blood Gas Analyzer",
    icon: "./solutions/blood-group.png",
  },
  {
    label: "Anesthesia Machine",
    icon: "./solutions/anesthesia.png",
  },
  {
    label: "Hemotology Analyzer",
    icon: "./solutions/hemotology.png",
  },
];
const Solutions = () => {
  return (
    <div className="pt-12 relative flex flex-col justify-center items-center">
      <div className="hero flex flex-col justify-center items-center h-screen xl:w-full relative">
        <img
          src="./solutions-bg.webp"
          alt="machina solutions"
          className="absolute top-0 left-0 h-full xl:w-full object-cover"
        />
        <div className="max-w-7xl px-4 w-full relative z-20 flex flex-col lg:flex-row items-center justify-center xl:justify-between gap-24 text-white h-screen">
          <motion.div
            initial={{ x: -200 }}
            whileInView={{ x: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="space-y-6 flex flex-col items-center lg:items-baseline"
          >
            <h2 className="text-2xl md:text-3xl lg:text-2xl xl:text-3xl font-bold text-center lg:text-left">
              Industry Standard Security for Your Digital Ecosystem
            </h2>
            <p className="text-center lg:text-left">
              Delivering advanced protection and compliance with
              industry-leading security solutions for your infrastructure.
            </p>
            <Button className="h-9 px-4 font-bold">
              Get Started <BsArrowRight />
            </Button>
          </motion.div>
          <motion.div
            initial={{ x: 200 }}
            whileInView={{ x: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="h-full w-full flex flex-col items-center justify-center"
          >
            <img
              src="./solutions-bg.png"
              alt="machina logic"
              className="md:max-w-[500px] lg:max-w-[900px]  w-full"
            />
          </motion.div>
        </div>
      </div>
      <div className="flex flex-col items-center max-w-7xl w-full">
        <motion.section
          initial={{ y: -200 }}
          whileInView={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="py-10 xl:py-24 flex flex-col items-start lg:items-left gap-4 px-4 text-justify xl:text-center"
        >
          <h2 className="text-2xl font-bold text-center lg:text-left">
            Redefining Cybersecurity Protection
          </h2>
          <p className="lg:text-left">
            At Machina Logic, we are redefining cybersecurity protection by
            pushing the boundaries of innovation and intelligence. In today’s
            rapidly evolving digital landscape, traditional defenses are no
            longer enough. Our advanced cybersecurity solutions are designed to
            outpace the threats of tomorrow, ensuring that your business remains
            secure from even the most sophisticated cyberattacks. With a focus
            on proactive defense, real-time monitoring, and machine
            learning-powered analysis, Machina Logic delivers comprehensive
            protection tailored to your unique infrastructure. Trust us to
            safeguard your data, fortify your network, and maintain your
            organization’s resilience against ever-evolving digital threats.
          </p>
        </motion.section>

        <motion.section
          initial={{ y: -200 }}
          whileInView={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="bg-gradient-to-r to-[#710661] from-[#4f1371] w-screen flex flex-col justify-center items-center"
        >
          <div className="max-w-7xl w-full flex flex-col items-center justify-center px-4 py-10 xl:py-24">
            <div className="space-y-4 w-full">
              <Title title="Unrivaled Industry Expert" />
              <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 w-full">
                {firstItems.map((item) => (
                  <motion.div
                    initial={{ y: 200 }}
                    whileInView={{ y: 0 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className="flex flex-col items-center w-full"
                  >
                    <div
                      className="bg-pink-600 rounded-md text-white capitalize p-4 w-full"
                      key={item}
                    >
                      <div className="text-center">{item}</div>
                    </div>
                    <FaArrowDown className="text-pink-700 mt-4 text-4xl hidden xl:flex" />
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-6 mt-10 xl:mt-6 w-full">
              <Title title="Deepest CPS Visibilty" />
              <div className="grid gap-6 text-white">
                <motion.div
                  initial={{ x: 200 }}
                  whileInView={{ x: 0 }}
                  transition={{ type: "spring", stiffness: 100 }}
                  className="col-span-6 border-pink-500 border-4 p-4 rounded-xl  space-y-6 w-full"
                >
                  <Subtitle subtitle="Operational Technology (OT)" />
                  <div className="grid grid-cols-3 md:grid-cols-7 gap-6 gap-y-10">
                    {secondItems.map((item) => (
                      <div className="flex flex-col items-center gap-2">
                        <img
                          src={item.icon}
                          alt={item.label}
                          className="h-10"
                        />
                        <IconLabel label={item.label} />
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ y: 200 }}
                  whileInView={{ y: 0 }}
                  transition={{ type: "spring", stiffness: 100 }}
                  className="col-span-6 md:col-span-3 border-4 border-pink-500 rounded-xl p-4 space-y-6"
                >
                  <Subtitle subtitle="Enterprise Internet of Things (IoT)" />
                  <div className="grid grid-cols-2 gap-6 gap-y-10">
                    {thirdItems.map((item) => (
                      <div className="flex flex-col items-center gap-2">
                        <img
                          src={item.icon}
                          alt={item.label}
                          className="h-10"
                        />
                        <IconLabel label={item.label} />{" "}
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ y: 200 }}
                  whileInView={{ y: 0 }}
                  transition={{ type: "spring", stiffness: 100 }}
                  className="col-span-6 md:col-span-3 border-4 border-pink-500 rounded-xl p-4 space-y-6"
                >
                  <Subtitle subtitle="Internet of Medical Things (IoMT)" />
                  <div className="grid grid-cols-2 gap-6  gap-y-10">
                    {fourthItems.map((item) => (
                      <div className="flex flex-col items-center gap-2">
                        <img
                          src={item.icon}
                          alt={item.label}
                          className="h-10"
                        />
                        <IconLabel label={item.label} />{" "}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Solutions;

const Title = (props: { title: string }) => {
  return <h3 className="font-bold text-2xl text-white">{props.title}</h3>;
};

const Subtitle = (props: { subtitle: string }) => {
  return (
    <h3 className="font-semibold text-center xl:text-left text-base">
      {props.subtitle}
    </h3>
  );
};

const IconLabel = (props: { label: string }) => {
  return <p className="text-center text-sm">{props.label}</p>;
};
