import React, { useState } from "react";
import "./Projects.scss";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import doctor_app from "../images/doctorapp1.png";
import waiter from "../images/waiter1.png";
import pagelanding from "../images/port-ladingpage.png";
import doctor_api from "../images/api-doctor.png";
import { IoMdLink } from "react-icons/io";
import { AiFillGithub } from "react-icons/ai";
const Projects: React.FC = () => {
  const slides = [doctor_app, doctor_api, pagelanding, waiter];

  return (
    <>
      <h1 id="projects">Projects</h1>
      <div className="slideshow-container">
        <Slide
          slidesToScroll={1}
          slidesToShow={1}
          indicators={true}
          autoplay={false}
          responsive={[
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ]}
        >
          <div className="each-slide">
            <h2>หมอพร้อม Web-Application</h2>
            <img src={slides[0]} alt="" />
            <div className="set_item">
              <a href="https://capable-chimera-22cca2.netlify.app/">
                <IoMdLink className="icon-link-1" />
              </a>
              <a href="https://github.com/buddy5230/Reacttsx-Doctor-App">
                <AiFillGithub className="icon-link-git" />
              </a>
            </div>
          </div>

          <div className="each-slide">
            <h2>หมอพร้อม Api</h2>
            <img src={slides[1]} alt="" />
            <div className="set_item">
              <a href="https://aware-earmuffs-dog.cyclic.app/">
                <IoMdLink className="icon-link-1" />
              </a>
              <a href="https://github.com/buddy5230/Api-Doctor-App">
                <AiFillGithub className="icon-link-git" />
              </a>
            </div>
          </div>

          <div className="each-slide">
            <h2>LandingPage Portfolio</h2>
            <img src={slides[2]} alt="" />
            <div className="set_item">
              <a href="https://github.com/buddy5230/Portfolio-React-Responsive">
                <AiFillGithub className="icon-git" />
              </a>
            </div>
          </div>

          <div className="each-slide">
            <h2>Waiter app figma</h2>
            <img src={slides[3]} alt="" />
            <div className="set_item">
              <a href="https://www.figma.com/proto/2KNjrahnYxd882iNT8GMRf/waiter?node-id=5-414&starting-point-node-id=5%3A414">
                <IoMdLink className="icon-link-1" />
              </a>
            </div>
          </div>
        </Slide>
      </div>
    </>
  );
};

export default Projects;
/** {slides.map((slide, index) => (
            <div key={index} className="each-slide">
              <img src={slide} alt={`Slide ${index}`} />
              <IoMdLink className="icon-link"/>
            </div>
            
          ))} */
