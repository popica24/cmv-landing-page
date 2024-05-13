type Props = {
  nextStep: () => void;
  className?: string;
};

const NextStep = (props: Props) => {
  return (
    <button
      className={`bg-[#487288] hover:bg-[#2a4350] transition-colors duration-300 rounded-full text-white py-[15px] px-[30px] text-sm md:text-base xl:text-xl font-bold ${props.className}`}
      onClick={props.nextStep}
    >
      Pasul următor
    </button>
  );
};

export default NextStep;
