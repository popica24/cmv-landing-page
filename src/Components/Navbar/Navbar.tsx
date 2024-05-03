import { Link } from "react-router-dom";
import LinkButton from "./Components/LinkButton";
import ContactButton from "./Components/ContactButton";
import MobileMenu from "./Components/MobileMenu";

const Navbar = () => {
  return (
    <div className="flex flex-row items-center justify-between mx-auto lg:container px-4 lg:px-24 my-8">
      <Link to={"/"}>
        <img
          src="hero.png"
          className="w-48 sm:w-40 md:w-48 lg:w-40 xl:w-48 2xl:w-56"
        />
      </Link>
      <MobileMenu />
      <div className="sm:flex hidden flex-row items-center">
        <LinkButton text="Civil and Industrial" link="/civil-and-industrial" />
        <div className="mx-0 md:mx-2 lg:mx-6 flex items-center">
          <LinkButton text="Solar energy" link="/solar-energy" />
        </div>
        <LinkButton text="Marine Services" link="/marine-services" />
      </div>
      <div className="sm:flex flex-row items-center hidden ">
        <svg
          className="w-[12px] md:w-[14px] me-2"
          viewBox="0 0 23 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_297_191)">
            <path
              d="M11.5037 5.85156C8.3843 5.85156 5.85889 8.37973 5.85889 11.4964C5.85889 14.6158 8.38705 17.1412 11.5037 17.1412C14.6231 17.1412 17.1486 14.6131 17.1486 11.4964C17.1486 8.37698 14.6204 5.85156 11.5037 5.85156ZM11.5037 15.1603C9.4788 15.1603 7.8398 13.5204 7.8398 11.4964C7.8398 9.4724 9.47972 7.83248 11.5037 7.83248C13.5277 7.83248 15.1676 9.4724 15.1676 11.4964C15.1686 13.5204 13.5286 15.1603 11.5037 15.1603Z"
              fill="black"
            />
            <path
              d="M16.0356 0.570081C14.0116 0.475664 8.99838 0.480248 6.97255 0.570081C5.19238 0.653498 3.62213 1.08341 2.35621 2.34933C0.240547 4.465 0.510964 7.31583 0.510964 11.4967C0.510964 15.7757 0.272631 18.5606 2.35621 20.6442C4.48013 22.7672 7.37221 22.4894 11.5036 22.4894C15.7423 22.4894 17.2053 22.4922 18.704 21.9119C20.7418 21.1208 22.28 19.2994 22.4303 16.0278C22.5256 14.0029 22.5201 8.99058 22.4303 6.96475C22.2488 3.10283 20.1762 0.760748 16.0356 0.570081ZM19.2394 19.2444C17.8525 20.6313 15.9284 20.5076 11.477 20.5076C6.89371 20.5076 5.0558 20.5754 3.71471 19.2307C2.17013 17.6934 2.44971 15.2248 2.44971 11.4821C2.44971 6.4175 1.92996 2.77008 7.01288 2.50975C8.18072 2.4685 8.52446 2.45475 11.4642 2.45475L11.5055 2.48225C16.3904 2.48225 20.223 1.97075 20.453 7.05275C20.5053 8.21233 20.5172 8.56066 20.5172 11.4958C20.5163 16.026 20.6025 17.8749 19.2394 19.2444Z"
              fill="black"
            />
            <path
              d="M17.3721 6.94774C18.1006 6.94774 18.6911 6.35716 18.6911 5.62865C18.6911 4.90014 18.1006 4.30957 17.3721 4.30957C16.6436 4.30957 16.053 4.90014 16.053 5.62865C16.053 6.35716 16.6436 6.94774 17.3721 6.94774Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_297_191">
              <rect
                width="22"
                height="22"
                fill="white"
                transform="translate(0.5 0.5)"
              />
            </clipPath>
          </defs>
        </svg>

        <svg
          className="w-[12px] md:w-[14px] me-2"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_297_195)">
            <path
              d="M12.0489 20.5V11.3777H15.1097L15.5689 7.82156H12.0489V5.55147C12.0489 4.5222 12.3336 3.82076 13.8112 3.82076L15.6928 3.81999V0.63923C15.3674 0.596945 14.2504 0.5 12.9505 0.5C10.2359 0.5 8.37739 2.15697 8.37739 5.19927V7.82156H5.30737V11.3777H8.37739V20.5H12.0489Z"
              fill="#010002"
            />
          </g>
          <defs>
            <clipPath id="clip0_297_195">
              <rect
                width="20"
                height="20"
                fill="white"
                transform="translate(0.5 0.5)"
              />
            </clipPath>
          </defs>
        </svg>
        <ContactButton />
      </div>
    </div>
  );
};

export default Navbar;
