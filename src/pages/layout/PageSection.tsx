import { Button } from "antd";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const PageSection = (props: {
  position?: string;
  bodyText: ReactNode;
  subtitle: string;
  title: string;
  leftImage: string;
}) => {
  return (
    <div className="page-section min-h-screen shadow-md w-full flex flex-col items-center justify-center">
      <div className="flex flex-col md:flex-row gap-6 md:gap-0 max-w-7xl w-full py-12">
        <motion.div
          initial={{ x: -200 }}
          whileInView={{ x: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className={twMerge(
            "left basis-full flex flex-col items-center md:items-start justify-center gap-4 px-4 order-1 md:order-none",
            props.position?.toLowerCase() === "inverse" && "md:order-2"
          )}
        >
          <h2 className="capitalize text-xl text-center md:text-left font-bold text-primary">
            {props.title}
          </h2>
          <p className="-mt-3  text-center md:text-left">{props.subtitle}</p>
          <p className="text-justify text-gray-600">{props.bodyText}</p>
          <Button type="primary" className="mt-4 h-9">
            Get Started
          </Button>
        </motion.div>
        <motion.div
          initial={{ x: 200 }}
          whileInView={{ x: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="right basis-full flex items-center justify-center"
          // data-aos={
          //   props.position?.toLowerCase() === "inverse"
          //     ? "slide-up"
          //     : "slide-down"
          // }
        >
          <img
            src={props.leftImage}
            alt="machina logic cybersecurity experts"
            className={twMerge(
              "",
              props.position?.toLowerCase() === "inverse"
                ? "xl:-ml-40"
                : "xl:ml-40"
            )}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default PageSection;
