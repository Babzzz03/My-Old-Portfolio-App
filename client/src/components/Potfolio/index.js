import React from 'react';
import "./Potfolio.css";
import express from "../../images/express.png";
import HoverVideoPlayer from "react-hover-video-player";
import amazonimage from "../../images/amazon-app.PNG";
import todoimage from "../../images/todo-app.PNG";
import amazonframe from "../../images/amazonframe3.png";
import todoframe from "../../images/todoframe1.png";
import Video from "../../videos/Amazon Clone - Google Chrome 2022-06-19 09-46-16.mp4";
import Video1 from "../../videos/Amazon Clone - Google Chrome 2022-06-19 09-46-16.mp4";
import { motion } from "framer-motion";
function Potfolio() {
    const transition3 = {
      type: "spring",
      bounce: 0.4,
      duration: 3.4,
    };

   const transition = {
     duration: 2,
     type: "spring",
     stiffness: 60,
     damping: 12,
   };
  return (
    <motion.div className="potfolio" id="/discover">
      <div className="title">
        <div className="potfolio__header">
          <motion.hr />
          <h1>POTFOLIO</h1> <motion.hr />
        </div>
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ amount: 0.4 }}
          transition={transition3}
          className="details"
        >
          I strive to create beautiful and legible work with just enough
          personality and a high level of technical precision.
        </motion.div>
      </div>
      <div className="body">
        <div className="column__2b">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ amount: 0.47 }}
            transition={transition3}
            className="potfolio__column1"
          >
            <div className="potfolio__row1 ">
              <img src={amazonframe} className="potfolio__image" alt="" />
            </div>
            <div className="potfolio__row2 potfolio__about">
              <h3>
                About Amazon Clone <br />{" "}
                <p>
                  {" "}
                  React, Redux, Node, Express, MongoDB, Stripe, jwt, Heroku
                </p>
              </h3>
              <ul className="list__container">
                <li>Full E-commerce Functionality with stripe</li>
                <li>Full hosted cloud server with MongoDB and Express</li>
                <li>Login and Log-out Functionality</li>
                <li>Geolocation</li>
              </ul>
              <a href="https://babz-amazonn.herokuapp.com/">
                <button className="visit">Visit Site</button>
              </a>
              <button className="visit source__code">Source Code</button>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ amount: 0.5 }}
            transition={transition3}
            className="potfolio__column2"
          >
            <div className="potfolio__row1 potfolio__about">
              <h3>
                Todo App <br />{" "}
                <p> React, Node, Express, MongoDB, jwt, Heroku</p>{" "}
              </h3>
              <ul className="list__container allign">
                <li>All CRUD (Create, Read, Update and Delete) operations</li>
                <li>Full hosted cloud server with MongoDB and Express</li>
                <li>Login and Log-out functionality</li>
              </ul>
              <a href="https://babzzz-todo.herokuapp.com/">
                <button className="visit">Visit Site</button>
              </a>{" "}
              <button className="visit source__code">Source Code</button>
            </div>
            <div className="potfolio__row2">
              <img src={todoframe} className="potfolio__image" alt="" />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Potfolio