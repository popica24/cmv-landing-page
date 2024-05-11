type Props = {};

const RoofRotation = (props: Props) => {
  return (
    <div className="relative w-[260px] h-[260px]">
      <div className="h-full w-full absolute top-0 overflow-hidden">
        <div className="h-[200%] w-[200%] rounded-[1000px] border border-[#aaa] block absolute top-0 overflow-hidden z-[3]">
          <div
            className="rs-path rs-transition rs-range-color"
            style={{ transform: "rotate(0deg)" }}
          ></div>
          <div
            className="rs-path rs-transition rs-range-color"
            style={{ opacity: "0", transform: "rotate(-90deg)" }}
          ></div>
          <div
            className="rs-path rs-transition rs-path-color"
            style={{ transform: "rotate(90deg)", opacity: "1" }}
          ></div>
          <div
            className="rs-path rs-transition rs-path-color"
            style={{ opacity: "1", zIndex: "1", transform: "rotate(-180deg)" }}
          ></div>
          <span className="rs-block p-[50px]">
            <div className="rs-inner rs-bg-color rs-border"></div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default RoofRotation;
