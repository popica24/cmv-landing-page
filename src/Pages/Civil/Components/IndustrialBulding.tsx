import ContactForm from "../../../Components/ContactForm";
import RecommendCards from "../../../Components/RecommendCards";
import ServiceCards from "../../../Components/ServiceCards";

const IndustrialBulding = () => {
  return (
    <>
      {/* Services */}
      <div className="flex flex-col items-center justify-center w-full lg:px-24 p-4">
        <span className="text-[#F26100] font-semibold" data-aos="fade-up">
          Servici
        </span>
        <span
          className="font-bold text-[20px]"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Industriale
        </span>
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center my-6 w-full p-4 overflow-x-hidden">
          <div
            data-aos="flip-left"
            style={{ backgroundImage: "url(Industrial.avif)" }}
            className="rounded-tl-[30px] rounded-br-[30px] mt-6 lg:mt-0 w-full h-[200px] lg:w-[450px] lg:h-[260px] me-4 bg-cover bg-center"
          />

          <div className="lg:ms-4" data-aos="fade-right">
            <span className="font-semibold lg:text-lg xl:text-[25px]">
              Inovație și durabilitate în industria modernă
            </span>
            <div className="py-0.5 my-2 xl:my-4 bg-[#F26100] w-full max-w-[500px]"></div>
            <p className="sm:text-start text-xs md:text-sm xl:text-base xl:max-w-[79ch]">
              Suntem lideri în industria furnizării de soluții complete și
              personalizate în domeniile energiei verzi, centrelor de date și
              centrelor farmaceutice. Ne străduim să aducem beneficiile
              tehnologiilor inovatoare și sustenabile în afacerile
              dumneavoastră, oferindu-vă soluții avansate și fiabile, adaptate
              cerințelor specifice ale fiecărui sector.
            </p>
            <p className="sm:text-start text-xs md:text-sm xl:text-base xl:max-w-[79ch]">
              Echipa noastră de ingineri și specialiști în construcții
              industriale are cunoștințe extinse în domeniile tehnologice și
              industriale, asigurând că fiecare proiect este realizat cu cea mai
              mare precizie și eficiență.
            </p>
          </div>
        </div>
      </div>
      {/* Service Cards */}
      <div className="grid lg:grid-cols-4 grid-cols-2 place-items-center container mx-auto lg:px-24 p-4">
        <div
          className="col-span-1"
          data-aos="flip-right"
          data-aos-duration="500"
        >
          <ServiceCards text="Centre de date" imagePath="DataCenters.svg" />
        </div>
        <div
          className="col-span-1"
          data-aos="flip-right"
          data-aos-delay="300"
          data-aos-duration="500"
        >
          <ServiceCards text="Centre farmaceutice" imagePath="Pharma.svg" />
        </div>
        <div
          className="col-span-1"
          data-aos="flip-right"
          data-aos-delay="400"
          data-aos-duration="500"
        >
          <ServiceCards text="Infrastructură" imagePath="Energy.svg" />
        </div>
        <div
          className="col-span-1"
          data-aos="flip-right"
          data-aos-delay="500"
          data-aos-duration="500"
        >
          <ServiceCards
            text="Cladiri Industriale"
            imagePath="IndustrialBuildings.svg"
          />
        </div>
      </div>
      {/*Smart Home*/}
      <div className="flex flex-col items-center justify-center w-full container mx-auto xl:px-24 p-4">
        <div className="flex flex-col items-center justify-center lg:grid grid-cols-5 my-6 overflow-x-hidden">
          <div
            className="col-span-2 max-w-[89vmin] md:px-6 md:max-w-none mb-4 lg:mb-0"
            data-aos="fade-right"
          >
            <span className="font-semibold lg:text-lg xl:text-[25px]">
              Construim Fundamentul pentru Viitorul Afacerilor
            </span>
            <div className="w-full border-2 border-[#F26100] mt-2 mb-4"></div>
            <p className="sm:text-start text-xs md:text-sm xl:text-base xl:max-w-[79ch]">
              Suntem lideri în industria furnizării de soluții complete și
              personalizate în domeniul construcțiilor industriale,
              infrastructurii și a tehnologiilor avansate. Ne străduim să aducem
              beneficiile inovației și calității în afacerile dumneavoastră,
              oferindu-vă soluții fiabile și adaptate cerințelor specifice ale
              fiecărui proiect.
            </p>
            <p className="sm:text-start text-xs md:text-sm xl:text-base xl:max-w-[79ch]">
              Cu o echipă dedicată de specialiști în domeniul construcțiilor
              industriale, a infrastructurii IT, inginerie civilă și tehnologii
              de vârf, suntem alegerea ideală pentru companiile care își doresc
              să investească în infrastructuri solide și durabile, adaptate
              nevoilor actuale și viitoare ale industriei.
            </p>
          </div>
          <div className="col-span-3 lg:ps-6" data-aos="fade-left">
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between w-full">
                <div
                  className="h-[150px] mx-auto w-[90vmin] sm:w-[75vw] lg:w-full bg-cover bg-center aspect-[16/9] rounded-[10px] relative mb-4 lg:mb-0 lg:me-2"
                  style={{ backgroundImage: "url(data-centers.avif)" }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-25 rounded-[10px]"></div>
                  <span className="text-white absolute top-6 left-6 text-xl font-roboto">
                    Centre de date
                  </span>
                </div>
                <div
                  className="h-[150px] w-[90vmin] sm:w-[75vw] lg:w-full mx-auto bg-cover bg-center aspect-[16/9] rounded-[10px] relative lg:ms-2"
                  style={{ backgroundImage: "url(infrastructure.avif)" }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-25 rounded-[10px]"></div>
                  <span className="text-white absolute top-6 left-6 text-xl font-roboto">
                    Infrastructură
                  </span>
                </div>
              </div>
              <div
                className="h-[150px] w-[90vmin] sm:w-[75vw] lg:w-full mx-auto bg-cover bg-center rounded-[10px] mt-4 relative"
                style={{ backgroundImage: "url(pharma.avif)" }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-25 rounded-[10px]"></div>
                <span className="text-white absolute top-6 left-6 text-xl font-roboto">
                  Centre Farmaceutice
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Reccomends*/}
      <div
        className="text-center bg-center bg-cover py-6 px-4 lg:px-0 relative"
        style={{ backgroundImage: "url(industrial-building.avif)" }}
      >
        {" "}
        <div className="absolute inset-0 top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
        <div className="flex items-center flex-col justify-center z-10 relative">
          <span
            className="text-[20px] uppercase text-white font-roboto"
            data-aos="zoom-in-up"
            data-aos-delay="300"
          >
            Ce ne recomandă
          </span>
          <span className="w-full border-[3px] border-[#e24747] mt-4 mb-8 max-w-[900px]"></span>
          <span className="text-white max-w-[80ch] xl:max-w-none">
            Suntem mândri să oferim servicii de construcții industriale de cea
            mai înaltă calitate, construind nu doar structuri solide și
            eficiente, ci și relații de lungă durată cu clienții noștri.
            <br />
            Contactați-ne pentru a discuta despre cum putem transforma proiectul
            dumneavoastră în realitate și pentru a vă oferi soluțiile perfect
            adaptate nevoilor și obiectivelor dumneavoastră industriale în
            realitate!
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
                  Punctualitate și <br /> Acuratețe
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

export default IndustrialBulding;
