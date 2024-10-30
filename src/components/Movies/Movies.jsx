import React, { useState, useEffect } from "react";
import MovieCard from "../MovieCard/MovieCard";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader"; // Import the Loader component

function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true); // Add a loading state
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
      "Doctor Strange in the Multiverse of Madness",
      "Jurassic World Dominion",
      "Thor: Love and Thunder",
      "The Batman",
      "Uncharted",
      "Fantastic Beasts: The Secrets of Dumbledore",
      "Kabhi",
      "Dilwale",
      "Kabir",
      "Lunch",
    ];

    try {
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
    } catch (error) {
      console.error("Failed to fetch movies:", error);
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="px-8 py-6 bg-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">All Movies</h2>
      </div>
      <div className="flex items-center">
        <div className="flex flex-wrap gap-3 justify-center self-center">
          {movies.map((movie, index) => (
            <MovieCard
              key={index}
              movie={movie}
              onClick={() => navigate(`/movie/${movie.Title}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Movies;
