import React from "react";
import "./Contact.scss";
import { AiFillFacebook, AiFillGithub } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { BsFillPhoneFill } from "react-icons/bs";

const Contact: React.FC = () => {
  return (
    <>
      <h1 className="h1-contact">Contact</h1>
      <div className="con-contact" id="contact">
        <div className="box-contact">
          <MdEmail className="icon"></MdEmail>
          <div className="set-text">
            <h2 className="icon-set">Email</h2>
            <p>poopirat.buddy@gmail.com</p>
          </div>
        </div>
        <div className="box-contact">
          <a href="https://www.facebook.com/poopirat.buddy/">
            <AiFillFacebook className="icon"></AiFillFacebook>
          </a>
          <div className="set-text">
            <h2 className="icon-set">Facebook</h2>
            <p>B'uddy Natthanasak</p>
          </div>
        </div>
        <div className="box-contact" >
          <BsFillPhoneFill className="icon"></BsFillPhoneFill>
          <div className="set-text">
            <h2 className="icon-set">Phone</h2>
            <p>093-3186594</p>
          </div>
        </div>

        <div className="box-contact">
          <a href="https://github.com/buddy5230">
            <AiFillGithub className="icon"></AiFillGithub>
          </a>
          <div className="set-text">
            <h2 className="icon-set">Github</h2>
            <p>https://github.com/buddy5230</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
