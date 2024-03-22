import React from "react";
import JoinOurTeam from "./components/JoinOurTeam";
import Testimonials from "./components/Testimonials";
import Services from "./components/Services";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactUs from "./components/ContactUs";
import AdoptChild from "./components/AdoptChild";
import MoreInfo from "./components/MoreInfo";
import Homepage from "./components/HomePage";
import AboutUsPage from "./components/AboutUs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet />
      <Footer></Footer>
    </>
  );
}

export default App;
