import { useEffect, useRef, useState } from "react";
import Consumption from "./Pages/Consumption";
import RoofTypes from "./Pages/RoofTypes";
import InstallPlace from "./Pages/InstallPlace";
import RoofMaterialTypes from "./Pages/RoofMaterialTypes";
import RoofRotation from "./Pages/RoofRotation";

const Configurator = () => {
  const [step, setStep] = useState(1);
  const configuratorRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (configuratorRef.current) {
      configuratorRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [step]);
  const nextStep = () => {
    setStep(step + 1);
  };
  const previousStep = () => {
    setStep(step - 1);
  };
  const toForm = () => {
    setStep(5);
  };
  if (step == 1)
    return (
      <div ref={configuratorRef}>
        <Consumption nextStep={nextStep} />
      </div>
    );
  if (step == 2)
    return (
      <div ref={configuratorRef}>
        <RoofTypes
          nextStep={nextStep}
          previousStep={previousStep}
          toForm={toForm}
        />
      </div>
    );

  if (step == 3) {
    return (
      <div ref={configuratorRef}>
        <RoofMaterialTypes nextStep={nextStep} previousStep={previousStep} />
      </div>
    );
  }
  if (step == 4) {
    return (
      <div ref={configuratorRef}>
        <RoofRotation nextStep={nextStep} previousStep={previousStep} />
      </div>
    );
  }
  if (step == 5) {
    return (
      <div ref={configuratorRef}>
        <InstallPlace />
      </div>
    );
  }
};

export default Configurator;
