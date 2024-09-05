import React from "react";
import Slider from "../Component/Slider";
import CardGrid from "../Component/CardGrid";

const Home = () => {
  return (
    <div className="main">
      <Slider height="85%" width="100%" />
      <div className="cards h-3/5 w-full">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800 px-40">
          LETS PLAY
        </h2>
        <CardGrid />
      </div>
    </div>
  );
};

export default Home;
