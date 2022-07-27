import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { animateScroll as scroll } from "react-scroll";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link as LinkS } from "react-scroll";
import babzz from "../../images/babzz.png";
function Footer({ toggle }) {
   const [scrollNav, setScrollNav] = useState(false);

   const changeNav = () => {
     if (window.scrollY >= 80) {
       setScrollNav(true);
     } else {
       setScrollNav(false);
     }
   };

   useEffect(() => {
     window.addEventListener("scroll", changeNav);
   }, []);
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <div className="footer__container">
        <div className="footer__wrap">
          <div className="footer__links__container">
            <div className="footer__link__wrapper">
              <div className="footer__link__items">
                <h1 className="footer__link__title">Important Links </h1>
                <Link className="footer__link" to="/" onClick={toggleHome}>
                  Home
                </Link>
                <LinkS
                  className="footer__link"
                  LinkS
                  to="/about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  About
                </LinkS>
                <LinkS
                  className="footer__link"
                  LinkS
                  to="/discover"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Potfolio
                </LinkS>
                <LinkS
                  className="footer__link"
                  LinkS
                  to="/services"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Services
                </LinkS>
                <Link to="/contacts" className="footer__link">
                  Contact Me
                </Link>
              </div>
            </div>
            <div className="footer__link__wrapper">
              <div className="footer__link__items">
                <h1 className="footer__link__title">Contact info </h1>
                <Link className="footer__link">09013880151</Link>
                <Link className="footer__link footer__mail">
                  babawale.emmanuel10@gmail.com
                </Link>
                <Link className="footer__link">
                  Clinic-bustop <br /> isashi <br />
                  Lagos, Nigeria
                </Link>
              </div>
              <div className="footer__link__items">
                <h1 className="footer__link__title">Contact Me </h1>
                <a
                  className="footer__link"
                  href="https://www.facebook.com/ola.babs.7121"
                >
                  Facebook
                </a>
                <a
                  className="footer__link"
                  href="https://wa.me/message/43KEVC47D6HVM1"
                >
                  Whatsapp
                </a>
                <a
                  className="footer__link"
                  href="https://twitter.com/Babzzz110?t=SXTsW1t33ozVu9q11jJkrg&s=09"
                >
                  Twitter
                </a>
                <a className="footer__link" href="https://github.com/Babzzz03">
                  Github
                </a>
                <a
                  className="footer__link"
                  href="mailto:babawale.emmanuel10@gmail.com"
                >
                  E-mail
                </a>
              </div>
            </div>
          </div>
          <div className="social__media">
            <div className="social__media__wrap">
              <Link className="social__logo" to="/" onClick={toggleHome}>
                <img src={babzz} alt="" srcset="" />
              </Link>
              <small className="website__rights">
                Babzzz © {new Date().getFullYear()} All rights reserved
              </small>
              <div className="social__icon">
                <a
                  className="social__icon__link"
                  href="https://wa.me/message/43KEVC47D6HVM1"
                  target="_blank"
                  aria-label="whatsapp"
                  rel="noreferrer"
                >
                  <WhatsAppIcon className="social__icon__link" />
                </a>
                <a
                  className="social__icon__link"
                  href="https://github.com/Babzzz03"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="instagram"
                >
                  <GitHubIcon className="social__icon__link" />
                </a>
                <a
                  className="social__icon__link"
                  href="mailto:babawale.emmanuel10@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="instagram"
                >
                  <EmailIcon className="social__icon__link" />
                </a>
                <a
                  className="social__icon__link"
                  href="https://twitter.com/Babzzz110?t=SXTsW1t33ozVu9q11jJkrg&s=09"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="twitter"
                >
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a
                  className="social__icon__link"
                  href="https://www.facebook.com/ola.babs.7121"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="facebook"
                >
                  <i class="fa fa-facebook-official" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
