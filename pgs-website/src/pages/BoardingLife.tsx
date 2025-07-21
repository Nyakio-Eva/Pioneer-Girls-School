import React from 'react';
import InfoCard from '../components/InfoCard';

const BoardingLife: React.FC = () => (
  <div className="min-h-screen flex flex-col bg-[#f9fafb]">
    

    {/* Hero */}
    <section
      className="relative h-[50vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/images/Student.jpg')" }}
    >
      <div className="absolute inset-0 bg-[#093056] opacity-60" />
      <h1 className="relative z-10 text-4xl md:text-6xl text-white font-bold">
        Boarding Life
      </h1>
    </section>

    {/* Sub‑page cards */}
    <main className="flex-grow py-16 px-4">
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2">
        <InfoCard
          title="Dance life"
          description="Our farm‑to‑fork program brings fresh produce from our on‑site fields & local farms straight to your plate."
          imageSrc="/danceballet.webp"
          link="/boarding-life/dance-life"
        />
        <InfoCard
          title="Nursing Care"
          description="24/7 certified nursing care overseen by a full‑time pediatrician, with on‑campus ambulance & fire support."
          imageSrc="/nursingcare.webp"
          link="/boarding-life/nursing-care"
        />
        <InfoCard
          title="Chaplaincy"
          description="Spiritual & pastoral care to nurture emotional well‑being and foster a strong community spirit."
          imageSrc="/religion.webp"
          link="/boarding-life/chaplaincy"
        />
        <InfoCard
          title="Dorm Life"
          description="Boarding life at our school is designed to foster independence, community, and personal responsibility. Each dormitory is supervised by dedicated staff who ensure a warm and structured environment for every girl."
          imageSrc="/dormlife.webp"
          link="/boarding-life/dorm-life"
        />
      </div>
    </main>

  
  </div>
);

export default BoardingLife;