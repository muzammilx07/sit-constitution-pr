import React from 'react'
import Frame from '../Component/Frame'

const PrinciplesPage = () => {
  return (
    <>
      <Frame/>
    <div className="flex flex-col h-screen text-gray-800 ">
      <header className="mb-8">
        <h1 className="text-5xl font-bold text-center text-blue-600">The Basic Principles of the Indian Constitution</h1>
      </header>

      <main className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
        <section className="bg-white rounded-lg p-8 shadow-lg mb-8 lg:mb-0">
          <h2 className="text-2xl font-semibold text-blue-600">Fundamental Rights</h2>
          <p className="mt-4 text-lg">
            Fundamental Rights are the cornerstone of the Constitution of India, providing essential protections to all citizens. These rights include:
            <ul className="list-disc list-inside mt-2">
              <li><strong>Right to Equality:</strong> Ensures equal treatment before the law and prohibits discrimination.</li>
              <li><strong>Right to Freedom:</strong> Guarantees freedoms such as speech, assembly, and movement.</li>
              <li><strong>Right against Exploitation:</strong> Prohibits human trafficking and forced labor.</li>
              <li><strong>Right to Freedom of Religion:</strong> Allows individuals to practice any religion of their choice.</li>
              <li><strong>Cultural and Educational Rights:</strong> Protects the rights of individuals to conserve their culture and access education.</li>
              <li><strong>Right to Constitutional Remedies:</strong> Provides a mechanism to enforce the fundamental rights.</li>
            </ul>
          </p>
        </section>

        <section className="bg-white rounded-lg p-8 shadow-lg mb-8 lg:mb-0">
          <h2 className="text-2xl font-semibold text-blue-600">Secularism</h2>
          <p className="mt-4 text-lg">
            Secularism ensures that the state maintains neutrality in matters of religion. It upholds the principle that the government does not favor any religion and provides equal treatment to all religions. This principle promotes harmonious coexistence among different religious communities and supports religious freedom and tolerance.
          </p>
        </section>

        <section className="bg-white rounded-lg p-8 shadow-lg mb-8 lg:mb-0">
          <h2 className="text-2xl font-semibold text-blue-600">Popular Sovereignty</h2>
          <p className="mt-4 text-lg">
            Popular Sovereignty is the idea that the ultimate power of governance lies with the people. This principle asserts that the authority of the government is derived from the consent of the governed. It emphasizes that political power should be exercised according to the wishes and interests of the electorate.
          </p>
        </section>

        <section className="bg-white rounded-lg p-8 shadow-lg mb-8 lg:mb-0">
          <h2 className="text-2xl font-semibold text-blue-600">Federalism</h2>
          <p className="mt-4 text-lg">
            Federalism involves the distribution of power between a central authority and regional entities, such as states or provinces. In India, this principle ensures a balance of power, allowing for both central and state governments to exercise their respective powers. Federalism supports local governance while maintaining national unity.
          </p>
        </section>

        <section className="bg-white rounded-lg p-8 shadow-lg mb-8 lg:mb-0">
          <h2 className="text-2xl font-semibold text-blue-600">Socialism</h2>
          <p className="mt-4 text-lg">
            Socialism focuses on reducing economic inequality and promoting the welfare of all citizens. It advocates for the state’s role in ensuring equitable distribution of wealth and resources. This principle supports policies aimed at achieving social justice and improving the quality of life for all individuals, particularly the underprivileged.
          </p>
        </section>

        <section className="bg-white rounded-lg p-8 shadow-lg mb-8 lg:mb-0">
          <h2 className="text-2xl font-semibold text-blue-600">Judicial Independence</h2>
          <p className="mt-4 text-lg">
            Judicial Independence ensures that the judiciary operates free from interference by the executive and legislative branches. This principle guarantees that judges can make decisions impartially and based solely on legal principles. It is essential for upholding the rule of law and delivering fair and unbiased justice.
          </p>
        </section>

        <section className="bg-white rounded-lg p-8 shadow-lg mb-8 lg:mb-0">
          <h2 className="text-2xl font-semibold text-blue-600">Cabinet Government</h2>
          <p className="mt-4 text-lg">
            Cabinet Government refers to the system where the executive branch is composed of members from the legislature. The Cabinet, led by the Prime Minister, is accountable to the parliament. This system ensures that the executive remains responsible to the elected representatives of the people, maintaining democratic accountability.
          </p>
        </section>

        <section className="bg-white rounded-lg p-8 shadow-lg mb-8 lg:mb-0">
          <h2 className="text-2xl font-semibold text-blue-600">Directive Principles of State Policy</h2>
          <p className="mt-4 text-lg">
            Directive Principles are guidelines set out in the Constitution for the government to follow in policy-making. They aim to promote social and economic welfare, justice, and the overall development of the country. While these principles are not justiciable, they provide a framework for creating policies that align with the goals of social justice and economic equity.
          </p>
        </section>
      </main>

      <footer className="mt-10">
        <section className="bg-white rounded-lg p-8 shadow-lg text-center">
          <p className="text-lg">
            Understanding these fundamental principles is crucial for appreciating the framework of governance in India. Our platform aims to make these principles accessible and engaging to enhance public knowledge and participation in the democratic process.
          </p>
        </section>
      </footer>
    </div>
    </>
  );
};


export default PrinciplesPage