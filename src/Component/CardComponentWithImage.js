import React from "react";

const CardComponentWithImage = () => {
  return (
    <div className="bg-yellow-400 shadow-2xl flex max-w-full mb-8 pb-2   px-20 overflow-hidden">
      <div className="w-1/2 p-8 flex flex-col justify-center bg-white">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          The Indian Constitution: A Pillar of Democracy
        </h1>
        <p className="text-xl text-gray-800 mb-4">
          Before the Indian Constitution came into being, India was governed by
          colonial laws established by the British. The struggle for
          independence involved a series of events where leaders and freedom
          fighters sought to create a sovereign nation. The drafting of the
          Constitution was undertaken by the Constituent Assembly, which
          included diverse representation to ensure that the interests of all
          communities were considered. At the time of its drafting, many
          marginalized communities, including women and certain castes, had
          limited political power. The framers of the Constitution aimed to
          enshrine principles of justice, liberty, equality, and fraternity to
          create a balanced system of governance with checks and balances among
          the Executive, Legislature, and Judiciary.
        </p>
        <p className="text-xl text-gray-800">
          India was fortunate to adopt a Constitution that is both robust and
          adaptable, allowing it to evolve to meet the needs of a dynamic and
          diverse nation. Amendments to the Constitution require a rigorous
          process, ensuring that any changes reflect the will of the people.
          However, research suggests that many Indians today may not fully
          appreciate the significance of the Constitution. Our Educational
          Program and Exhibitions across various institutions aim to demonstrate
          the workings of the Constitution and emphasize its value as a
          cornerstone of Indian democracy. Understanding the history and
          principles of the Indian Constitution helps citizens recognize the
          strengths of our democratic system and how it positively impacts their
          daily lives within their communities.
        </p>
      </div>
      <div className="w-1/2 flex items-center justify-center p-4">
        <img
          src="https://theleaflet.in/wp-content/uploads/2023/02/Constitution-of-India.png"
          alt="Indian Constitution"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default CardComponentWithImage;
