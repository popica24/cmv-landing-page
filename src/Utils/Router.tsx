import { createBrowserRouter } from "react-router-dom";
import Civil from "../Pages/Civil/Civil";
import Solar from "../Pages/Solar/Solar";
import Marine from "../Pages/Marine/Marine";
import Configurator from "../Pages/Configurator/Configurator";
import { ConfiguratorProvider } from "../Context/ConfiguratorContext";
import Layout from "../Layout/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Civil />,
      },
      {
        path: "solar-energy",
        element: <Solar />,
      },
      {
        path: "marine-services",
        element: <Marine />,
      },
      {
        path: "configurator",
        element: (
          <ConfiguratorProvider>
            <Configurator />
          </ConfiguratorProvider>
        ),
      },
    ],
  },
]);
