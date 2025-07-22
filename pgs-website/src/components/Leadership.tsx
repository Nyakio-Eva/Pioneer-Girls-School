import React from 'react';

const Leadership: React.FC = () => {
  return (
    <section className="min-h-screen bg-slate-200 py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-24">
        {/* Principal Section */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Message */}
          <div className="flex-1 text-center md:pr-12">
            <div className="bg-slate-200 rounded-xl shadow-lg flex flex-col items-center">
              <img
                src="/principal.webp"
                alt="Principal Pioneer Girls"
                className="w-full h-auto object-cover shadow-md mb-4"
              />
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-800">Principal, Pioneer Girls</h3>
                <p className="text-sm text-gray-500">Since 2016</p>
              </div>
              <p className="mt-6 text-gray-700 text-lg leading-relaxed max-w-5xl p-4 font-light">
              At Pioneer Girls, we offer an unparalleled educational experience designed to challenge, inspire, and empower. Our rigorous academic programs, state-of-the-art facilities, and dedicated faculty foster an environment where every student can achieve their full potential. We believe in nurturing not just intellect, but also character, creativity, and a global perspective.
            </p>
            </div>
            
          </div>

          {/* Dot and Line */}
          <div className="hidden md:flex items-center w-42">
            <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
            <div className="h-px bg-yellow-500 flex-1"></div>
          </div>
        </div>

        {/* Deputy Principal Section */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          {/* Message */}
          <div className="flex-1 text-center md:pl-12">
            <div className="rounded-xl shadow-lg flex flex-col items-center">
              <img
                src="/deputy-principal.webp"
                alt="Deputy Principal Pioneer Girls"
                className="w-full h-auto object-cover shadow-md mb-4"
              />
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-800">Deputy Principal, Pioneer Girls</h3>
                <p className="text-sm text-gray-500">Since 2018</p>
              </div>
              <p className="mt-6 text-gray-700 text-lg leading-relaxed max-w-5xl p-4 font-light">
              "As Deputy Principal, I have the privilege of working closely with our exceptional students and dedicated staff every day. Here, we're not just about textbooks and exams; we're about fostering a community where every student feels valued, challenged, and supported.
              Our commitment to academic excellence is unwavering, but we also believe in nurturing well-rounded individuals." 
            </p>
            </div>
           
          </div>

          {/* Dot and Line */}
          <div className="hidden md:flex items-center w-42">
            <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
            <div className="h-px bg-yellow-500 flex-1"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
