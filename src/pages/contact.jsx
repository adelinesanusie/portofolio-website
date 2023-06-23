import React from 'react';

import Gmail from "../assets/Contact/Gmail.png";
import LinkedIn from "../assets/Contact/LinkedIn.png";
import Notion from "../assets/Contact/Notion.png";
import Instagram from "../assets/Contact/Instagram.png";
import Spotify from "../assets/Contact/Spotify.png";

function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="container-contact">
        <div className="title-contact">
          <h2>REACH ME OUT!</h2>
        </div>
        <div className="social-media">
          <div className="social-media-separate">
            <div className="social-gmail">
              <img src={Gmail} alt="Gmail" />
              <span className="title">adelinesanusie@gmail.com</span>
            </div>
          </div>
          <div className="other-social-media">
            <div className="social-media-separate">
              <a href="https://id.linkedin.com/in/adeline-sanusie-bba9641b8" target="_blank" rel="noopener noreferrer">
              <img src={LinkedIn} alt="LinkedIn" />
              </a>
            </div>
            <div className="social-media-separate">
              <a href="https://adelinesanusie.notion.site/Adeline-Sanusie-s-Portfolio-0e1add3fed494865a2de34433956d2b6?pvs=4" target="_blank" rel="noopener noreferrer">
              <img src={Notion} alt="Notion" />
              </a>
            </div>
            <div className="social-media-separate">
              <a href="https://www.instagram.com/adelinesanusie/" target="_blank" rel="noopener noreferrer">
              <img src={Instagram} alt="Instagram" />
              </a>
            </div>
            <div className="social-media-separate">
              <a href="https://open.spotify.com/user/21gmomxk3bh2a3mfcldcz2qgi?si=20c2184391024733" target="_blank" rel="noopener noreferrer">
              <img src={Spotify} alt="Spotify" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;