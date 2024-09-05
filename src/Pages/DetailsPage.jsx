import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
const DetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Fetch or find card data based on ID (in a real app, you might fetch this from an API or a local data store)
  const cardData = {
    1: {
      image: "https://i.postimg.cc/C5hf3N9D/header11.jpg",
      title: "THE RIGHT TO FAIR TRIAL",
      subtitle: "Justice for Aarav",
      shortsummary:
        "Aarav, a diligent shopkeeper, is wrongfully arrested in the dead of night, accused of a theft with no evidence or witnesses. The corrupt police keep him imprisoned, denying him access to his family or a lawyer, leaving his loved ones in despair. As his lawyer, you must fiercely argue in a biased courtroom for his immediate release and fight against unlawful detention to secure Aarav’s right to a fair trial.",
      longsummary:
        "Aarav Verma, a humble and honest shopkeeper in a small town, finds his life turned upside down when he is falsely accused of theft. One fateful night, while his wife, Meera, and their young daughter, Riya, were fast asleep, a group of police officers barged into their home. The officers, led by Inspector Sharma, an intimidating and corrupt officer with a reputation for bending the law, dragged Aarav out of his house without any explanation. Meera and Riya were left terrified and helpless as they watched their husband and father being taken away without any charges or evidence presented.Aarav was thrown into a dark, damp cell at the local police station, where he was denied food, water, and the basic right to contact his family or a lawyer. Days turned into weeks, and the once lively shop where Aarav worked stood shuttered, casting a shadow over his family's livelihood. The community, shocked by the sudden disappearance of the kind-hearted shopkeeper, began to question the integrity of the police force.Meera, desperate to find her husband, approached Advocate Priya Rao, a fierce and determined lawyer known for her unwavering commitment to justice. Priya, upon hearing Aarav's story, was outraged by the blatant abuse of power. She immediately took up Aarav’s case, knowing that the odds were against them, especially with Judge Bhardwaj presiding over the case. Judge Bhardwaj, an old-school, stern judge with a reputation for siding with law enforcement, seemed inclined to believe the police’s version of events without questioning their lack of evidence.Priya faced an uphill battle in court. Inspector Sharma, along with his subordinates Constable Singh and Constable Patel, tried to intimidate her, but she remained undeterred. In the courtroom, Priya argued passionately for Aarav’s immediate release, highlighting the illegal nature of his detention, the absence of any evidence or witnesses, and the violation of his fundamental rights. She called upon Ramesh, a fellow shopkeeper and Aarav’s long-time friend, who testified that Aarav was with him on the night of the alleged theft.As the trial progressed, Priya skillfully exposed the holes in the police’s case, revealing how they had fabricated evidence and how Aarav was nothing more than a scapegoat in their corruption. Despite Judge Bhardwaj's initial reluctance, the overwhelming lack of credible evidence forced him to reconsider his position.Finally, after weeks of intense courtroom drama, Judge Bhardwaj delivered his verdict: Aarav was to be released immediately, and an inquiry would be launched into the conduct of the police officers involved. Aarav, now free, embraced his tearful family, while the community rallied around him, thankful that justice had prevailed.",
      characters: {
        ch1: {
          img: "https://i.postimg.cc/qMDL6zxh/b8da3694bd8607f41b7ef6b48f60b36a.jpg",
          name: "Aarav Verma",
          info: "He is a Shopkeeper,hardworking, and family-oriented.",
        },
        ch2: {
          img: "https://i.postimg.cc/NjWkbSVQ/4b48f3c161f71969858f2860e9ddf8ec.jpg",
          name: "Meera Verma",
          info: "Caring, determined, and supportive wife  of Aarav and mother.",
        },
        ch3: {
          img: "https://i.postimg.cc/qRJptb3r/Whats-App-Image-2024-09-04-at-22-54-37-d69959bb.jpg",
          name: "Advocate Priya Rao",
          info: " Fierce, determined, and committed to justice Advocate",
        },
        ch4: {
          img: "https://i.postimg.cc/mZ70xNzN/Whats-App-Image-2024-09-04-at-23-05-48-28454657.jpg",
          name: "Inspector Sharma",
          info: "Corrupt, intimidating, and power-hungry police Inspector",
        },
        ch5: {
          img: "https://i.postimg.cc/qRyZT4RM/Whats-App-Image-2024-09-04-at-23-07-18-1952ec75.jpg",
          name: "Judge Bhardwaj",
          info: "Stern, traditional, but ultimately fair judge ",
        },
        ch6: {
          img: "https://i.postimg.cc/MH7L8Rcr/Whats-App-Image-2024-09-04-at-23-10-36-352c10ac.jpg",
          name: "Ramesh",
          info: "Loyal, supportive, and trustworthy friend of Aarav",
        },
      },
    },

    2: {
      image:
        "https://i.postimg.cc/nLBtgrtN/Whats-App-Image-2024-09-05-at-11-23-48-888e2504.jpg",
      title: "The Right to Privacy",
      subtitle: "Data Breach Dilemma",
      shortsummary:
        "Neha, a diligent college student, downloaded a popular educational app to enhance her studies, unaware that it was secretly collecting her personal data, including sensitive information. When she began receiving threatening messages containing precise details about her life, Neha realized her privacy had been violated. Faced with escalating threats, she had to decide whether to report the app, sue the company, or raise awareness through social media, knowing her choice would have significant consequences for herself and others.",

      longsummary:
        "Neha, a diligent college student with a passion for learning, recently discovered a popular app offering a wealth of educational resources. Enthusiastic about enhancing her studies, she eagerly downloaded the app, trusting it would be a valuable tool in her academic journey. Unbeknownst to her, the app was secretly collecting vast amounts of her personal data—her location, contacts, browsing habits, and even sensitive information like her financial details and private communications. The app's terms and conditions, buried in fine print, allowed this invasive data collection, but Neha, like many others, had not scrutinized them.Weeks passed, and Neha noticed nothing unusual until one fateful day when she started receiving threatening messages from unknown numbers. The messages contained startlingly precise details about her life, things that only the app could have accessed. As the threats escalated, Neha's initial confusion gave way to a deep sense of fear and violation. She realized that her right to privacy, a fundamental right under Article 21 of the Indian Constitution, had been grossly compromised.Feeling trapped, Neha confided in her best friend, Riya, a tech-savvy computer science student known for her quick thinking and resourcefulness. Riya immediately suspected foul play and offered to investigate the app's data practices. Meanwhile, Neha also sought advice from her mentor, Professor Anil Mehta, a respected law professor with a strong sense of justice, who encouraged her to consider legal action against the company.As the threats intensified, Neha was also approached by Arjun, a well-known cybersecurity expert and activist who had uncovered similar cases in the past. He offered to help Neha expose the company through social media, warning others about the dangers.",
      characters: {
        ch1: {
          img: "https://i.postimg.cc/7YBVJmyn/Whats-App-Image-2024-09-04-at-23-18-49-bb2fd796.jpg",
          name: "Neha",
          info: "College Student,Diligent, passionate about learning, initially trusting but later cautious and determined.",
        },
        ch2: {
          img: "https://i.postimg.cc/Gm8k8RKb/Whats-App-Image-2024-09-04-at-23-20-15-406333c0.jpg",
          name: "Riya",
          info: "Tech-savvy, quick thinker, resourceful, and supportive friend  of Neha",
        },
        ch3: {
          img: "https://i.postimg.cc/NjsjSkyS/Whats-App-Image-2024-09-04-at-23-28-53-df98fddc.jpg",
          name: "Professor Anil Mehta",
          info: " Law Professor Wise, just, and supportive, with a strong sense of right and wrong",
        },
        ch4: {
          img: "https://i.postimg.cc/MTVwvnM1/Whats-App-Image-2024-09-04-at-23-30-23-44619c44.jpg",
          name: "Arjun",
          info: "Cybersecurity Expert and Activist",
        },
      },
    },
  };

  const quizData1 = [
    {
      story: "Aarav Verma, a humble and honest shopkeeper...",
      question:
        "Which fundamental right of Aarav was violated when he was detained without charges?",
      options: [
        "Right to Equality",
        "Right to Freedom",
        "Right to Constitutional Remedies",
        "Right to Life and Personal Liberty",
      ],
      answer: "Right to Life and Personal Liberty",
    },
    {
      story: "Aarav Verma, a humble and honest shopkeeper...",
      question:
        "Who defended Aarav in the court against the false accusations?",
      options: [
        "Inspector Sharma",
        "Judge Bhardwaj",
        "Advocate Priya Rao",
        "Constable Singh",
      ],
      answer: "Advocate Priya Rao",
    },
    {
      story: "Aarav Verma, a humble and honest shopkeeper...",
      question:
        "What was the final verdict given by Judge Bhardwaj in Aarav's case?",
      options: [
        "Aarav was sentenced to prison",
        "Aarav was released immediately",
        "Aarav was fined",
        "Aarav was released on bail",
      ],
      answer: "Aarav was released immediately",
    },
  ];

  const quizData2 = [
    {
      story: "Neha, a diligent college student...",
      question:
        "Which fundamental right was compromised when Neha's personal data was collected without her knowledge?",
      options: [
        "Right to Equality",
        "Right to Freedom",
        "Right to Education",
        "Right to Privacy",
      ],
      answer: "Right to Privacy",
    },
    {
      story: "Neha, a diligent college student...",
      question:
        "What decision did Neha have to make after discovering her data was misused?",
      options: [
        "Report the app to authorities",
        "Ignore the situation",
        "Continue using the app",
        "Delete the app and move on",
      ],
      answer: "Report the app to authorities",
    },
    {
      story: "Neha, a diligent college student...",
      question:
        "What article of the Indian Constitution protects the right to privacy?",
      options: ["Article 14", "Article 19", "Article 21", "Article 32"],
      answer: "Article 21",
    },
  ];
   const [quizData, setQuizData] = useState([]);

   useEffect(() => {
     if (id === "1") {
       setQuizData(quizData1);
     } else if (id === "2") {
       setQuizData(quizData2);
     }
   }, [id]);

   const card = cardData[id];

   if (!card) {
     return <div>Card not found</div>;
   }

   const handleQuizButtonClick = () => {
     navigate("/quiz", { state: { quizData } });
   };

  return (
    <div className="p-8 bg-white space-y-16">
      {/* Title and Subtitle */}
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4 text-gray-900">{card.title}</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {card.subtitle}
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-4xl font-bold text-gray-800">
          Learn More About the Story
        </h2>
        <p className="text-lg text-gray-600">
          {card.shortsummary ||
            "Discover the thrilling details behind the plot and its intricacies."}
        </p>
      </div>
      <div className="relative">
        <img
          src={card.image}
          alt={card.title}
          className="w-full h-[75vh] object-cover rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
        />
      </div>

      {/* Floating Rounded Div for Long Story */}
      <div className="relative p-8 bg-gray-100 rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-300">
        <p className="text-xl text-gray-700">
          {card.longsummary ||
            "This is a longer summary of the story, providing detailed insights."}
        </p>
        <div className="absolute top-0 left-0 w-16 h-16 bg-gray-300 rounded-full opacity-20 transform translate-x-10 -translate-y-6"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-gray-300 rounded-full opacity-20 transform -translate-x-10 translate-y-6"></div>
      </div>

      {/* Masonry Grid for Characters */}
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-800 px-40">
        Meet the Characters
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.values(card.characters).map((character, index) => (
          <div
            key={index}
            className="relative group bg-white rounded-lg shadow-lg overflow-hidden h-96"
          >
            <img
              src={character.img}
              alt={character.name}
              className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* Overlay with Text that appears on hover */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex justify-center items-center">
              <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                <h3 className="text-2xl font-semibold mb-2">
                  {character.name}
                </h3>
                <p className="text-gray-200">{character.info}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quiz Button */}
      <div className="text-center">
        <button
          onClick={handleQuizButtonClick}
          className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
        >
          Participate in Quiz
        </button>
      </div>
    </div>
  );
};

export default DetailsPage;