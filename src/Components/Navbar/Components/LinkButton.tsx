type Props = { text: string; link: string };

const LinkButton = (props: Props) => {
  return (
    <span className="rounded-[8px] md:rounded-[24px] px-[5px] md:px-[25px] text-xs py-[2px] md:py-[4px] lg:py-[6px] bg-[#2F4858] text-white">
      {props.text}
    </span>
  );
};

export default LinkButton;
