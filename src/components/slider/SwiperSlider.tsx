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

import values from "@/values";
import axios from "axios";
import { useEffect, useState } from "react";
import Movie from "../card/Movie";

type Movie = {
  Poster: string;
  Title: string;
  Genre: string;
  Language: string;
  Country: string;
  imdbID: string;
  Year: string;
};

const SwiperSlider: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const result = await axios.get(`${values.url}/movie/gets`, {
        headers: {
          Authorization: localStorage.getItem("authToken"),
        },
      });
      setMovies(result.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    (movies.length > 0 && (
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
        {movies?.slice(0, 5).map((movie, i) => (
          <SwiperSlide key={i}>
            <Movie movie={movie} />
          </SwiperSlide>
        ))}

        <div className="slider-controler">
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    )) || <div className="">loading...</div>
  );
};

export default SwiperSlider;
