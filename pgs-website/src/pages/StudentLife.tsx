import React from 'react';
import { Link } from 'react-router-dom';
import InfoCard from '../components/InfoCard';

// Sub‑sections under Student Life
const activities = [
  {
    title: 'Basketball Life',
    description: 'County champions and programme highlights.',
    link: '/student-life/basketball',
    imageSrc: '/basketball.webp',
  },
  {
    title: 'Soccer Life',
    description: 'Our soccer programme and fixtures.',
    link: '/student-life/soccer',
    imageSrc: '/soccerteam.webp',
  },
  // {
  //   title: 'Debate Life',
  //   description: 'Capture campus moments and competitions.',
  //   link: '/student-life/photography-life',
  //   imageSrc: '/images/Flowers.jpg',
  // },
  // {
  //   title: 'Korea Exchange Program',
  //   description: 'Cultural exchange and immersion in Korea.',
  //   link: '/student-life/korea-exchange-program',
  //   imageSrc: '/images/Slide1.JPG',
  // },
  {
    title: 'Swimmers Life',
    description: 'Swimming training and team events.',
    link: '/student-life/swimming',
    imageSrc: '/swimming.webp',
  },
  {
    title: 'Golf Life',
    description: 'Golf coaching and tournament play.',
    link: '/student-life/golf-life',
    imageSrc: '/girl-golf.webp',
  },
];

const StudentLife: React.FC = () => (
  <div className="min-h-screen flex flex-col">
 

    {/* Hero */}
    <section
      className="relative h-64 bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/images/sports.png')" }}
    >
      <div className="absolute inset-0 bg-[#093056]/70" />
      <h1 className="relative text-4xl md:text-6xl font-bold text-white">
        Student Life
      </h1>
    </section>

    {/* Intro */}
    <section className="py-12 px-4 text-center max-w-3xl mx-auto">
      <p className="text-lg text-gray-700">
        Discover the vibrant co‑curricular world at Pioneer Girls School: sports, arts,
        cultural exchanges and more designed to build character, teamwork and
        lifelong friendships. Pick any of the experiences below to learn more!
      </p>
    </section>

    {/* Cards grid */}
    <main className="flex-grow px-4 pb-16">
      <div className="max-w-5xl mx-auto grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
        {activities.map((act) => (
          <Link key={act.title} to={act.link}>
            <InfoCard
              title={act.title}
              description={act.description}
              imageSrc={act.imageSrc}
            />
          </Link>
        ))}
      </div>
    </main>


  </div>
);

export default StudentLife;