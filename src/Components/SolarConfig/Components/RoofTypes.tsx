import { useState } from "react";

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
      className="flex flex-row justify-center  mx-auto max-w-[1150px] px-[5vw] py-[5vh] rounded-[30px] bg-white"
      style={{ boxShadow: "0 3px 6px rgba(0, 0, 0, .161)" }}
    >
      <div className="flex flex-col justify-between items-start w-full">
        <div className="flex flex-row items-center justify-start mb-5">
          <span className="uppercase bg-[#487288] rounded-[31px] text-[27px] py-2 px-5 font-extrabold text-white">
            Pasul 2
          </span>
          <span className="uppercase text-[27px] py-2 px-5 font-extrabold text-gray-400">
            ACOPERIȘUL TĂU
          </span>
        </div>
        <span className="text-[20px] py-2 px-5 font-bold text-black mb-8">
          Cum este acoperișul dumneavoastră?
        </span>
        <div className="flex flex-row justify-evenly items-center w-full">
          <div className="flex flex-col items-center justify-center">
            <div
              onClick={() => setRoofType(1)}
              className={`w-[176px] h-[176px] rounded-[10px] border-[6px] ${
                roofType == 1 ? "border-[#487288]" : "border-gray-400"
              }`}
              style={{
                background: "url(/incline-roof.jpg)",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            />
            <span className="text-[19px] mt-4 font-semibold">
              Acoperis inclinat
            </span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div
              onClick={() => setRoofType(2)}
              className={`w-[176px] h-[176px] rounded-[10px] border-[6px] ${
                roofType == 2 ? "border-[#487288]" : "border-gray-400"
              }`}
              style={{
                background: "url(/flat-roof.jpg)",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            />
            <span className="text-[19px] mt-4 font-semibold">
              Acoperis drept
            </span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div
              onClick={() => setRoofType(3)}
              className={`w-[176px] h-[176px] rounded-[10px] border-[6px] ${
                roofType == 3 ? "border-[#487288]" : "border-gray-400"
              }`}
              style={{
                background: "url(/on-ground.jpg)",
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
          <button
            className="bg-[#487288] rounded-[30px] text-white py-[12px] px-[20px] text-[1.3rem] font-bold"
            onClick={handleNextStep}
          >
            Pasul urmator
          </button>
        </div>
      </div>
    </div>
  );
}

export default RoofTypes;
