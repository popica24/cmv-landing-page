import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import ConfiguratorComponent from "./SolarConfig/ConfiguratorComponent";

const Configurator = () => {
  return (
    <>
      <Navbar />

      <div className="my-6">
        <ConfiguratorComponent />
      </div>
      <Footer />
    </>
  );
};

export default Configurator;
