import React from "react";
import { useParams } from "react-router-dom";

const MoviePage = () => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));

  return (
    <div className="movie-page">
      <button>Back</button>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <iframe src={movie.trailerURL} title={movie.title} />
    </div>
  );
};

export default MoviePage;
