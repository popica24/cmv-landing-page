import { ReactNode } from "react";

type Props = {
  imagePath: string;
  text: ReactNode;
};

const RecommendCards = (props: Props) => {
  return (
    <div className="bg-white flex flex-col items-center justify-center py-10 rounded-[10px] flex-shrink-0 sm:w-[230px] w-[160px] text-black m-3">
      <img
        src={props.imagePath}
        alt="ServiceLogo"
        className="mb-6 sm:w-[50px] w-[35px]"
      />
      {props.text}
    </div>
  );
};

export default RecommendCards;
