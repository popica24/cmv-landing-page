import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Civil from "../Pages/Civil/Civil";
import Solar from "../Pages/Solar/Solar";
import Marine from "../Pages/Marine/Marine";
import Configurator from "../Pages/Configurator/Configurator";
import { ConfiguratorProvider } from "../Context/ConfiguratorContext";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Civil />} />
      <Route path="solar-energy" element={<Solar />} />
      <Route
        path="configurator"
        element={
          <ConfiguratorProvider>
            <Configurator />
          </ConfiguratorProvider>
        }
      />
      <Route path="marine-services" element={<Marine />} />
      <Route path="/*" element={<Civil />} />
    </>
    
  )
);
