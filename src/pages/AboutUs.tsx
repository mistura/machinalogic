import { PageSectionLayout } from "./layout/PageSectionLayout";
import { PageHero } from "./PageHero";

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

  const items = [
    {
      title: "Who We are",
      subtitle: "Your Trusted Partner in Advanced Cybersecurity Solutions.",
      leftImage: "./about-one.png",
      bodyText:
        "At Machina Logic, we are dedicated to safeguarding your digital world. As a leading cybersecurity company, we specialize in providing cutting-edge solutions to protect your data and systems from evolving threats. Our team of experts leverages advanced technologies, including AI and machine learning, to deliver robust security measures tailored to your specific needs. With a commitment to innovation and excellence, Machina Logic ensures your organization's assets are secure, allowing you to focus on growth and success. Trust us to be your shield in the ever-changing landscape of cyber threats.",
    },
    {
      title: "Our Mission",
      subtitle:
        "Empowering Your Digital Security with Innovation and Dedication.",
      leftImage: "./about-two.png",
      bodyText:
        "At Machina Logic, our mission is to empower organizations with robust cybersecurity solutions that protect their digital assets and ensure business continuity. We are committed to delivering innovative, scalable, and reliable security measures tailored to the unique needs of each client. By leveraging advanced technologies and industry best practices, we strive to create a safer digital environment where businesses can thrive without fear of cyber threats.",
      position: "inverse",
    },
    {
      title: "Our Vision",
      subtitle:
        "Leading the Future of Cybersecurity with Excellence and Trust.",
      leftImage: "./about-three.png",
      bodyText:
        "Our vision is to be the global leader in cybersecurity, recognized for our unwavering dedication to protecting the digital world. We aim to set new standards in the industry by continuously evolving our solutions to address emerging threats and by fostering a culture of security awareness and resilience. Through our expertise and innovation, we envision a future where every organization can operate securely and confidently in the digital age.",
    },
    {
      title: "Our Expertise",
      subtitle:
        "Delivering Unmatched Cybersecurity Solutions Across Industries.",
      leftImage: "./about-four.png",
      bodyText: <BodyText />,
      position: "inverse",
    },
  ];

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
      <div className="">
        <PageSectionLayout items={items} />
      </div>
    </div>
  );
};

export default AboutUs;
