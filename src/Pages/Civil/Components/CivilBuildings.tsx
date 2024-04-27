import ContactForm from "./ContactForm";
import RecommendCards from "./RecommendCards";
import ServiceCards from "./ServiceCards";

const CivilBuildings = () => {
  return (
    <>
      {" "}
      <div className="flex flex-col items-center justify-center max-w-[90vmin] sm:container mx-auto py-8 sm:py-20">
        <span className="text-[#F26100] font-semibold slide-from-bottom">
          Servici
        </span>
        <span className="font-bold text-[20px] fadeIn">Imobiliare</span>
        <div className="flex flex-col sm:flex-row items-center justify-center pt-12">
          <img
            src="civil.jpeg"
            alt=""
            width={450}
            height={260}
            className="rounded-tl-[30px] rounded-br-[30px]"
          />
          <div className="flex flex-col justify-center items-center text-center sm:items-start w-full sm:ms-12">
            <span className="font-semibold text-[25px] flip">
              Construcții de case și apartamente
            </span>
            <div className="py-1 my-4 bg-[#F26100] sm:loading-bar w-full"></div>
            <p className="sm:max-w-[78ch] font-medium delayedfadeIn sm:text-start">
              Casa sau apartamentul pe care îl construiți nu este doar un simplu
              proiect de construcție, ci un vis materializat. De aceea, suntem
              dedicați să vă oferim experiența și expertiza noastră în
              construcții pentru a transforma visul dumneavoastră în realitate.
              Cu ani de experiență în domeniul construcțiilor, ne-am angajat să
              aducem calitate, inovație și atenție la detalii în fiecare proiect
              pe care îl realizăm. Indiferent dacă doriți să construiți o casă
              de familie confortabilă sau un complex de apartamente modern,
              echipa noastră de profesioniști calificați este aici pentru a vă
              ghida în fiecare pas al procesului.
            </p>
          </div>
        </div>
        <div
          className="flex sm:flex-row flex-col sm:items-stretch justify-center my-20 w-full max-w-[90vmin] sm:container mx-auto px-24"
          data-aos="fade-up"
        >
          <div className="flex flex-row justify-center sm:justify-evenly w-full">
            <ServiceCards text="Case" imagePath="House.svg" />
            <ServiceCards text="Cladiri Office" imagePath="Office.svg" />
          </div>
          <div className="flex flex-row justify-center sm:justify-evenly w-full">
            <ServiceCards text="Servicii Electrice" imagePath="Electric.svg" />
            <ServiceCards
              text="Cladiri Industriale"
              imagePath="IndustrialBuildings.svg"
            />
          </div>
        </div>
        <span
          className="text-[#F26100] font-semibold"
          data-aos="zoom-in-up"
          data-aos-delay="300"
        >
          Servici
        </span>
        <span
          className="font-bold text-[20px]"
          data-aos="zoom-in-up"
          data-aos-delay="300"
        >
          Electrică / Smart Home
        </span>
        <div className="flex flex-col-reverse sm:grid grid-cols-5 sm:px-24 sm:mt-20 sm:mb-20 max-w-[90vmin] mx-auto sm:max-w-none">
          <div className="col-span-2" data-aos="fade-right">
            <div className="flex flex-col max-w-[55ch]">
              <span className="text-[23px] leading-5 font-medium font-roboto">
                Transformă-ți Casa într-un Spațiu Inteligent
              </span>
              <div className="bg-[#F26100] w-full py-0.5 my-4" />
              <span className="leading-5 font-roboto">
                Ne dedicăm aducerea inovației și eficienței în casele și
                afacerile clienților noștri prin servicii de electricitate și
                soluții inteligente pentru casă. Cu o echipă de specialiști
                pasionați și experți în domeniul electricității și tehnologiei
                smart home, suntem aici pentru a transforma visele tale în
                realitate și pentru a aduce confort, securitate și economii de
                energie în viața de zi cu zi.
              </span>
              <span className="mt-4 leading-5 font-roboto">
                Oferim soluții complete de smart home care permit controlul și
                automatizarea diverselor aspecte ale casei tale, de la iluminat
                și climatizare până la securitate și divertisment.
              </span>
            </div>
          </div>
          <div className="col-span-3" data-aos="fade-left">
            <div className="flex flex-col my-4 sm:my-0">
              <div className="flex flex-row justify-between">
                <div
                  style={{ backgroundImage: "url(smart-lighting.jpeg)" }}
                  className="bg-center bg-cover w-[360px] h-[150px] rounded-[10px] me-5"
                ></div>
                <div
                  style={{ backgroundImage: "url(smart-climate.jpeg)" }}
                  className="bg-center bg-cover w-[360px] h-[150px] rounded-[10px]"
                ></div>
              </div>
              <div
                style={{ backgroundImage: "url(advanced-security.jpeg)" }}
                className="bg-center bg-cover w-full h-[150px] rounded-[10px] mt-5"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#5E727F] w-full text-white py-6">
        <div className="container mx-auto flex flex-col items-center justify-center">
          <span className="text-[22px] font-roboto">CE NE RECOMANDA</span>
          <div className="hidden sm:block w-full px-[15rem]">
            <div className="bg-[#F26100] py-[2.6px] mt-6 mb-8" />
          </div>
          <span className="text-center sm:text-start sm:px-24 font-roboto my-4 sm:my-0">
            Suntem mândri să oferim servicii de construcții de cea mai înaltă
            calitate, construind nu doar case și apartamente, ci și relații de
            lungă durată cu clienții noștri. Contactați-ne pentru a discuta
            despre cum putem transforma visul dumneavoastră în realitate!
          </span>
          <div
            className="flex flex-col sm:flex-row sm:items-stretch items-center justify-between sm:my-20 w-full container mx-auto px-24"
            data-aos="fade-up"
          >
            <div className="flex flex-row sm:justify-evenly sm:w-full">
              <RecommendCards
                text={
                  <span className="whitespace-nowrap font-roboto sm:text-[17px] text-[13px] text-center">
                    Expertiză și
                    <br /> Profesionalism
                  </span>
                }
                imagePath="Experience.svg"
              />
              <RecommendCards
                text={
                  <span className="whitespace-nowrap font-roboto sm:text-[17px] text-[13px] text-center">
                    Personalizare și
                    <br /> Design Creativ
                  </span>
                }
                imagePath="Personality.svg"
              />
            </div>
            <RecommendCards
              text={
                <span className="whitespace-nowrap font-roboto sm:text-[17px] text-[13px] text-center">
                  Transparență și
                  <br /> Comunicare Deschisă
                </span>
              }
              imagePath="Transparency.svg"
            />
            <div className="flex flex-row sm:justify-evenly sm:w-full">
              <RecommendCards
                text={
                  <span className="whitespace-nowrap font-roboto sm:text-[17px] text-[13px] text-center">
                    Calitate și
                    <br /> Durabilitate
                  </span>
                }
                imagePath="Durability.svg"
              />
              <RecommendCards
                text={
                  <span className="whitespace-nowrap font-roboto sm:text-[17px] text-[13px] text-center">
                    Punctualitate și
                    <br /> Respectarea Termenelor
                  </span>
                }
                imagePath="Punctuality.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <ContactForm />
    </>
  );
};

export default CivilBuildings;
