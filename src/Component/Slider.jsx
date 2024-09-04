import React, { useEffect, useRef, useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";

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
        <h1 className="text-4xl font-bold mb-4">Welcome to Mission US</h1>
        <p className="text-lg mb-6">Serious history, serious games</p>
        <div className="flex gap-4">
          <button className="bg-gray-600  text-white py-2 px-4  hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white">
            LEARN
          </button>
          <button className="bg-gray-600  text-white py-2 px-4  hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white">
            PLAY
          </button>
        </div>
      </div>
    </div>
  );
};

const images = [
  {
    url: "https://delhigreens.com/wp-content/uploads/2019/02/inside-the-Delhi-Assembly.jpg",
  },
  {
    url: "https://th-i.thgim.com/public/news/national/kbwh61/article53316949.ece/alternates/LANDSCAPE_1200/CONSTITUTIONOFINDIA",
  },
  {
    url: "https://www.iasexpress.net/wp-content/uploads/2019/01/Modern-Indian-History-Mind-Map-UPSC-IAS.png",
  },
  {
    url: "https://cdn.britannica.com/53/255853-050-D13853D1/parliament-house-building-new-delhi-india.jpg",
  },
];

export default Slider;
