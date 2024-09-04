import React from "react";
import { useParams } from "react-router-dom";

const DetailsPage = () => {
  const { id } = useParams();

  // Fetch or find card data based on ID (in a real app, you might fetch this from an API or a local data store)
  const cardData = {
    1: {
      title: "The Right to Fair Trial",
      subtitle: "Justice for Aarav",
      description: "Detailed description of The Right to Fair Trial...",
      image:
        "https://i.postimg.cc/rpSyr9rg/Whats-App-Image-2024-09-04-at-18-12-22-857cf28e.jpg",
    },
    2: {
      title: "The Right to Privacy",
      subtitle: "Data Breach Dilemma",
      description: "Detailed description of The Right to Privacy...",
      image:
        "https://i.postimg.cc/XYD3Bzqw/Whats-App-Image-2024-09-04-at-19-47-09-5f883e27.jpg",
    },
    3: {
      title: "The Right to Dignity in Healthcare",
      subtitle: "Anika’s Fight for Care",
      description:
        "Detailed description of The Right to Dignity in Healthcare...",
      image:
        "https://i.postimg.cc/Kzx9GZbQ/Whats-App-Image-2024-09-04-at-19-52-03-cc6baee6.jpg",
    },
    4: {
      title: "Protection Against Arbitrary Arrest",
      subtitle: "The Judge’s Dilemma",
      description:
        "Detailed description of Protection Against Arbitrary Arrest...",
      image:
        "https://i.postimg.cc/NFsmy4Hq/Whats-App-Image-2024-09-04-at-19-58-57-a9698159.jpg",
    },
  };

  const card = cardData[id];

  if (!card) {
    return <div>Card not found</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{card.title}</h1>
      <img
        src={card.image}
        alt={card.title}
        className="w-full h-64 object-cover mb-4"
      />
      <p className="text-lg mb-4">{card.subtitle}</p>
      <p>{card.description}</p>
    </div>
  );
};

export default DetailsPage;
