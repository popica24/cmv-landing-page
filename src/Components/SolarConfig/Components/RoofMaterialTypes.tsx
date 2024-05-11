import { useState } from "react";

type Props = {
  nextStep: () => void;
  previousStep: () => void;
};

const RoofMaterialTypes = (props: Props) => {
  const [roofType, setRoofType] = useState(1);
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
                background: "url(/tigla-ceramica.jpg)",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            />
            <span className="text-[19px] mt-4 font-semibold">
              Țiglă ceramica
            </span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div
              onClick={() => setRoofType(2)}
              className={`w-[176px] h-[176px] rounded-[10px] border-[6px] ${
                roofType == 2 ? "border-[#487288]" : "border-gray-400"
              }`}
              style={{
                background: "url(/tigla-beton.jpg)",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            />
            <span className="text-[19px] mt-4 font-semibold">
              Țiglă din beton
            </span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div
              onClick={() => setRoofType(3)}
              className={`w-[176px] h-[176px] rounded-[10px] border-[6px] ${
                roofType == 3 ? "border-[#487288]" : "border-gray-400"
              }`}
              style={{
                background: "url(/tabla-zincata.jpg)",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            />
            <span className="text-[19px] mt-4 font-semibold">
              Tabla zincata
            </span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div
              onClick={() => setRoofType(4)}
              className={`w-[176px] h-[176px] rounded-[10px] border-[6px] ${
                roofType == 4 ? "border-[#487288]" : "border-gray-400"
              }`}
              style={{
                background: "url(/sindrila.jpg)",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            />
            <span className="text-[19px] mt-4 font-semibold">Şindrilă</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div
              onClick={() => setRoofType(5)}
              className={`w-[176px] h-[176px] rounded-[10px] border-[6px] ${
                roofType == 5 ? "border-[#487288]" : "border-gray-400"
              }`}
              style={{
                background: "url(/ardezie.jpg)",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            />
            <span className="text-[19px] mt-4 font-semibold">Ardezie</span>
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
            onClick={props.nextStep}
          >
            Pasul urmator
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoofMaterialTypes;
