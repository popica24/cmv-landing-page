import CountUp from "react-countup";
import ContactForm from "../../Civil/Components/ContactForm";
import RecommendCards from "../../Civil/Components/RecommendCards";

const Personal = () => {
  return (
    <>
      {/* Services */}
      <div className="flex flex-col items-center justify-center w-full lg:px-24 p-4">
        <span className="text-[#6EA73C] font-semibold" data-aos="fade-up">
          Servici
        </span>
        <span
          className="font-bold text-[20px]"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Rezidentiale
        </span>
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center my-6 w-full p-4">
          <div
            style={{ backgroundImage: "url(solar.avif)" }}
            className="rounded-tl-[30px] rounded-br-[30px] mt-6 flex-shrink-0 lg:mt-0 w-full h-[200px] lg:w-[450px] lg:h-[260px] lg:me-4 bg-center bg-cover"
          />

          <div className="lg:ms-4" data-aos="fade-right">
            <span className="font-semibold  lg:text-lg xl:text-[25px]">
              Solutii verzi pentru Resedinte Civile
            </span>
            <div className="py-0.5 my-2 xl:my-4 bg-[#6EA73C] w-full max-w-[500px]"></div>
            <p className="sm:text-start text-xs md:text-sm xl:text-base xl:max-w-[79ch]">
              Suntem specializați în furnizarea de soluții de energie verde
              pentru reședințe civile, oferindu-vă opțiuni eficiente și
              sustenabile pentru alimentarea locuinței dumneavoastră cu energie
              curată și regenerabilă. Cu o vastă experiență și o abordare
              orientată către rezultate, suntem partenerul ideal pentru
              transformarea locuinței dumneavoastră într-un spațiu ecologic și
              economic eficient.
            </p>
            <p className="sm:text-start text-xs md:text-sm xl:text-base xl:max-w-[79ch] mt-2">
              Ne străduim să aducem tehnologiile inovatoare și sustenabile în
              casele oamenilor, contribuind astfel la crearea unui mediu mai
              curat și mai sănătos pentru generațiile viitoare.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center md:items-end md:justify-evenly  justify-center my-8 container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <svg
            width="50"
            height="47"
            viewBox="0 0 64 61"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.00401 15.3358H58.6735H61.0045C61.8633 15.3358 62.7221 15.5812 63.5809 15.9492V10.3057C63.5809 4.78477 59.1642 0.245373 53.6433 0V4.90745V5.64357C53.6433 6.99312 52.5392 8.0973 51.1896 8.0973C49.84 8.0973 48.7359 6.87043 48.7359 5.64357C48.7359 5.3982 48.7359 5.15283 48.7359 4.90745C48.7359 3.31253 48.7359 1.71761 48.7359 0H18.4323V4.90745V5.3982C18.4323 6.74775 17.3282 7.85193 15.9786 7.85193C14.6291 7.85193 13.5249 6.62506 13.5249 5.3982C13.5249 5.27551 13.5249 5.03014 13.5249 4.90745C13.5249 4.78477 13.5249 4.78477 13.5249 4.66208C13.5249 3.06716 13.5249 1.59492 13.5249 0C7.88132 0 3.21924 4.66208 3.21924 10.3057V18.5256C3.95536 16.5627 5.79565 15.3358 8.00401 15.3358Z"
              fill="#006FA9"
            />
            <path
              d="M58.6743 47.9708C56.9567 51.406 53.5215 53.4917 49.8409 53.4917H9.35438H3.8335C5.30573 57.5403 9.10901 60.3621 13.5257 60.3621H53.2761C58.9197 60.3621 63.5818 55.7 63.5818 50.0565V35.2114C63.2137 36.561 62.7229 38.0332 62.2322 39.3828C61.2507 42.2046 60.0238 45.149 58.6743 47.9708Z"
              fill="#006FA9"
            />
            <path
              d="M61.005 20.2432H8.00447C7.75909 20.2432 7.63641 20.3659 7.63641 20.6112C6.90029 26.6229 5.42805 32.5118 3.46507 38.1554C2.48358 40.7318 1.3794 43.4309 0.152541 46.0073C-0.338205 47.1115 0.397914 48.5837 1.74746 48.5837H49.9632C51.8035 48.5837 53.5211 47.4795 54.3799 45.8846C55.6068 43.3082 56.711 40.4864 57.6924 37.7873C59.6554 32.2664 60.8823 26.5002 61.4957 20.7339C61.4957 20.6112 61.4957 20.4885 61.373 20.3659C61.2504 20.2432 61.1277 20.2432 61.005 20.2432ZM42.3567 30.1808C39.0441 33.4933 35.7316 36.8058 32.2964 40.241C31.3149 41.2225 29.72 41.2225 28.8611 40.241C26.5301 37.91 24.1991 35.579 21.868 33.2479C19.6597 31.0396 23.0949 27.4817 25.3032 29.8127C27.0209 31.5303 28.8611 33.3706 30.5788 35.0882C33.4005 32.2664 36.0996 29.5673 38.9214 26.7455C41.1298 24.5372 44.565 27.9724 42.3567 30.1808Z"
              fill="#006FA9"
            />
          </svg>

          <span className="inline-flex items-center text-[47px] font-medium leading-[70px]">
            <CountUp start={2300} end={2014} duration={2} separator="" />
          </span>
          <span className="text-basel">Experienta din</span>
        </div>
        <div className="flex flex-col items-center justify-center my-8 md:my-0">
          <svg
            width="67"
            height="47"
            viewBox="0 0 78 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M53.756 26.509H74.0788L71.1983 15.9058H51.9888L53.756 26.509Z"
              fill="#487288"
            />
            <path
              d="M30.1816 12.3714H47.8183L45.7507 0.000976562H32.2493L30.1816 12.3714Z"
              fill="#487288"
            />
            <path
              d="M26.011 15.9058H6.80153L3.90332 26.509H24.2438L26.011 15.9058Z"
              fill="#487288"
            />
            <path
              d="M51.3707 12.3714H70.2267L67.2755 1.30877C67.1719 0.923229 66.9409 0.584114 66.62 0.346651C66.2991 0.109189 65.9072 -0.0126298 65.5083 0.00103643H49.3384L51.3707 12.3714Z"
              fill="#487288"
            />
            <path
              d="M50.1685 26.509L48.4013 15.9058H29.5983L27.8311 26.509H50.1685Z"
              fill="#487288"
            />
            <path
              d="M52.8197 42.4139L50.7697 30.0435H27.2306L25.1807 42.4139H37.233V49.4827H31.9314C31.4627 49.4827 31.0132 49.6689 30.6818 50.0003C30.3504 50.3317 30.1642 50.7812 30.1642 51.2499C30.1642 51.7186 30.3504 52.1681 30.6818 52.4995C31.0132 52.8309 31.4627 53.0171 31.9314 53.0171H46.069C46.5377 53.0171 46.9872 52.8309 47.3186 52.4995C47.65 52.1681 47.8362 51.7186 47.8362 51.2499C47.8362 50.7812 47.65 50.3317 47.3186 50.0003C46.9872 49.6689 46.5377 49.4827 46.069 49.4827H40.7674V42.4139H52.8197Z"
              fill="#487288"
            />
            <path
              d="M56.4075 42.4139H76.1118C76.3881 42.4234 76.6628 42.368 76.9138 42.2521C77.1649 42.1361 77.3852 41.9629 77.5571 41.7463C77.7289 41.5297 77.8476 41.2758 77.9035 41.0051C77.9594 40.7343 77.951 40.4541 77.879 40.1872L75.0514 30.0435H54.3398L56.4075 42.4139Z"
              fill="#487288"
            />
            <path
              d="M1.88881 42.4139H21.5931L23.6607 30.0435H2.94913L0.121608 40.1872C0.0495528 40.4541 0.0411419 40.7343 0.0970515 41.0051C0.152961 41.2758 0.271631 41.5297 0.443519 41.7463C0.615407 41.9629 0.835718 42.1361 1.08674 42.2521C1.33775 42.368 1.61247 42.4234 1.88881 42.4139Z"
              fill="#487288"
            />
            <path
              d="M28.6618 0.00103643H12.4919C12.0929 -0.0126298 11.7011 0.109189 11.3802 0.346651C11.0593 0.584114 10.8282 0.923229 10.7247 1.30877L7.77344 12.3714H26.6295L28.6618 0.00103643Z"
              fill="#487288"
            />
          </svg>

          <span className="inline-flex items-center text-[47px] font-medium leading-[70px]">
            <CountUp start={0} end={5000} duration={2} separator="." />+
          </span>
          <span className="text-base">Panouri montate</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <svg
            width="60"
            height="60"
            viewBox="0 0 78 74"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M53.7028 31.1451C45.5829 23.0247 32.4197 23.0247 24.2999 31.1451C16.1801 39.2655 16.1801 52.4296 24.2999 60.55C32.4197 68.6705 45.5829 68.6705 53.7028 60.55C61.8058 52.4296 61.8058 39.2655 53.7028 31.1451ZM29.8644 67.3423C26.6367 65.9637 23.7619 63.8789 21.4756 61.273L16.2137 70.3853L21.5597 69.5447C22.0136 69.4606 22.4843 69.6119 22.7869 69.9986L26.0483 74L29.8644 67.3423ZM56.527 61.273C54.2239 63.8789 51.366 65.9637 48.1214 67.3423L51.9544 73.9832L55.2158 69.9818C55.5184 69.612 55.9891 69.4438 56.443 69.5279L61.789 70.3685L56.527 61.273ZM47.2809 37.5674C42.7082 32.9945 35.2944 32.9945 30.7218 37.5674C26.1491 42.1404 26.1491 49.5547 30.7218 54.1277C35.2944 58.7007 42.7082 58.7007 47.2809 54.1277C51.8535 49.5547 51.8535 42.1404 47.2809 37.5674ZM38.9929 31.5654C46.8774 31.5654 53.2825 37.9541 53.2825 45.856C53.2825 53.741 46.8942 60.1466 38.9929 60.1466C31.1085 60.1466 24.7034 53.7578 24.7034 45.856C24.7202 37.9541 31.1085 31.5654 38.9929 31.5654ZM32.3357 46.7975C31.9826 46.1754 32.1844 45.402 32.8064 45.049C33.4284 44.6959 34.2017 44.8977 34.5548 45.5197L36.6057 49.0672L43.6328 42.0396C44.1372 41.5352 44.9609 41.5352 45.4484 42.0396C45.9528 42.5439 45.9528 43.3509 45.4484 43.8553L37.2446 52.0598C36.6562 52.6482 35.6475 52.5305 35.2272 51.7908L32.3357 46.7975ZM68.6648 12.8532L71.2033 18.1155L76.9863 18.9056C77.9782 19.0401 78.3312 20.2506 77.642 20.9231L73.4223 24.9581L74.4646 30.708C74.6327 31.6831 73.6073 32.406 72.7499 31.9521L67.6057 29.1949L62.4614 31.9521C61.6208 32.406 60.5281 31.6999 60.7635 30.6407L61.789 24.9581L57.5693 20.9231C56.8633 20.2506 57.2499 19.0401 58.2418 18.9056L64.008 18.1155L66.5465 12.8532C66.9668 11.9621 68.2277 11.9789 68.6648 12.8532ZM11.4393 12.8532L13.9778 18.1155L19.7609 18.9056C20.7359 19.0401 21.1058 20.2506 20.4165 20.9231L16.1969 24.9581L17.2392 30.708C17.4073 31.6831 16.3818 32.406 15.5412 31.9521L10.397 29.1949L5.25277 31.9521C4.41221 32.406 3.33629 31.6999 3.55484 30.6407L4.58032 24.9581L0.3607 20.9231C-0.345371 20.2506 0.0412869 19.0401 1.03315 18.9056L6.7994 18.1155L9.3379 12.8532C9.75818 11.9621 11.019 11.9789 11.4393 12.8532ZM40.052 0.664152L42.5905 5.92644L48.3736 6.71663C49.3486 6.85113 49.7185 8.06162 49.0292 8.73412L44.8096 12.7691L45.8519 18.519C46.02 19.4941 44.9945 20.217 44.1372 19.7631L38.9929 16.989L33.8487 19.7463C33.0081 20.2002 31.9322 19.4941 32.1507 18.4349L33.1762 12.7523L28.9566 8.71731C28.2505 8.04481 28.6372 6.83432 29.6291 6.69982L35.3953 5.90963L37.9338 0.647339C38.3709 -0.226907 39.6317 -0.210095 40.052 0.664152Z"
              fill="#6EA73C"
            />
          </svg>

          <span className="inline-flex items-center text-[47px] font-medium leading-[70px]">
            <CountUp end={100} duration={2} />+
          </span>
          <span className="text-base">Clienti Multumiti</span>
        </div>
      </div>
      {/*Smart Home*/}
      <div className="flex flex-col items-center justify-center w-full container mx-auto xl:px-24 p-4">
        <div className="flex flex-col items-center justify-center lg:grid grid-cols-5 my-6">
          <div
            className="col-span-2 max-w-[89vmin] md:px-6 md:max-w-none mb-4 lg:mb-0"
            data-aos="fade-right"
          >
            <span className="text-2xl font-medium">
              Inteligent și Eco-friendly
            </span>
            <div className="w-full border-2 border-[#6EA73C] mt-2 mb-4"></div>
            <p className="tracking-tight lg:max-w-[50ch]">
              Ne dedicăm aducerii inovației și eficienței în locuințele
              clienților noștri prin montarea și instalarea panourilor
              fotovoltaice. Cu o echipă de specialiști pasionați și experți în
              domeniul energiei solare, ne propunem să transformăm visele tale
              de a avea o locuință alimentată de energie regenerabilă în
              realitate. Suntem aici pentru a aduce confort, economii de energie
              și independență energetică în viața de zi cu zi.
            </p>
            <p className="tracking-tight lg:max-w-[50ch]">
              Oferim soluții complete pentru instalarea panourilor fotovoltaice,
              adaptate nevoilor și dorințelor tale, astfel încât să beneficiezi
              de toate avantajele unei locuințe alimentate de energia solară.
            </p>
          </div>
          <div className="col-span-3 lg:ps-6" data-aos="fade-left">
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between w-full">
                <div
                  className="h-[150px] mx-auto w-[90vmin] sm:w-[75vw] lg:w-full bg-cover bg-center aspect-[16/9] rounded-[10px] relative mb-4 lg:mb-0 lg:me-2"
                  style={{ backgroundImage: "url(inverter.avif)" }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-25 rounded-[10px]"></div>
                </div>
                <div
                  className="h-[150px] w-[90vmin] sm:w-[75vw] lg:w-full mx-auto bg-cover bg-center aspect-[16/9] rounded-[10px] relative lg:ms-2"
                  style={{ backgroundImage: "url(solar-house.jpg)" }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-25 rounded-[10px]"></div>
                </div>
              </div>
              <div
                className="h-[150px] w-[90vmin] sm:w-[75vw] lg:w-full mx-auto bg-cover bg-center rounded-[10px] mt-4 relative"
                style={{ backgroundImage: "url(advanced-security.avif)" }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-25 rounded-[10px]"></div>
                <span className="text-white absolute top-6 left-6 text-xl font-roboto">
                  Securitate Avansată
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Reccomends*/}
      <div
        className="text-center bg-center bg-cover py-6 px-4 lg:px-0 relative"
        style={{ backgroundImage: "url(residential-banner.avif)" }}
      >
        <div className="absolute top-0 left-0 right-0 bottom-0 z-0 bg-black opacity-50"></div>
        <div className="flex items-center flex-col justify-center z-10 relative">
          <span
            className="text-[20px] uppercase text-white font-roboto"
            data-aos="zoom-in-up"
            data-aos-delay="300"
          >
            Ce ne recomandă
          </span>
          <span className="w-full border-[3px] border-[#6EA73C] mt-4 mb-8 max-w-[900px]"></span>
          <span className="text-white max-w-[80ch] xl:max-w-none">
            Suntem mândri să oferim servicii de instalare a panourilor
            fotovoltaice de cea mai înaltă calitate, construind nu doar sisteme
            de energie regenerabilă, ci și relații de lungă durată cu clienții
            noștri.
            <br />
            Contactați-ne pentru a discuta despre cum putem transforma visul
            dumneavoastră în realitate!
          </span>
        </div>

        <div className="grid lg:grid-cols-4 grid-cols-2 place-items-center container mx-auto lg:px-24 p-4 ">
          <div
            className="col-span-1"
            data-aos="flip-right"
            data-aos-duration="500"
          >
            <RecommendCards
              text="Expertiză și Profesionalism"
              imagePath="Experience.svg"
            />
          </div>
          <div
            className="col-span-1"
            data-aos="flip-right"
            data-aos-delay="300"
            data-aos-duration="500"
          >
            <RecommendCards
              text={
                <span className="whitespace-nowrap">
                  Transparență și <br />
                  Comunicare
                </span>
              }
              imagePath="Transparency.svg"
            />
          </div>
          <div
            className="col-span-1"
            data-aos="flip-right"
            data-aos-delay="400"
            data-aos-duration="500"
          >
            <RecommendCards
              text="Calitate și Durabilitate"
              imagePath="Durability.svg"
            />
          </div>
          <div
            className="col-span-1"
            data-aos="flip-right"
            data-aos-delay="500"
            data-aos-duration="500"
          >
            <RecommendCards
              text={
                <span className="whitespace-nowrap">
                  Punctualitate și <br /> Acuratete
                </span>
              }
              imagePath="Punctuality.svg"
            />
          </div>
        </div>
      </div>
      {/*Contact Form*/}
      <ContactForm />
    </>
  );
};

export default Personal;
