import CountUp from "react-countup";
import RecommendCards from "../../Civil/Components/RecommendCards";
import ContactForm from "../../Civil/Components/ContactForm";

const Industrial = () => {
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
          Industriale
        </span>
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center my-6 w-full p-4">
          <div
            style={{ backgroundImage: "url(solar.jpg)" }}
            className="rounded-tl-[30px] rounded-br-[30px] mt-6 lg:mt-0 w-full h-[200px] lg:w-[450px] lg:h-[260px] me-4 bg-center bg-cover"
          />

          <div className="lg:ms-4" data-aos="fade-right">
            <span className="font-semibold  lg:text-lg xl:text-[25px]">
              Solutii Fotovoltaice pentru Întreprinderi
            </span>
            <div className="py-0.5 my-2 xl:my-4 bg-[#6EA73C] w-full max-w-[500px]"></div>
            <p className="sm:text-start text-xs md:text-sm xl:text-base xl:max-w-[79ch]">
              Proiectul de instalare a sistemului solar pentru casa sau
              apartamentul dumneavoastră nu este doar o simplă operațiune, ci
              îndeplinirea unui vis. De aceea, ne dedicăm să vă oferim
              experiența și expertiza noastră în energie solară pentru a
              transforma visul dumneavoastră în realitate durabilă.
            </p>
            <p className="sm:text-start text-xs md:text-sm xl:text-base xl:max-w-[79ch]">
              Cu ani de experiență în domeniul energiei solare, aducem calitate,
              inovație și atenție la detalii în fiecare proiect. Indiferent dacă
              este vorba despre o casă de familie sau un complex de apartamente,
              echipa noastră de profesioniști calificați vă ghidează în fiecare
              pas al procesului.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center my-8">
        <div className="flex flex-col items-center justify-center">
          <span className="inline-flex items-center text-[70px] font-medium leading-[70px]">
            <CountUp start={2300} end={2014} duration={2} separator="" />
          </span>
          <span className="text-2xl">Experienta din</span>
        </div>
        <div className="flex flex-col items-center justify-center mx-24">
          <span className="inline-flex items-center text-[70px] font-medium leading-[70px]">
            <CountUp start={8000} end={10000} duration={2} separator="." />+
          </span>
          <span className="text-2xl">Panouri montate</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="inline-flex items-center text-[70px] font-medium leading-[70px]">
            <CountUp end={50} duration={2} />+
          </span>
          <span className="text-2xl">Clienti Multumiti</span>
        </div>
        <div className="flex flex-col items-center justify-center ms-24">
          <span className="inline-flex items-center text-[70px] font-medium leading-[70px]">
            <CountUp end={5} duration={2} />+
          </span>
          <span className="text-2xl">MW Instalati</span>
        </div>
      </div>
      {/*Smart Home*/}
      <div className="flex flex-col items-center justify-center w-full container mx-auto xl:px-24 p-4">
        <span className="text-[#6EA73C] font-semibold slide-from-bottom">
          Servici
        </span>
        <span className="font-bold text-[20px] fadeIn">Energie Solară</span>
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
                  style={{ backgroundImage: "url(smart-lighting.jpeg)" }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-25 rounded-[10px]"></div>
                  <span className="text-white absolute top-6 left-6 text-xl font-roboto">
                    Iluminat Smart
                  </span>
                </div>
                <div
                  className="h-[150px] w-[90vmin] sm:w-[75vw] lg:w-full mx-auto bg-cover bg-center aspect-[16/9] rounded-[10px] relative lg:ms-2"
                  style={{ backgroundImage: "url(smart-climate.jpeg)" }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-25 rounded-[10px]"></div>
                  <span className="text-white absolute top-6 left-6 text-xl font-roboto">
                    Climatizare Inteligentă
                  </span>
                </div>
              </div>
              <div
                className="h-[150px] w-[90vmin] sm:w-[75vw] lg:w-full mx-auto bg-cover bg-center rounded-[10px] mt-4 relative"
                style={{ backgroundImage: "url(advanced-security.jpeg)" }}
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
      <div className="text-center bg-[#5E727F] py-6 px-4 lg:px-0">
        <div className="flex items-center flex-col justify-center">
          <span
            className="text-[20px] uppercase text-white font-roboto"
            data-aos="zoom-in-up"
            data-aos-delay="300"
          >
            Ce ne recomandă
          </span>
          <span className="w-full border-[3px] border-[#6EA73C] mt-4 mb-8 max-w-[900px]"></span>
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

export default Industrial;
