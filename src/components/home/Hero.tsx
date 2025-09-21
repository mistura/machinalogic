import { Button } from "antd";
import { motion } from "framer-motion";
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from '../../../public/newLogo-removebg-preview.png'

const Hero = () => {
  return (
    <div className="section flex relative pt-[100px] items-center justify-center gap-4 min-h-screen header-gradient section-shrink p-4">
      <div className="max-w-7xl basis-full w-full flex flex-col items-center lg:grid grid-cols-2 pt-0 md:pt-0 pb-12">
        <motion.div
          initial={{ x: -500 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="flex flex-col items-center lg:items-baseline gap-6 lg:px-4"
        >
            <div>
            <a href="/">
              <img
                src={Logo}
                alt="machina logics cybersecurity"
                className="max-w-[140px] hidden md:flex md:max-w-[160px] w-full"
              />
            </a>
          </div>
          {/* <LogoComponent /> */}
          <h2 className=" text-center lg:text-left font-bold md:font-black lg:font-bold xl:font-black text-white text-xl md:text-[42px] md:mt-6 mt-[24px] lg:mt-0 leading-tight">
           OT Cybersecurity for Africa’s Critical Systems
            {/* <span className="text-7xl leading-none">.</span> */}
          </h2>
          <p className="text-lg text-center text-white lg:text-left">
           Safeguard your OT systems from rising threats. As Nigeria’s 
           leading OT provider, we protect ICS/SCADA in oil & gas, utilities, and more with integrated IT, network, and fiber solutions.
          </p>

          <div className="flex items-center gap-6 mt-6">
            <Button type="primary" className="h-12 w-[184px] font-semibold">
              Get Started <FaArrowCircleRight className="text-lg" />
            </Button>
            <Link
              to="/about-us"
              className="group font-semibold hover:text-[#00BFFF] text-white  hover:border-[1.5px] py-3 px-3 rounded-md hover:border-[#00BFFF] border-white flex items-center gap-2 duration-200"
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
            className="md:max-w-[450px] max-w-[250px] bor xl:max-w-[500px] h-auto hero-img mt-5 lg:mt-0 drop-shadow-2xl"
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
