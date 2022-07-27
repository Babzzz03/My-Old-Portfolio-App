import React, { useEffect, useState } from "react";

import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import "./Navbar.css";
import { animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";
import goal2 from "../../images/Newlogo2.png";
import babzz from "../../images/babzz.png";


function Navbar({ toggle }) {
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
      <div className={scrollNav ? "nav" : "nav active"} scrollNav={scrollNav}>
        <div className="navbar__container">
          <LinkR to="/" className="nav__logo" onClick={toggleHome}>
            <div className="logo__name visible__logo">
              <img src={babzz} alt="" srcset="" />
            </div>
            <div className="logo__name invisible__logo">
              <img src={goal2} alt="" srcset="" />
            </div>
          </LinkR>
          <div className="mobile__icon" onClick={toggle}>
            <i class="fa fa-bars" aria-hidden="true"></i>
          </div>
          <ul className="nav__menu">
            <li className="nav__item">
              <LinkS
                to="/about"
                className="nav__links"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                About
              </LinkS>
            </li>
            <li className="nav__item">
              <LinkS
                to="/discover"
                className="nav__links"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Potfolio
              </LinkS>
            </li>
            <li className="nav__item">
              <LinkS
                to="/"
                className="nav__links"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                <img className="logo" src={goal2} alt="" srcset="" />
              </LinkS>
            </li>
            <li className="nav__item">
              <LinkS
                to="/services"
                className="nav__links"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Services
              </LinkS>
            </li>
            <li className="nav__item">
              <LinkS
                to="/process"
                className="nav__links"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Process
              </LinkS>
            </li>
          </ul>
          <button className="nav__btn">
            <Link to="/contacts" className="nav__btn__link">
              <span> Contact Me </span>
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
