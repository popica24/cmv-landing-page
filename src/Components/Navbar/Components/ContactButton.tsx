import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ContactButton = () => {
  const location = useLocation();

  const [bg, setBg] = useState("");
  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setBg("bg-[#2F4858]");
        break;
      case "/solar-energy":
        setBg("bg-[#487288]");
        break;
      case "/marine-services":
        setBg("bg-[#ECA72C]");
        break;
      default:
        setBg("bg-[#487288]");
    }
  }, [location.pathname]);
  return (
    <a
      href="#contact"
      className={`inline-flex items-center whitespace-nowrap justify-center rounded-[8px] md:rounded-[24px] px-[5px] md:px-[10px] text-xs md:text-sm py-[2px] md:py-[6px] text-white ${bg}`}
    >
      <svg
        className="w-[12px] md:w-[14px] me-1"
        viewBox="0 0 23 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.3871 15H2.67176C2.09594 14.9994 1.5439 14.7746 1.13675 14.375C0.729602 13.9754 0.500604 13.4336 0.5 12.8685V2.13151C0.500604 1.56642 0.729602 1.02463 1.13675 0.625032C1.5439 0.225431 2.09594 0.000646929 2.67176 0H20.3871C20.9629 0.000646929 21.5149 0.225431 21.9221 0.625032C22.3292 1.02463 22.5582 1.56642 22.5588 2.13151V12.8685C22.5582 13.4336 22.3292 13.9754 21.9221 14.375C21.5149 14.7746 20.9629 14.9994 20.3871 15ZM2.67176 0.814642C2.31602 0.815019 1.97495 0.953888 1.72342 1.20077C1.47189 1.44766 1.33044 1.78239 1.33011 2.13151V12.8685C1.33044 13.2176 1.47189 13.5523 1.72342 13.7992C1.97495 14.0461 2.31602 14.185 2.67176 14.1854H20.3871C20.7428 14.185 21.0839 14.0461 21.3354 13.7992C21.5869 13.5523 21.7284 13.2176 21.7287 12.8685V2.13151C21.7284 1.78239 21.5869 1.44766 21.3354 1.20077C21.0839 0.953888 20.7428 0.815019 20.3871 0.814642H2.67176Z"
          fill="white"
        />
        <path
          d="M11.5292 9.70588C11.4293 9.70593 11.3328 9.66846 11.2579 9.60049L1.38232 0.632332L1.92466 0L11.5292 8.72281L21.1341 0.00105411L21.6764 0.633386L11.8009 9.60154C11.7257 9.66933 11.6291 9.70644 11.5292 9.70588Z"
          fill="white"
        />
        <path
          d="M1.29272 13.4224L7.92921 5.86079L8.54571 6.40187L1.90923 13.9634L1.29272 13.4224Z"
          fill="white"
        />
        <path
          d="M14.8071 6.3938L15.4236 5.85272L22.0603 13.4144L21.4438 13.9555L14.8071 6.3938Z"
          fill="white"
        />
      </svg>
      Contacteză-ne
    </a>
  );
};

export default ContactButton;
