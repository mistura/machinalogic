type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="flex items-center justify-center gap-4 min-h-screen hero bg-gray-100 section-shrink">
      <div className="max-w-7xl w-full grid grid-cols-3 items-center">
        <div className="flex flex-col items-start gap-6 col-span-2">
          <LogoComponent />
          <h2 className="text-3xl font-semibold ">
            Advanced cybersecurity protection for your{" "}
            <span className="font-black text-primary text-7xl flex items-end mt-2 w-fit">
              Digital Ecosystem{" "}
              <div className="h-5 w-5 bg-orange-500 rounded-full -translate-y-4 ml-2"></div>
            </span>
          </h2>
        </div>

        <img
          src="./hero_img.png"
          alt="machina logic"
          className="max-h-[650px] h-full hero-img col-span-1"
        />
      </div>
    </div>
  );
};

export default Hero;

export const LogoComponent = (props: { color?: string; height?: number }) => {
  console.log(props.height);
  return (
    <img
      src={props.color === "white" ? "./logo-white.png" : "./logo.png"}
      alt="machina logics cybersecurity company"
      className={`h-24`}
    />
  );
};
