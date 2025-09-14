import { motion } from "framer-motion";
import { FaMapMarked } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Logo from "../../../public/newLogo-removebg-preview.png";
import FooterMenuItem from "../../components/FooterMenuItem";

const Footer = () => {
  const menuItems = [
    {
      title: "Menu",
      data: [
        { label: "Home", value: "/" },
        { label: "About", value: "/about-us" },
        { label: "Industries", value: "/industries" },
        { label: "Services", value: "/services" },
        { label: "Contact", value: "/contact" },
      ],
    },
    {
      title: "Industries",
      data: [
        { label: "Government", value: "/industries#government" },
        { label: "Oil & Gas", value: "/industries#oil&gas" },
        { label: "Banking", value: "/industries#banking" },
        { label: "aviation", value: "/industries#aviation" },
      ],
    },
    {
      title: "Solutions",
      data: [
        { label: "OT Cybersecurity", value: "/solutions#cybersecurity" },
        { label: "IT Cybersecurity", value: "/solutions#cybersecurity" },
        { label: "Network Management", value: "/solutions#ai" },
        { label: "Fibre Deployment & Operations",value: "/solutions#software-development",
        },
        // {
        //   label: "Digital Transformation",
        //   value: "/solutions#digital-transformation",
        // },
      ],
    },
  ];

  const contactItems = [
    {
      label: <FaPhone />,
      value: "+234 112 3456 347",
    },
    {
      label: <MdEmail />,
      value: "info@machinalogic.com",
    },
    {
      label: <FaMapMarked />,
      value: "Lekki, Lagos State.",
    },
  ];
  return (
    <motion.footer
      initial={{ y: 200, opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="p-4 py-8 xl:py-24 bg-gradient-to-br from-[#2A2C39] to-blue-950 w-screen xl:flex flex-col justify-center items-center"
    >
      <div className="max-w-7xl w-full flex flex-col items-start lg:grid grid-cols-6 gap-6">
        <div className="space-y-4 col-span-2 pt-12 lg:pt-0">
          <img
            src={Logo}
            alt="machina logics"
            className="max-w-[250px] lg:max-w-[180px]"
          />
          <p className="text-gray-300">
            Machina Logic is your number one cybersecurity solutions company
            with a track record that expands into network security, data
            protection, risk assessment and incident report.
          </p>
        </div>
        <div className=" flex flex-col items-start lg:grid grid-cols-3 col-span-3 gap-6">
          {menuItems.map((item) => (
            <FooterMenuItem item={item} key={item.title} />
          ))}
        </div>
        <div className="">
          <p className="text-lg font-semibold text-white uppercase">Contact</p>
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ staggerChildren: 0.8, duration: 0.3 }}
            className="mt-4 lg:mt-6 text-gray-300 grid gap-1"
          >
            {contactItems.map((item) => (
              <div className="flex items-center gap-4 text-white">
                {item.label} <span className="text-gray-300">{item.value}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ staggerChildren: 0.8, duration: 0.3 }}
          className="place-self-center bg-white text-black px-2 py-1 rounded-full text-center mt-8 max-w-[600px] w-full font-semibold"
        >
          Copyright{" "}
          <span className="uppercase font-extrabold text-primary">
            @MachinaLogic
          </span>{" "}
          {new Date().getFullYear()}
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
