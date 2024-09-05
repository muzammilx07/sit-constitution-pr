import React, { useEffect, useRef, useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import '../App.css'

const Slider = ({ width, height }) => {
  const sliderRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 896, height: 504 });

  useEffect(() => {
    const handleResize = () => {
      if (sliderRef.current) {
        setDimensions({
          width: sliderRef.current.clientWidth,
          height: sliderRef.current.clientHeight,
        });
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initialize dimensions

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={sliderRef}
      className={`relative ${width || "w-full"} ${height || "h-full"} mb-16`}
    >
      <SimpleImageSlider
        width={dimensions.width}
        height={dimensions.height}
        images={images}
        showBullets={false}
        showNavs={true}
        autoPlay={true}
        autoPlayDelay={2.0}
        loop={true}
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-60 text-white text-center p-6 `">
        <h1 className="text-4xl font-bold mb-8">
          Welcome to Mission
          <div className="relative mt-6">
            <hr className="absolute inset-x-0 top-0 border-t-4 border-blue-500 opacity-50" />
            <span className="relative block text-transparent bg-clip-text bg-gradient-to-r from-[#FF9933] via-white to-[#138808] animate-text text-5xl font-bold py-4">
              INDIA
            </span>
            <hr className="absolute inset-x-0 bottom-0 border-b-4 border-red-500 opacity-50" />
          </div>
        </h1>

        <p className="text-lg mb-6">Serious history, serious games</p>
        <div className="flex gap-4">
          <button className="bg-gradient-to-r from-[#FFC107] to-[#FF9800] text-white py-2 px-14 rounded-lg font-bold shadow-lg hover:bg-gradient-to-r hover:from-[#FFC107]/90 hover:to-[#FF9800]/90 focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300">
            LEARN
          </button>
          <button className="bg-gradient-to-r from-[#4CAF50] to-[#81C784] text-white py-2 px-14 rounded-lg font-bold shadow-lg hover:bg-gradient-to-r hover:from-[#4CAF50]/90 hover:to-[#81C784]/90 focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300">
            PLAY
          </button>
        </div>
      </div>
    </div>
  );
};

const images = [
  {
    url: "https://www.iasexpress.net/wp-content/uploads/2019/01/Modern-Indian-History-Mind-Map-UPSC-IAS.png",
  },
  {
    url: "https://cdn.britannica.com/53/255853-050-D13853D1/parliament-house-building-new-delhi-india.jpg",
  },
  {
    url: "https://delhigreens.com/wp-content/uploads/2019/02/inside-the-Delhi-Assembly.jpg",
  },
  {
    url: "https://th-i.thgim.com/public/news/national/kbwh61/article53316949.ece/alternates/LANDSCAPE_1200/CONSTITUTIONOFINDIA",
  },
];

export default Slider;
