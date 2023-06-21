import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import "swiper/swiper.min.css";

import Spiderman from "../assets/Gallery/Spiderman.png";
import Thor from "../assets/Gallery/Thor.png";
import Marvel from "../assets/Gallery/Marvel.png";
import TheIncredibles from "../assets/Gallery/TheIncredibles.png";
import Yoda from "../assets/Gallery/Yoda.png";
import KobeGianna from "../assets/Gallery/KobeGianna.png";
import HarryPotter from "../assets/Gallery/HarryPotter.png";
import TheBeatles from "../assets/Gallery/TheBeatles.png";
import NelsonMandela from "../assets/Gallery/NelsonMandela.png";

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

  const galleryRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          swiperRef.current.swiper.autoplay.start(); // Start the autoplay when the gallery section becomes visible
        } else {
          swiperRef.current.swiper.autoplay.stop(); // Stop the autoplay when the gallery section is not visible
        }
      });
    }, options);

    if (galleryRef.current) {
      observer.observe(galleryRef.current); // Start observing the gallery section
    }

    return () => {
      if (galleryRef.current) {
        observer.unobserve(galleryRef.current); // Stop observing the gallery section when the component unmounts
      }
    };
  }, []);

  return (
    <div class="gallery" id="gallery" ref={galleryRef}>
      <div class="container-gallery swiper-container">
        <div class="title-gallery">
          <h2>DRAWING COLLECTIONS</h2>
          <p>
            Welcome to my Drawing Collections! I dedicate these drawings to my parents who have guided me since childhood in the journey of learning to draw. Hope you find joy and inspiration in these drawings, enjoy!
          </p>
        </div>
        <Swiper
          ref={swiperRef}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          loop
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          shouldSwiperUpdate
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