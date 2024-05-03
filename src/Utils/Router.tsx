import { createBrowserRouter } from "react-router-dom";
import Frontpage from "../Pages/Frontpage/Frontpage";
import Civil from "../Pages/Civil/Civil";
import Layout from "../Layout/Layout";
import Solar from "../Pages/Solar/Solar";
import Marine from "../Pages/Marine/Marine";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Frontpage />,
    index: true,
  },
  {
    path: "/*",
    element: <Layout />,
    children: [
      { path: "civil-and-industrial", element: <Civil /> },
      { path: "solar-energy", element: <Solar /> },
      { path: "marine-services", element: <Marine /> },
    ],
  },
]);
