import React from "react";

const CardComponent = () => {
  return (
    <div className="bg-yellow-400  shadow-2xl flex max-w-full mt-8 pt-2 h-96 px-20 overflow-hidden">
      <div className="w-1/2 flex items-center justify-center p-4">
        <iframe
          className="w-full h-full rounded-lg"
          src="https://www.youtube.com/embed/4tI4QXhzqNU?autoplay=1&mute=1"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Informative Video on the Australian Constitution"
        ></iframe>
      </div>
      <div className="w-1/2 p-8 flex flex-col justify-center bg-white">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          The Indian Constitution is the bedrock of our society.
        </h1>
        <p className="text-xl text-gray-800 mb-4">
          Since its adoption in 1950, it has shaped our journey as a nation
          through periods of <span className="highlight">change</span> and{" "}
          <span className="highlight">growth</span>.
        </p>
        <p className="text-xl text-gray-800">
          The <span className="highlight">Constitution</span> serves as a vital
          guide, providing a stable and fair framework for governance and daily
          life. It ensures that our diverse and vibrant democracy functions
          smoothly, protecting our <span className="highlight">rights</span> and
          upholding <span className="highlight">justice</span>.
        </p>
      </div>
    </div>
  );
};

export default CardComponent;
