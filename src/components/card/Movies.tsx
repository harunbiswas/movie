"use client";

import axios from "axios";
import { useContext, useEffect } from "react";
import values from "../../values";
import ThemeContext from "../ThemeContext";
import Movie from "./Movie";

interface MovieProps {
  title: string;
}
interface Movie {
  _id: string;
  Title: string;
  Genre: string;
  Language: string;
  Country: string;
  imdbID: string;
  Year: string;
  Poster: string;
  Actors?: string; // Optional, could be undefined
  Director?: string; // Optional, could be undefined
  Plot?: string; // Optional, could be undefined
  Released?: string; // Optional, could be undefined
  Runtime?: string; // Optional, could be undefined
  Writer?: string; // Optional, could be undefined
  [key: string]: string | undefined; // Allow indexing by any string
}

const Movies: React.FC<MovieProps> = ({ title }) => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useContext must be used within a ThemeProvider");
  }

  const { movies, setMovies } = context;

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
