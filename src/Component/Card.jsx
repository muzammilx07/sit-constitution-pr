import React from "react";
import { Link } from "react-router-dom";

const Card = ({ id, image, title, subtitle }) => {
  return (
    <div className="relative group bg-gray-900 h-96 rounded-lg overflow-hidden shadow-xl transition-transform transform hover:scale-105">
      {/* Background Image */}
      <div
        className="w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      {/* Overlay with title and subtitle */}
      <div className="absolute inset-0 flex flex-col justify-center items-center p-6 bg-black bg-opacity-60 text-white z-10 transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-md mb-4">{subtitle}</p>
      </div>

      {/* Hidden button overlay */}
      <div className="absolute z-40 bottom-0 left-0 w-full p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out flex justify-center items-center bg-transparent bg-opacity-80">
        <Link
          to={`/details/${id}`}
          className="bg-white text-black py-2 px-6 rounded-lg shadow-md hover:bg-gray-200 transition-colors duration-300 z-50 "
        >
          Play
        </Link>
      </div>
    </div>
  );
};

export default Card;
