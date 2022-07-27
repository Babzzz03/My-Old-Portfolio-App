import React from "react";

import { useTypewriter, Cursor } from "react-simple-typewriter";
import "react-simple-typewriter/dist/index";
import "./HeroElement.css";
import { Link as LinkS } from "react-scroll";
import { motion } from "framer-motion";
import online from "../../images/Online.png";
 
function HeroElement() {
 const variants = {
  hidden: {opacity : 0, y:7},
  show : {opacity: 1, y:0, transition:{
    staggerChildren:0.7,
    delayChildren: 0.5,
    ease: "easeOut",
   duration: 1.8,
  } }
 };
  const { text } = useTypewriter({
    words: [
      " a Full Stack Web Developer.",
      " a FreeLancer.",

      " a Coder.",
      " a Self Believer.",
    ],
    loop: 0,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });
  return (
    <motion.div
      className="hero__container"
      id="/"
      variants={variants}
      initial={"hidden"}
      animate={"show"}
    >
      <div className="hero__content">
        <h1>
          Hello{" "}
          <motion.span variants={variants} className="h1">
            {" "}
            I'm
          </motion.span>{" "}
          <motion.span variants={variants} className="effect">
            Babzz
          </motion.span>
        </h1>
        <motion.div variants={variants} className="p">
          <div className="static__text">
            I'm
            {text}
            <Cursor />
          </div>
        </motion.div>
        <div className="herobtn__wrapper">
          <LinkS
            classname="button__link"
            to="/about"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            <motion.button variants={variants} className="button">
              Know More <i class="fa fa-arrow-right" aria-hidden="true"></i>
            </motion.button>
          </LinkS>
        </div>
      </div>
      <a href="https://wa.me/message/43KEVC47D6HVM1">
        <div className="online">
        
          <img src={online} alt="" srcset="" />
     
        </div>
      </a>
      <div className="hero__overlay"></div>
    </motion.div>
  );
}

export default HeroElement;
