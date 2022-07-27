import React, { useEffect, useState } from "react";

import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import "./NavbarC.css";
import { animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";
import goal2 from "../../images/logo.png";

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
      <div className= "navC"  scrollNav={scrollNav}>
        <div className="navbar__containerC">
          <LinkR to="/" className="nav__logo" onClick={toggleHome}>
            <div>Babzz</div>
          </LinkR>
          <div className="mobile__icon" onClick={toggle}>
            <i class="fa fa-bars" aria-hidden="true"></i>
          </div>
          <ul className="nav__menu">
        
         
            <li className="nav__item">
              <LinkR
                to="/"
                className="nav__links"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                <img className="logoC" src={goal2} alt="" srcset="" />
              </LinkR>
            </li>
        
            
          </ul>
          <button className="nav__btn">
            <Link to="/contacts" className="nav__btn__linkC">
              <span> Contact Me </span>
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
