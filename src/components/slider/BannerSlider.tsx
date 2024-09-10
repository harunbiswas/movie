"use client";

import Image from "next/image";
// /src/components/BannerSlider.tsx
import React from "react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css"; // Core Swiper styles
import "swiper/css/navigation"; // Navigation module styles
import "swiper/css/pagination"; // Pagination module styles// Import Pagination styles
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation, Pagination]); // Initialize Swiper modules

interface Movie {
  title: string;
  image: string;
  description: string;
}

const BannerSlider: React.FC = () => {
  const movies: Movie[] = [
    {
      title: "Justice League",
      image:
        "https://script.viserlab.com/playlab/demo/assets/images/item/portrait//2022/07/05/62c4542f3889d1657033775.jpg",
      description: "The Justice League faces a great threat to the planet.",
    },
    {
      title: "Avengers: Endgame",
      image:
        "https://script.viserlab.com/playlab/demo/assets/images/item/portrait//2022/07/05/62c4542f3889d1657033775.jpg",
      description: "The Avengers take on their greatest challenge yet.",
    },
    {
      title: "Spider-Man: Homecoming",
      image:
        "https://script.viserlab.com/playlab/demo/assets/images/item/portrait//2022/07/05/62c4542f3889d1657033775.jpg",
      description: "Spider-Man returns to the streets of New York.",
    },
    {
      title: "Spider-Man: Homecoming",
      image:
        "https://script.viserlab.com/playlab/demo/assets/images/item/portrait//2022/07/05/62c4542f3889d1657033775.jpg",
      description: "Spider-Man returns to the streets of New York.",
    },
    {
      title: "Spider-Man: Homecoming",
      image:
        "https://script.viserlab.com/playlab/demo/assets/images/item/portrait//2022/07/05/62c4542f3889d1657033775.jpg",
      description: "Spider-Man returns to the streets of New York.",
    },
    {
      title: "Spider-Man: Homecoming",
      image:
        "https://script.viserlab.com/playlab/demo/assets/images/item/portrait//2022/07/05/62c4542f3889d1657033775.jpg",
      description: "Spider-Man returns to the streets of New York.",
    },
    {
      title: "Spider-Man: Homecoming",
      image:
        "https://script.viserlab.com/playlab/demo/assets/images/item/portrait//2022/07/05/62c4542f3889d1657033775.jpg",
      description: "Spider-Man returns to the streets of New York.",
    },
    {
      title: "Spider-Man: Homecoming",
      image:
        "https://script.viserlab.com/playlab/demo/assets/images/item/portrait//2022/07/05/62c4542f3889d1657033775.jpg",
      description: "Spider-Man returns to the streets of New York.",
    },
    {
      title: "Spider-Man: Homecoming",
      image:
        "https://script.viserlab.com/playlab/demo/assets/images/item/portrait//2022/07/05/62c4542f3889d1657033775.jpg",
      description: "Spider-Man returns to the streets of New York.",
    },
    {
      title: "Spider-Man: Homecoming",
      image:
        "https://script.viserlab.com/playlab/demo/assets/images/item/portrait//2022/07/05/62c4542f3889d1657033775.jpg",
      description: "Spider-Man returns to the streets of New York.",
    },
  ];

  return (
    <div className="swiper-container">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 4,
          slideShadows: true,
        }}
        loop={true}
        keyboard={true}
        mousewheel={{
          thresholdDelta: 70,
        }}
        breakpoints={{
          560: {
            slidesPerView: 2.5,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {movies.map((movie, index) => (
          <SwiperSlide key={index}>
            <div className="movie-card">
              <Image
                src={movie.image}
                alt={movie.title}
                className="movie-image"
                width={1000}
                height={1000}
              />
              <div className="movie-details">
                <h3>{movie.title}</h3>
                <p>{movie.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSlider;
