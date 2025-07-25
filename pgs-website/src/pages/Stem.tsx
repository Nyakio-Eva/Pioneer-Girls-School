import React, { useState } from 'react';
import InfoCard from '../components/InfoCard';
 
// Types
interface Track {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  subjects: Subject[];
}
interface Subject {
  name: string;
  description: string;
  imageSrc: string;
}
 
// SubjectCard: image left, info right
const SubjectCard: React.FC<Subject> = ({ name, description, imageSrc }) => (
  <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
    <img
      src={imageSrc}
      alt={name}
      className="w-16 h-16 object-cover rounded-full mr-4"
    />
    <div>
      <h4 className="text-lg font-semibold text-[#093056]">{name}</h4>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </div>
);
 
// Track data with subject arrays
const tracks: Track[] = [
  {
    id: 'pure-sciences',
    title: 'Pure Sciences',
    description: 'Math, Biology, Chemistry, Physics, General Sciences',
    imageSrc: '/sciencelab.jpg',
    subjects: [
      { name: 'Mathematics', description: 'The study of numbers and structures.', imageSrc: '/maths.jpg' },
      { name: 'Biology', description: 'Study of living organisms.', imageSrc: '/biology.jpg' },
      { name: 'Chemistry', description: 'Exploration of substances and reactions.', imageSrc: '/chemistry.jpg' },
      { name: 'Physics', description: 'Principles of matter and energy.', imageSrc: '/physics.jpg' },
      { name: 'General Sciences', description: 'Interdisciplinary science concepts.', imageSrc: '/generalscience.jpg' },
    ],
  },
  {
    id: 'applied-sciences',
    title: 'Applied Sciences',
    description: 'Agriculture, Computer Science, Home Science',
    imageSrc: '/agriculture2.jpg',
    subjects: [
      { name: 'Agriculture', description: 'Food production and land management.', imageSrc: '/agriculture.jpg' },
      { name: 'Computer Science', description: 'Computational theory and programming.', imageSrc: '/computer.jpg' },
      { name: 'Home Science', description: 'Practical life skills and nutrition.', imageSrc: '/homescience.jpg' },
    ],
  },
  {
    id: 'technical-studies',
    title: 'Technical Studies',
    description: 'Aviation, Building & Construction, Electricity, Metal Work, Power Mechanics, Woodwork, Media Technology, Marine & Fisheries',
    imageSrc: '/metaltech.jpg',
    subjects: [
      { name: 'Aviation', description: 'Principles of flight and aircraft.', imageSrc: '/aviationtech.jpg' },
      { name: 'Building & Construction', description: 'Construction techniques and materials.', imageSrc: '/woodtech.jpg' },
      { name: 'Electricity', description: 'Electrical systems and circuitry.', imageSrc: '/electrical.jpg' },
      { name: 'Metal Work', description: 'Shaping and joining metals.', imageSrc: '/metaltech.jpg' },
      { name: 'Power Mechanics', description: 'Engine maintenance and repair.', imageSrc: '/mechanic.jpg' },
      { name: 'Woodwork', description: 'Wood crafting and joinery.', imageSrc: '/woodtech.jpg' },
      { name: 'Marine & Fisheries', description: 'Marine ecosystems and fishing methods.', imageSrc: '/marinetech.jpg' },
    ],
  },
];
 
// Main component
const Stem: React.FC = () => {
  const [openTrackId, setOpenTrackId] = useState<string | null>(null);
  const toggleTrack = (id: string) => setOpenTrackId(prev => (prev === id ? null : id));
 
  return (
    <div className="min-h-screen flex flex-col bg-[#f9fafb]">
   
 
      {/* Hero */}
      <section className="relative h-[80vh] bg-center bg-cover" style={{ backgroundImage: "url('/stemimg.webp')" }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-6xl text-white font-bold">STEM Pathways</h1>
          <p className="text-lg md:text-xl text-gray-200 mt-4">
            Explore our three tracks to specialize in the sciences and technology fields.
          </p>
        </div>
      </section>
 
      {/* Message */}
      <section className="bg-[#13365e] py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-100 font-poppins mb-4 text-center">
            Message from the Head of STEM School
          </h2>
          <p className="text-blue-100  mb-4 italic font-semibold">Dear Students and Parents,</p>
          <p className="text-blue-100 font-merriweather mb-4">
            Dear Students and Parents

            At Pioneer Girls school, senior students interested in Science, Technology, Engineering and Mathematics (STEM) career, will be required to select 2 subjects' area of interest and focus.
            Detail of each subject area are provided below 

            Best regards,
            Head of School
          </p>
          <p className="mt-6 text-right font-semibold text-blue-100">
            Best regards,<br />Head of School
          </p>
        </div>
      </section>
 
     {/* Tracks */}
<main className="flex-grow py-16 px-2">
  <div className="max-w-7xl mx-auto flex flex-wrap -mx-2">
    {tracks.map(track => (
      <div
        key={track.id}
        className="w-full md:w-1/3 px-2 mb-6"  // 100% on mobile, 33% from md+
      >
        <div onClick={() => toggleTrack(track.id)} className="cursor-pointer">
          <InfoCard
            title={track.title}
            description={track.description}
            imageSrc={track.imageSrc}
          />
        </div>
 
        {openTrackId === track.id && (
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
            {track.subjects.map(sub => (
              <SubjectCard
                key={sub.name}
                name={sub.name}
                description={sub.description}
                imageSrc={sub.imageSrc}
              />
            ))}
          </div>
        )}
      </div>
    ))}
  </div>
</main>
 
   
    </div>
  );
};
 
export default Stem;