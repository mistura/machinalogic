import { PageSectionLayout } from "./layout/PageSectionLayout";
import { PageHero } from "./PageHero";

const items = [
  {
    title: "Who We Are",
    subtitle: "Your Trusted Partner in Advanced Cybersecurity Solutions.",
    leftImage: "./about-one.png",
    bodyText:
      "At Machina Logic, we are dedicated to safeguarding your digital world. As a leading cybersecurity company, we specialize in providing cutting-edge solutions to protect your data and systems from evolving threats. Our team of experts leverages advanced technologies, including AI and machine learning, to deliver robust security measures tailored to your specific needs. With a commitment to innovation and excellence, Machina Logic ensures your organization's assets are secure, allowing you to focus on growth and success. Trust us to be your shield in the ever-changing landscape of cyber threats.",
  },
  {
    title: "Government",
    subtitle: "Cybersecurity Solutions for Government Agencies",
    leftImage: "./about-two.png",
    bodyText:
      "Machina Logic provides comprehensive cybersecurity solutions tailored to the unique needs of government agencies. We understand the critical importance of protecting national security and public trust. Our services include advanced threat detection, secure communication channels, and robust data protection measures. By leveraging our expertise, government entities can safeguard sensitive information, ensure compliance with regulations, and maintain the integrity of their operations.",
    position: "inverse",
  },
  {
    title: "Oil and Gas",
    subtitle: "Protecting Oil and Gas Infrastructure",
    leftImage: "./about-three.png",
    bodyText:
      "The oil and gas industry faces unique cybersecurity challenges due to its critical infrastructure and high-value assets. Machina Logic offers specialized solutions designed to protect this vital sector from cyber threats. Our services include real-time monitoring, threat intelligence, and incident response tailored to the specific needs of oil and gas operations. With our comprehensive approach, we help ensure the safety and continuity of your operations, protecting both physical and digital assets.",
  },
  {
    title: "Banking",
    subtitle: "Securing Financial Institutions",
    leftImage: "./about-four.png",
    bodyText:
      "Financial institutions are prime targets for cyber attacks due to the sensitive nature of their data and the high stakes involved. Machina Logic provides robust cybersecurity solutions to protect banks and other financial entities from these threats. Our offerings include fraud detection systems, secure transaction protocols, and comprehensive data encryption. By partnering with us, financial institutions can ensure the confidentiality, integrity, and availability of their critical data, maintaining trust and compliance in a constantly evolving threat landscape.",
    position: "inverse",
  },
  {
    title: "Aviation",
    subtitle: "Aviation Cybersecurity Services",
    leftImage: "./about-five.png",
    bodyText:
      "The aviation industry requires specialized cybersecurity measures to protect against sophisticated threats targeting its complex systems. Machina Logic offers tailored solutions to secure aviation infrastructure, including airlines, airports, and air traffic control systems. Our services include advanced threat detection, secure communication channels, and comprehensive risk management strategies. With our expertise, the aviation industry can safeguard its operations, ensuring passenger safety and the integrity of critical systems.",
  },
];

const Industries = () => {
  return (
    <div>
      <PageHero
        title={"Industries"}
        bgImg={"./industries-bg.webp"}
        content={[
          "Empowering Digital Security.",
          "Leading the Future of Cybersecurity.",
          "Unmatched Cybersecurity Solutions.",
        ]}
      />
      <PageSectionLayout items={items} />
    </div>
  );
};

export default Industries;
