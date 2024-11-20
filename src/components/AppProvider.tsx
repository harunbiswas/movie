"use client";
import React, { ReactNode, useState } from "react";
import ThemeContext from "./ThemeContext";

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

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  return (
    <ThemeContext.Provider value={{ movies, setMovies }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default AppProvider;
