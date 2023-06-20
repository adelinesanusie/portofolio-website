import React, { useState } from "react";
import Python from "../assets/Skills/Python.png";
import Java from "../assets/Skills/Java.png";
import JavaScript from "../assets/Skills/JavaScript.png";
import Dart from "../assets/Skills/Dart.png";
import Django from "../assets/Skills/Django.png";
import Flutter from "../assets/Skills/Flutter.png";
import NodeJs from "../assets/Skills/NodeJs.png";
import ReactJs from "../assets/Skills/ReactJs.png";
import HTML from "../assets/Skills/HTML.png";
import CSS from "../assets/Skills/CSS.png";

function Skills() {
    return (
      <div className="skills" id="skills">
        <div className="container-skills">
          <div className="skills-category">
            <h2>PROGRAMMING LANGUAGES</h2>
            <div className="skills-row">
              <div className="skill-item">
                <img src={Python} alt="Python" />
                <span className="skill-name">Python</span>
              </div>
              <div className="skill-item">
                <img src={Java} alt="Java" />
                <span className="skill-name">Java</span>
              </div>
              <div className="skill-item">
                <img src={JavaScript} alt="JavaScript" />
                <span className="skill-name">JavaScript</span>
              </div>
              <div className="skill-item">
                <img src={Dart} alt="Dart" />
                <span className="skill-name">Dart</span>
              </div>
            </div>
          </div>
  
          <div className="skills-category">
            <h2>FRAMEWORKS</h2>
            <div className="skills-row">
              <div className="skill-item">
                <img src={Django} alt="Django" />
                <span className="skill-name">Django</span>
              </div>
              <div className="skill-item">
                <img src={Flutter} alt="Flutter" />
                <span className="skill-name">Flutter</span>
              </div>
              <div className="skill-item">
                <img src={NodeJs} alt="Node.js" />
                <span className="skill-name">Node.js</span>
              </div>
              <div className="skill-item">
                <img src={ReactJs} alt="React.js" />
                <span className="skill-name">React.js</span>
              </div>
            </div>
          </div>
  
          <div className="skills-category">
            <h2>WEB TECHNOLOGIES</h2>
            <div className="skills-row">
              <div className="skill-item">
                <img src={HTML} alt="HTML" />
                <span className="skill-name">HTML</span>
              </div>
              <div className="skill-item">
                <img src={CSS} alt="CSS" />
                <span className="skill-name">CSS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Skills;