import Movies from "@/components/card/Movies";

export default function Movie() {
  return (
    <div className="movie-page">
      <div className="movie-page-banner">
        <div className="container">
          <h1>Movies</h1>
        </div>
      </div>
      <Movies title="ALl Movies" />
    </div>
  );
}
