import React from 'react';
import Typewriter from 'typewriter-effect';

import ProfilePicture from "../assets/profile-picture2.jpg";

function Home() {
  return (
    <div className="home" id="home">
      <div className="container-home">
        <div className="title-home">
          <h2>THIS IS ME</h2>
          <h1>
            <Typewriter
                options={{
                    loop: true,
                }}
                onInit={(typewriter) => {
                    typewriter
                    .typeString('ADELINE SANUSIE')
                    .pauseFor(2000)
                    .deleteAll()
                    .callFunction(() => {
                        typewriter.start();
                    })
                    .start();
                }}
            />
        </h1>
          <p>
            I’m an undergraduate student from the University of Indonesia, majoring in Computer Science. I'm deeply passionate about drawing, photography, and sports. I'm currently actively involved as a UI/UX designer and front-end developer, dedicated to creating captivating digital experiences that seamlessly blend aesthetics and functionality.
          </p>
        </div>
        <div className="profile">
          <img src={ProfilePicture} alt="Profile Picture" />
        </div>
      </div>
    </div>
  );
}

export default Home;