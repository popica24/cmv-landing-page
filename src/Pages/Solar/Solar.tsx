import { useState } from "react";
import Bulb from "./Components/Bulb";
import Personal from "./Components/Personal";
import Industrial from "./Components/Industrial";
import { Link, useLocation } from "react-router-dom";

const Solar = () => {
  const location = useLocation();
  const leftState = location.state?.leftLinkState;

  const [personal, setPersonal] = useState(leftState || false);
  document.title = "CMV Electrical Solutions | Solar Energy";

  return (
    <>
      <div className="mt-12 lg:mt-48">
        <div className="flex flex-col items-center justify-center font-roboto w-full">
          <div className="relative">
            <h1 className="tracking-wider max-w-[55ch] text-[1rem] sm:text-[1.5rem] lg:text-[2.1rem] font-semibold uppercase ms-0 lg:ms-[18rem] xl:ms-[29.6rem]">
              Viitorul Cu{" "}
              <span className="text-linear-gradient-green text-[1.5rem] sm:text-[2.1rem] lg:text-[2.5rem] font-bold">
                Puterea Soarelui
              </span>{" "}
              <br />
              Nu Doar Cu Cabluri.
            </h1>
            <div className="absolute z-10 -left-4 xl:-top-44 -top-8">
              <Bulb />
            </div>
          </div>
          <article className="bg-[#487288] w-full flex items-center justify-center flex-col mt-4 pt-4 relative ">
            <div className="max-w-[38ch] sm:max-w-[55ch] lg:max-w-[77ch] flex flex-col md:items-start items-center ms-0 lg:ms-[18rem] xl:ms-[29.6rem]">
              <span className="text-white lg:text-[1.125rem] leading-5 font-normal text-xs md:text-base">
                Descoperind noua realitate a viitorului: O lume în care energia
                soarelui ne conduce drumul, într-o călătorie plină de lumină și
                posibilități, o alternativă inovatoare și mult mai
                convingătoare.
              </span>
              <Link
                className="my-6 rounded-[164px] border-2 border-[#6EA73C] text-white py-2 px-6 inline-flex items-center w-full justify-center lg:w-fit"
                to={"/configurator"}
              >
                Configurator
                <svg
                  className="ms-2 rotate-[270deg]"
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
              </Link>
            </div>

            <div className="lg:mt-[5rem]">
              <div className="flex flex-row items-center justify-center">
                <button
                  className={`border-2 border-white sm:rounded-t-[20px] rounded-t-[10px] lg:rounded-t-[30px] ${
                    personal ? "text-black bg-white" : "text-white"
                  } min-w-[150px] sm:min-w-[250px] lg:min-w-[350px] py-2 lg:text-base text-sm lg:py-3 inline-flex items-center justify-center px-2 me-2 lg:mx-20`}
                  onClick={() => setPersonal(true)}
                >
                  <svg
                    className="me-2"
                    width="16"
                    height="15"
                    viewBox="0 0 23 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.2294 4.97998L3.50439 10.9241V18.8879H9.71166V13.0518H13.0092V18.8879H18.9544V10.9241L11.2294 4.97998Z"
                      className="fill-current"
                    />
                    <path
                      d="M19.2781 6.30367V2.23186H16.0248V3.80093L11.2296 0.112061L0 8.75079L1.55016 10.7658L11.2296 3.31775L20.909 10.7658L22.4591 8.75084L19.2781 6.30367Z"
                      className="fill-current"
                    />
                  </svg>
                  Lucrări rezidențiale
                </button>
                <button
                  className={`border-2 border-white sm:rounded-t-[20px] rounded-t-[10px] lg:rounded-t-[30px] ${
                    personal ? "text-white" : "text-black bg-white"
                  } min-w-[150px] sm:min-w-[250px] lg:min-w-[350px] py-2 lg:text-base text-sm lg:py-3 inline-flex items-center justify-center px-2 ms-2 lg:mx-20`}
                  onClick={() => setPersonal(false)}
                >
                  <svg
                    className="me-2"
                    width="16"
                    height="15"
                    viewBox="0 0 20 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_367_44)">
                      <path
                        d="M10.5156 15.957H11.6289V19H10.5156V15.957Z"
                        className="fill-current"
                      />
                      <path
                        d="M8.28906 15.957H9.40234V19H8.28906V15.957Z"
                        className="fill-current"
                      />
                      <path
                        d="M13.707 0H6.21094C5.90352 0 5.6543 0.249227 5.6543 0.556641V19H7.17578V15.4004C7.17578 15.093 7.42501 14.8438 7.73242 14.8438H9.95898H12.1855C12.493 14.8438 12.7422 15.093 12.7422 15.4004V19H14.2637V0.556641C14.2637 0.249227 14.0144 0 13.707 0ZM8.28906 13.1738C8.28906 13.4812 8.03984 13.7305 7.73242 13.7305C7.42501 13.7305 7.17578 13.4812 7.17578 13.1738V12.0605C7.17578 11.7531 7.42501 11.5039 7.73242 11.5039C8.03984 11.5039 8.28906 11.7531 8.28906 12.0605V13.1738ZM8.28906 9.83398C8.28906 10.1414 8.03984 10.3906 7.73242 10.3906C7.42501 10.3906 7.17578 10.1414 7.17578 9.83398V8.7207C7.17578 8.41329 7.42501 8.16406 7.73242 8.16406C8.03984 8.16406 8.28906 8.41329 8.28906 8.7207V9.83398ZM10.5156 13.1738C10.5156 13.4812 10.2664 13.7305 9.95898 13.7305C9.65157 13.7305 9.40234 13.4812 9.40234 13.1738V12.0605C9.40234 11.7531 9.65157 11.5039 9.95898 11.5039C10.2664 11.5039 10.5156 11.7531 10.5156 12.0605V13.1738ZM10.5156 9.83398C10.5156 10.1414 10.2664 10.3906 9.95898 10.3906C9.65157 10.3906 9.40234 10.1414 9.40234 9.83398V8.7207C9.40234 8.41329 9.65157 8.16406 9.95898 8.16406C10.2664 8.16406 10.5156 8.41329 10.5156 8.7207V9.83398ZM12.7422 13.1738C12.7422 13.4812 12.493 13.7305 12.1855 13.7305C11.8781 13.7305 11.6289 13.4812 11.6289 13.1738V12.0605C11.6289 11.7531 11.8781 11.5039 12.1855 11.5039C12.493 11.5039 12.7422 11.7531 12.7422 12.0605V13.1738ZM12.7422 9.83398C12.7422 10.1414 12.493 10.3906 12.1855 10.3906C11.8781 10.3906 11.6289 10.1414 11.6289 9.83398V8.7207C11.6289 8.41329 11.8781 8.16406 12.1855 8.16406C12.493 8.16406 12.7422 8.41329 12.7422 8.7207V9.83398ZM8.28906 6.49414C8.28906 6.80155 8.03984 7.05078 7.73242 7.05078C7.42501 7.05078 7.17578 6.80155 7.17578 6.49414V5.38086C7.17578 5.07345 7.42501 4.82422 7.73242 4.82422C8.03984 4.82422 8.28906 5.07345 8.28906 5.38086V6.49414ZM10.5156 6.49414C10.5156 6.80155 10.2664 7.05078 9.95898 7.05078C9.65157 7.05078 9.40234 6.80155 9.40234 6.49414V5.38086C9.40234 5.07345 9.65157 4.82422 9.95898 4.82422C10.2664 4.82422 10.5156 5.07345 10.5156 5.38086V6.49414ZM12.7422 6.49414C12.7422 6.80155 12.493 7.05078 12.1855 7.05078C11.8781 7.05078 11.6289 6.80155 11.6289 6.49414V5.38086C11.6289 5.07345 11.8781 4.82422 12.1855 4.82422C12.493 4.82422 12.7422 5.07345 12.7422 5.38086V6.49414ZM8.28906 3.1543C8.28906 3.46171 8.03984 3.71094 7.73242 3.71094C7.42501 3.71094 7.17578 3.46171 7.17578 3.1543V2.04102C7.17578 1.7336 7.42501 1.48438 7.73242 1.48438C8.03984 1.48438 8.28906 1.7336 8.28906 2.04102V3.1543ZM10.5156 3.1543C10.5156 3.46171 10.2664 3.71094 9.95898 3.71094C9.65157 3.71094 9.40234 3.46171 9.40234 3.1543V2.04102C9.40234 1.7336 9.65157 1.48438 9.95898 1.48438C10.2664 1.48438 10.5156 1.7336 10.5156 2.04102V3.1543ZM12.7422 3.1543C12.7422 3.46171 12.493 3.71094 12.1855 3.71094C11.8781 3.71094 11.6289 3.46171 11.6289 3.1543V2.04102C11.6289 1.7336 11.8781 1.48438 12.1855 1.48438C12.493 1.48438 12.7422 1.7336 12.7422 2.04102V3.1543Z"
                        className="fill-current"
                      />
                      <path
                        d="M18.9023 7.42188H15.377V19H18.9023C19.2098 19 19.459 18.7508 19.459 18.4434V7.97852C19.459 7.6711 19.2098 7.42188 18.9023 7.42188ZM17.9746 14.6582C17.9746 14.9656 17.7254 15.2148 17.418 15.2148C17.1106 15.2148 16.8613 14.9656 16.8613 14.6582V13.5449C16.8613 13.2375 17.1106 12.9883 17.418 12.9883C17.7254 12.9883 17.9746 13.2375 17.9746 13.5449V14.6582ZM17.9746 11.3184C17.9746 11.6258 17.7254 11.875 17.418 11.875C17.1106 11.875 16.8613 11.6258 16.8613 11.3184V10.2051C16.8613 9.89766 17.1106 9.64844 17.418 9.64844C17.7254 9.64844 17.9746 9.89766 17.9746 10.2051V11.3184Z"
                        className="fill-current"
                      />
                      <path
                        d="M1.01562 7.42188C0.708211 7.42188 0.458984 7.6711 0.458984 7.97852V18.4434C0.458984 18.7508 0.708211 19 1.01562 19H4.54102V7.42188H1.01562ZM3.05664 14.6582C3.05664 14.9656 2.80741 15.2148 2.5 15.2148C2.19259 15.2148 1.94336 14.9656 1.94336 14.6582V13.5449C1.94336 13.2375 2.19259 12.9883 2.5 12.9883C2.80741 12.9883 3.05664 13.2375 3.05664 13.5449V14.6582ZM3.05664 11.3184C3.05664 11.6258 2.80741 11.875 2.5 11.875C2.19259 11.875 1.94336 11.6258 1.94336 11.3184V10.2051C1.94336 9.89766 2.19259 9.64844 2.5 9.64844C2.80741 9.64844 3.05664 9.89766 3.05664 10.2051V11.3184Z"
                        className="fill-current"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_367_44">
                        <rect
                          width="19"
                          height="19"
                          className="fill-current"
                          transform="translate(0.458984)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  Lucrări Industriale
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
      {personal ? <Personal /> : <Industrial />}
    </>
  );
};

export default Solar;
