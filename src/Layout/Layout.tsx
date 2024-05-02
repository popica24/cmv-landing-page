import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const Layout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

export default Layout;
