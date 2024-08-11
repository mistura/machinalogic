import { FaEnvelope, FaMapLocation, FaPhone } from "react-icons/fa6";
import { AdjustedSectionLayout } from "../components/home/Industries";
import Map from "../components/Map";
import ContactForm from "../components/ContactForm";
import { motion } from "framer-motion";

const Contact = () => {
  const Extra = () => {
    return (
      <div className="grid gap-6 mt-6">
        <a
          href="mailto:info@machinalogic.com"
          className="text-gray-500 flex items-center gap-6"
        >
          <FaEnvelope className="text-xl" /> info@machinalogic.com
        </a>

        <p className="text-gray-500 flex items-center gap-6">
          <FaMapLocation className="text-xl" />
          No. 12 ABC Road, off MNO Avenue,
          <br /> 6th floor, XYZ towers, Lagos State, <br /> Nigeria.
        </p>

        <p className="text-gray-500 flex items-center gap-6">
          <FaPhone className="text-xl" />
          +1234567890
        </p>
      </div>
    );
  };

  return (
    <div className="bg-gray-200 pt-24 w-full flex flex-col justify-center items-center gap-[120px] min-h-screen">
      {" "}
      <AdjustedSectionLayout
        logo="./logo.png"
        textBg="text-black"
        textColor="text-black"
        btnStyle="bg-darkgray text-white"
        leftChildren={<ContactForm />}
        //align="top"
        textOne={"Get In"}
        textTwo={"touch"}
        extra={<Extra />}
        showButton={false}
      />
      <motion.div
        initial={{ y: 200 }}
        whileInView={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
        className=""
      >
        {" "}
        <Map />
      </motion.div>
    </div>
  );
};

export default Contact;
