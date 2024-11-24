import Movies from "@/components/card/Movies";

export default function Movie() {
  return (
    <div className="movie-page">
      <div className="movie-page-banner">
        <div className="container">
          <h1>TV Shows</h1>
        </div>
      </div>
      <Movies title="ALl Tv Shows" />
    </div>
  );
}
