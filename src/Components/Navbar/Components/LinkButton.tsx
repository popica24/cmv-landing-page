import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

type Props = { text: string; link: string };

const LinkButton = (props: Props) => {
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
      href={props.link}
      className={`rounded-[8px] whitespace-nowrap md:rounded-[24px] px-[5px] mx-1 md:px-[18px] text-xs py-[3px] md:py-[4px] lg:py-[6px] ${bg} text-white`}
    >
      {props.text}
    </a>
  );
};

export default LinkButton;
