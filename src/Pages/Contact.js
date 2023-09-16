import React from "react";
import email from "../assets/email.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import leetcode from "../assets/leetcode.png";

const Contact = () => {
  return (
    <section id="contact">
      <p className="section__text__p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <img
            src={email}
            alt="Email icon"
            className="icon contact-icon email-icon"
          />
          <p>
            <a href="mailto:abhishekgoyal274@gmail.com">
              abhishekgoyal274@gmail.com
            </a>
          </p>
        </div>
        <div className="contact-info-container">
          <img
            src={linkedin}
            alt="LinkedIn icon"
            className="icon contact-icon"
          />
          <p>
            <a href="https://www.linkedin.com/in/abhishek274">LinkedIn</a>
          </p>
        </div>
        <br/>
        <div className="contact-info-container">
          <img src={github} alt="github icon" className="icon contact-icon" />
          <p>
            <a href="https://github.com/abhishekGoyal274">GitHub</a>
          </p>
        </div>
        <div className="contact-info-container">
          <img
            src={leetcode}
            alt="leetcode icon"
            className="icon contact-icon"
          />
          <p>
            <a href="https://leetcode.com/abhishekgoyal274/">Leetcode</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
