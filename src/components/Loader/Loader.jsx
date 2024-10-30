import React from "react";

function Loader() {
  return (
    <div className="flex items-center justify-center mt-20 h-full">
      <div className="w-16 h-16 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
    </div>
  );
}

export default Loader;
