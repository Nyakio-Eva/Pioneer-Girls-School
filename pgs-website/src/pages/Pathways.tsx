import React from 'react';
import InfoCard from '../components/InfoCard';

const cards = [
  {
    title: 'English',
    description: 'Discover how we craft personalized leadership journeys that unlock each student’s potential.',
    imageSrc: '/english.jpg',
    link: 'https://kicd.ac.ke/wp-content/uploads/2024/07/English-Grade-10-June-2024.pdf',
  },
  {
    title: 'Kiswahili / Kenya Sign Language',
    description: 'Our milestones framework guides you through every stage of leadership development.',
    imageSrc: '/kiswahili.jpg',
    link: 'https://kicd.ac.ke/wp-content/uploads/2024/07/Kiswahili-Lugha-Gredi-10-Juni-2024.pdf',
  },
  {
    title: 'Physical Education',
    description: 'Learn from seasoned educators and industry leaders who champion your growth.',
    imageSrc: '/redtruckingfield.jpg',
    link: 'https://kicd.ac.ke/wp-content/uploads/2024/07/Physical-Education-Grade-10-June-2024.pdf',
  },
  {
    title: 'Community Service',
    description: 'Learn from seasoned educators and industry leaders who champion your growth.',
    imageSrc: '/communityservice.jpg',
    link: 'https://kicd.ac.ke/wp-content/uploads/2024/07/CSL-Grade-10-June-2024.pdf',
  },
];

const TailorMadeLeadershipPathways: React.FC = () => (
  <div className="min-h-screen flex flex-col bg-[#f9fafb]">
   

    {/* Hero Section */}
    <section className="bg-[#277291] py-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">
          Tailor Made Leadership Pathways
        </h1>
        <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
          Senior School at Pioneer Girls School, the 4th level of Basic Education in the CBE, provides learners aged 15 to 18+ years with a pre-university or pre-career experience.
          It allows them to choose pathways based on their interests and potential, laying the foundation for further education and readiness for the world of work.
        </p>
      </div>
    </section>

    {/* Intro & Outcomes */}
    <section className="py-16">
      <div className="container mx-auto px-4 grid gap-12 md:grid-cols-2">
        <div>
          <img src='' alt='program details'/>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#093056] mb-4">
            Program Details
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            With seven recommended learning areas, including compulsory ones like English and Kiswahili, learners have the opportunity to specialize while ensuring a broad-based education.
            This will be effective from January 2026
          </p>
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-semibold text-[#093056] mb-4">
            By the end of senior school, learners will be able to:
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-3 leading-snug">
            <li>Communicate Effectively: Utilize information and communication technology across varied contexts.</li>
            <li>Problem Solving: Apply mathematical, logical, and critical thinking skills.</li>
            <li>Scientific Skills: Use basic research and scientific skills to manipulate the environment and solve problems.</li>
            <li>Talent Exploitation: Leverage individual talents for leisure, self-fulfillment, career growth, further education, and training.</li>
            <li> Values Application: Uphold national, moral, and religious values in daily life.</li>
            <li>Health Strategies: Apply and promote health care strategies.</li>
            <li> Environmental Sustainability: Protect, preserve, and improve the environment.</li>
            <li>Global Citizenship: Demonstrate active local and global citizenship for harmonious co-existence.</li>
            <li>Appreciation of Diversity: Show appreciation for diversity in people and cultures.</li>
            <li>Issue Management: Manage pertinent and contemporary issues responsibly.</li>
          </ul>
        </div>
      </div>
    </section>

    {/* Cards Grid */}
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center mb-12">
        <h2 className="text-3xl py-16 md:text-4xl font-semibold text-[#093056]">
        COMPULSORY SUBJECTS ​
        <br />
<hr className="pt-16 h-2 bg-white"/> 
        </h2>
        <p>At Senior School, ALL students will be required to take the following subjects.</p> 
      </div>
      <div className="container mx-auto px-4 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((c, i) => (
          <InfoCard key={i} {...c} />
        ))}
      </div>
    </section>

  
  </div>
);

export default TailorMadeLeadershipPathways;