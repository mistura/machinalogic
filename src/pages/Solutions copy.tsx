import { PageSectionLayout } from "./layout/PageSectionLayout";
import { PageHero } from "./PageHero";
const items = [
  {
    title: "Our Solutions",
    subtitle: "Comprehensive Cybersecurity Services Tailored to Your Needs",
    leftImage: "./solutions/solutions.svg",
    bodyText:
      "At Machina Logic, we offer a wide range of cybersecurity solutions designed to protect your organization from emerging threats. Our services include risk assessment, threat detection, incident response, and compliance management. By leveraging our expertise and cutting-edge technologies, we ensure that your digital assets are secure and your business operations remain uninterrupted.",
  },
  {
    title: "Cybersecurity",
    subtitle: "Protecting Your Digital World",
    leftImage: "./solutions/cybersecurity.svg",
    bodyText:
      "Our core focus is on providing top-notch cybersecurity services to safeguard your organization's data and systems. We specialize in advanced threat detection, vulnerability management, and comprehensive data protection strategies. With Machina Logic, you can be confident that your digital environment is secure against a constantly evolving landscape of cyber threats.",
    position: "inverse",
    id: "cybersecurity",
  },
  {
    title: "Artificial Intelligence",
    subtitle: "Leveraging AI for Enhanced Security",
    leftImage: "./solutions/ai.svg",
    bodyText:
      "Artificial Intelligence (AI) is at the heart of our cybersecurity solutions. We use AI and machine learning to identify and neutralize threats in real-time, predict potential vulnerabilities, and automate response actions. Our AI-driven security solutions provide an unparalleled level of protection, ensuring that your organization stays ahead of cyber adversaries.",
    id: "ai",
  },
  {
    title: "Software Development",
    subtitle: "Building Secure and Resilient Applications",
    leftImage: "./solutions/software-development.svg",
    bodyText:
      "At Machina Logic, we understand the importance of security in application development. Our team specializes in creating secure, scalable, and resilient applications tailored to your business needs. We integrate robust security measures throughout the development lifecycle, ensuring that your applications are protected against threats from the ground up.",
    position: "inverse",
    id: "software-development",
  },
  {
    title: "Digital Transformation",
    subtitle: "Securely Navigating the Digital Landscape",
    leftImage: "./solutions/digital-transformation.svg",
    bodyText:
      "Digital transformation is essential for staying competitive in today's fast-paced market. Machina Logic provides cybersecurity solutions that enable your organization to embrace digital transformation securely. From cloud migration to the implementation of digital technologies, we ensure that your transformation journey is protected against cyber threats, allowing you to innovate with confidence.",
    id: "digital-transformation",
  },
];

const Industries = () => {
  return (
    <div>
      <PageHero
        overlay
        title={"Solutions"}
        bgImg={"./solutions/solutions-bg.jpg"}
        content={[
          "Cybersecurity.",
          "Artificial Intelligence.",
          "Digital Transformation.",
          "Software Development.",
        ]}
      />
      <PageSectionLayout items={items} />
    </div>
  );
};

export default Industries;
