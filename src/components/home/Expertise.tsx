import ExpertSwiper from "../ExpertSwiper";
import { AdjustedSectionLayout } from "./Industries";

const Expertise = () => {



// const cards = [
//   { id: 1, img: "/card1.png", title: "Most Popular Nature Photographers", author: "Cwanisk" },
//   { id: 2, img: "/card2.png", title: "Most Popular Nature Photographers", author: "Canicula" },
//   { id: 3, img: "/card3.png", title: "Most Popular Nature Photographers", author: "Canicula" },
//   { id: 4, img: "/card4.png", title: "Most Popular Nature Photographers", author: "Canicula" },
// ];
  // const LeftChildren = () => {
  //   return (
  //     <div className="secton grid md:grid-cols-2 gap-4 lg:gap-0 h-full w-full">
  //       <img
  //         src="./card 1.png"
  //         alt="secure your environment"
  //         className="h-full"
  //       />
  //       <img src="./Card 2.png" alt="managed services" className="" />
  //       <img
  //         src="./Card 3.png"
  //         alt="digital transformation"
  //         className="md:ml-[50%]"
  //       />
  //     </div>

  //      <section className=" h-screen grid grid-cols-2 gap-4 overflow-hidden">
  //     {cards.map((card, i) => (
  //       <motion.div
  //         key={card.id}
  //         className="bg-white shadow-lg overflow-hidden"
  //         initial={{ opacity: 0, y: 100 }} // start below
  //         animate={{ opacity: 1, y: 0 }} // move into place
  //         transition={{ duration: 0.6, delay: i * 0.2 }} // stagger animation
  //       >
  //         <img src={card.img} alt={card.title} className="h-40 w-full object-cover" />
  //         <div className="p-4">
  //           <h3 className="text-lg font-semibold">{card.title}</h3>
  //           <p className="text-sm text-gray-500">Posted by {card.author}</p>
  //         </div>
  //       </motion.div>
  //     ))}
  //   </section>
  //   );
  // };

  return (
    <AdjustedSectionLayout
      link="solutions"
      leftChildren={<ExpertSwiper />}
      textOne={"our OT"}
      textTwo={"expertise"}
      sectionBg=" bg-[#404040]"
      bg="bg-[#404040]"
    />
  );
};

export default Expertise;
