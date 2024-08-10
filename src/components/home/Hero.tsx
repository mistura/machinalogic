import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="flex md:items-center justify-center gap-4 min-h-screen hero bg-gray-100 section-shrink p-4">
      <div className="max-w-7xl w-full grid md:grid-cols-2 lg:grid-cols-3 md:items-center">
        <motion.div
          initial={{ x: -500 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="flex flex-col items-start gap-6 lg:col-span-2"
        >
          <LogoComponent />
          <h2 className="text-2xl xl:text-3xl font-semibold ">
            Advanced cybersecurity protection for your{" "}
            <span className="font-black text-primary text-[52px] xl:text-7xl mt-6 lg:mt-0 xl:mt-6 block w-fit">
              Digital Ecosystem
              <span className="text-7xl leading-none">.</span>
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ x: 500 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <img
            src="./hero_img.png"
            alt="machina logic"
            className="max-w-[380px] lg:-ml-10 xl:-ml-0 xl:max-w-[650px] h-auto hero-img col-span-1 mt-24 md:mt-0"
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
