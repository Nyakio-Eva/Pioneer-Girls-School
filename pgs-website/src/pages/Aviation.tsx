import React from 'react';

const Aviation: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section 
        className="relative h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ 
          backgroundImage: `url('/aviationprog.webp')`,
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold mb-8 leading-tight">
              Our Mission for Young Aviators
            </h1>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 px-4 bg-[#dde9f8ff]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-800 leading-relaxed text-center">
            Through this program, students delve into the principles of aerodynamics, navigation, and aviation safety.
          </h2>
        </div>
      </section>

      {/* Cockpit Background Section */}
      <section 
        className="relative py-32 md:py-48 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `linear-gradient(rgba(42, 44, 46, 0.4), rgba(42, 44, 46, 0.4)), url('/cockpit.webp')`
        }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-full">
            <div className="flex items-center justify-center">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20">
                <div className="w-16 h-16 bg-slate-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-white text-xl font-semibold text-center">Aerodynamics</h3>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20">
                <div className="w-16 h-16 bg-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h3 className="text-white text-xl font-semibold text-center">Navigation</h3>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20">
                <div className="w-16 h-16 bg-blue-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-white text-xl font-semibold text-center">Aviation Safety</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-16 px-4 bg-[#dde9f8ff]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-800 leading-relaxed text-center">
            They learn from experienced instructors about the aviation industry, its challenges, and opportunities.
            <br /><br />
            Our program equips them with the knowledge and skills needed to pursue their dreams
          </h2>
        </div>
      </section>

      {/* Final Hero Section */}
      <section 
        className="relative py-32 md:py-48 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('/aviator.webp')`
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 inline-block border border-white border-opacity-20">
            <h3 className="text-white text-2xl md:text-3xl font-bold mb-6">
              Ready to Take Flight?
            </h3>
            <p className="text-white text-lg mb-8 max-w-2xl">
              Join our Young Aviators program and discover the exciting world of aviation through hands-on learning and expert guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-[#dde9f8ff]">
        <div className="container mx-auto text-center">
          <button 
            onClick={() => window.location.href = '/marine'}
            className="bg-yellow-600 hover:bg-yellow-900 text-white font-bold py-4 px-8 rounded-lg text-xl md:text-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            LEARN ABOUT OUR YOUNG SEAFARERS
          </button>
        </div>
      </section>
    </div>
  );
};

export default Aviation;