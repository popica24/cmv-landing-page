import { useState } from "react";
import civilIndustrial from "../../../public/civil-industrial.avif";
import solarEnergy from "../../../public/solar-energy.avif";
import marinServices from "../../../public/marin-services.avif";
import { motion } from "framer-motion";
import NavPill from "./components/NavPill";
const Frontpage = () => {
  document.title = "CMV Electrical Solutions | Acasa";
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleCardHover = (index: number) => {
    setExpandedIndex(index == expandedIndex ? -1 : index);
  };

  const cardVariants = {
    expanded: {
      flex: "2 1 20px",
    },
    collapsed: {
      flex: "1 1 20px",
    },
  };

  const cardLinks = [
    {
      title: "Civil and Industrial",
      text: "Expertiză în construcții civile și industriale, creând infrastructuri durabile și inovatoare.",
      left: {
        text: "Civile",
        link: "/civil-and-industrial",
        state: true,
      },
      right: {
        text: "Industriale",
        link: "/civil-and-industrial",
        state: false,
      },
    },
    {
      title: "Solar Energy",
      text: "Descoperă soluții eco-friendly și economice pentru energie solară - panouri solare de înaltă calitate, instalate de profesioniști experimentați.",
      left: {
        text: "Rezidentiale",
        link: "/solar-energy",
        state: true,
      },
      right: {
        text: "Industriale",
        link: "/solar-energy",
        state: false,
      },
    },
    {
      title: "Marin Services",
      text: "Servicii maritime de încredere: reparatii, mentenanta si consultanta pentru ambarcatiuni, asigurând navigare sigură și eficientă pe tot parcursul.",
      left: {
        text: "Afla mai mult",
        link: "/marine-services",
        state: true,
      },
    },
  ];

  const cardImages = [civilIndustrial, solarEnergy, marinServices];
  return (
    <>
      <div className="flex flex-col h-screen lg:flex-row justify-center items-center overflow-hidden relative">
        <div className="absolute top-5 left-5"></div>
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className={`card cursor-pointer h-screen w-screen bg-cover bg-center ${
              i === expandedIndex ? "expanded" : ""
            }`}
            variants={cardVariants}
            initial="collapsed"
            animate={i === expandedIndex ? "expanded" : "collapsed"}
            transition={{ duration: 0.5 }}
            onMouseEnter={() => handleCardHover(i)}
            style={{
              backgroundImage: `url(${cardImages[i]})`,
            }}
          >
            <div className="flex flex-col items-center justify-between h-full pt-3 md:pt-12 lg:pt-32 relative overflow-hidden">
              <span className=" md:text-4xl text-white font-medium text-center">
                {cardLinks[i].title}
              </span>
              {expandedIndex == i && (
                <NavPill
                  text={cardLinks[i].text}
                  leftLinkText={cardLinks[i].left.text}
                  rightLinkText={cardLinks[i].right?.text}
                  leftLink={cardLinks[i].left.link}
                  rightLink={cardLinks[i].right?.link}
                  leftLinkState={cardLinks[i].left.state}
                  rightLinkState={cardLinks[i].right?.state}
                />
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Frontpage;
