import React, { useState, useEffect } from "react";
import MovieCard from "../MovieCard/MovieCard";
import { useNavigate } from "react-router-dom";
import { EventCarousel } from "../index";

function Stream() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const fetchMovies = async () => {
    const movieTitles = [
      "Oppenheimer",
      "Barbie",
      "Dune: Part Two",
      "The Marvels",
      "The Flash",
      "Spider-Man: Across the Spider-Verse",
      "Harry",
      "Black Panther: Wakanda Forever",
      "Shazam! Fury of the Gods",
      "Top Gun: Maverick",
    ];

    const fetchedMovies = await Promise.all(
      movieTitles.map(async (title) => {
        const response = await fetch(
          `https://www.omdbapi.com/?t=${title}&apikey=${import.meta.env.VITE_API_KEY}`
        );
        const data = await response.json();
        return data;
      })
    );

    setMovies(fetchedMovies);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const moviesToShow = movies;

  return (
    <div className=" py-6 bg-white ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold px-5">Streams</h2>
      </div>
      <div className=" m-3 ">
        <EventCarousel />
      </div>
      <div className="flex flex-col items-center p-5 mt-5">
        <h2 className="text-xl font-bold px-5 m-5 text-pink-500 ">
          Premimer Of The Week
        </h2>
        <div className="flex flex-wrap gap-4 justify-center self-center">
          {moviesToShow.map((movie, index) => (
            <MovieCard
              key={index}
              movie={movie}
              onClick={() => navigate(`/movie/${index}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Stream;
