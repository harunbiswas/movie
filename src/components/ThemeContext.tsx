import { createContext, Dispatch, SetStateAction } from "react";

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
  imdbRating?: string; // Optional, could be undefined
  imdbVotes?: string; // Optional, could be undefined
  [key: string]: string | undefined; // Allow indexing by any string
}

interface AppContextProps {
  movies: Movie[];
  setMovies: Dispatch<SetStateAction<Movie[]>>;
}

const ThemeContext = createContext<AppContextProps | undefined>(undefined);

export default ThemeContext;
