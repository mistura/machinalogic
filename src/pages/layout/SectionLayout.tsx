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
    <div className="max-w-7xl w-full grid lg:grid-cols-2 items-center justify-between ">
      <div className="grid gap-12 xl:gap-6 text-white lg:pl-12">
        <img
          src={"./logo-white.png"}
          alt="machina logic cybersecurity company"
          className={`h-16 lg:h-20`}
        />
        <p className="text-4xl lg:text-[60px] xl:text-[100px] text-left uppercase xl:leading-none">
          {props.textOne}{" "}
          <span className="font-black text-4xl lg:text-[80px] xl:text-[100px] lg:block lg:mt-6 ">
            {props.textTwo}
          </span>
        </p>
        <Button className="w-fit hidden lg:flex px-4 lg:w-[164px] h-12 font-bold text-base lg:text-xl xl:mt-12">
          <a href={props.url} className="">
            Learn More
          </a>
        </Button>
      </div>
      <div className="mt-4 md:mt-0">{props.leftChildren}</div>
    </div>
  );
};

export default SectionLayout;
