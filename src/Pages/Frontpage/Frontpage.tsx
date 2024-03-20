import { CSSProperties, useState } from "react";
import NavPill from "./components/NavPill";

const Frontpage = () => {
  const [civilHover, setCivilHover] = useState(false);
  const [solarHover, setSolarHover] = useState(false);
  const [marineHover, setMarineHover] = useState(false);

  const civilIndustrialBg: CSSProperties = {
    backgroundImage: "url(civil-industrial.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const solarEnergyBg: CSSProperties = {
    backgroundImage: "url(solar-energy.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const marinServicesBg: CSSProperties = {
    backgroundImage: "url(marin-services.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "70%",
  };
  return (
    <div className="flex flex-row h-screen w-full relative">
      <div className="absolute left-4 -top-8">
        <img src="Artboard_1.svg" alt="" width={300} height={191} />
      </div>
      <div className="frontpage-card">
        <div
          className="h-full"
          style={civilIndustrialBg}
          onMouseEnter={() => setCivilHover(true)}
          onMouseLeave={() => setCivilHover(false)}
        >
          <div className="flex flex-col h-full justify-between">
            <span className="text-center text-white text-4xl font-medium drop-shadow-md mt-28">
              Civil and Industrial
            </span>

            <div className={`mb-28 ${civilHover ? "fadeIn" : "hidden"}`}>
              <NavPill
                text={
                  "Expertiză în construcții civile și industriale, creând infrastructuri durabile și inovatoare."
                }
                leftLinkText={"Civile"}
                rightLinkText={"Industriale"}
                leftLink={"civile"}
                rightLink={"industriale"}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="frontpage-card border-x-8">
        <div
          className="h-full"
          style={solarEnergyBg}
          onMouseEnter={() => setSolarHover(true)}
          onMouseLeave={() => setSolarHover(false)}
        >
          <div className="flex flex-col h-full justify-between">
            <span className="text-center text-white text-4xl font-medium drop-shadow-md mt-28">
              Solar Energy
            </span>
            <div className={`mb-28 ${solarHover ? "fadeIn" : "hidden"}`}>
              <NavPill
                text={
                  "Descoperă soluții eco-friendly și economice pentru energie solară - panouri solare de înaltă calitate, instalate de profesioniști experimentați."
                }
                leftLinkText={"Civile"}
                rightLinkText={"Industriale"}
                leftLink={"civile"}
                rightLink={"industriale"}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="frontpage-card">
        <div
          className="h-full"
          style={marinServicesBg}
          onMouseEnter={() => setMarineHover(true)}
          onMouseLeave={() => setMarineHover(false)}
        >
          <div className="flex flex-col h-full justify-between">
            <span className="text-center text-white text-4xl font-medium drop-shadow-md mt-28">
              Marine Services
            </span>
            <div className={`mb-28 ${marineHover ? "fadeIn" : "hidden"}`}>
              <NavPill
                text={
                  "Servicii maritime de încredere: reparatii, mentenanta si consultanta pentru ambarcatiuni, asigurând navigare sigură și eficientă pe tot parcursul."
                }
                leftLinkText={"Civile"}
                rightLinkText={"Industriale"}
                leftLink={"civile"}
                rightLink={"industriale"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontpage;
