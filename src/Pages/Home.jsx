import React from "react";
import Slider from "../Component/Slider";
import CardGrid from "../Component/CardGrid";

const Home = () => {
  return (
    <div className="main">
      <Slider height="85%" width="100%" />
      <div className="cards h-3/5 w-full">
        <CardGrid />
      </div>
    </div>
  );
};

export default Home;
