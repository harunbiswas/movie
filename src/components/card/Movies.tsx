import Movie from "./Movie";

interface MovieProps {
  title: string;
}

const Movies: React.FC<MovieProps> = ({ title }) => {
  return (
    <div className="movies">
      <div className="container">
        <div className="movies-top">
          <p className="movies-top-title btn">{title}</p>
        </div>
        <div className="movies-body">
          <Movie />
          <Movie />
          <Movie />
          <Movie />
          <Movie />
          <Movie />
          <Movie />
          <Movie />
          <Movie />
          <Movie />
        </div>
      </div>
    </div>
  );
};

export default Movies;
