import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import MovieCard from "../MovieCard/MovieCard";

const useMoviesToShowCount = () => {
  const [moviesToShowCount, setMoviesToShowCount] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1300) {
        setMoviesToShowCount(5);
      } else if (width >= 1100) {
        setMoviesToShowCount(4);
      } else if (width >= 850) {
        setMoviesToShowCount(3);
      } else if (width >= 600) {
        setMoviesToShowCount(2);
      } else {
        setMoviesToShowCount(1);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return moviesToShowCount;
};

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const moviesToShowCount = useMoviesToShowCount();
  const moviesToShow = movies.slice(startIndex, startIndex + moviesToShowCount);
  const navigate = useNavigate();

  const fetchMovies = async () => {
    try {
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
      ];
      const fetchedMovies = await Promise.all(
        movieTitles.map(async (title) => {
          const response = await fetch(
            `https://www.omdbapi.com/?t=${title}&apikey=cd84a7a2`
          );
          const data = await response.json();
          return data;
        })
      );

      setMovies(fetchedMovies);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const scrollLeft = () => {
    setStartIndex((prev) => Math.max(prev - moviesToShowCount, 0));
  };

  const scrollRight = () => {
    setStartIndex((prev) =>
      Math.min(prev + moviesToShowCount, movies.length - moviesToShowCount)
    );
  };

  return (
    <div className="px-8 py-6 bg-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Recommended Movies</h2>
        <Link to="/movies" className="text-red-500 hover:underline mr-3">
          See All
        </Link>
      </div>
      <div className="flex items-center">
        <button
          onClick={scrollLeft}
          className="p-2 px-3 py-2 text-white text-xl bg-gray-500 rounded-full hover:bg-pink-600"
          disabled={startIndex === 0}
        >
          &#8249;
        </button>
        <div className="flex justify-center self-center m-auto space-x-4 overflow-hidden">
          {moviesToShow.map((movie, index) => (
            <MovieCard
              key={index}
              movie={movie}
              onClick={() => navigate(`/movie/${movie.Title}`)} 
            />
          ))}
        </div>
        <button
          onClick={scrollRight}
          className="p-2 px-3 py-2 text-white text-xl bg-gray-500 rounded-full hover:bg-pink-600"
          disabled={startIndex >= movies.length - moviesToShowCount}
        >
          &#8250;
        </button>
      </div>
    </div>
  );
}

export default MovieList;
