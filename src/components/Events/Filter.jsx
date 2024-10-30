import React from "react";

function Filter() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Filters</h3>

      {/* Date Filter */}
      <div className="mb-6">
        <h4 className="font-medium mb-2">Date</h4>
        <button className="bg-red-200 text-red-600 px-4 py-1 rounded mr-2 mt-2">
          Today
        </button>
        <button className="bg-red-200 text-red-600 px-4 py-1 rounded mr-2 mt-2">
          Tomorrow
        </button>
        <button className="bg-red-200 text-red-600 px-4 py-1 rounded mt-2">
          This Weekend
        </button>
        <label className="block mt-4">
          <input type="checkbox" className="mr-2" /> Date Range
        </label>
      </div>

      {/* Language Filter */}
      <div className="mb-6">
        <h4 className="font-medium mb-2">Language</h4>
        <label className="block">
          <input type="checkbox" className="mr-2" /> English
        </label>
        <label className="block">
          <input type="checkbox" className="mr-2" /> Hindi
        </label>
      </div>

      {/* Categories Filter */}
      <div className="mb-6">
        <h4 className="font-medium mb-2">Categories</h4>
        <label className="block">
          <input type="checkbox" className="mr-2" /> Stand-Up Comedy
        </label>
        <label className="block">
          <input type="checkbox" className="mr-2" /> Education
        </label>
      </div>

      {/* Price Filter */}
      <div className="mb-6">
        <h4 className="font-medium mb-2">Price</h4>
        <label className="block">
          <input type="checkbox" className="mr-2" /> Free
        </label>
        <label className="block">
          <input type="checkbox" className="mr-2" /> Paid
        </label>
      </div>
    </div>
  );
}

export default Filter;
