import React from 'react';

const AI: React.FC = () => {
  return (
    <div className="text-white">
      {/* Section 1: Computer Lab */}
      <div
        className="relative min-h-screen bg-cover bg-center flex items-center bg-fixed"
        style={{ backgroundImage: "url('/codeoncomp.webp')" }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative container mx-auto px-4 py-16">
          <div className="max-w-lg">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-300 font-serif">
              At Pioneer Girls School, we have a state-of-the-art computer lab and
              new generation computers installed with our partners Dell.
            </h1>
          </div>
        </div>
      </div>

      {/* Section 2: Basic Computer Skills */}
      <div
        className="relative min-h-screen bg-cover bg-center flex items-center bg-fixed"
        style={{ backgroundImage: "url('/studentlaptops.webp')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4 py-16 flex justify-end">
          <div className="max-w-lg">
            <h2 className="text-3xl md:text-4xl font-semibold text-yellow-500 tracking-wide">
              We take our students through the basic computers skills and we go
              even further and ignite a strong passion for IT.
            </h2>
          </div>
        </div>
      </div>

      {/* Section 3: Microsoft Certification */}
      <div
        className="relative min-h-screen bg-cover bg-center flex items-center bg-fixed"
        style={{ backgroundImage: "url('/serverroom.webp')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4 py-16">
          <div className="max-w-lg">
            <h2 className="text-3xl md:text-4xl font-semibold text-blue-200">
              We are now providing Microsoft certification programs to our students.
              <br />
              <br />
              Soon we will be able to provide certified Microsoft Artificial
              Intelligence training courses.
            </h2>
          </div>
        </div>
      </div>

      {/* Section 4: Learn More Button */}
      <div className="bg-slate-300 py-20 text-center">
        <div className="container mx-auto px-4">
          <a
            href="/boarding-life"
            className="inline-block bg-yellow-600 text-white text-xl font-bold px-8 py-4 rounded-lg hover:bg-yellow-700 transition-colors"
          >
            LEARN ABOUT INSPIRED STUDY LIFE
          </a>
        </div>
      </div>
    </div>
  );
};

export default AI;