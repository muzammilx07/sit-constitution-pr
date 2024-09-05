import React from "react";

const Origins = () => {
  return (
    <div className="p-8 bg-white">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">
        Origin
      </h1>

      {/* Container for Image and Information */}
      <div className="flex flex-col items-center">
        {/* Floating Image */}
        <div className="relative mb-8 w-2/4">
          <img
            src="https://media.gettyimages.com/id/1241963041/photo/new-delhi-india-july-16-a-view-of-parliament-building-ahead-parliament-monsoon-session-on.jpg?s=612x612&w=0&k=20&c=PrGBPn60Rktq0b7CnMrCe0SOfrArkjpovO5Tn0Z6gPQ="
            alt="Indian Parliament"
            className="w-full h-1/2 object-cover rounded-xl shadow-md"
          />
        </div>

        {/* Information */}
        <div className="text-center max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            WHERE DID THE INDIAN SYSTEM OF GOVERNMENT COME FROM?
          </h2>
          <p className="text-lg text-gray-600">
            Ideas for governing don't appear out of nowhere. India’s system of
            government has evolved over centuries, drawing from a rich tapestry
            of global influences and historical experiences.
            <br />
            <br />
            The journey to the creation of the Indian Constitution on January
            26, 1950, reflects the development of democratic ideas shaped by
            historical events, freedom movements, and the desire for
            self-governance.
            <br />
            <br />
            Our website timeline showcases the evolution of these ideas into six
            foundational principles: sovereignty, democracy, secularism, social
            justice, federalism, and the protection of fundamental rights. These
            principles are integral to the structure and content of the Indian
            Constitution and guide its functioning.
            <br />
            <br />
            These strong foundational principles ensure that India has one of
            the largest and most vibrant democracies in the world. India’s
            system of government is a Parliamentary democracy, rooted in the
            values of social justice, equality, and active citizen
            participation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Origins;
