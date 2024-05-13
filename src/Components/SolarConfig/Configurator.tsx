import { useState } from "react";
import Consumption from "./Pages/Consumption";
import RoofTypes from "./Pages/RoofTypes";
import InstallPlace from "./Pages/InstallPlace";
import RoofMaterialTypes from "./Pages/RoofMaterialTypes";
import RoofRotation from "./Pages/RoofRotation";

const Configurator = () => {
  const [step, setStep] = useState(1);
  const nextStep = () => {
    setStep(step + 1);
  };
  const previousStep = () => {
    setStep(step - 1);
  };
  const toForm = () => {
    setStep(5);
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
    return <RoofRotation nextStep={nextStep} previousStep={previousStep} />;
  }
  if (step == 5) {
    return <InstallPlace />;
  }
};

export default Configurator;
