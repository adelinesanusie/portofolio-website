import React from 'react';
import { TypeAnimation } from 'react-type-animation';

import ProfilePicture from "../assets/profile-picture2.jpg";

function Home() {
  return (
    <div className="home" id="home">
      <div className="container-home">
        <div className="title-home">
          <h2>THIS IS ME</h2>
          <h1>
          <TypeAnimation
            sequence={[
              'ADELINE SANUSIE',
              1500,
              "I'm a UI/UX Designer",
              1500,
              "I'm also a Frontend Engineer",
              1500,
            ]}
            cursor={true}
            repeat={Infinity}
            speed={1}
            deletionSpeed={40}
          />
          </h1>
          <p>I’m a student from the University of Indonesia, majoring in Computer Science.
            I'm deeply passionate about drawing, photography, and sports.
            I’m actively involved as a UI/UX designer and front-end developer, dedicated to creating captivating digital experiences that seamlessly blend aesthetics and functionality.
          </p>
        </div>
        <div className="profile">
          <img src={ProfilePicture}/>
        </div>
      </div>
    </div>
  );
}

export default Home;