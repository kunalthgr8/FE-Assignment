import React from "react";

function RatingBadge({ rating, votes }) {
  return (
    <div className="flex items-center space-x-1 bg-black text-white text-sm rounded-lg rounded-t-none px-2 py-1 mb-2">
      <span>⭐</span>
      <span>{rating}/10</span>
      <span>{votes} Votes</span>
    </div>
  );
}

export default RatingBadge;
