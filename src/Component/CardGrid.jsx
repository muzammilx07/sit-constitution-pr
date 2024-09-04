import React from "react";
import Card from "./Card";

const CardGrid = () => {
  const cardsData = [
    {
      id: "1",
      image:
        "https://i.postimg.cc/rpSyr9rg/Whats-App-Image-2024-09-04-at-18-12-22-857cf28e.jpg",
      title: "The Right to Fair Trial",
      subtitle: "Justice for Aarav",
    },
    {
      id: "2",
      image:
        "https://i.postimg.cc/XYD3Bzqw/Whats-App-Image-2024-09-04-at-19-47-09-5f883e27.jpg",
      title: "The Right to Privacy",
      subtitle: "Data Breach Dilemma",
    },
    {
      id: "3",
      image:
        "https://i.postimg.cc/Kzx9GZbQ/Whats-App-Image-2024-09-04-at-19-52-03-cc6baee6.jpg",
      title: "The Right to Dignity in Healthcare",
      subtitle: "Anika’s Fight for Care",
    },
    {
      id: "4",
      image:
        "https://i.postimg.cc/NFsmy4Hq/Whats-App-Image-2024-09-04-at-19-58-57-a9698159.jpg",
      title: "Protection Against Arbitrary Arrest",
      subtitle: "The Judge’s Dilemma",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 px-96 py-12">
      {cardsData.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          image={card.image}
          title={card.title}
          subtitle={card.subtitle}
        />
      ))}
    </div>
  );
};

export default CardGrid;
