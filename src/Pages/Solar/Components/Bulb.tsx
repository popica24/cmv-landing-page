const Bulb = () => {
  return (
    <div className="bg-[#6EA73C] relative xl:w-[380px] xl:h-[475px] lg:w-[250px] lg:h-[347.56px] rounded-t-[100px]">
      <img
        src="bulb.png"
        alt=""
        className="absolute xl:scale-[83%] -top-[1.25rem] -right-8 rotate-[38deg]"
        width={449}
        height={557}
      />
    </div>
  );
};

export default Bulb;
