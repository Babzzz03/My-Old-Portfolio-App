import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./ContactMe.css";
import facebook from "../../images/facebook.png";
import whatsapp from "../../images/whatsapp.png";
import twitter from "../../images/twitter.png";
import mail from "../../images/mail.png";
import axios from 'axios';
import Footer from '../Footer';
import { animateScroll as scroll } from "react-scroll";
import github from "../../images/github2.png";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import babzz from "../../images/babzz.png";
import { motion } from "framer-motion";
import  { useRef } from "react";
import emailjs from "@emailjs/browser";

function ContactMe () {
  const url = "http://localhost:3000/api/v1/task";
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
   const [sent, setSent] = useState(false);
  const [message, setMessage] = useState("");
  const history = useHistory()
   const toggleHome = () => {
     scroll.scrollToTop();
   };
  const form = useRef();
  const signIn = (e) => {
    e.preventDefault();
    axios.post(url, {
      name: name,
      email: email,
      message: message,
    });
       emailjs
         .sendForm(
           "service_f8bxz3v",
           "template_6qyy6wf",
           form.current,
           "JAY4FY-uodGMB05Os"
         )
         .then(
           (result) => {
             console.log(result.text);
           },
           (error) => {
             console.log(error.text);
           }
         );

    setEmail("");
    setName("");
    setMessage("");
    setSent(true);
     setTimeout(() => {
      history.push("/");
     }, 2400);
   
  };
  /* <Link to="/" className="icon">
            <img className="icon__logo" src={goal2} alt="" srcset="" />
          </Link> */

   const variants = {
     hidden: { opacity: 0},
     show: {
       opacity: 1,
   
       transition: {
         staggerChildren: 0.7,
         delayChildren: 0.5,
         ease: "easeOut",
         duration: 1.8,
       },
     },
   };
  return (
    <motion.div variants={variants} initial={"hidden"} animate={"show"}>
      <div className="container__image">
        <div className="container">
          <div className="contact__image__info">
            <a
              href="https://wa.me/message/43KEVC47D6HVM1"
              className="link__tag"
            >
              <div className="whatsapp">
                <i class="fa fa-whatsapp" aria-hidden="true"></i>
                <p>09013880151</p>
              </div>
            </a>
            <a
              href="mailto:babawale.emmanuel10@gmail.com"
              className="link__tag"
            >
              <div className="mail">
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <p className="mail__tag"> babawale.emmanuel10@gmail.com</p>
              </div>
            </a>
          </div>

          <div className="contact__form">
            <div className="contact__header">
              <h2>Get In Touch</h2>
              <p className="contact__form__info">
                i'm happy to answer any question you have or provide you with an
                estimate. just send me a message in the form below with any
                question you have
              </p>
            </div>
            <div className="contact__message">
              <form className="form" action="" method="POST" ref={form}>
                <div className="form__column">
                  <div className="form__box">
                    <input
                      className="input name__input"
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />

                    <input
                      className="input email"
                      type="email"
                      name="email"
                      placeholder="E-mail"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="message__box">
                    <textarea
                      className="input messsage"
                      type="text"
                      placeholder="Leave a message..."
                      autoComplete="off"
                      name="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                    <button type="submit" onClick={signIn} className="Button">
                      Send
                    </button>
                    <p className={sent? 'sent__done' : 'sent__undone'}> Message sent, you would recieve a reply shortly </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="contact__footer">
          <Link to="/" className="nav__logo" onClick={toggleHome}>
            <div className="logo__name">
              <img src={babzz} alt="" srcset="" />
            </div>
          </Link>
          <div className="contact__icon">
            <div className="footer__whatsapp">
              <a href="https://www.facebook.com/ola.babs.7121">
                <img className="a bigger" src={facebook} alt="" srcset="" />
              </a>
            </div>

            <div className="footer__facebook">
              <a href="https://wa.me/message/43KEVC47D6HVM1">
                <img className="a bigger" src={whatsapp} alt="" srcset="" />
              </a>
            </div>
            <div className="footer__mail">
              <a href="mailto:babawale.emmanuel10@gmail.com">
                <img className="a" src={mail} alt="" srcset="" />
              </a>
            </div>
            <div className="footer__twitter">
              <a href="https://twitter.com/Babzzz110?t=SXTsW1t33ozVu9q11jJkrg&s=09">
                <img className="a" src={twitter} alt="" srcset="" />
              </a>
            </div>
            <div className="footer__github">
              <a href="https://github.com/Babzzz03">
                <img className="a" src={github} alt="" srcset="" />
              </a>
            </div>
          </div>
        </div>
        <div className="overlay"></div>
      </div>
    </motion.div>
  );
}

export default ContactMe 