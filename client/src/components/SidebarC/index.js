import React from "react";
import "./SidebarC.css";
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
          <LinkR to="/about" className="sidebar__links" onClick={toggle}>
            Home
          </LinkR>
          <LinkR to="/discover" className="sidebar__links" onClick={toggle}>
            About
          </LinkR>
          <LinkR to="/services" className="sidebar__links" onClick={toggle}>
            Potfolio
          </LinkR>
          <LinkR to="/signup" className="sidebar__links" onClick={toggle}>
            Sign Up
          </LinkR>
        </ul>
        <div className="sidebtn__wrap">
          <LinkR className="sidebar__route">Sign in</LinkR>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
