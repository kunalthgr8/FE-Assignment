import React, { useEffect, useState } from "react";
import Slider from "react-slick";

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

const EventCarousel = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const movieData = await Promise.all(
      movieTitles.map(async (title) => {
        const response = await fetch(
          `https://www.omdbapi.com/?t=${title}&apikey=${import.meta.env.VITE_API_KEY}}`
        );
        const data = await response.json();
        return data;
      })
    );
    setMovies(movieData.filter((movie) => movie.Response === "True"));
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="w-full mx-auto p-4 ">
      <Slider {...settings}>
        {movies.map((movie, index) => (
          <div key={index} className="w-full">
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="w-full h-[300px] object-cover rounded-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default EventCarousel;
