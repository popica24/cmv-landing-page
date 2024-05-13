type Props = {
  title: string;
  subtitle: string;
};

const Headline = (props: Props) => {
  return (
    <div className="flex flex-row items-center justify-start mb-5">
      <span className="uppercase bg-[#487288] rounded-[31px] text-[16px] xl:text-[27px] py-2 px-5 font-extrabold text-white">
        {props.title}
      </span>
      <span className="uppercase text-[16px] xl:text-[27px] py-2 px-5 font-extrabold text-gray-400">
        {props.subtitle}
      </span>
    </div>
  );
};

export default Headline;
