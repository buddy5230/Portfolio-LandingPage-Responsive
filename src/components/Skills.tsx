import React from "react";
import "./Skills.scss";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import {
  BsFiletypeScss,
  BsFillBootstrapFill,
  BsFiletypeSql,
  BsGithub,
} from "react-icons/bs";
import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io";
import {
  SiTypescript,
  SiExpress,
  SiTailwindcss,
  SiReact,
  SiMongodb,
  SiVisualstudio,
  SiMysql,
} from "react-icons/si";
import { FiFigma } from "react-icons/fi";

const Skills: React.FC = () => {
  return (
    <>
    <h1>Skills</h1>
    <div className="con-skills" id="skills">
      <div className="box-skills">
        <h2>Programming language</h2>
        <div className="set-skills">
          <div className="icon-item">
            <AiFillHtml5 className="icon" />
            <p>Html</p>
          </div>
          <div className="icon-item">
            <DiCss3 className="icon" />
            <p>Css</p>
          </div>
          <div className="icon-item">
            <BsFiletypeScss className="icon" />
            <p>Scss</p>
          </div>
          <div className="icon-item">
            <IoLogoJavascript className="icon" />
            <p>Javascript</p>
          </div>
          <div className="icon-item">
            <SiTypescript className="icon" />
            <p>Typescript</p>
          </div>
        </div>
      </div>
      <div className="box-skills">
        <h2>Framework</h2>
        <div className="set-skills">
          <div className="icon-item">
            <SiReact className="icon" />
            <p>Reactjs</p>
          </div>
          <div className="icon-item">
            <IoLogoNodejs className="icon" />
            <p>Nodejs</p>
          </div>
          <div className="icon-item">
            <SiExpress className="icon"></SiExpress>
            <p>Expressjs</p>
          </div>
          <div className="icon-item">
            <SiTailwindcss className="icon"></SiTailwindcss>
            <p>Tailwind</p>
          </div>
          <div className="icon-item">
            <BsFillBootstrapFill className="icon"></BsFillBootstrapFill>
            <p>Bootstrap</p>
          </div>
        </div>
      </div>
      <div className="box-skills-flex">
        <h2>Database</h2>
        <div className="set-skills">
          <div className="icon-item">
            <SiMongodb className="icon" />
            <p>MongoDb</p>
          </div>
          <div className="icon-item">
            <SiMysql className="icon" />
            <p>MySql</p>
          </div>
        </div>
      </div>
      <div className="box-skills-flex">
        <h2>Tools</h2>

        <div className="set-skills">
          <div className="icon-item">
            <BsGithub className="icon" />
            <p>Git & GitHub</p>
          </div>
          <div className="icon-item">
            <SiVisualstudio className="icon" />
            <p>Visual Studio Code</p>
          </div>
          <div className="icon-item">
            <FiFigma className="icon" />
            <p>Figma</p>
          </div>
        </div>
      </div>
    </div>
    </>
   
  );
};

export default Skills;
