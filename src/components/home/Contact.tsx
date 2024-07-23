import { FaEnvelope, FaMapLocation, FaPhone } from "react-icons/fa6";
import Map from "../Map";
import { AdjustedSectionLayout } from "./Industries";

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
    <div className="py-24">
      {" "}
      <AdjustedSectionLayout
        logo="./logo.png"
        textBg="text-black"
        textColor="text-black"
        btnStyle="bg-darkgray text-white"
        leftChildren={<Map />}
        textOne={"Get In"}
        textTwo={"touch"}
        extra={<Extra />}
      />
    </div>
  );
};

export default Contact;
