import React from "react";
import "./MainProfile.scss";
import ls from "../images/logo-self.jpg";

const MainProfile: React.FC = () => {
  return (
    <div className="con-main" id="main">
      <div className="MainProfile-con">
        <div className="MainProfile-text">
          <h1>
            Natthanasak Wongthima<span className="wave">👋</span>
          </h1>
          <h2>Front-end Developer</h2>
          <p>
            Hi,I'm a passionate Front-end Developer with a knack for design and a
            focus on creating seamless user experiences. 
          </p>
        </div>
        <div>
          <img className="logo-self" src={ls} alt="ls" />
        </div>
      </div>
    </div>
  );
};

export default MainProfile;
