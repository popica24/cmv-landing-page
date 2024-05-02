import { createBrowserRouter } from "react-router-dom";
import Frontpage from "../Pages/Frontpage/Frontpage";
import Civil from "../Pages/Civil/Civil";
import Layout from "../Layout/Layout";
import Solar from "../Pages/Solar/Solar";

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
      { path: "civil", element: <Civil /> },
      { path: "solar", element: <Solar /> },
    ],
  },
]);
