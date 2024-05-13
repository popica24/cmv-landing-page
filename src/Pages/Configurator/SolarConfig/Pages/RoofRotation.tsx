import { useState } from "react";
import NextStep from "../Components/NextStep";
import Headline from "../Components/Headline";

type Props = {
  nextStep: () => void;
  previousStep: () => void;
};

const RoofRotation = (props: Props) => {
  const [rotation, setRotation] = useState("rotate-[180deg]");
  const [pointRotation, setPointRotation] = useState("rotate-[-90deg]");
  return (
    <div
      className="flex flex-col md:flex-row justify-center  mx-auto max-w-[90vmin] xl:max-w-[1150px] px-[5vw] py-[5vh] rounded-[30px] bg-white"
      style={{ boxShadow: "0 3px 6px rgba(0, 0, 0, .161)" }}
    >
      <div className="flex flex-col justify-center md:justify-between items-center md:items-start w-full">
        <Headline title="Pasul 2" subtitle="ACOPERIȘUL TĂU" />

        <span className="text-[14px] md:text-[20px] py-2 px-5 font-bold text-black">
          Care este orientarea acoperișului dumneavoastră?
        </span>
        <span className="text-[14px] md:text-[16px] py-2 px-5 text-gray-400 mb-8">
          Poți apăsa clic pe direcția dorită. (E, SE, S, SV, V)
        </span>
        <div className="flex justify-center items-center w-full">
          <div className="relative flex items-center justify-center flex-col">
            <span className="text-[18px] md:text-[25px] font-semibold text-gray-400">
              N
            </span>
            <span
              className="text-[18px] md:text-[25px] font-semibold absolute -left-[6%] cursor-pointer"
              onClick={() => {
                setRotation("rotate-[270deg]"),
                  setPointRotation("rotate-[0deg]");
              }}
            >
              V
            </span>
            <span
              className="text-[18px] md:text-[25px] font-semibold absolute left-[6%] bottom-[15%] cursor-pointer"
              onClick={() => {
                setRotation("rotate-[226deg]");
                setPointRotation("rotate-[-45deg]");
              }}
            >
              SV
            </span>
            <span
              className="text-[18px] md:text-[25px] font-semibold absolute -right-[6%] cursor-pointer"
              onClick={() => {
                setRotation("rotate-90"), setPointRotation("rotate-[-180deg]");
              }}
            >
              E
            </span>
            <span
              className="absolute text-[18px] md:text-[25px] font-semibold right-[6%] bottom-[15%] cursor-pointer"
              onClick={() => {
                setRotation("rotate-[136deg]"),
                  setPointRotation("rotate-[-136deg]");
              }}
            >
              SE
            </span>
            <span className="absolute text-[18px] md:text-[25px] font-semibold right-[4%] top-[16%] text-gray-400">
              NE
            </span>
            <span className="absolute text-[18px] md:text-[25px] font-semibold left-[4%] top-[16%] text-gray-400">
              NV
            </span>

            <div className="border-dotted border-[#487288] border-[12px] rounded-full p-4 m-3">
              <div className="bg-gray-200 w-[200px] xl:w-[260px] h-[200px] xl:h-[260px] flex items-center justify-center rounded-full border border-gray-400">
                <img
                  src="rooftop-above.png"
                  alt=""
                  className={`md:w-[200px] w-[150px] relative duration-700 transition-transform ${rotation}`}
                />
                <div
                  className={`absolute w-[50%] left-0 h-[2px] bg-black origin-right ${pointRotation} duration-500 transition-transform`}
                ></div>
              </div>
            </div>
            <span
              className="text-[18px] md:text-[25px] font-semibold cursor-pointer"
              onClick={() => {
                setRotation("rotate-180"), setPointRotation("rotate-[-90deg]");
              }}
            >
              S
            </span>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between w-full mt-8">
          <span
            className="cursor-pointer opacity-[.7]"
            onClick={props.previousStep}
          >
            &#8249; Pasul anterior
          </span>
          <NextStep nextStep={props.nextStep} />
        </div>
      </div>
    </div>
  );
};

export default RoofRotation;
