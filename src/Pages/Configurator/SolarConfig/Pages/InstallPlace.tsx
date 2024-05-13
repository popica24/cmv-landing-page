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
          Specifică locul instalării
        </span>
        <form action="" className="w-full px-[5vw]">
          <div className="flex flex-col xl:flex-row items-center justify-center ">
            <Input
              placeholder="Nume Prenume"
              label="Nume Prenume"
              type="text"
              className="xl:me-10"
            />
            <Input
              placeholder="Email"
              label="Email"
              type="text"
              className="xl:ms-10"
            />
          </div>
          <div className="flex flex-col xl:flex-row items-center justify-center xl:mt-10">
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
              placeholder="Telefon"
              label="Telefon"
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

          <textarea
            placeholder="Mesaj"
            name=""
            id=""
            className="w-full min-h-[100px] max-h-[100px] border focus:border-gray-500 outline-none transition-colors p-3 text-sm my-2 xl:mt-10"
          ></textarea>

          <button
            className={`bg-[#487288] hover:bg-[#2a4350] transition-colors duration-300 rounded-full text-white py-[15px] px-[30px] text-sm md:text-base xl:text-xl font-bold w-full`}
          >
            Trimite
          </button>
        </form>
      </div>
    </div>
  );
};

export default InstallPlace;
