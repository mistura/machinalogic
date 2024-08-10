import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

export const PageHero = (props: {
  title: string;
  bgImg: string;
  content: Array<string>;
  overlay?: boolean;
}) => {
  return (
    <div className="h-screen overflow-hidden flex flex-col items-center justify-center relative">
      {props.overlay && (
        <div className="bg-black h-screen w-screen absolute left-0 top-0 z-10 opacity-50"></div>
      )}
      <img
        src={props.bgImg}
        alt="machina logic cybersecurity company"
        className="absolute top-0 left-0 object-cover object-center h-full w-full"
      />
      <motion.div
        initial={{ y: 200 }}
        whileInView={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="relative z-20 text-white font-bold tex-5xl grid gap-4"
      >
        <p className="text-center text-2xl uppercase text-secondary">
          {props.title}
        </p>
        <Typewriter
          options={{
            strings: props.content,
            autoStart: true,
            loop: true,
          }}
        />
      </motion.div>
    </div>
  );
};
