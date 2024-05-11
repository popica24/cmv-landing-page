import { useState } from "react";
import Consumption from "./Components/Consumption";
import RoofTypes from "./Components/RoofTypes";
import InstallPlace from "./Components/InstallPlace";
import RoofMaterialTypes from "./Components/RoofMaterialTypes";
import RoofRotation from "./Components/RoofRotation";

const Configurator = () => {
  const [step, setStep] = useState(1);
  const nextStep = () => {
    setStep(step + 1);
  };
  const previousStep = () => {
    setStep(step - 1);
  };
  const toForm = () => {
    setStep(6);
  };
  if (step == 1) return <Consumption nextStep={nextStep} />;
  if (step == 2)
    return (
      <RoofTypes
        nextStep={nextStep}
        previousStep={previousStep}
        toForm={toForm}
      />
    );

  if (step == 3) {
    return (
      <RoofMaterialTypes nextStep={nextStep} previousStep={previousStep} />
    );
  }
  if (step == 4) {
    return <RoofRotation />;
  }
  if (step == 6) {
    return <InstallPlace nextStep={nextStep} previousStep={previousStep} />;
  }
};

export default Configurator;
