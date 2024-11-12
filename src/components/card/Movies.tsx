"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import values from "../../values";
import Movie from "./Movie";

interface MovieProps {
  title: string;
}
type Movie = {
  Poster: string;
  Title: string;
  Genre: string;
  Language: string;
  Country: string;
  imdbID: string;
  Year: string;
  _id: string;
};

const Movies: React.FC<MovieProps> = ({ title }) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const result = await axios.get(`${values.url}/movie/gets`);
      setMovies(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="movies">
      <div className="container">
        <div className="movies-top">
          <p className="movies-top-title btn">{title}</p>
        </div>
        <div className="movies-body">
          {movies?.map((movie, i) => (
            <Movie key={i} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movies;
