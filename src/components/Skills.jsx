import React from "react";
import "../style.css";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3,
  FaJsSquare,
  FaPhp,
  FaLinux,
  FaGitAlt,
  FaJava,
} from "react-icons/fa";
import { SiExpress, SiNextdotjs, SiMysql } from "react-icons/si";

function Skills() {
  return (
    <section id="skills">
      <h1>MY SKILLS</h1>
      <div className="skills-grid">
        <div className="skill">
          <FaHtml5 className="skill-icon" />
          <p>HTML</p>
        </div>
        <div className="skill">
          <FaCss3 className="skill-icon" />
          <p>CSS</p>
        </div>
        <div className="skill">
          <FaJsSquare className="skill-icon" />
          <p>JavaScript</p>
        </div>
        <div className="skill">
          <FaReact className="skill-icon" />
          <p>React</p>
        </div>
        <div className="skill">
          <FaNodeJs className="skill-icon" />
          <p>NodeJs</p>
        </div>
        <div className="skill">
          <FaPhp className="skill-icon" />
          <p>PHP</p>
        </div>
        <div className="skill">
          <SiMysql className="skill-icon" />
          <p>MySQL</p>
        </div>
        <div className="skill">
          <FaLinux className="skill-icon" />
          <p>Linux</p>
        </div>
        <div className="skill">
          <SiExpress className="skill-icon" />
          <p>ExpressJs</p>
        </div>
        <div className="skill">
          <FaGitAlt className="skill-icon" />
          <p>Git</p>
        </div>
        <div className="skill">
          <SiNextdotjs className="skill-icon" />
          <p>NextJs</p>
        </div>
        <div className="skill">
          <FaJava className="skill-icon" />
          <p>Java</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
