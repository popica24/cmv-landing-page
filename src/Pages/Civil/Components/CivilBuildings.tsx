import ContactForm from "./ContactForm";
import RecommendCards from "./RecommendCards";
import ServiceCards from "./ServiceCards";

const CivilBuildings = () => {
  return (
    <>
      {/* Services */}
      <div className="flex flex-col items-center justify-center w-full lg:px-24 p-4">
        <span className="text-[#F26100] font-semibold slide-from-bottom">
          Servici
        </span>
        <span className="font-bold text-[20px] fadeIn">Imobiliare</span>
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center my-6 w-full p-4">
          <img
            src="civil.jpeg"
            alt=""
            className="rounded-tl-[30px] rounded-br-[30px] mt-6 lg:mt-0 lg:w-[450px] lg:h-[260px] me-4"
          />
          <div className="lg:ms-4">
            <span className="font-semibold  lg:text-lg xl:text-[25px] flip">
              Construcții de case și apartamente
            </span>
            <div className="py-0.5 my-2 xl:my-4 bg-[#F26100] sm:loading-bar w-full max-w-[500px]"></div>
            <p className="delayedfadeIn sm:text-start text-xs md:text-sm xl:text-base xl:max-w-[79ch]">
              Casa sau apartamentul pe care îl construiți nu este doar un simplu
              proiect de construcție, ci un vis materializat. De aceea, suntem
              dedicați să vă oferim experiența și expertiza noastră în
              construcții pentru a transforma visul dumneavoastră în realitate.
            </p>
            <p className="delayedfadeIn sm:text-start text-xs md:text-sm xl:text-base xl:max-w-[79ch]">
              Cu ani de experiență în domeniul construcțiilor, ne-am angajat să
              aducem calitate, inovație și atenție la detalii în fiecare proiect
              pe care îl realizăm. Indiferent dacă doriți să construiți o casă
              de familie confortabilă sau un complex de apartamente modern,
              echipa noastră de profesioniști calificați este aici pentru a vă
              ghida în fiecare pas al procesului.
            </p>
          </div>
        </div>
      </div>
      {/* Service Cards */}
      <div className="grid lg:grid-cols-4 grid-cols-2 place-items-center container mx-auto lg:px-24 p-4">
        <div className="col-span-1">
          <ServiceCards text="Case" imagePath="House.svg" />
        </div>
        <div className="col-span-1">
          <ServiceCards text="Cladiri Office" imagePath="Office.svg" />
        </div>
        <div className="col-span-1">
          <ServiceCards text="Servicii Electrice" imagePath="Electric.svg" />
        </div>
        <div className="col-span-1">
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
          Electrică / Smart Home
        </span>
        <div className="flex flex-col items-center justify-center lg:grid grid-cols-5 my-6">
          <div className="col-span-2 max-w-[89vmin] lg:max-w-none mb-4 lg:mb-0">
            <span className="text-2xl font-medium">
              Transformă-ți Casa într-un Spațiu Inteligent
            </span>
            <div className="w-full border-2 border-[#F26100] mt-2 mb-4"></div>
            <p className="tracking-tight lg:max-w-[50ch]">
              Ne dedicăm aducerea inovației și eficienței în casele și afacerile
              clienților noștri prin servicii de electricitate și soluții
              inteligente pentru casă. Cu o echipă de specialiști pasionați și
              experți în domeniul electricității și tehnologiei smart home,
              suntem aici pentru a transforma visele tale în realitate și pentru
              a aduce confort, securitate și economii de energie în viața de zi
              cu zi.
            </p>
            <p className="tracking-tight lg:max-w-[50ch]">
              Oferim soluții complete de smart home care permit controlul și
              automatizarea diverselor aspecte ale casei tale, de la iluminat și
              climatizare până la securitate și divertisment.
            </p>
          </div>
          <div className="col-span-3 lg:ps-6">
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between w-full">
                <div
                  className="h-[150px] w-[90vmin] mx-auto lg:w-full bg-cover bg-center aspect-[16/9] rounded-[10px] relative mb-4 lg:mb-0 lg:me-2"
                  style={{ backgroundImage: "url(smart-lighting.jpeg)" }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-25 rounded-[10px]"></div>
                  <span className="text-white absolute top-6 left-6 text-xl font-roboto">
                    Iluminat Smart
                  </span>
                </div>
                <div
                  className="h-[150px] w-[90vmin] mx-auto lg:w-full bg-cover bg-center aspect-[16/9] rounded-[10px] relative lg:ms-2"
                  style={{ backgroundImage: "url(smart-climate.jpeg)" }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-25 rounded-[10px]"></div>
                  <span className="text-white absolute top-6 left-6 text-xl font-roboto">
                    Climatizare Inteligentă
                  </span>
                </div>
              </div>
              <div
                className="h-[150px] w-[90vmin] mx-auto lg:w-full bg-cover bg-center rounded-[10px] mt-4 relative"
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
      <div className="text-center bg-[#5E727F] py-6">
        <div className="flex items-center flex-col justify-center">
          <span
            className="font-medium text-[20px] uppercase text-white"
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
          <div className="col-span-1">
            <RecommendCards
              text="Expertiză și Profesionalism"
              imagePath="Experience.svg"
            />
          </div>
          <div className="col-span-1">
            <RecommendCards
              text="Transparență și Comunicare"
              imagePath="Transparency.svg"
            />
          </div>
          <div className="col-span-1">
            <RecommendCards
              text="Calitate și Durabilitate"
              imagePath="Durability.svg"
            />
          </div>
          <div className="col-span-1">
            <RecommendCards
              text="Punctualitate și Acuratete"
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

export default CivilBuildings;
