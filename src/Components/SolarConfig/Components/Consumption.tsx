import { useMemo, useState } from "react";
import "../index.css";
type Props = {
  nextStep: () => void;
};
const Consumption = (props: Props) => {
  //   Minimum electricity bill = 40 RON per month
  const MIN_ELECTRICITY = 40;
  const MAX_ELECTRICITY = 1000;
  //   Minimum monthly consumption is 5 KWh
  const MIN_CONSUMPTION = 25;
  const MAX_CONSUMPTION = 625;
  const PROPORTION = useMemo(() => MIN_ELECTRICITY / MIN_CONSUMPTION, []);

  const [sliderValue, setSliderValue] = useState<any>(MIN_ELECTRICITY);
  console.log(sliderValue * 20);

  return (
    <div
      className="flex flex-row justify-center  mx-auto max-w-[1150px] px-[5vw] py-[5vh] rounded-[30px] bg-white"
      style={{ boxShadow: "0 3px 6px rgba(0, 0, 0, .161)" }}
    >
      <div className="flex flex-col justify-between items-start w-full">
        <div className="flex flex-row items-center justify-start mb-5">
          <span className="uppercase bg-[#487288] rounded-[31px] text-[27px] py-2 px-5 font-extrabold text-white">
            Pasul 1
          </span>
          <span className="uppercase text-[27px] py-2 px-5 font-extrabold text-gray-400">
            consum
          </span>
        </div>
        <div
          className="flex flex-col items-start py-[30px] px-[24px] rounded-[11px]"
          style={{
            background: "hsla(0, 0%, 90%, .34)",
            boxShadow: "inset 0 3px 6px rgba(0, 0, 0, .161",
          }}
        >
          <span className="text-black font-medium text-[20px] mb-5">
            Introduceți valoare medie a <br /> facturilor de energie lunare
          </span>
          <input
            className="slider min-w-[483px]"
            type="range"
            onChange={(e) => setSliderValue(e.target.value)}
            value={sliderValue}
            name=""
            id=""
            min={MIN_ELECTRICITY}
            max={MAX_ELECTRICITY}
          />
          <span className="text-black font-medium text-[15px] mt-5">
            {sliderValue} RON
          </span>
        </div>
        <span className="opacity-[.36] font-medium my-5 text-[20px]">sau</span>
        <div
          className="flex flex-col items-start py-[30px] px-[24px] rounded-[11px]"
          style={{
            background: "hsla(0, 0%, 90%, .34)",
            boxShadow: "inset 0 3px 6px rgba(0, 0, 0, .161",
          }}
        >
          <span className="text-black font-medium text-[20px] mb-5">
            Introduceți valoarea consumului <br /> mediu lunar în kWh
          </span>
          <input
            className="slider min-w-[483px]"
            type="range"
            onChange={(e) => setSliderValue(e.target.value)}
            value={sliderValue}
            name=""
            id=""
            min={MIN_ELECTRICITY}
            max={MAX_ELECTRICITY}
          />
          <span className="text-black font-medium text-[15px] mt-5">
            {Math.floor(sliderValue / PROPORTION)} kWh
          </span>
        </div>
      </div>
      <div className="flex flex-col w-full mt-[4.6rem] ms-6">
        <span className="bg-[#f2f2f2] rounded-[11px] text-black py-[17px] px-[20px] text-[1.3rem] font-bold">
          Consum lunar:
          <p className="float-right text-[#3e3e3e] font-medium text-[18px]">
            {Math.floor(sliderValue / PROPORTION)} kWh
          </p>
        </span>
        <span className="bg-[#487288] rounded-[11px] text-white py-[17px] px-[20px] text-[1.3rem] font-bold mt-8">
          Consum anual:
          <p className="float-right text-[#white] font-medium text-[18px]">
            {Math.floor(sliderValue / PROPORTION) * 12} kWh
          </p>
        </span>
        <span className="mt-8 opacity-[.59] text-[16px]">
          *Rezultatul corect al unui consum anual este un factor important în
          configurarea unui sistem potrivit.
        </span>
        <div className="flex flex-row items-center mt-5">
          <input
            type="checkbox"
            className="rounded-[50%] cursor-pointer w-[24px] h-[24px] m-[7px]"
          />
          <label
            className="ms-2 font-medium"
            style={{ color: "rgba(0, 0, 0, .6)" }}
          >
            Sistem Trifazat
          </label>
        </div>
        <button
          className="bg-[#487288] rounded-[11px] text-white py-[17px] px-[20px] text-[1.3rem] font-bold mt-28"
          onClick={props.nextStep}
        >
          Pasul urmator
        </button>
      </div>
    </div>
  );
};

export default Consumption;
