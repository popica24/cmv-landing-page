import { Link } from "react-router-dom";
import { motion } from "framer-motion";

type Props = {
  text: string;
  leftLinkText: string;
  rightLinkText: string | undefined;
  leftLink: string;
  rightLink: string | undefined;
  leftLinkState: boolean;
  rightLinkState: boolean | undefined;
};

const NavPill = (props: Props) => {
  const fadeInVariants = {
    collapsed: {
      opacity: 0,
    },
    expanded: {
      opacity: 1,
    },
  };
  return (
    <motion.div
      variants={fadeInVariants}
      transition={{ duration: 0.8 }}
      initial="collapsed"
      animate="expanded"
      className="bg-white flex items-center justify-center flex-col w-[90vmin] lg:w-[400px] xl:w-[600px] mx-auto p-4 rounded-[20px] absolute bottom-4 md:bottom-24"
    >
      <span className="text-center text-xs md:text-base">{props.text}</span>
      <div className="flex flex-col md:flex-row items-center pt-2">
        {props.leftLink && (
          <Link
            state={{ leftLinkState: props.leftLinkState || false }}
            to={props.leftLink}
            className="me-4 rounded-[30px] bg-[#FF6600] text-xs md:text-base w-[100px] md:w-[150px] py-1 text-center text-black mb-4 md:mb-0"
          >
            {props.leftLinkText}
          </Link>
        )}
        {props.rightLink && (
          <Link
            state={{ rightLinkState: props.rightLinkState || false }}
            to={props.rightLink || ""}
            className="me-4 rounded-[30px] bg-[#FF6600] text-xs md:text-base w-[100px] md:w-[150px] py-1 text-center text-black"
          >
            {props.rightLinkText}
          </Link>
        )}
      </div>
    </motion.div>
  );
};

export default NavPill;
