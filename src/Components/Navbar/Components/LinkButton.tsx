type Props = { text: string; link: string };

const LinkButton = (props: Props) => {
  return (
    <span className="rounded-[8px] whitespace-nowrap md:rounded-[24px] px-[5px] mx-1 md:px-[18px] text-xs py-[3px] md:py-[4px] lg:py-[6px] bg-[#2F4858] text-white">
      {props.text}
    </span>
  );
};

export default LinkButton;
