import { Button } from "antd";
import { motion } from "framer-motion";
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex pt-[100px] items-center justify-center gap-4 min-h-screen header-gradient section-shrink p-4">
      <div className="max-w-7xl basis-full w-full flex flex-col items-center lg:grid grid-cols-2 pt-24 md:pt-0 pb-12">
        <motion.div
          initial={{ x: -500 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="flex flex-col items-center lg:items-baseline gap-6 lg:px-4"
        >
          {/* <LogoComponent /> */}
          <h2 className=" text-center lg:text-left font-bold md:font-black lg:font-bold xl:font-black text-white text-4xl md:text-[52px] mt-6 lg:mt-0 leading-tight">
            Secure Africa's Critical <br/> Infrastructure with OT Cybersecurity
            {/* <span className="text-7xl leading-none">.</span> */}
          </h2>
          <p className="text-lg text-center text-white lg:text-left">
           “Safeguard your OT systems from rising threats. As Nigeria’s 
           leading OT provider, we protect ICS/SCADA in oil & gas, utilities, and more with integrated IT, network, and fiber solutions.”
          </p>

          <div className="flex items-center gap-6 mt-6">
            <Button type="primary" className="h-12 w-[184px] font-semibold">
              Get Started <FaArrowCircleRight className="text-lg" />
            </Button>
            <Link
              to="/about-us"
              className="group font-semibold text-primary hover:text-blue-700 flex items-center gap-2 duration-200"
            >
              Learn More
              <FaArrowCircleRight className="opacity-0 -translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 duration-200" />
            </Link>
          </div>
        </motion.div>

        <motion.div
          exit={{ y: 200 }}
          initial={{ x: 500 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="flex flex-col items-end justify-center basis-full"
        >
          <img
            src="./hero.png"
            alt="machina logic"
            className="max-w-[450px] bor xl:max-w-[500px] h-auto hero-img mt-5 lg:mt-0 drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

export const LogoComponent = (props: { color?: string; height?: number }) => {
  console.log(props.height);
  return (
    <img
      src={props.color === "white" ? "./logo-white.png" : "./logo.png"}
      alt="machina logics cybersecurity company"
      className={`h-20 lg:h-24`}
    />
  );
};
