import Image from "next/image";
import Link from "next/link";
interface MovieProps {
  movie: {
    Poster?: string;
    Title?: string;
    Genre?: string;
    Language?: string;
    imdbRating?: string;
    imdbVotes?: string;
    Actors?: string;
    Plot?: string;
    imdbID?: string;
    _id: string;
  };
}

export default function Movie({ movie }: MovieProps) {
  return (
    <Link
      href={`${movie?.Language}/${movie?.Title}?id=${movie?._id}`}
      className="movie"
    >
      {movie?.Poster && movie?.Poster !== "N/A" ? ( // Check if imageUrl is valid
        <Image
          src={movie?.Poster} // Use a valid image URL
          alt="My Image"
          width={200} // Specify width
          height={400} // Specify height
        />
      ) : (
        <p>No image available.</p> // Fallback content when no valid image
      )}

      <div className="movie-details">
        <strong className="name">{movie?.Title}</strong>
        <span className="type">{movie?.Genre}</span>
        <span className="language">{movie?.Language}</span>
        <div className="rating">
          <Image
            width={10}
            height={10}
            src={`https://www.torrentbd.net/images/rti_imdb_1.png`}
            alt="movies"
          />
          <p>
            {movie?.imdbRating} <span>({movie?.imdbVotes})</span>
          </p>
        </div>
        <span className="star">stars: {movie?.Actors}</span>
        <span className="plot">{movie?.Plot}</span>
      </div>
    </Link>
  );
}
