type Props = {
  nextStep: () => void;
  previousStep: () => void;
};

const InstallPlace = (props: Props) => {
  return (
    <div
      className="flex flex-row justify-center  mx-auto max-w-[1150px] px-[5vw] py-[5vh] rounded-[30px] bg-white"
      style={{ boxShadow: "0 3px 6px rgba(0, 0, 0, .161)" }}
    >
      {" "}
      <div className="flex flex-col justify-between items-start w-full">
        <div className="flex flex-row items-center justify-start mb-5">
          <span className="uppercase bg-[#487288] rounded-[31px] text-[27px] py-2 px-5 font-extrabold text-white">
            Pasul 3
          </span>
          <span className="uppercase text-[27px] py-2 px-5 font-extrabold text-gray-400">
            LOCAȚIE
          </span>
        </div>
        <span className="text-[20px] py-2 px-5 font-bold text-black mb-8">
          Te rugăm să specifici locul de instalare.
        </span>
        <form action="" className="w-full px-[5vw]">
          <div className="flex flex-row items-center justify-center ">
            <div className="relative h-11 w-full min-w-[200px] me-10">
              <input
                type="text"
                required
                placeholder="Oras"
                className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
              />
              <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-[#487288] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Oras
              </label>
            </div>
            <div className="relative h-11 w-full min-w-[200px] ms-10">
              <input
                type="text"
                required
                placeholder="Strada"
                className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
              />
              <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-[#487288] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Strada
              </label>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center w-full mt-10">
            <div className="relative h-11 w-full min-w-[200px] me-10">
              <input
                type="text"
                required
                placeholder="Numar"
                className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
              />
              <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-[#487288] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Numar
              </label>
            </div>
            <div className="relative h-11 w-full min-w-[200px] ms-10">
              <input
                type="number"
                placeholder="Cod postal (optional)"
                className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
              />
              <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-[#487288] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Cod postal (optional)
              </label>
              <p className="font-medium mt-10">
                Cauta cod postal{" "}
                <a
                  target="_blank"
                  className="text-[#07C] underline"
                  href="https://www.coduripostale.ro/"
                >
                  aici
                </a>
              </p>
            </div>
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
