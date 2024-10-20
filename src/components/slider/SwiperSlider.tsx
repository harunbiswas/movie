"use client";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Movie from "../card/Movie";

const SwiperSlider: React.FC = () => {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      initialSlide={2}
      slidesPerView={"auto"}
      pagination={{ el: ".swiper-pagination", clickable: true }}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 3.5,
      }}
      autoplay={{
        delay: 0,
        disableOnInteraction: false, // Allow interaction to continue autoplay
        reverseDirection: true,
      }}
      speed={6000}
      modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
      className="swiper_container movies"
    >
      <SwiperSlide>
        <Movie />
      </SwiperSlide>
      <SwiperSlide>
        <Movie />
      </SwiperSlide>
      <SwiperSlide>
        <Movie />
      </SwiperSlide>
      <SwiperSlide>
        <Movie />
      </SwiperSlide>
      <SwiperSlide>
        <Movie />
      </SwiperSlide>

      <div className="slider-controler">
        <div className="swiper-pagination"></div>
      </div>
    </Swiper>
  );
};

export default SwiperSlider;
