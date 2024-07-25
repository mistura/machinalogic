import { Button } from "antd";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import Typewriter from "typewriter-effect";

const AboutUs = () => {
  const BodyText = () => {
    const items = [
      {
        label: "Advanced Threat Detection",
        value:
          "Utilizing AI and machine learning to identify and neutralize sophisticated cyber threats.",
      },
      {
        label: "Data Privacy and Protection",
        value:
          "Ensuring the confidentiality, integrity, and availability of your critical data.",
      },
      {
        label: "Cloud Security",
        value:
          "Securing your cloud infrastructure with state-of-the-art solutions.",
      },
      {
        label: "Compliance and Regulatory Guidance",
        value:
          "Helping you navigate and comply with complex cybersecurity regulations.",
      },
      {
        label: "Incident Response and Recovery",
        value:
          "Providing rapid response and recovery solutions to minimize the impact of cyber incidents.",
      },
    ];

    return (
      <div className="grid gap-4">
        <p className="">
          Machina Logic stands at the forefront of cybersecurity, offering
          unparalleled expertise across a wide range of industries. We
          specialize in:
        </p>
        <ol className="flex flex-col items-start gap-2 list-disc list-inside">
          {items.map((item) => (
            <li className="font-semibold text-primary">
              {item.label}:{" "}
              <span className="font-normal text-gray-600"> {item.value}</span>
            </li>
          ))}
        </ol>
      </div>
    );
  };

  return (
    <div>
      <PageHero
        bgImg="./about-hero-bg.webp"
        title="About us"
        content={[
          "A Deep Dive Into Machina Logic.",
          "Automated Digital Protection",
          "Secure Network Architecture",
          "Advanced Threat Detection System",
          "Secure Software Development Lifecycle",
        ]}
        overlay
      />
      <div className="flex items-center justify-center py-12 bg-white shadow-md">
        <PageSection
          leftImage="./about-one.png"
          bodyText={
            "At Machina Logic, we are dedicated to safeguarding your digital world. As a leading cybersecurity company, we specialize in providing cutting-edge solutions to protect your data and systems from evolving threats. Our team of experts leverages advanced technologies, including AI and machine learning, to deliver robust security measures tailored to your specific needs. With a commitment to innovation and excellence, Machina Logic ensures your organization's assets are secure, allowing you to focus on growth and success. Trust us to be your shield in the ever-changing landscape of cyber threats."
          }
          subtitle={"Your Trusted Partner in Advanced Cybersecurity Solutions."}
          title={"Who We are"}
        />
      </div>
      <div className="flex items-center justify-center py-12 ">
        {" "}
        <PageSection
          position="inverse"
          leftImage="./about-two.png"
          bodyText={
            "At Machina Logic, our mission is to empower organizations with robust cybersecurity solutions that protect their digital assets and ensure business continuity. We are committed to delivering innovative, scalable, and reliable security measures tailored to the unique needs of each client. By leveraging advanced technologies and industry best practices, we strive to create a safer digital environment where businesses can thrive without fear of cyber threats."
          }
          subtitle={
            "Empowering Your Digital Security with Innovation and Dedication."
          }
          title={"Our Mission"}
        />
      </div>
      <div className="flex items-center justify-center py-12 bg-white shadow-md">
        {" "}
        <PageSection
          leftImage="./about-three.png"
          bodyText={
            "Our vision is to be the global leader in cybersecurity, recognized for our unwavering dedication to protecting the digital world. We aim to set new standards in the industry by continuously evolving our solutions to address emerging threats and by fostering a culture of security awareness and resilience. Through our expertise and innovation, we envision a future where every organization can operate securely and confidently in the digital age."
          }
          subtitle={
            "Leading the Future of Cybersecurity with Excellence and Trust"
          }
          title={"Our Vision"}
        />
      </div>
      <div className="flex items-center justify-center py-12">
        {" "}
        <PageSection
          position="inverse"
          leftImage="./about-four.png"
          bodyText={<BodyText />}
          subtitle={
            "Delivering Unmatched Cybersecurity Solutions Across Industries"
          }
          title={"Our Expertise"}
        />
      </div>
    </div>
  );
};

export default AboutUs;

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
        className="absolute top-0 left-0 object-cover object-center"
      />
      <div className="relative z-20 text-white font-bold tex-5xl grid gap-4">
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
      </div>
    </div>
  );
};

export const PageSection = (props: {
  position?: string;
  bodyText: ReactNode;
  subtitle: string;
  title: string;
  leftImage: string;
}) => {
  return (
    <div className="flex max-w-7xl w-full">
      <div
        className={twMerge(
          "left basis-full flex flex-col items-start justify-center gap-4 px-4",
          props.position?.toLowerCase() === "inverse" && "order-2"
        )}
      >
        <h2 className="capitalize text-xl font-bold text-primary">
          {props.title}
        </h2>
        <p className="-mt-3">{props.subtitle}</p>
        <p className="text-justify text-gray-600">{props.bodyText}</p>
        <Button type="primary" className="mt-4 h-9">
          Get Started
        </Button>
      </div>
      <div className="right basis-full flex items-center justify-center">
        <img
          src={props.leftImage}
          alt="machina logic cybersecurity experts"
          className=""
        />
      </div>
    </div>
  );
};
