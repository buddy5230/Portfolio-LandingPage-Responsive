import React from "react";
import "./About.scss";
import self from "../images/self.png";
const About: React.FC = () => {
  return (
    <div className="con-about" id="about">
      <div className="about-con" >
        <div className="about-l" >
          <img src={self} alt="" />
        </div>
        <div className="about-r">
          <h1 className="text-h1" >About Me</h1>
          <p className="text-p" >
            I have recently graduated from Chiang Mai University with a degree
            in Computer Science and I am interested in pursuing a career in
            front-end development. In addition to the skills I have listed, I
            also have knowledge and experience in UX/UI Design, JSON, RESTful
            API and Responsive Web Design. With my experience and passion for
            front-end development, I am confident that I will be able to do my
            assigned job well and I am ready to learn new knowledge to further
            develop myself.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
