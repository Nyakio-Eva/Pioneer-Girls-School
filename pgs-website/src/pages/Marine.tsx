import React from 'react';
import { Anchor, Ship, Waves, GraduationCap, Users, Compass } from 'lucide-react';

const Marine: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section 
        className="relative h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ 
          backgroundImage: `url('/marine2.webp')`,
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-5 md:top-20 md:left-10 animate-bounce">
            <Waves className="w-10 h-10 md:w-16 md:h-16 text-blue-300 opacity-30" />
          </div>
          <div className="absolute bottom-20 right-5 md:bottom-32 md:right-20 animate-pulse">
            <Ship className="w-8 h-8 md:w-12 md:h-12 text-teal-300 opacity-40" />
          </div>
          <div className="absolute top-1/3 right-1/6 md:right-1/4 animate-ping">
            <Anchor className="w-6 h-6 md:w-8 md:h-8 text-blue-400 opacity-25" />
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white bg-opacity-10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-xs text-left font-medium mb-6">
              <Compass className="w-2 h-2" />
              <span>Navigating Tomorrow</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold mb-8 leading-tight text-left">
              We are thrilled to introduce <br /> our upcoming{' '}
              <span className="block mt-4 text-teal-200">maritime program</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-400 mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-center gap-4 mb-8">
            <GraduationCap className="w-10 h-10 lg:w-12 lg:h-12 text-teal-600" />
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-800 leading-relaxed text-center">
              Our Mission for Young Seafarers
            </h2>
          </div>
          <div className="h-2 bg-teal-600 rounded-full max-w-md mx-auto"></div>
        </div>
      </section>

      {/* Program Description */}
      <section className="py-16 px-4 bg-[#d7ecf1ff]">
        <div className="container mx-auto max-w-6xl">
          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-700 font-light text-center mb-8">
            Immerse yourself in the wonders of our <span className="font-semibold text-teal-700">Marine program</span>,
            meticulously crafted to ignite a deep-rooted passion for the vast expanse of the sea and all facets of maritime life,
            whether dealing with <span className="font-semibold">Big cargo ships</span> or <span className="font-semibold">Small tugboats</span>.
          </p>
          <div className="h-2 bg-teal-600 rounded-full max-w-lg mx-auto mb-8"></div>
          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-700 font-light text-center">
            Explore the intricate details of marine ecosystems and the fascinating world beneath the waves,
            where every journey is an adventure waiting to unfold.
          </p>
        </div>
      </section>

      {/* Three Cards Section with Background */}
      <section 
        className="relative py-32 md:py-48 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `linear-gradient(rgba(42, 44, 46, 0.4), rgba(42, 44, 46, 0.4)), url('/geography3.webp')`
        }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-full">
            <div className="flex items-center justify-center">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20">
                <div className="w-16 h-16 bg-blue-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Ship className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white text-xl font-semibold text-center">Maritime Economics</h3>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20">
                <div className="w-16 h-16 bg-teal-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Compass className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white text-xl font-semibold text-center">Nautical Science</h3>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20">
                <div className="w-16 h-16 bg-blue-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white text-xl font-semibold text-center">Blue Economy</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blue Economy Section */}
      <section className="py-16 px-4 bg-slate-200">
        <div className="container mx-auto max-w-6xl">
          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-700 font-light text-center mb-8">
            Through a comprehensive curriculum and immersive experiences, we aim to equip our students with the essential skills and knowledge
            needed to drive forward the innovative <span className="font-bold text-blue-700">Blue Economy</span> maritime economic development
            initiatives that hold the key to a sustainable future.
          </p>
          <div className="h-2 bg-teal-600 rounded-full max-w-lg mx-auto mb-8"></div>
          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-700 font-light text-center">
            With a commitment to serving the continent, we endeavor to foster a culture of continuous skills development, education, training,
            and cutting-edge research that not only supports but propels the growth of the blue economy to new heights.
          </p>
        </div>
      </section>

      {/* Spacer Image Section */}
      <section 
        className="relative py-32 md:py-48 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('/maritime.webp')`
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 inline-block border border-white border-opacity-20 max-w-2xl">
            <h3 className="text-white text-2xl md:text-3xl font-bold mb-6">
              The program is designed to ignite a passion for the sea and all things maritime in our students.
            </h3>
            <div className="flex items-center justify-center gap-3">
              <Users className="w-6 h-6 text-teal-300" />
              <span className="text-teal-300 font-medium">Comprehensive Student Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* Excellence Section */}
      <section className="py-16 px-4 bg-gray-200">
        <div className="container mx-auto max-w-6xl">
          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-700 font-light text-center mb-8">
            Our institution prides itself on a rich tradition of excellence, committed to providing a diverse array of courses in{' '}
            <span className="font-semibold text-teal-700">Maritime Economics</span> and <span className="font-semibold text-blue-700">Nautical Science</span>.
          </p>
          <div className="h-1 w-48 bg-teal-600 mx-auto my-8"></div>
          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-700 font-light text-center mb-8">
            These meticulously crafted courses are designed to empower our students with the vital knowledge and skills necessary
            to thrive in the ever-evolving maritime industry.
          </p>
          <div className="h-1 w-48 bg-teal-600 mx-auto my-8"></div>
          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-700 font-light text-center">
            Our dedicated team of seasoned professionals, boasting extensive experience, will guide you every step of the way through the course,
            offering invaluable insights and preparing our students for the unique challenges and adventures of a seafarer's life.
          </p>
        </div>
      </section>

      {/* Final Spacer Section */}
      <section 
        className="relative py-32 md:py-48 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('/maritime2.webp')`
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 inline-block border border-white border-opacity-20">
            <h3 className="text-white text-2xl md:text-3xl font-bold mb-6">
              Ready to Set Sail?
            </h3>
            <p className="text-white text-lg mb-8 max-w-2xl">
              Join our Young Seafarers program and discover the exciting world of maritime adventures through comprehensive education and expert guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-[#d0dde0ff]">
        <div className="container mx-auto text-center">
          <button className="group relative inline-flex items-center justify-center gap-3 bg-yellow-600 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-lg text-xl md:text-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            <GraduationCap className="w-6 h-6 lg:w-7 lg:h-7 group-hover:rotate-12 transition-transform duration-300" />
            <span>LEARN MORE ABOUT OUR COMPUTER PROGRAMS</span>
            <div className="absolute inset-0 bg-white/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Marine;