import React from "react";
import "./Sidebar.css";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
function Sidebar({ isOpen, toggle }) {
  return (
    <aside
      isOpen={isOpen}
      onClick={toggle}
      className={isOpen ? "sidebar__container active" : "sidebar__container"}
    >
      <div className="icon" onClick={toggle}>
        <div className="close__icon">
          <i class="fa fa-times" aria-hidden="true"></i>
        </div>
      </div>
      <div className="sidebar__wrapper">
        <ul className="sidebar__menu">
          <LinkS to="/" className="sidebar__links" onClick={toggle}>
            Home
          </LinkS>
          <LinkS to="/about" className="sidebar__links" onClick={toggle}>
            About
          </LinkS>
          <LinkS to="/discover" className="sidebar__links" onClick={toggle}>
            Potfolio
          </LinkS>
          <LinkS to="/services" className="sidebar__links" onClick={toggle}>
            Services
          </LinkS>
        </ul>
        <div className="sidebtn__wrap">
          <LinkR to="/contact" className="sidebar__route">
            Contact Me
          </LinkR>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
