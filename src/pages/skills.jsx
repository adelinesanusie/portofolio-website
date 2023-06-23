import React, { useState } from "react";

import FirstSkill from "../assets/Skills/UI-UX.png";
import SecondSkill from "../assets/Skills/Wireframe-Prototype.png";
import ThirdSkill from "../assets/Skills/FrontEnd-Dev.png";

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
import Figma from "../assets/Skills/Figma.png";
import AdobeXD from "../assets/Skills/AdobeXD.png";
import AdobePhotoshop from "../assets/Skills/AdobePhotoshop.png";
import AdobeIllustrator from "../assets/Skills/AdobeIllustrator.png";
import Procreate from "../assets/Skills/Procreate.png";

function Skills() {
    return (
      <div className="skills" id="skills">
        <div className="container-skills">
          <h2>SERVICES I OFFER</h2>
          <div className="three-container">
            <div className="item-container">
              <div className="my-skill">
                  <img src={FirstSkill}/>
                  <span className="title">UI/UX Design</span>
              </div>
              <span className="subtitle">Designing intuitive and visually appealing user interfaces, while enhancing the user experience in using digital products or services.</span>
              <div className="application-skill">
                <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer">
                  <img src={Figma}/>
                </a>
                <a><img src={AdobeXD}/></a>
                <a><img src={AdobeIllustrator}/></a>
                <a href="https://procreate.com/" target="_blank" rel="noopener noreferrer">
                  <img src={Procreate}/>
                </a>
              </div>
            </div>

            <div className="item-container">
              <div className="my-skill">
                  <img src={SecondSkill}/>
                  <span className="title">Wireframing & Prototyping</span>
              </div>
              <span className="subtitle">Creating clear and interactive initial concepts of user interface design, facilitating understanding and communication between development teams and clients.</span>
              <div className="application-skill">
                <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer">
                  <img src={Figma}/>
                </a>
                <a><img src={AdobeXD}/></a>
              </div>
            </div>

            <div className="item-container">
              <div className="my-skill">
                  <img src={ThirdSkill}/>
                  <span className="title">Frontend Development</span>
              </div>
              <span className="subtitle">Implementing designs and bringing them to life by developing functional and visually appealing websites and mobile applications.</span>
              <div className="application-skill">
                <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer">
                  <img src={Python}/>
                </a>
                <a href="https://www.java.com/en/download/help/whatis_java.html" target="_blank" rel="noopener noreferrer">
                  <img src={Java}/>
                </a>
                <a href="https://www.javascript.com/" target="_blank" rel="noopener noreferrer">
                  <img src={JavaScript}/>
                </a>
                <a href="https://dart.dev/" target="_blank" rel="noopener noreferrer">
                  <img src={Dart}/>
                </a>
              </div>
              <div className="application-skill">
                <a href="https://www.djangoproject.com/" target="_blank" rel="noopener noreferrer">
                  <img src={Django}/>
                </a>
                <a href="https://flutter.dev/" target="_blank" rel="noopener noreferrer">
                  <img src={Flutter}/>
                </a>
                <a href="https://nodejs.org/en/about" target="_blank" rel="noopener noreferrer">
                  <img src={NodeJs}/>
                </a>
                <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
                  <img src={ReactJs}/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Skills;