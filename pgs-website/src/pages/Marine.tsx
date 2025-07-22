import React from 'react';
import { Anchor, Ship, Waves, GraduationCap, Users, Compass } from 'lucide-react';

const heroStyle = {
  backgroundImage: `url('/marine2.webp')`,
  backgroundBlendMode: 'overlay',
  backgroundColor: 'rgba(9, 28, 58, 0.37)',
};

const spacerStyle3 = {
  backgroundImage: `url('/geography3.webp')`,
  backgroundBlendMode: 'overlay',
  backgroundColor: 'rgba(9, 51, 58, 0.46)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

const spacerStyle1 = {
  backgroundImage: `url('/maritime.webp')`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

const spacerStyle2 = {
  backgroundImage: `url('/maritime2.webp')`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

const Marine = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
        style={heroStyle}
      >
        {/* Animated background elements - Made responsive */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-5 sm:top-20 sm:left-10 animate-bounce">
            <Waves className="w-10 h-10 sm:w-16 sm:h-16 text-blue-300 opacity-30" />
          </div>
          <div className="absolute bottom-20 right-5 sm:bottom-32 sm:right-20 animate-pulse">
            <Ship className="w-8 h-8 sm:w-12 sm:h-12 text-teal-300 opacity-40" />
          </div>
          <div className="absolute top-1/4 right-1/12 sm:top-1/3 sm:right-1/4 animate-ping">
            <Anchor className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 opacity-25" />
          </div>
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-sm font-medium mb-4">
                <Compass className="w-4 h-4" />
                <span>Navigating Tomorrow</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                We are thrilled to introduce our upcoming{' '}
                <span className="block mt-4 text-teal-200">maritime program</span>
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-400 mx-auto lg:mx-0 rounded-full"></div>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-teal-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
                <Ship className="absolute inset-0 w-32 h-32 m-auto text-white/80 animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <h3 className="text-4xl lg:text-6xl font-semibold text-slate-800 mb-8 flex items-center gap-4">
              <GraduationCap className="w-12 h-12 text-teal-600" />
              Our Mission for Young Seafarers
            </h3>
            <hr className="h-2 bg-teal-600" />
          </div>
        </div>
      </section>

      {/* Program Description */}
      <section className="py-20 bg-[#d7ecf1ff]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl">
            <div className="prose prose-xl prose-slate max-w-none">
              <p className="text-2xl lg:text-3xl leading-relaxed text-slate-700 font-light">
                Immerse yourself in the wonders of our <span className="font-semibold text-teal-700">Marine program</span>,
                meticulously crafted to ignite a deep-rooted passion for the vast expanse of the sea and all facets of maritime life,
                whether dealing with <span className="font-semibold">Big cargo ships</span> or <span className="font-semibold">Small tugboats</span>.
              </p>
              <hr className="h-2 bg-teal-600 my-10" />
              <p className="text-2xl lg:text-3xl leading-relaxed text-slate-700 font-light mt-8">
                Explore the intricate details of marine ecosystems and the fascinating world beneath the waves,
                where every journey is an adventure waiting to unfold.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section with Image */}
      <section
        className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-900 via-slate-800 to-teal-900 bg-no-repeat"
        style={spacerStyle3}
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform rotate-12"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            {/* The first column is intentionally empty to push the content to the right on large screens */}
            <div className="lg:col-span-2 hidden lg:block"></div> 
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 lg:p-12 border border-white/20 col-span-full lg:col-span-1">
              <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-6">
                The program is designed to ignite a passion for the sea and all things maritime in our students.
              </h3>
              <div className="flex items-center gap-3">
                <Users className="w-6 h-6 text-teal-300" />
                <span className="text-teal-300 font-medium">Comprehensive Student Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blue Economy Section */}
      <section className="py-20 bg-gradient-to-br from-slate-200 to-blue-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl">
            <div className="prose prose-xl prose-slate max-w-none">
              <p className="text-2xl lg:text-3xl leading-relaxed text-slate-700 font-light">
                Through a comprehensive curriculum and immersive experiences, we aim to equip our students with the essential skills and knowledge
                needed to drive forward the innovative <span className="font-bold text-blue-700">Blue Economy</span> maritime economic development
                initiatives that hold the key to a sustainable future.
              </p>
              <hr className="h-2 bg-teal-600 my-10" />
              <p className="text-2xl lg:text-3xl leading-relaxed text-slate-700 font-light mt-8">
                With a commitment to serving the continent, we endeavor to foster a culture of continuous skills development, education, training,
                and cutting-edge research that not only supports but propels the growth of the blue economy to new heights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer with subtle pattern */}
      <section
        className="relative h-96 md:h-screen w-full flex items-center bg-cover bg-center"
        style={spacerStyle1}
      ></section>

      {/* Excellence Section */}
      <section className="py-20 bg-gray-200">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl">
            <div className="prose prose-xl prose-slate max-w-none space-y-8">
              <p className="text-2xl lg:text-3xl leading-relaxed text-slate-700 font-light">
                Our institution prides itself on a rich tradition of excellence, committed to providing a diverse array of courses in{' '}
                <span className="font-semibold text-teal-700">Maritime Economics</span> and <span className="font-semibold text-blue-700">Nautical Science</span>.
              </p>
              <hr className="h-1 w-auto md:w-48 bg-teal-600 my-10" />
              <p className="text-2xl lg:text-3xl leading-relaxed text-slate-700 font-light">
                These meticulously crafted courses are designed to empower our students with the vital knowledge and skills necessary
                to thrive in the ever-evolving maritime industry.
              </p>
              <hr className="h-1 md:w-48 bg-teal-600 my-10" />
              <p className="text-2xl lg:text-3xl leading-relaxed text-slate-700 font-light">
                Our dedicated team of seasoned professionals, boasting extensive experience, will guide you every step of the way through the course,
                offering invaluable insights and preparing our students for the unique challenges and adventures of a seafarer's life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Spacer */}
      <section
        className="relative h-96 md:h-screen w-full flex items-center bg-cover bg-center"
        style={spacerStyle2}
      ></section>

      {/* CTA Section */}
      <section className="py-20 bg-[#d0dde0ff]">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <button className="group relative inline-flex items-center gap-3 bg-blue-900 hover:from-orange-600 hover:to-amber-600 text-white font-bold py-6 px-12 rounded-2xl text-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
            <GraduationCap className="w-8 h-8 group-hover:rotate-12 transition-transform duration-300" />
            LEARN MORE ABOUT OUR COMPUTER PROGRAMS
            <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Marine;