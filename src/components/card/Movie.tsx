import Image from "next/image";

export default function Movie() {
  return (
    <div className="movie">
      <Image
        width="200"
        height="400"
        src="https://script.viserlab.com/playlab/demo/assets/images/item/portrait//t6HIqrRAclMCA60NsSmeqe9RmNV.jpg"
        alt="movie"
      />

      <div className="movie-details">
        <strong className="name">Avator 2</strong>
        <span className="type">Action</span>
        <span className="language">English</span>
        <div className="rating">
          <Image
            width={10}
            height={10}
            src={`https://www.torrentbd.net/images/rti_imdb_1.png`}
            alt="movies"
          />
          <p>
            8.6 <span>(123)</span>
          </p>
        </div>
        <span className="star">stars: Harun</span>
        <span className="plot">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit
          doloremque tempore, accusamus maiores fugiat quos non eius error
          incidunt
        </span>
      </div>
    </div>
  );
}
