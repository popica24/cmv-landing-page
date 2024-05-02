const Bulb = () => {
  return (
    <div className="relative xl:w-[410px] xl:h-[570px] lg:w-[250px] lg:h-[347.56px] rounded-t-[100px]">
      <img
        src="bulb.png"
        alt=""
        className="absolute transform xl:scale-[80%] lg:scale-[70%] bottom-[30.5px] lg:bottom-0 -right-15 rotate-45"
      />
    </div>
  );
};

export default Bulb;
