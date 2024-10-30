import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../index";

const MoviePage = () => {
  const { id } = useParams();

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      const title = id;
      if (title) {
        try {
          const response = await fetch(
            `https://www.omdbapi.com/?t=${title}&apikey=${import.meta.env.VITE_API_KEY}`
          );
          const movieData = await response.json();
          setData(movieData);
        } catch (error) {
          console.error("Failed to fetch movie data:", error);
        }
      }
    };

    fetchMovies();
  }, [id]);

  return !data ? (
    <Loader />
  ) : (
    <div className="bg-white text-white min-h-screen p-6 w-full">
      <div className="mx-auto bg-gray-800 rounded-lg shadow-md p-4">
        <div className="flex flex-col lg:flex-row items-center justify-evenly">
          <img
            src={data.Poster}
            alt={data.Title}
            className="w-64 h-auto rounded-md shadow-lg"
          />

          <div className="mt-4 lg:mt-0 lg:ml-6">
            <h1 className="text-3xl font-bold">{data.Title}</h1>
            <p className="text-gray-400 mt-2">Released on: {data.Released}</p>
            <p className="text-gray-400">Duration: {data.Runtime}</p>
            <p className="text-gray-400">Genre: {data.Genre}</p>
            <p className="text-gray-400">Language: {data.Language}</p>
            <p className="text-gray-400">Country: {data.Country}</p>
            <p className="text-gray-400">IMDb Rating: {data.imdbRating}</p>
            <p className="text-gray-400">Votes: {data.imdbVotes}</p>

            <button className="mt-4 bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded">
              Book Tickets
            </button>
          </div>
        </div>

        <div className="mt-6 mx-10">
          <h2 className="text-2xl font-semibold">About the movie</h2>
          <p className="mt-2 text-gray-300">{data.Plot}</p>
        </div>

        <div className="mt-6 mx-10">
          <h2 className="text-2xl font-semibold">Cast</h2>
          <p className="mt-2 text-gray-300">{data.Actors}</p>
        </div>

        <div className="mt-6 mx-10">
          <h2 className="text-2xl font-semibold">Ratings</h2>
          <div className="mt-2 text-gray-300">
            {data.Ratings?.map((rating, index) => (
              <p key={index}>
                {rating.Source}: {rating.Value}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
