type Props = {
  text: string;
  imagePath: string;
};

const ServiceCards = (props: Props) => {
  return (
    <div className="bg-[#EFEFEF] flex flex-col items-center justify-center px-8 py-10 rounded-[15px] flex-shrink-0 w-[150px] sm:w-[250px] m-4 sm:m-0">
      <img
        src={props.imagePath}
        alt="ServiceLogo"
        className="sm:w-[60px] w-[50px]"
      />
      <div className="border-[3px] my-4 border-[#F26100] w-full" />
      <span className="whitespace-nowrap font-roboto text-[15px] sm:text-[19px]">
        {props.text}
      </span>
    </div>
  );
};

export default ServiceCards;
