import { useLocation } from "react-router-dom";

const MobileMenu = () => {
  const location = useLocation();
  return (
    <label
      className="relative z-40 cursor-pointer px-3 py-6 sm:hidden block"
      htmlFor="mobile-menu"
    >
      <input className="peer hidden" type="checkbox" id="mobile-menu" />
      <div className="relative z-50 block h-[1px] w-7 bg-black bg-transparent content-[''] before:absolute before:top-[-0.35rem] before:z-50 before:block before:h-full before:w-full before:bg-black before:transition-all before:duration-200 before:ease-out before:content-[''] after:absolute after:right-0 after:bottom-[-0.35rem] after:block after:h-full after:w-full after:bg-black after:transition-all after:duration-200 after:ease-out after:content-[''] peer-checked:bg-transparent before:peer-checked:top-0 before:peer-checked:w-full before:peer-checked:rotate-45 before:peer-checked:transform after:peer-checked:bottom-0 after:peer-checked:w-full after:peer-checked:-rotate-45 after:peer-checked:transform"></div>
      <div className="fixed inset-0 z-40 hidden h-full w-full bg-black/50 backdrop-blur-sm peer-checked:block">
        &nbsp;
      </div>
      <div className="fixed top-0 right-0 z-40 h-full w-full translate-x-full overflow-y-auto overscroll-y-none transition duration-500 peer-checked:translate-x-0">
        <div className="float-right min-h-full w-[85%] bg-white px-6 pt-12 shadow-2xl">
          <menu>
            <li>
              <a href="/">Civil and Industrial</a>
            </li>
            <li>
              <a href="/solar-energy">Solar energy</a>
            </li>
            <li>
              <a href="/marine-services">Marin Services</a>
            </li>
            <div className="flex flex-row items-center my-3">
              <a
                href="https://www.instagram.com/cmvelectrical?igsh=MXVjeW9lank0dnE3aA%3D%3D&utm_source=qr"
                target="_blank"
              >
                <svg
                  className="w-[24px] me-2"
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
              </a>

              <a
                href="https://www.tiktok.com/@cmvelectric?_t=8mK9QabRlA0&_r=1"
                target="_blank"
              >
                <svg
                  fill="#000000"
                  className="w-[24px] me-2"
                  viewBox="0 0 512 512"
                  id="icons"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z" />
                </svg>
              </a>
            </div>
            <a
              href={
                location.pathname == "/solar-energy"
                  ? "/configurator"
                  : "#contact"
              }
              className="inline-flex items-center rounded-[42px] text-white bg-linear-contact pb-1.5 pt-1 px-3 text-sm font-thin tracking-wider"
            >
              <svg
                className="me-1.5 mt-0.5"
                width="19"
                height="12.39"
                viewBox="0 0 23 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.3871 15H2.67176C2.09594 14.9994 1.5439 14.7746 1.13675 14.375C0.729602 13.9754 0.500604 13.4336 0.5 12.8685V2.13151C0.500604 1.56642 0.729602 1.02463 1.13675 0.625032C1.5439 0.225431 2.09594 0.000646929 2.67176 0H20.3871C20.9629 0.000646929 21.5149 0.225431 21.9221 0.625032C22.3292 1.02463 22.5582 1.56642 22.5588 2.13151V12.8685C22.5582 13.4336 22.3292 13.9754 21.9221 14.375C21.5149 14.7746 20.9629 14.9994 20.3871 15ZM2.67176 0.814642C2.31602 0.815019 1.97495 0.953888 1.72342 1.20077C1.47189 1.44766 1.33044 1.78239 1.33011 2.13151V12.8685C1.33044 13.2176 1.47189 13.5523 1.72342 13.7992C1.97495 14.0461 2.31602 14.185 2.67176 14.1854H20.3871C20.7428 14.185 21.0839 14.0461 21.3354 13.7992C21.5869 13.5523 21.7284 13.2176 21.7287 12.8685V2.13151C21.7284 1.78239 21.5869 1.44766 21.3354 1.20077C21.0839 0.953888 20.7428 0.815019 20.3871 0.814642H2.67176Z"
                  fill="white"
                />
                <path
                  d="M11.5292 9.70588C11.4293 9.70593 11.3328 9.66846 11.2579 9.60049L1.38232 0.632332L1.92466 0L11.5292 8.72281L21.1341 0.00105411L21.6764 0.633386L11.8009 9.60154C11.7257 9.66933 11.6291 9.70644 11.5292 9.70588Z"
                  fill="white"
                />
                <path
                  d="M1.29297 13.4224L7.92946 5.86079L8.54596 6.40187L1.90947 13.9634L1.29297 13.4224Z"
                  fill="white"
                />
                <path
                  d="M14.8071 6.3938L15.4236 5.85272L22.0603 13.4144L21.4438 13.9555L14.8071 6.3938Z"
                  fill="white"
                />
              </svg>

              <span>Contacteză-ne</span>
            </a>
          </menu>
        </div>
      </div>
    </label>
  );
};

export default MobileMenu;
