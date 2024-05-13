import { ReactNode } from "react";

type Props = {
  imagePath: string;
  text: ReactNode;
};

const RecommendCards = (props: Props) => {
  return (
    <div className="bg-[#EFEFEF] flex flex-col items-center justify-center px-8 py-10 rounded-[15px] flex-shrink-0 w-[150px] sm:w-[250px] m-4">
      <img
        src={props.imagePath}
        alt="ServiceLogo"
        className="lg:w-[60px] lg:h-[60px] md:w-[50px] md:h-[50px] w-[30px] h-[30px]"
      />
      <div className="border-[3px] my-4 border-transparent w-full" />
      <div className="max-w-[16ch]">
        <span className="font-roboto text-[14px] sm:text-[19px]">
          {props.text}
        </span>
      </div>
    </div>
  );
};

export default RecommendCards;
