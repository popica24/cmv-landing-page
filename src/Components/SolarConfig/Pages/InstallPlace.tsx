import Headline from "../Components/Headline";
import Input from "../Components/Input";

const InstallPlace = () => {
  return (
    <div
      className="flex flex-col md:flex-row justify-center  mx-auto max-w-[90vmin] xl:max-w-[1150px] px-[2vw] xl:px-[5vw] py-[5vh] rounded-[30px] bg-white"
      style={{ boxShadow: "0 3px 6px rgba(0, 0, 0, .161)" }}
    >
      <div className="flex flex-col justify-center md:justify-between items-stretch md:items-start w-full">
        <Headline title="Pasul 3" subtitle="locatie" />

        <span className="text-black font-medium text-[16px] xl:text-[20px] mb-5">
          Introduceți valoare medie a <br /> facturilor de energie lunare
        </span>
        <form action="" className="w-full px-[5vw]">
          <div className="flex flex-col xl:flex-row items-center justify-center ">
            <Input
              placeholder="Oras"
              label="Oras"
              type="text"
              className="xl:me-10"
            />
            <Input
              placeholder="Strada"
              label="Strada"
              type="text"
              className="xl:ms-10"
            />
          </div>
          <div className="flex flex-col xl:flex-row items-center justify-center xl:mt-10">
            <Input
              placeholder="Numar"
              label="Numar"
              type="text"
              className="xl:me-10"
            />
            <Input
              placeholder="Cod postal (optional)"
              label="Cod postal (optional)"
              type="number"
              className="xl:ms-10"
            />
          </div>
          <button className="bg-[#487288] rounded-[30px] text-white py-[12px] px-[20px] text-[1.3rem] font-bold mt-10">
            Trimtie
          </button>
        </form>
      </div>
    </div>
  );
};

export default InstallPlace;
