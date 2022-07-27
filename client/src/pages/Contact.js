import React, { useState } from 'react'
import ContactMe from '../components/ContactMe'
import ScrollToTop from '../components/ScrollToTop';
import Navbar from "../components/NavbarC";
import Sidebar from "../components/SidebarC";

const Contact = () => {
  const [isOpen, setisOpen] = useState(false);

  const toggle = () => {
    setisOpen(!isOpen);
  };
  return (
    <div>
      
      <ScrollToTop />
      <ContactMe />
    </div>
  );
}

export default Contact