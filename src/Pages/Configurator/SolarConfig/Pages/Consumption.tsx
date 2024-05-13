import { useEffect, useMemo, useState } from "react";
import "../index.css";
import NextStep from "../Components/NextStep";
import Headline from "../Components/Headline";
import { useConfigurator } from "../../../../Context/ConfiguratorContext";
type Props = {
  nextStep: () => void;
};
const Consumption = (props: Props) => {
  //   Minimum electricity bill = 40 RON per month
  const MIN_ELECTRICITY = 40;
  const MAX_ELECTRICITY = 1000;
  //   Minimum monthly consumption is 5 KWh
  const MIN_CONSUMPTION = 25;
  const PROPORTION = useMemo(() => MIN_ELECTRICITY / MIN_CONSUMPTION, []);

  const [sliderValue, setSliderValue] = useState<any>(MIN_ELECTRICITY);
  const {
    setMonthlyConsumption,
    setYearlyConsumption,
    setTrifasedSystem,
    TrifasedSystem,
  } = useConfigurator();

  useEffect(() => {
    const MonthlyConsumption = Math.floor(sliderValue / PROPORTION).toString();
    const YearlyConsumption = (
      Math.floor(sliderValue / PROPORTION) * 12
    ).toString();
    setMonthlyConsumption(MonthlyConsumption);
    setYearlyConsumption(YearlyConsumption);
  }, [sliderValue]);

  return (
    <div
      className="flex flex-col md:flex-row justify-center  mx-auto max-w-[90vmin] xl:max-w-[1150px] px-[2vw] xl:px-[5vw] py-[5vh] rounded-[30px] bg-white"
      style={{ boxShadow: "0 3px 6px rgba(0, 0, 0, .161)" }}
    >
      <div className="flex flex-col justify-center md:justify-between items-stretch md:items-start w-full">
        <Headline title="Pasul 1" subtitle="consum" />
        <div
          className="flex flex-col items-start py-[30px] px-[24px] rounded-[11px]"
          style={{
            background: "hsla(0, 0%, 90%, .34)",
            boxShadow: "inset 0 3px 6px rgba(0, 0, 0, .161",
          }}
        >
          <span className="text-black font-medium text-[16px] xl:text-[20px] mb-5">
            Introduceți valoare medie a <br /> facturilor de energie lunare
          </span>
          <input
            className="slider w-full md:min-w-[250px] xl:min-w-[483px]"
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
        <span className="opacity-[.36] font-medium my-4 xl:my-5 text-[20px]">
          sau
        </span>
        <div
          className="flex flex-col items-start py-[30px] px-[24px] rounded-[11px]"
          style={{
            background: "hsla(0, 0%, 90%, .34)",
            boxShadow: "inset 0 3px 6px rgba(0, 0, 0, .161",
          }}
        >
          <span className="text-black font-medium text-[16px] xl:text-[20px] mb-5">
            Introduceți valoarea consumului <br /> mediu lunar în kWh
          </span>
          <input
            className="slider w-full md:min-w-[250px] xl:min-w-[483px]"
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
      <div className="flex flex-col w-full mt-8 md:mt-[3.6rem] xl:mt-[4.6rem] xl:ms-6">
        <span className="bg-[#f2f2f2] rounded-[11px] text-black py-[17px] px-[20px] xl:text-[1.3rem] font-bold">
          Consum lunar:
          <p className="float-right text-[#3e3e3e] font-medium xl:text-[18px]">
            {Math.floor(sliderValue / PROPORTION)} kWh
          </p>
        </span>
        <span className="bg-[#487288] rounded-[11px] text-white py-[17px] px-[20px] xl:text-[1.3rem] font-bold mt-8">
          Consum anual:
          <p className="float-right text-[#white] font-medium xl:text-[18px]">
            {Math.floor(sliderValue / PROPORTION) * 12} kWh
          </p>
        </span>
        <span className="mt-8 opacity-[.59] text-[14px] xl:text-[16px]">
          *Rezultatul corect al unui consum anual este un factor important în
          configurarea unui sistem potrivit.
        </span>
        <div className="flex flex-row items-center mt-5 ">
          <input
            type="checkbox"
            className="rounded-[50%] cursor-pointer w-[24px] h-[24px] xl:m-[7px]"
            onChange={() => setTrifasedSystem(!TrifasedSystem)}
          />
          <label
            className="ms-2 font-medium"
            style={{ color: "rgba(0, 0, 0, .6)" }}
          >
            Sistem Trifazat
          </label>
        </div>
        <NextStep nextStep={props.nextStep} className="mt-4 w-full" />
      </div>
    </div>
  );
};

export default Consumption;
