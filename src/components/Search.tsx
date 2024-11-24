import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { MdLocationSearching } from "react-icons/md";
import ThemeContext from "./ThemeContext";

// Movie type definition
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

interface SearchProps {
  setIsSearch: (value: boolean) => void;
}

export default function Search({ setIsSearch }: SearchProps) {
  const [result, setResult] = useState<Movie[]>([]);
  const context = useContext(ThemeContext);
  const [value, setValue] = useState<string>("");

  if (!context) {
    throw new Error("useContext must be used within a ThemeProvider");
  }

  const { movies } = context;

  useEffect(() => {
    if (movies && value) {
      // Filter movies based on the search query value
      const filteredResults = movies.filter((movie) =>
        [
          movie.Title,
          movie.Genre,
          movie.Language,
          movie.Country,
          movie.Actors,
          movie.Director,
          movie.Plot,
          movie.Released,
          movie.Runtime,
          movie.Writer,
          movie.imdbID,
          movie._id,
        ].some((field) => {
          // Handle undefined values gracefully
          const fieldToSearch = field ? field.toLowerCase() : "";
          return fieldToSearch.includes(value.toLowerCase());
        })
      );
      setResult(filteredResults);
    } else {
      setResult([]);
    }
  }, [movies, value]);

  return (
    <div className="search">
      <div className="search-top">
        <div className="container">
          <div className="search-top-item">
            <p>
              <MdLocationSearching /> <span>{result?.length}</span>
            </p>
          </div>
          <div className="search-top-item">
            <p>KHOJ, THE SEARCH</p>
          </div>
          <div className="search-top-item">
            <button onClick={() => setIsSearch(false)}>
              <IoMdClose />
            </button>
          </div>
        </div>
      </div>
      <div className="search-form">
        <div className="container">
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Search"
          />
        </div>
      </div>

      <ul className="search-result">
        <div className="container">
          {result?.map((data, i) => (
            <li key={i} className="search-result-item">
              <Link
                href={`${
                  data?.Language?.replace(/[\s,]+/g, "-") || ""
                }/${data?.Title.replace(/ /g, "-")}?id=${data?._id}`}
              >
                <div className="image">
                  {data?.Poster && data?.Poster !== "N/A" ? (
                    <Image
                      src={data?.Poster}
                      alt="Movie Poster"
                      width={100}
                      height={100}
                    />
                  ) : (
                    <p>No image available.</p>
                  )}
                </div>
                <div className="content">
                  <h4>{data?.Title}</h4>
                  <span>{data?.Year}</span>
                  <span className="star">Stars: {data?.Actors}</span>
                  <span className="plot">Genre: {data?.Genre}</span>
                </div>
              </Link>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
}
