import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

const leftSliderCards = [
  {
    id: 1,
    img: "/threat.png",
    title: "OT Threat Detection",
    description:
      "AI-driven monitoring for ICS/SCADA vulnerabilities, helping African energy operators reduce cyber risks by up to 40%.",
    catchPhrase: "Proactive Defense, Zero Downtime",
    note: "Tailored for the energy sector, unlike generic IT solutions.",
  },
  {
    id: 2,
    img: "/managed-service.jpg",
    title: "Managed OT Services",
    description:
      "24/7 monitoring and incident response aligned with IEC 62443, ensuring operational continuity for oil rigs and refineries.",
    catchPhrase: "Your Operations, Always Protected",
    note: "Preventing breaches in legacy systems still common in Nigeria’s oil industry.",
  },
  {
    id: 3,
    img: "/fibre.jpg",
    title: "Fiber Deployment for OT",
    description:
      "Secure fiber network infrastructure designed for industrial control systems, boosting connectivity and resilience.",
    catchPhrase: "Fast. Secure. Reliable.",
    note: "Integrated OT + IT protection, unlike traditional network providers.",
  },
];

const rightSliderCards = [
  {
    id: 4,
    img:"/simulator.webp",
    title: "OT Risk Simulation",
    description:
      "Interactive risk modeling that scores threats per industry — from utilities to transport — to guide investment decisions.",
    catchPhrase: "Know Your Risk Before Attackers Do",
    note: "First of its kind simulator for Africa’s industrial landscape.",
  },
  {
    id: 5,
    img: "/incidence.jpg",
    title: "Incident Response",
    description:
      "Rapid containment and forensic investigation for OT breaches, ensuring minimal downtime and regulatory compliance.",
    catchPhrase: "When Minutes Matter Most",
    note: "Reducing mean-time-to-recovery (MTTR) by up to 60%.",
  },
  {
    id: 6,
    img: "/compliance.jpg",
    title: "Regulatory Compliance",
    description:
      "Advisory and controls implementation to meet NERC, NIST, and IEC standards, ensuring safe OT environments.",
    catchPhrase: "Compliance Made Simple",
    note: "Go beyond checklists — achieve sustainable security posture.",
  },
];


const ExpertSwiper = () => {
  return (
   <section>
     <div className="md:h-screen md:flex hidden h-auto py-4 grid md:grid-cols-2 grid-cols-1 gap-x-2 overflow-hidden">
      <Swiper
        direction="vertical"
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
        className="h-full"
      >
        {leftSliderCards.map((card) => (
          <SwiperSlide key={card.id}>
            <section className="space-y-2 h-full">
            <div className="bg-white h-2/3 shadow-lg overflow-hidden flex flex-col">
              <img
                src={card.img}
                alt={card.title}
                className="h-60 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-black">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-500">{card.description}</p>
              </div>
            </div>

            <div className="p-4 bg-white h-1/3 space-y-3">
                <h3 className="text-lg font-semibold text-black">
                  {card.catchPhrase}
                </h3>
                <p className="text-sm text-gray-500">{card.note}</p>
              </div>

          </section>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        direction="vertical"
        autoplay={{
          delay: 7500,
          disableOnInteraction: true,
        }}
        loop={true}
        modules={[Autoplay]}
        className="h-full "
      >
        {rightSliderCards.map((card) => (
          <SwiperSlide key={card.id}>
           <section className="space-y-2 h-full">
              <div className="p-4 h-1/3 bg-white space-y-3">
                <h3 className="text-lg font-semibold text-black">
                  {card.catchPhrase}
                </h3>
                <p className="text-sm text-gray-500">{card.note}</p>
              </div>
            <div className="bg-white h-2/3 shadow-lg overflow-hidden flex flex-col">
              <img
                src={card.img}
                alt={card.title}
                className="h-60 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-black">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-500">{card.description}</p>
              </div>
            </div>
          </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    <div className="block md:hidden">
      <Swiper
        direction="horizontal"
        autoplay={{
          delay: 7500,
          disableOnInteraction: true,
        }}
        loop={true}
        modules={[Autoplay]}
        className="h-full "
      >
        {leftSliderCards.map((card) => (
          <SwiperSlide key={card.id}>
           <section className="space-y-2 h-full">

            <div className="bg-white h-2/3 shadow-lg overflow-hidden flex flex-col">
              <img
                src={card.img}
                alt={card.title}
                className="h-60 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-black">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-500">{card.description}</p>
              </div>
            </div>
          </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
   </section>
  );
};

export default ExpertSwiper;
