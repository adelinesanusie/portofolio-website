import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import "swiper/swiper.min.css";

import Spiderman from "../assets/Spiderman.jpg";
import Thor from "../assets/Thor.jpg";
import Marvel from "../assets/Marvel.jpg";
import TheIncredibles from "../assets/TheIncredibles.jpg";
import Yoda from "../assets/Yoda.jpg";
import KobeGianna from "../assets/KobeGianna.jpg";
import HarryPotter from "../assets/HarryPotter.jpg";
import TheBeatles from "../assets/TheBeatles.jpg";
import NelsonMandela from "../assets/NelsonMandela.jpg";

// Install Swiper modules
SwiperCore.use([Navigation, Autoplay]);

function Gallery() {
  const images = [
    { id: 1, src: Spiderman, alt: "Spiderman" },
    { id: 2, src: Thor, alt: "Thor" },
    { id: 3, src: Marvel, alt: "Marvel" },
    { id: 4, src: TheIncredibles, alt: "TheIncredibles" },
    { id: 5, src: Yoda, alt: "Yoda" },
    { id: 6, src: KobeGianna, alt: "KobeGianna" },
    { id: 7, src: HarryPotter, alt: "HarryPotter" },
    { id: 8, src: TheBeatles, alt: "TheBeatles" },
    { id: 9, src: NelsonMandela, alt: "NelsonMandela" },
  ];

  return (
    <div className="gallery" id="gallery">
      <div className="container-gallery swiper-container"> {/* Added "swiper-container" class */}
        <div className="title-gallery">
          <h2>DRAWING COLLECTIONS</h2>
          <p></p>
        </div>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          navigation
          loop
          autoplay={{ delay: 2500 }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {images.map((image) => (
            <SwiperSlide key={image.id}>
              <img src={image.src} alt={image.alt} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Gallery;