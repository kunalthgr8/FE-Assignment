import React, { useState, useEffect, useCallback } from "react";
import { FaUser } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [fontSize, setFontSize] = useState("text-base");
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 749);
  const [smallForSignUp, setSmallForSignUp] = useState(
    window.innerWidth <= 1024
  );
  const navigate = useNavigate();


  const updateFontSize = useCallback(() => {
    setFontSize(window.innerWidth <= 600 ? "text-xs" : "text-base");
    setIsSmallScreen(window.innerWidth <= 749);
    setSmallForSignUp(window.innerWidth <= 1024);
  }, []);

  useEffect(() => {
    updateFontSize();

    window.addEventListener("resize", updateFontSize);
    return () => {
      window.removeEventListener("resize", updateFontSize);
    };
  }, [updateFontSize]);

  const handleSearch = async (query) => {
    if (!query) {
      setSearchResults([]);
      return;
    }

    try {
      const response = await fetch(
        `https://www.omdbapi.com/?s=${query}&type=movie&apikey=${import.meta.env.VITE_API_KEY}`
      );
      const data = await response.json();

      if (data.Response === "True") {
        setSearchResults(data.Search.slice(0, 5));
      } else {
        setSearchResults([]);
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchQuery) {
        handleSearch(searchQuery);
      } else {
        setSearchResults([]);
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery]);

  const clearSearch = () => {
    setSearchQuery("");
    setSearchResults([]);
  };

  return (
    <nav className="flex flex-col items-center px-5 py-5 pl-32 pr-32 bg-white border-b border-gray-200">
      {/* Top Navigation */}
      <div
        className={`flex items-center w-full ${
          isSmallScreen ? "ml-2" : "ml-5"
        }`}
      >
        {/* Logo */}
        <div className="flex-shrink-0 bg-slate-500 rounded-lg">
          <Link to="/">
            <img
              src="//in.bmscdn.com/webin/common/icons/bms.svg"
              alt="BookMyShow Logo"
              className="w-28 p-1"
            />
          </Link>
        </div>

        {/* Search Bar */}
        <div className="flex-grow mx-4 w-1/2 relative">
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <input
            id="search"
            type="text"
            placeholder="🔍 Search for Movies, Events, Plays, Sports, and Activities"
            className="w-3/4 px-4 py-1 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              onClick={clearSearch}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-red-500"
              aria-label="Clear search"
            >
              <AiOutlineClose />
            </button>
          )}
        </div>

        {/* Location Dropdown */}
        {!isSmallScreen && (
          <div className="mr-4">
            <label htmlFor="location" className="sr-only">
              Select Location
            </label>
            <select
              id="location"
              className={`px-2 py-1 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 ${fontSize}`}
              aria-label="Select Location"
            >
              <option>Gurugram</option>
              <option>Delhi</option>
              <option>Mumbai</option>
              <option>Bangalore</option>
            </select>
          </div>
        )}

        {/* Sign In Button */}
        <div className="mr-4">
          {smallForSignUp ? (
            <button className="flex items-center justify-center w-10 h-10 text-white bg-red-500 rounded-full hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-300">
              <FaUser />
            </button>
          ) : (
            <Link
              to="/signup"
              className={`px-3 py-2 text-white bg-red-500 rounded-lg hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-300 ${fontSize}`}
            >
              Sign in
            </Link>
          )}
        </div>

        {/* Menu Icon */}
        {!isSmallScreen && (
          <div className="text-2xl cursor-pointer" aria-label="Menu">
            <span>&#9776;</span>
          </div>
        )}
      </div>

      {/* Search Results */}
      {searchResults.length > 0 && (
        <div className="w-full mt-4 bg-white rounded-lg shadow-lg p-4">
          <h3 className="text-lg font-semibold mb-2">Search Results</h3>
          <ul>
            {searchResults.map((movie) => (
              <li
                key={movie.imdbID}
                className="mb-2 cursor-pointer "
                onClick={() => {
                  setSearchResults([]);
                  navigate(`/movie/${movie.Title}`);
                }}
              >
                <div className="flex items-center">
                  <img
                    src={movie.Poster}
                    alt={movie.Title}
                    className="w-12 h-16 object-cover rounded-lg mr-4"
                  />
                  <div>
                    <p className="font-semibold">{movie.Title}</p>
                    <p className="text-sm text-gray-500">{movie.Year}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
