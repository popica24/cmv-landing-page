import { createBrowserRouter } from "react-router-dom";
import Frontpage from "../Pages/Frontpage/Frontpage";
import Civil from "../Pages/Civil/Civil";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Frontpage />,
    index: true,
  },
  {
    path: "/civil",
    element: <Civil />,
  },
]);
