import React from "react";
import RatingBadge from "../RatingCard/RatingBadge";

function MovieCard({ movie, onClick }) {
  return (
    <div
      className="w-60 p-4 rounded-lg shadow-md cursor-pointer"
      onClick={onClick}
    >
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="w-full h-64 rounded-lg rounded-b-none object-cover"
      />
      <RatingBadge rating={movie.imdbRating} votes={movie.imdbVotes} />
      <h3 className="text-md font-semibold mt-2">{movie.Title}</h3>
      <p className="text-sm text-gray-500">{movie.Genre}</p>
    </div>
  );
}

export default MovieCard;
