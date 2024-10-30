import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function CategoryBar() {
  const [fontSize, setFontSize] = useState("text-base");

  const updateFontSize = () => {
    if (window.innerWidth <= 470) {
      setFontSize("text-xs");
    } else {
      setFontSize("text-base");
    }
  };

  useEffect(() => {
    updateFontSize();

    window.addEventListener("resize", updateFontSize);

    return () => {
      window.removeEventListener("resize", updateFontSize);
    };
  }, []);

  return (
    <nav className="flex w-full justify-between px-8 py-2 ">
      <div className={`flex space-x-6 text-slate-700 text-sm ${fontSize}`}>
        <Link to="/movies" className="hover:text-pink-500">
          Movies
        </Link>
        <Link to="/stream" className="hover:text-pink-500">
          Stream
        </Link>
        <Link to="/events" className="hover:text-pink-500">
          Events
        </Link>
        {/* <Link to="#plays" className="hover:text-pink-500">Plays</Link>
        <Link to="#sports" className="hover:text-pink-500">Sports</Link>
        <Link to="#activities" className="hover:text-pink-500">Activities</Link> */}
      </div>
      <div className={`flex space-x-6 text-gray-700 text-sm ${fontSize}`}>
        <Link to="#list-your-show" className="hover:text-pink-500">
          ListYourShow
        </Link>
        {/* <Link to="#corporates" className="hover:text-pink-500">Corporates</Link> */}
        <Link to="#offers" className="hover:text-pink-500">
          Offers
        </Link>
        {/* <Link to="#gift-cards" className="hover:text-pink-500">Gift Cards</Link> */}
      </div>
    </nav>
  );
}

export default CategoryBar;
