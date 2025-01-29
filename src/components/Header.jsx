import React, { useEffect } from "react";
import "../style.css";

function Header() {
  useEffect(() => {
    const headerTitle = document.querySelector("header h1");
    headerTitle.classList.add("visible");
  }, []);

  return (
    <header>
      <div className="container">
        <nav>
          <a href="#about">ABOUT</a>
          <a href="#skills">SKILLS</a>
          <a href="#projects">PROJECT</a>
          <a href="/shreya-portfolio/resume.pdf" target="_blank">
            RESUME
          </a>
          <a href="#contact">CONTACT</a>
        </nav>
      </div>

      <div className="name-container">
        <h1>SHREYA J SHETTY</h1>
        <h4>DEVELOPER</h4>
      </div>
    </header>
  );
}

export default Header;
