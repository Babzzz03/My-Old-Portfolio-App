import React, { useState } from "react";
import { homeObjOne, homeObjTwo, homeObjThree } from "../components/Data/Index";
import Footer from "../components/Footer";
import HeroElement from "../components/HeroElement";
import Info from "../components/Info";
import Navbar from "../components/Navbar";
import Potfolio from "../components/Potfolio";
import Preloader from "../components/Preloader";
import Process from "../components/Process";
import Service from "../components/Service";
import Sidebar from "../components/Sidebar";

function Home() {
  const [isOpen, setisOpen] = useState(false);

  const toggle = () => {
    setisOpen(!isOpen);
  };
  return (
    <>
    
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroElement />
      <Info {...homeObjOne} />
       <Potfolio/>
      <Service />

      <Process />
      <Footer />
    </>
  );
}

export default Home;
