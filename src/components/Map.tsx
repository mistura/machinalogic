import { Button, Form, Input } from "antd";
import "mapbox-gl/dist/mapbox-gl.css";
import {
  FaArrowCircleRight,
  FaEnvelope,
  FaPhone,
  FaUser,
} from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";

const { TextArea } = Input;

function MapComponent() {
  return (
    <div className="md:px-24 px-0 space-y-4 text-black ">
      <section>
        <h3 className="text-2xl font-semibold text-center">Send a Message!</h3>
        <p className="text-sm text-center">Get In Touch for OT Consultation</p>
      </section>
      <Form layout="vertical">
        <Form.Item required>
          <Input
            placeholder="Full Name"
            className="rounded-lg border-[1.5px] border-[#00BFFF] bg-transparent"
            prefix={<FaUser />}
          />
        </Form.Item>
        <Form.Item required>
          <Input
            placeholder="Email"
            className="rounded-lg border-[1.5px] border-[#00BFFF] bg-transparent"
            prefix={<MdMarkEmailUnread />}
          />
        </Form.Item>
        <Form.Item required>
          <TextArea
            rows={3}
            placeholder="type message ..."
            className="rounded-lg border-[1.5px] border-[#00BFFF] bg-transparent"
          />
        </Form.Item>

        <Button
          type="primary"
          className="h-12  w-full font-semibold"
        >
          Request Assessment <FaArrowCircleRight className="text-lg" />
        </Button>
      </Form>
      <div className="grid text-[#404040] my-5 grid-cols-3 w-1/3 m-auto gap-6 mt-6">
        <FaEnvelope className="text-xl text-[#404040] " />
        <FaMapLocation className="text-xl" />
        <FaPhone className="text-xl" />
      </div>
    </div>
  );
}

export default MapComponent;
