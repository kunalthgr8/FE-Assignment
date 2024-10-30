import React from "react";

function EventCard({ title, date, location, category, price, image }) {
  return (
    <div className="bg-white w-64 p-4 rounded-lg shadow-md">
      <img
        src={image}
        alt={title}
        className="rounded-lg w-full h-80 object-cover mb-4"
      />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-500 text-sm mb-1">{date}</p>
      <p className="text-gray-500 text-sm">{location}</p>
      <p className="text-gray-700 text-sm">{category}</p>
      <p className="text-red-500 font-bold mt-2">{price}</p>
    </div>
  );
}

export default EventCard;
