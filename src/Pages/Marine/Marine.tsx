import Ship from "./Components/Ship";
import MarineService from "./MarineService";

const Marine = () => {
  document.title = "CMV Electrical Solutions | Marine Services";

  return (
    <>
      <div className="mt-12 lg:mt-48">
        <div className="flex flex-col items-center justify-center font-roboto w-full">
          <div className="relative">
            <h1 className="tracking-wider max-w-[55ch] text-[1rem] sm:text-[1.5rem] lg:text-[2.1rem] font-semibold uppercase ms-0 lg:ms-[18rem] xl:ms-[29.6rem]">
              Construim viitorul{" "}
              <span className="text-linear-gradient-yellow text-[1.5rem] sm:text-[2.1rem] lg:text-[2.5rem] font-bold">
                NAVIGATIEI
              </span>{" "}
              <br />
              industriale
            </h1>
            <div className="absolute z-10 -left-4 xl:-top-44 -top-8">
              <Ship />
            </div>
          </div>
          <article className="bg-[#487288] w-full flex items-center justify-center flex-col mt-4 pt-4 relative pb-[8.2rem]">
            <div className="max-w-[38ch] sm:max-w-[55ch] lg:max-w-[77ch] flex flex-col md:items-start items-center ms-0 lg:ms-[18rem] xl:ms-[29.6rem]">
              <span className="text-white lg:text-[1.125rem] leading-5 font-normal text-xs md:text-base">
                Ne dedicăm să oferim servicii de înaltă calitate și soluții
                personalizate pentru industria navală. Cu o experiență vastă
                suntem partenerul ideal pentru întreținerea, reparația și
                modernizarea flotelor industriale.
              </span>
              <button className="my-6 rounded-[164px] border-2 border-[#ECA72C] text-white py-2 px-6 inline-flex items-center w-full justify-center lg:w-fit">
                Despre noi
                <svg
                  className="ms-2"
                  width="12"
                  height="8.67"
                  viewBox="0 0 18 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.7468 2.1256C17.7525 1.8633 17.6765 1.60573 17.5291 1.38868C17.3817 1.17163 17.1703 1.0059 16.9243 0.914519C16.6784 0.823143 16.4101 0.810663 16.1568 0.878815C15.9034 0.946967 15.6777 1.09236 15.5108 1.29479L8.89396 9.01858L2.27944 1.29479C2.17652 1.15476 2.04586 1.03749 1.89552 0.950321C1.74518 0.863152 1.57841 0.807963 1.40576 0.78821C1.2331 0.768457 1.05826 0.784566 0.892122 0.835527C0.725979 0.886489 0.5721 0.971205 0.440214 1.08437C0.308331 1.19754 0.201349 1.33672 0.125744 1.49319C0.0501384 1.64967 0.00767513 1.82007 0.000974602 1.99372C-0.00572592 2.16737 0.0234031 2.34054 0.0867252 2.50237C0.150049 2.66421 0.246103 2.81122 0.368877 2.93422L7.93497 11.7772C8.05348 11.9161 8.20057 12.0276 8.36635 12.1041C8.53212 12.1806 8.71256 12.2202 8.89512 12.2202C9.07769 12.2202 9.25813 12.1806 9.4239 12.1041C9.58968 12.0276 9.73692 11.9161 9.85543 11.7772L17.4288 2.93422C17.6272 2.71083 17.7397 2.4243 17.7468 2.1256Z"
                    className="fill-current"
                  />
                </svg>
              </button>
            </div>
          </article>
        </div>
      </div>
      <MarineService />
    </>
  );
};

export default Marine;
