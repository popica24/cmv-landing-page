import { useState } from "react";
import NextStep from "../Components/NextStep";
import Headline from "../Components/Headline";

type Props = {
  nextStep: () => void;
  previousStep: () => void;
  toForm: () => void;
};

function RoofTypes(props: Props) {
  const [roofType, setRoofType] = useState(1);

  const handleNextStep = () => {
    if (roofType == 1) {
      return props.nextStep();
    }
    return props.toForm();
  };

  return (
    <div
      className="flex flex-col md:flex-row justify-center  mx-auto max-w-[90vmin] xl:max-w-[1150px] px-[5vw] py-[5vh] rounded-[30px] bg-white"
      style={{ boxShadow: "0 3px 6px rgba(0, 0, 0, .161)" }}
    >
      <div className="flex flex-col justify-center md:justify-between items-center md:items-start w-full">
        <Headline title="Pasul 2" subtitle="ACOPERIȘUL TĂU" />

        <span className="text-[14px] md:text-[20px] py-2 px-5 font-bold text-black mb-8">
          Cum este acoperișul dumneavoastră?
        </span>
        <div className="flex flex-col md:flex-row justify-evenly items-center w-full">
          <div className="flex flex-col items-center justify-center">
            <div
              onClick={() => setRoofType(1)}
              className={`w-[176px] h-[176px] rounded-[10px] border-[6px] transition-colors duration-500 ${
                roofType == 1
                  ? "border-[#487288]"
                  : "border-gray-400 cursor-pointer"
              }`}
              style={{
                background: "url(/incline-roof.avif)",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            />
            <span className="text-[19px] mt-4 font-semibold">
              Acoperiș înclinat
            </span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div
              onClick={() => setRoofType(2)}
              className={`w-[176px] h-[176px] rounded-[10px] border-[6px] transition-colors duration-500 ${
                roofType == 2
                  ? "border-[#487288]"
                  : "border-gray-400 cursor-pointer"
              }`}
              style={{
                background: "url(/flat-roof.jpg)",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            />
            <span className="text-[19px] mt-4 font-semibold">
              Acoperiș drept
            </span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div
              onClick={() => setRoofType(3)}
              className={`w-[176px] h-[176px] rounded-[10px] border-[6px] transition-colors duration-500 ${
                roofType == 3
                  ? "border-[#487288]"
                  : "border-gray-400 cursor-pointer"
              }`}
              style={{
                background: "url(/on-ground.avif)",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            />
            <span className="text-[19px] mt-4 font-semibold">Pe sol</span>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between w-full mt-8">
          <span
            className="cursor-pointer opacity-[.7]"
            onClick={props.previousStep}
          >
            &#8249; Pasul anterior
          </span>
          <NextStep nextStep={handleNextStep} />
        </div>
      </div>
    </div>
  );
}

export default RoofTypes;
