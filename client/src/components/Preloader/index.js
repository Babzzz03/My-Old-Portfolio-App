import React from 'react'
import "./Preloader.css"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { BallTriangle } from 'react-loader-spinner';
import goal2 from "../../images/Newlogo2.png";
import { motion } from "framer-motion";
function Preloader() {
  return (
    <div className="preloader">
     
   <img src={goal2} className="logo__loader" alt="" srcset="" />
    </div>
  );
}

export default Preloader