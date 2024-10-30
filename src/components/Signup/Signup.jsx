import React from "react";

const Signup = () => {
  return (
    <div className="flex flex-col md:flex-row bg-white mt-10 w-1/3 rounded-xl justify-center md:m-10 text-center self-center border-t-2">
      <div className="w-full h-full m-auto mt-10  flex flex-col justify-evenly gap-7 md:m-5">
        <h2 className="text-pink-500 text-4xl md:text-3xl sm:text-2xl font-bold tracking-widest">
          Sign Up
        </h2>
        <form className="p-2 flex flex-col gap-3 pt-0 pb-0">
          <input
            type="text"
            placeholder="fullname"
            required
            className="px-3 py-2 rounded-xl bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full"
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="px-3 py-2 rounded-xl bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full"
          />
          <input
            type="number"
            required
            placeholder="Mobile Number"
            className="px-3 py-2 rounded-xl bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full"
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="px-3 py-2 rounded-xl bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full"
          />
          <button className=" px-3 py-2 rounded-xl transition-transform duration-400 ease-out hover:ease-in transform hover:scale-110 bg-pink-500 hover:bg-pink-600 text-white outline-none focus:bg-gray-50 duration-200 w-full">
            Submit
          </button>
        </form>
        <div>
          <button className="p-4 w-1/2  rounded-full bg-white font-semibold text-pink-600 text-sm">
            Sign Up By Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
