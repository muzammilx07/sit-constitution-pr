import React from "react";

const AboutUs = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-100 text-gray-800 p-10">
      <header className="mb-8">
        <h1 className="text-5xl font-bold text-center text-blue-600">
          About Us
        </h1>
      </header>

      <main className="flex flex-col lg:flex-row justify-between items-center flex-grow space-y-8 lg:space-y-0 lg:space-x-8">
        <section className="bg-blue-50 rounded-lg p-8 shadow-lg lg:w-1/3 text-center lg:text-left">
          <h2 className="text-3xl font-semibold text-blue-700">
            Welcome to Sansthaein Aur Samvidhan
          </h2>
          <p className="mt-4 text-lg">
            At <span className="font-bold">Sansthaein Aur Samvidhan</span>, we
            are dedicated to transforming constitutional literacy through
            innovative digital solutions. Our goal is to make the Constitution
            of India accessible and engaging for all citizens by using
            interactive and gamified approaches.
          </p>
        </section>

        <section className="bg-white rounded-lg p-8 shadow-lg lg:w-2/3">
          <h2 className="text-2xl font-semibold text-blue-600">Our Mission</h2>
          <ul className="mt-4 space-y-4 text-lg">
            <li>
              <span className="font-bold text-blue-700">
                Simplifying Constitutional Concepts:
              </span>{" "}
              Translating complex constitutional articles into
              easy-to-understand language and interactive formats.
            </li>
            <li>
              <span className="font-bold text-blue-700">Engaging Users:</span>{" "}
              Creating an immersive learning experience through various
              educational games and activities.
            </li>
            <li>
              <span className="font-bold text-blue-700">
                Promoting Inclusivity:
              </span>{" "}
              Ensuring our platform is accessible to users of all educational
              backgrounds and language preferences.
            </li>
          </ul>
        </section>
      </main>

      <footer className="mt-10 lg:mt-0">
        <section className="bg-gray-50 rounded-lg p-8 shadow-lg text-center lg:text-left">
          <h2 className="text-2xl font-semibold text-blue-600">
            What We Offer
          </h2>
          <div className="mt-4 space-y-6 text-lg">
            <div>
              <h3 className="font-semibold text-blue-700">
                Simplified Constitutional Content:
              </h3>
              <p>
                <span className="font-semibold">Comprehensive Coverage:</span>{" "}
                Our platform covers essential chapters of the Constitution
                related to the Legislature, Executive, and Judiciary (Parts V &
                VI).
              </p>
              <p>
                <span className="font-semibold">Backend Database:</span> We have
                developed a detailed database that maps these concepts into
                simpler, user-friendly formats.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-blue-700">
                Diverse Game Formats:
              </h3>
              <p>
                <span className="font-semibold">Interactive Games:</span> Our
                solution includes various game formats such as Spin a Wheel,
                Card Games, Board Games, Snakes & Ladders, and Monopoly, each
                designed to teach different aspects of the Constitution.
              </p>
              <p>
                <span className="font-semibold">Comprehensive Coverage:</span>{" "}
                Games can address topics individually or in combination,
                ensuring a thorough understanding of constitutional principles.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-blue-700">
                User-Friendly Design:
              </h3>
              <p>
                <span className="font-semibold">Accessible Design:</span> Our
                platform is designed to be intuitive and easy to navigate for
                users of all ages and backgrounds.
              </p>
              <p>
                <span className="font-semibold">Multimedia Elements:</span> We
                integrate videos, animations, and interactive content to enhance
                the learning experience.
              </p>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default AboutUs;
