import { Button } from "antd";
import { ReactNode } from "react";

type Props = {
  textOne: string;
  textTwo: string;
  leftChildren: ReactNode;
  url: string;
};

const SectionLayout = (props: Props) => {
  return (
    <div className="max-w-7xl w-full grid grid-cols-2 items-center justify-between">
      <div className="grid gap-6 text-white">
        <img
          src={"./logo-white.png"}
          alt="machina logic cybersecurity company"
          className={`h-20`}
        />
        <p className="text-[120px] text-left uppercase leading-none">
          {props.textOne}{" "}
          <span className="font-black text-[120px] block">{props.textTwo}</span>
        </p>
        <Button className="w-[164px] h-12 font-bold text-xl">
          <a href={props.url} className="">
            Learn More
          </a>
        </Button>
      </div>
      <div className="">{props.leftChildren}</div>
    </div>
  );
};

export default SectionLayout;
