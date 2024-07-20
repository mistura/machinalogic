import { Button } from "antd";

const Industries = () => {
  const items = [
    { label: "Government", icon: "./govt.jpg" },
    { label: "Oil and gas", icon: "./oil.jpg" },
    { label: "Banking", icon: "./bank.png" },
  ];
  const LeftChildren = () => {
    return (
      <div className="grid grid-cols-2  h-full w-full bg-white">
        {items.map((item) => (
          <div className=" bg-white flex  flex-col border items-center p-6 hover:scale-75 duration-200">
            <p className="text-2xl font-black uppercase">{item.label}</p>
            <img src={item.icon} alt={item.label} className="h-60 mt-4" />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="h-screen bg-red-500 overflow-hidden section-shrink">
      <div className=" w-full h-full grid grid-cols-2 items-center justify-between">
        <div className="grid gap-6  justify-center text-white">
          <img
            src={"./logo-white.png"}
            alt="machina logic cybersecurity company"
            className={`h-20`}
          />
          <p className="text-[70px] text-left uppercase leading-none">
            Industries
            <span className="font-black text-[70px] flex items-end">
              we serve{" "}
              <div className="h-5 w-5 bg-white rounded-full -translate-y-1"></div>
            </span>
          </p>
          <Button className="w-[164px] h-12 font-bold text-base">
            <a href={"/"} className="">
              Learn More
            </a>
          </Button>
        </div>
        <LeftChildren />
      </div>
    </div>
  );
};

export default Industries;
