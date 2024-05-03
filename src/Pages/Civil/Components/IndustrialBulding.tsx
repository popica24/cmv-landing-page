import ContactForm from "./ContactForm";
import RecommendCards from "./RecommendCards";
import ServiceCards from "./ServiceCards";

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
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center my-6 w-full p-4">
          <div
            data-aos="flip-left"
            style={{ backgroundImage: "url(Industrial.avif)" }}
            className="rounded-tl-[30px] rounded-br-[30px] mt-6 lg:mt-0 w-full h-[200px] lg:w-[450px] lg:h-[260px] me-4 bg-cover bg-center"
          />

          <div className="lg:ms-4" data-aos="fade-right">
            <span className="font-semibold  lg:text-lg xl:text-[25px]">
              Infrastructură industrială
            </span>
            <div className="py-0.5 my-2 xl:my-4 bg-[#F26100] w-full max-w-[500px]"></div>
            <p className="sm:text-start text-xs md:text-sm xl:text-base xl:max-w-[79ch]">
              Suntem specializați în construcții industriale și în
              infrastructura destinată unor domenii critice precum centrele de
              date, centrele farmaceutice, energia regenerabilă și facilitățile
              de sănătate și educație. Cu o experiență vastă și o abordare
              orientată către rezultate, suntem alegerea ideală pentru
              proiectele dvs. complexe și specializate.
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
          <ServiceCards text="Energie regenerabilă" imagePath="Energy.svg" />
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
        <span className="text-[#F26100] font-semibold slide-from-bottom">
          Servici
        </span>
        <span className="font-bold text-[20px] fadeIn">
          Industriale / Energie verde
        </span>
        <div className="flex flex-col items-center justify-center lg:grid grid-cols-5 my-6">
          <div
            className="col-span-2 max-w-[89vmin] md:px-6 md:max-w-none mb-4 lg:mb-0"
            data-aos="fade-right"
          >
            <span className="text-xl font-medium">
              Transformăm Afacerile cu Soluții Verzi
            </span>
            <div className="w-full border-2 border-[#F26100] mt-2 mb-4"></div>
            <p className="tracking-tight lg:max-w-[50ch]">
              Suntem lideri în industria furnizării de soluții complete și
              personalizate în domeniile energiei verzi, centrelor de date și
              centrelor farmaceutice. La [Numele Companiei], ne străduim să
              aducem beneficiile tehnologiilor inovatoare și sustenabile în
              afacerile dumneavoastră, oferindu-vă soluții avansate și fiabile,
              adaptate cerințelor specifice ale fiecărui sector.
            </p>
            <p className="tracking-tight lg:max-w-[50ch]">
              Cu o echipă dedicată de specialiști în domeniile energiei solare,
              a infrastructurii IT și a industriei farmaceutice, suntem alegerea
              ideală pentru companiile care își doresc să investească într-un
              viitor mai verde și mai eficient.
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
                  style={{ backgroundImage: "url(electrical-solutions.avif)" }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-25 rounded-[10px]"></div>
                  <span className="text-white absolute top-6 left-6 text-xl font-roboto">
                    Solutii electrice
                  </span>
                </div>
              </div>
              <div
                className="h-[150px] w-[90vmin] sm:w-[75vw] lg:w-full mx-auto bg-cover bg-center rounded-[10px] mt-4 relative"
                style={{ backgroundImage: "url(solar-panels-industrial.avif)" }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-25 rounded-[10px]"></div>
                <span className="text-white absolute top-6 left-6 text-xl font-roboto">
                  Panouri solare
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Reccomends*/}
      <div className="text-center bg-[#5E727F] py-6 px-4 lg:px-0">
        <div className="flex items-center flex-col justify-center">
          <span
            className="text-[20px] uppercase text-white font-roboto"
            data-aos="zoom-in-up"
            data-aos-delay="300"
          >
            Ce ne recomandă
          </span>
          <span className="w-full border-[3px] border-[#F26100] mt-4 mb-8 max-w-[900px]"></span>
          <span className="text-white max-w-[80ch] xl:max-w-none">
            Suntem mândri să oferim servicii de construcții de cea mai înaltă
            calitate, construind nu doar case și apartamente, ci și relații de
            lungă durată cu clienții noștri. Contactați-ne pentru a <br />{" "}
            discuta despre cum putem transforma visul dumneavoastră în
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

export default IndustrialBulding;
