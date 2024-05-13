import { createBrowserRouter } from "react-router-dom";
import Civil from "../Pages/Civil/Civil";
import Layout from "../Layout/Layout";
import Solar from "../Pages/Solar/Solar";
import Marine from "../Pages/Marine/Marine";
import Configurator from "../Pages/Configurator/Configurator";
import { ConfiguratorProvider } from "../Context/ConfiguratorContext";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "/", element: <Civil />, index: true }],
  },
  {
    path: "/*",
    element: <Layout />,
    children: [
      { path: "solar-energy", element: <Solar /> },
      { path: "marine-services", element: <Marine /> },
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
