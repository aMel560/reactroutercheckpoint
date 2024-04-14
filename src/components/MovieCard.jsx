import React from "react";

const MovieCard = ({ movie, onClick }) => {
  return (
    <div className="movie-card" onClick={() => onClick(movie)}>
      <img src={movie.posterURL} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>Note: {movie.note}</p>
    </div>
  );
};

export default MovieCard;
