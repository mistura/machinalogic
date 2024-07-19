type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="flex items-center justify-center gap-4 min-h-screen">
      <div className="max-w-7xl w-full flex items-center justify-between">
        <div className="flex flex-col items-start gap-6">
          {" "}
          <img
            src="./logo.png"
            alt="machina logics cybersecurity company"
            className="h-24"
          />
          <h2 className="text-4xl font-semibold">
            Advanced cybersecurity protection for your{" "}
            <span className="font-black text-primary text-7xl flex items-end mt-2">
              Digital Ecosystem{" "}
              <div className="h-5 w-5 bg-orange-500 rounded-full -translate-y-4 ml-2"></div>
            </span>
          </h2>
        </div>

        <img
          src="./hero_img.png"
          alt="machina logic"
          className="max-h-[650px] h-full"
        />
      </div>
    </div>
  );
};

export default Hero;
