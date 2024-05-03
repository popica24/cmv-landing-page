import { Link } from "react-router-dom";

type Props = {
  text: string;
  leftLinkText: string;
  rightLinkText: string;
  leftLink: string;
  rightLink: string;
};

const NavPill = (props: Props) => {
  return (
    <div className="bg-white flex items-center justify-center flex-col w-[600px] mx-auto p-4 rounded-[20px] ">
      <span className="text-center">{props.text}</span>
      <div className="flex flex-row items-center pt-2">
        <Link
          to={"civil-and-industrial"}
          className="me-4 rounded-[30px] bg-[#FF6600] w-[150px] py-1 text-center text-black"
        >
          {props.leftLinkText}
        </Link>
        <span className="ms-4 rounded-[30px] bg-[#FF6600] w-[150px] py-1 text-center text-black">
          {props.rightLinkText}
        </span>
      </div>
    </div>
  );
};

export default NavPill;
