import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

function Contact() {
  const [showEmail, setShowEmail] = useState(false);
  const [showPhone, setShowPhone] = useState(false);
  const [showGithub, setShowGithub] = useState(false);
  const [showLinkedin, setShowLinkedin] = useState(false);

  const handleEmailClick = () => {
    window.location.href = "mailto:shettyshreyaj24@gmail.com";
  };
  
  const handleGithubClick = () => {
    window.location.href = "https://github.com/shreyajshetty";
  };
  const handleLinkedinClick = () => {
    window.location.href = "https://www.linkedin.com/in/shreya-jshetty";
  };

  return (
    <section id="contact" className="contact-section">
      <h1>FIND ME ON</h1>

      <div className="contact-icons">
        <div className="contact-item" onClick={handleEmailClick}>
          <FaEnvelope size={30} />
          <span
            style={{
              color: "white",
              paddingLeft: "10px",
              paddingBottom: "10px",
            }}
          >
            Email
          </span>
        </div>

       
        <div className="contact-item" onClick={handleGithubClick}>
          <FaGithub size={30} />
          <span style={{ color: "white", paddingLeft: "10px" }}> GitHub</span>
        </div>

        <div className="contact-item" onClick={handleLinkedinClick}>
          <FaLinkedin size={30} />{" "}
          <span style={{ color: "white", paddingLeft: "10px" }}> Linkedin</span>
        </div>
      </div>
    </section>
  );
}

export default Contact;
