import RecommendCards from "../../Components/RecommendCards";
import ContactForm from "../../Components/ContactForm";

const MarineService = () => {
  return (
    <>
      {/* Services */}
      <div className="flex flex-col items-center justify-center w-full lg:px-24 p-4">
        <span className="text-[#ECA72C] font-semibold" data-aos="fade-up">
          Servici
        </span>
        <span
          className="font-bold text-[20px]"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Electrice
        </span>
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center my-6 w-full p-4">
          <div
            style={{ backgroundImage: "url(cooper.avif)" }}
            className="rounded-tl-[30px] rounded-br-[30px] mt-6 flex-shrink-0 lg:mt-0 w-full h-[200px] lg:w-[450px] lg:h-[260px] lg:me-4 bg-center bg-cover"
          />

          <div className="lg:ms-4" data-aos="fade-right">
            <span className="font-semibold  lg:text-lg xl:text-[25px]">
              Instalatii electrice pentru Vase
            </span>
            <div className="py-0.5 my-2 xl:my-4 bg-[#ECA72C] w-full max-w-[500px]"></div>
            <p className="sm:text-start text-xs md:text-sm xl:text-base xl:max-w-[79ch]">
              Ne angajăm să oferim servicii de înaltă calitate și soluții
              inovatoare pentru navele din industria maritimă. Echipa noastră de
              ingineri și tehnicieni specializați în domeniul electricității
              marine este pregătită să vă ajute să vă modernizați și să vă
              optimizați navele cu cele mai avansate tehnologii electrice
              disponibile
            </p>
            <p className="sm:text-start text-xs md:text-sm xl:text-base xl:max-w-[79ch] mt-2">
              De la sisteme de distribuție a energiei la iluminat, de la sisteme
              de control și monitorizare la echipamente de siguranță electrică,
              oferim o gamă completă de servicii și produse pentru a satisface
              toate nevoile dumneavoastră electrice la bordul navelor.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full lg:px-24 p-4">
        <span className="text-[#ECA72C] font-semibold" data-aos="fade-up">
          Servici
        </span>
        <span
          className="font-bold text-[20px]"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Reconditionare & Modernizare
        </span>
        <div className="flex flex-col lg:flex-row-reverse items-center justify-center my-6 w-full p-4">
          <div
            style={{ backgroundImage: "url(ship-workers.avif)" }}
            className="rounded-tl-[30px] rounded-br-[30px] mt-6 flex-shrink-0 lg:mt-0 w-full h-[200px] lg:w-[450px] lg:h-[260px] lg:me-4 bg-center bg-cover"
          />

          <div className="lg:ms-4" data-aos="fade-right">
            <span className="font-semibold  lg:text-lg xl:text-[25px]">
              Solutii complete de reconditionare si modernizare
            </span>
            <div className="py-0.5 my-2 xl:my-4 bg-[#ECA72C] w-full max-w-[500px]"></div>
            <p className="sm:text-start text-xs md:text-sm xl:text-base xl:max-w-[79ch]">
              Indiferent de starea actuală a navei sau de scopul modernizării,
              vă oferim soluții complete care acoperă toate aspectele
              recondiționării și modernizării. De la renovarea structurii și
              echipamentelor la modernizarea sistemelor electrice și
              electronice, și până la instalarea de tehnologii noi și
              inovatoare, ne asigurăm că navele dvs. sunt echipate pentru
              performanță și eficiență maximă.
            </p>
            <p className="sm:text-start text-xs md:text-sm xl:text-base xl:max-w-[79ch] mt-2">
              Suntem aici pentru a vă oferi soluțiile de care aveți nevoie
              pentru a vă atinge obiectivele.
            </p>
          </div>
        </div>
      </div>

      {/*Smart Home*/}
      <div className="flex flex-col items-center justify-center w-full container mx-auto xl:px-24 p-4">
        <span className="text-[#ECA72C] font-semibold" data-aos="fade-up">
          Servici
        </span>
        <span
          className="font-bold text-[20px]"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Alte servicii
        </span>
        <div className="flex flex-col items-center justify-center lg:grid grid-cols-5 my-6 overflow-x-hidden">
          <div
            className="col-span-2 max-w-[89vmin] md:px-6 md:max-w-none mb-4 lg:mb-0"
            data-aos="fade-right"
          >
            <span className="text-2xl font-medium">
              Oferim o gama variata de servicii navale
            </span>
            <div className="w-full border-2 border-[#ECA72C] mt-2 mb-4"></div>
            <p className="tracking-tight lg:max-w-[50ch]">
              Echipa noastră experimentată de lăcătuși navali este pregătită să
              abordeze orice provocare, fie că este vorba despre sudură,
              confecționare de piese sau reparații structurale.
            </p>
            <p className="tracking-tight lg:max-w-[50ch]">
              Echipa noastră de ingineri și tehnicieni navali vă ajută să
              identificați și să implementați cele mai potrivite soluții pentru
              nevoile unice ale navei dvs., asigurându-vă că aceasta rămâne la
              cel mai înalt nivel de performanță.
            </p>
            <p className="tracking-tight lg:max-w-[50ch]">
              Suntem dedicați să aducem cele mai noi tehnologii și soluții
              inovatoare în domeniul naval. De la sisteme avansate de navigație
              și control la tehnologii de siguranță și comunicații de vârf.
            </p>
          </div>
          <div className="col-span-3 lg:ps-6" data-aos="fade-left">
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between w-full">
                <div
                  className="h-[150px] mx-auto w-[90vmin] sm:w-[75vw] lg:w-full bg-cover bg-center aspect-[16/9] rounded-[10px] relative mb-4 lg:mb-0 lg:me-2"
                  style={{ backgroundImage: "url(lockery.avif)" }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-25 rounded-[10px]"></div>
                  <span className="text-white absolute top-6 left-6 text-xl font-roboto">
                    Lăcătușerie
                  </span>
                </div>
                <div
                  className="h-[150px] w-[90vmin] sm:w-[75vw] lg:w-full mx-auto bg-cover bg-center aspect-[16/9] rounded-[10px] relative lg:ms-2"
                  style={{ backgroundImage: "url(modern.avif)" }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-25 rounded-[10px]"></div>
                  <span className="text-white absolute top-6 left-6 text-xl font-roboto">
                    Dry Dock
                  </span>
                </div>
              </div>
              <div
                className="h-[150px] w-[90vmin] sm:w-[75vw] lg:w-full mx-auto bg-cover bg-center rounded-[10px] mt-4 relative"
                style={{ backgroundImage: "url(tech.avif)" }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-25 rounded-[10px]"></div>
                <span className="text-white absolute top-6 left-6 text-xl font-roboto">
                  Tehnologie navala
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Reccomends*/}
      <div className="text-center py-6 px-4 lg:px-0 relative bg-[#5E727F]">
        <div className="flex items-center flex-col justify-center z-10 relative">
          <span
            className="text-[20px] uppercase text-white font-roboto"
            data-aos="zoom-in-up"
            data-aos-delay="300"
          >
            Ce ne recomandă
          </span>
          <span className="w-full border-[3px] border-[#ECA72C] mt-4 mb-8 max-w-[900px]"></span>
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

export default MarineService;
