import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";

type Props = {
  item: {
    title: string;
    data: {
      label: string;
      value: string;
    }[];
  };
};

const FooterMenuItem = (props: Props) => {
  return (
    <div className="grid gap-2 lg:gap-6">
      <motion.p
        initial={{ y: -10, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-lg font-semibold text-white uppercase"
      >
        {props.item.title}
      </motion.p>
      <motion.ol
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ staggerChildren: 0.8, duration: 0.3 }}
        className="text-gray-300 grid gap-1"
      >
        {props.item.data.map((submenu) => (
          <li className="group flex items-center gap-2 opacity capitalize">
            <a href={submenu.value} className="">
              {submenu.label}
            </a>
            <FaArrowRight className="group-hover:opacity-100 -translate-x-2 group-hover:translate-x-2 opacity-0 text-white duration-200" />
          </li>
        ))}
      </motion.ol>
    </div>
  );
};

export default FooterMenuItem;
