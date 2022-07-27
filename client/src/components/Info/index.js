import React from "react";
import { Link as LinkS } from "react-scroll";
import "./Info.css";
import { homeObjOne } from "../Data/Index";
import imge from "../../images/realprofile.png";
import sportimage1 from "../../images/ball.png";
import sportimage2 from "../../images/scrabble.png";
import sportimage3 from "../../images/tennis.png";
import sportimage4 from "../../images/bicycle.png";
import leisureimage1 from "../../images/chat.png";
import leisureimage2 from "../../images/weight.png";
import leisureimage3 from "../../images/gamepad.png";
import leisureimage4 from "../../images/music.png";
import likeimage1 from "../../images/book.png";
import likeimage2 from "../../images/codinglaptop.png";
import likeimage3 from "../../images/shake.png";
import likeimage4 from "../../images/challenge.png";
import vector1 from "../../images/vector13.png";
import vector2 from "../../images/vector14.png";
import crown from "../../images/crown.png";
import sunglasses from "../../images/sunglasses.png";
import { motion, Variants } from "framer-motion";
function Info({
  id,
  topLine,
  moreHeadline,
  headLine,
  description,
  buttonLabel,
  img,
}) {
   const variants = {
     hidden: { opacity: 0.9, },
     show: {
       opacity: 1,
       transition: {
         staggerChildren: 0.4,
         delayChildren: 0.2,
      
      
       },
     },
   };
      const textanimate = {
        hidden: { y: 60, opacity: 0 },
        show: {
          y: 0,
          opacity: 1,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 4,
            delay: 0.3
          },
        },
      };
            const textanimate2 = {
              hidden: { y: 100, opacity: 0 },
              show: {
                y: 0,
                opacity: 1,
                transition: {
                  type: "spring",
                  bounce: 0.4,
                  duration: 3,
                  delay: 1.2,
                },
              },
            };
       const image = {
         hidden: { y: 17, opacity: 0 },
         show: {
           y: 0,
           opacity: 1,
           transition: {
             type: "spring",
             bounce: 0.4,
             duration: 4,
           },
         },
       };

      const transition = {
        duration: 9,
        type: "spring",
        stiffness: 47,
        damping: 14,
        delay: 0.2,
      };
        const transition2 = {
          duration: 3,
          type: "spring",
          stiffness: 100,
          damping: 8,
       
        };
           const transition3 = {
             type: "spring",
             bounce: 0.4,
             duration: 3,
         
           };
  return (
    <>
      <motion.div
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="info__container"
        id={id}
      >
        <motion.div className="info__wrapper">
          <div className="info__row">
            <div className="column__1">
              <div className="text__wrapper">
                <div className="header__name">
                  <hr />{" "}
                  <motion.p
                    initial={{ y: "-40px", opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={transition2}
                    className="top__line"
                  >
                    {topLine}
                  </motion.p>
                  <hr />
                </div>
                <motion.h3 variants={textanimate} className="heading">
                  {headLine}
                </motion.h3>
                <motion.h1
                  variants={textanimate}
                  className="more__heading__info"
                >
                  {moreHeadline}
                </motion.h1>
                <motion.p variants={textanimate} className="sub__title">
                  {description}
                </motion.p>
                <motion.div variants={textanimate2} className="skills">
                  Skills
                </motion.div>
                <motion.div
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ amount: 0.6 }}
                  transition={transition3}
                  className="btn__wrap"
                >
                  <div className="element">HTML</div>
                  <div className="element">CSS</div>
                  <div className="element">Javascript</div>
                  <div className="element">React</div>
                  <div className="element">Node js</div>
                  <div className="element">NOSQL</div>
                  <div className="element">Redux</div>
                  <div className="element">E-Commerce</div>
                </motion.div>
                <motion.div
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ amount: 0.6 }}
                  transition={transition3}
                  className="skills learn"
                >
                  Learning..
                </motion.div>
                <motion.div
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ amount: 0.64 }}
                  transition={transition3}
                  className="btn__wrap"
                >
                  <div className="element ele">MySQL</div>
                  <div className="element ele">
                    Graphics <br />
                    design{" "}
                  </div>
                </motion.div>
              </div>
            </div>
            <motion.div variants={image} className="column__2">
           
              <img src={imge} alt="" />
            </motion.div>
          </div>
        </motion.div>
        <div className="more">
          <motion.div
            initial={{ rotate: 85 }}
            whileInView={{ rotate: 0 }}
            viewport={{ amount: 0.9 }}
            transition={transition}
            className="maincircle"
          >
            <div className="sec__circle">
              <img src={sportimage1} alt="" srcset="" />
            </div>
            <div className="sec__circle">
              <img src={sportimage2} alt="" srcset="" />
            </div>
            <div className="sec__circle center__name">Sports</div>
            <div className="sec__circle">
              {" "}
              <img src={sportimage4} alt="" srcset="" />
            </div>
            <div className="sec__circle">
              <img src={sportimage3} alt="" srcset="" />
            </div>
          </motion.div>

          <div className="yellow__circle"> </div>

          <div className="maincircle middle">
            <div className="sec__circle">
              <img src={leisureimage1} alt="" srcset="" className="scale" />
            </div>
            <div className="sec__circle">
              <img src={leisureimage2} alt="" srcset="" className="scale3" />
            </div>
            <div className="sec__circle center__name">Leisure</div>
            <div className="sec__circle">
              <img src={leisureimage3} alt="" srcset="" className="scale2" />
            </div>
            <div className="sec__circle">
              <img src={leisureimage4} alt="" srcset="" className="scale3" />
            </div>
          </div>
          <motion.div
            initial={{ rotate: -85 }}
            whileInView={{ rotate: 0 }}
            viewport={{ amount: 0.9 }}
            transition={transition}
            className="maincircle"
          >
            <div className="sec__circle">
              <img src={likeimage1} alt="" srcset="" className="scale4" />
            </div>
            <div className="sec__circle">
              <img src={likeimage2} alt="" srcset="" className="scale4" />
            </div>
            <div className="sec__circle center__name">Likes</div>
            <div className="sec__circle">
              <img src={likeimage3} alt="" srcset="" className="scale" />
            </div>
            <div className="sec__circle">
              <img src={likeimage4} alt="" srcset="" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}

export default Info;
