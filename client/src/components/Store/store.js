import React from "react";
import { Link as LinkS } from "react-scroll";
import "./Info.css";
import { homeObjOne } from "../Data/Index";
import imge from "../../images/profile9.png";
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
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.2,
        ease: "easeOut",
        duration: 0.7,
      },
    },
  };

  const transition = {
    duration: 3,
    type: "spring",
    stiffness: 100,
    damping: 14,
    delay: 0.2,
  };
  const transition2 = {
    duration: 3,
    type: "spring",
    stiffness: 100,
    damping: 8,
  };
  return (
    <>
      <motion.div
        variants={variants}
        initial={"hidden"}
        whileInView={"show"}
        className="info__container"
        id={id}
      >
        <motion.div variants={variants} className="info__wrapper">
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
                <h3 className="heading">{headLine}</h3>
                <h1 className="more__heading__info">{moreHeadline}</h1>
                <p className="sub__title">{description}</p>
                <div className="skills"> Skills </div>
                <div className="btn__wrap">
                  <div className="element">html</div>
                  <div className="element">css</div>
                  <div className="element">javascript</div>
                  <div className="element">React</div>
                  <div className="element">Node js</div>
                  <div className="element">NOSQL</div>
                  <div className="element">Redux</div>
                  <div className="element">E-Commerce</div>
                </div>
                <div className="skills learn"> Learning.. </div>
                <div className="btn__wrap">
                  <div className="element ele">MYSQL</div>
                  <div className="element ele">UI/UX</div>
                </div>
              </div>
            </div>
            <motion.div variants={variants} className="column__2">
              <img src={vector1} alt="" />
              <img src={vector2} alt="" />
              <img src={imge} alt="" />
            </motion.div>
          </div>
        </motion.div>
        <div className="more">
          <motion.div
            initial={{ rotate: 45 }}
            whileInView={{ rotate: 0 }}
            viewport={{ margin: "-90px" }}
            transition={transition}
            variants={variants}
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
            initial={{ rotate: -45 }}
            whileInView={{ rotate: 0 }}
            viewport={{ margin: "-90px" }}
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





 background-image: url("https://images.pexels.com/photos/1834686/pexels-photo-1834686.jpeg?cs=srgb&dl=pexels-juan-marcelo-jimenez-mejia-1834686.jpg&fm=jpg");




    <HoverVideoPlayer
                videoSrc={Video}
                pausedOverlay={
                  <img
                    className="potfolio__image"
                    src={amazonimage}
                    alt=""
                    style={{
                      // Make the image expand to cover the video's dimensions

                      display: "block",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                }
                loadingOverlay={
                  <div className="loading-overlay">
                    <div className="loading-spinner" />
                  </div>
                }
                style={{
                  // Make the image expand to cover the video's dimensions
                  marginTop: "40px",
                }}
              />







              

                      <div className="services__wrapper">
          <motion.div
            initial={{ x: "-100px", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={transition}
            className="services__card"
          >
            <img src={goals} alt="" className="services__icon" />
            <h2 className="services__info">Offer</h2>

            <p>Accessible websites that look great on any screen </p>
          </motion.div>
          <div className="services__card">
            <img src={goal2} alt="" className="services__icon" />
            <h2 className="services__info">Goal</h2>

            <p>
              My goal is to build fast, mobile-first websites that clearly
              communicate with visitors.
            </p>
          </div>
          <motion.div
            initial={{ x: "100px", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={transition}
            className="services__card"
          >
            <img src={expences} alt="" className="services__icon" />
            <h2 className="services__info">Expenses</h2>

            <p className="services__sub__info">
              Negotiable and affordable fees{" "}
              <Link className="contact__link" to="/contacts">
                Let's Talk
              </Link>{" "}
            </p>
          </motion.div>
        </div>