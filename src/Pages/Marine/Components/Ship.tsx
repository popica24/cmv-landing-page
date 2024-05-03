const Ship = () => {
  return (
    <div className="bg-[#ECA72C] relative xl:w-[380px] xl:h-[475px] lg:w-[250px] lg:h-[347.56px] rounded-t-[100px]">
      <img
        src="ship.png"
        alt=""
        className="absolute bottom-[2.4rem] -right-[3rem] scale-[125%]"
        width={449}
        height={557}
      />
    </div>
  );
};

export default Ship;
