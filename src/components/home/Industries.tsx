import { Button } from "antd";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const Industries = () => {
  const items = [
    { label: "Government", icon: "./govt.jpg" },
    { label: "Oil and gas", icon: "./oil.png" },
    { label: "Banking", icon: "./bank.png" },
    { label: "Aviation", icon: "./industries/aviation.png" },
  ];
  const LeftChildren = () => {
    return (
      <div
        className={`flex flex-col md:grid md:grid-cols-2 gap-4 lg:gap-0 h-full w-full`}
      >
        {items.map((item) => (
          <motion.div
            initial={{ y: 200 }}
            whileInView={{ y: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              delay: 0,
              restSpeed: 0.5,
            }}
            key={item.label}
            className={twMerge(
              `rounded-md lg:rounded-none overflow-hidden bg-white flex flex-col items-center justify-center hover:scale-90 duration-200 ease-in-out`,
              (item.label.toLowerCase() === "oil and gas" ||
                item.label.toLowerCase() === "banking") &&
                "bg-gradient-to-tr from-purple-950 to bg-purple-600",
              item.label.toLowerCase() === "banking" && "order-4 xl:-order-none"
            )}
          >
            <p
              className={twMerge(
                `text-2xl font-black uppercase mt-12`,
                (item.label.toLowerCase() === "oil and gas" ||
                  item.label.toLowerCase() === "banking") &&
                  "text-white"
              )}
            >
              {item.label}
            </p>
            <img
              src={item.icon}
              alt={item.label}
              className="h-auto w-full object-contain mt-4"
            />
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <AdjustedSectionLayout
      link="industries"
      leftChildren={<LeftChildren />}
      textOne={"industries"}
      textTwo={"we serve"}
      bg=" bg-gradient-to-b from-purple-950 to bg-purple-600"
    />
  );
};

export default Industries;

export const AdjustedSectionLayout = (props: {
  textColor?: string;
  textBg?: string;
  btnStyle?: string;
  leftChildren: ReactNode;
  extra?: ReactNode;
  textOne: string;
  textTwo: string;
  bg?: string;
  logo?: string;
  showButton?: boolean;
  link?: string;
  align?: string;
}) => {
  return (
    <div
      className={twMerge(
        "lg:overflow-hidden section-shrink py-24 lg:py-0 lg:px-0 px-6",
        props.bg
      )}
    >
      <div
        className={twMerge(
          " w-full h-full grid lg:grid-cols-2 gap-28 items-center justify-between",
          props.align && "items-start"
        )}
      >
        <motion.div
          initial={{ x: 200 }}
          whileInView={{ x: 0 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
          className={twMerge(
            "grid gap-6 lg:pl-12 xl:justify-center text-white",
            props.textColor
          )}
        >
          <img
            src={props.logo ? props.logo : "./logo-white.png"}
            alt="machina logic cybersecurity company"
            className={`h-16`}
          />
          <p className="text-4xl lg:text-[50px] xl:text-[70px] text-left uppercase leading-none">
            {props.textOne}
            <span className="font-black text-4xl lg:text-[60px] xl:text-[70px] flex items-end xl:mt-4">
              {props.textTwo}
              <div
                className={twMerge(
                  "h-3 xl:h-5 w-3 xl:w-5 bg-white rounded-full -translate-y-1 lg:translate-y-1.5 lg:ml-1",
                  props.textBg
                )}
              ></div>
            </span>
          </p>
          {props.showButton !== false && (
            <Button
              className={twMerge(
                "w-[164px] h-12 font-bold text-base mt-8",
                props.btnStyle
              )}
            >
              <a href={props.link} className="font-semibold text-center ">
                Learn More
              </a>
            </Button>
          )}
          {props.extra}
        </motion.div>
        <motion.div
          initial={{ x: -200 }}
          whileInView={{ x: 0 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
          className=""
        >
          {props.leftChildren}
        </motion.div>
      </div>
    </div>
  );
};
