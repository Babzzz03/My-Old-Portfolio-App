import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";
import goals from "../../images/mobileTesting.png";
import expences from "../../images/reactlogo.png";
import goal2 from "../../images/Goals.png";
import testlogo from "../../images/testlogo4.png";
import ecommerce from "../../images/e-commerce.png";
import code from "../../images/code.png";
import care from "../../images/care.png";
import { motion } from "framer-motion";
import {Swiper, SwiperSlide} from "swiper/react"
import {Pagination } from 'swiper';
import 'swiper/css/pagination';
import "swiper/css";

  function Service() {
    const transition = { duration: 2, type: "spring", stiffness : 60, damping: 4 };

    const client = [
      {
        img: expences,
        heading: "Product Design",
        review:
          "I work with certain design tools to create high-fidelity designs and prototypes. i design accessible and usable products which aid business growth,",
      },
      {
        img: code,
        heading: "Web Development",
        review:
          "i use various web technologies to develop attractive websites which converts visitors to customers. i develop creative and responsive website layouts.",
      },
      {
        img: ecommerce,
        heading: "E-Commerce",
        review:
          "back-end web technologies such as NoSQL to create multi-functional web portals - from content management systems to full-fledged e-commerce solutions, and beyond.",
      },
      {
        img: care,
        heading: "Ongoing Support",
        review:
          "Your website is always growing. Wheather you are adding new features or making improvements i'm here to help. Hence always available for any question",
      },
      {
        img: testlogo,
        heading: "Logo Designs",
        review:
          "Logo designs that allows your website to stand out even as a start up website, hence sets the stage for the story of your website.",
      },
    ];

    return (
      <div className="services__container" id="/services">
        <h1 className="services">My Services</h1>

        <Swiper
          modules={[Pagination]}
          slidesPerView={3}
          className="pc__swiper"
          pagination={{ clickable: true }}
        >
          {client.map((client, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="main__services">
                  <img src={client.img} alt="" />
                  <h3>{client.heading}</h3>
                  <span>{client.review}</span>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          className="mobile__swiper"
          pagination={{ clickable: true }}
        >
          {client.map((client, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="main__services">
                  <img src={client.img} alt="" />
                  <h3>{client.heading}</h3>
                  <span>{client.review}</span>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    );
  };

export default Service;
