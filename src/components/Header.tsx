import React, { useState } from "react";
import { FiCode, FiMenu, FiX } from "react-icons/fi";
import "./Header.scss";
import {Link} from 'react-scroll'
const Header: React.FC = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className="header">
     
        <div className="header-con">
          <div className="logo-container">
            <span>B </span>
            <span>u </span>
            <span>D </span>
            <span>D </span>
            <span>y </span>
          </div>

          <ul className={click ? "menu active" : "menu"}>
            <li className="item-li" onClick={closeMobileMenu}>
              <Link to="main" spy={true} smooth={true} offset={-270} duration={500} >Home</Link>
            </li>
            <li className="item-li"onClick={closeMobileMenu}>
              <Link to="about" spy={true} smooth={true} offset={-140} duration={500}>About</Link>
            </li>
            <li className="item-li"onClick={closeMobileMenu}>
              <Link to="skills" spy={true} smooth={true} offset={-200} duration={500}>Skills</Link>
            </li>
            <li className="item-li"onClick={closeMobileMenu}>
              <Link to="projects" spy={true} smooth={true} offset={-180} duration={500}>Projects</Link>
            </li>
            <li className="item-li"onClick={closeMobileMenu}>
              <Link to="contact" spy={true} smooth={true} offset={-240} duration={500}>Contact</Link>
            </li>
          </ul>
          <div className="mobile-menu" onClick={handleClick}>
            {click ? <FiX /> : <FiMenu />}
          </div>
        </div>
      </div>
    
  );
};

export default Header;
