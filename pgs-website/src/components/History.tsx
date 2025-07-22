import React from 'react';
import { Link } from 'react-router-dom';

const History: React.FC = () => {
  return (
    <div className="bg-slate-200">
      {/* Header Section */}
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-2">
          Inspired History
        </h1>
        <div className="h-1.5 w-24 bg-blue-900 rounded-full"></div>
      </div>

      {/* Introduction Section */}
      <div className="container mx-auto px-4 pb-12">
        <div className="max-w-4xl text-lg md:text-xl text-gray-700 space-y-4">
          <p>
            Pioneer Girls School emerged in response to the growing need for
            outstanding private high school education for girls in Murang'a County.
          </p>
          <p>
            Known for its distinguished boys' boarding education (St Paul Thomas
            Academy & Pioneer School), the school's administration boldly
            expanded into this new domain.
          </p>
          <p>
            Motivated by the parents and alumni of Pioneer School, we have
            embarked on a mission to establish a premier school for girls
            aspiring to pursue careers in Science, Technology, Engineering, and
            Mathematics (STEM).
          </p>
          <p>
            Since opening its doors, the school's administration has been
            continually inspired and has never looked back.
          </p>
        </div>
      </div>

      {/* Background Image with Overlay Section */}
      <div
        className="relative bg-cover bg-center bg-fixed py-24 md:py-32"
        style={{ backgroundImage: `url("/tractor.webp")` }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl text-white text-lg md:text-xl space-y-4">
            <p>
              Pioneer Girls School is nestled and surrounded by large acreage of
              pineapple farms in Thika that have been around since the 1910s.
            </p>
            <p>
              But prior to the establishment of the school, the property once
              housed Braeburn Imani School in the early 2000s before their
              departure in the mid-2010s.
            </p>
            <p>
              Thereafter, Pioneer Girls School opened its doors on the spacious
              75-acre property in the year 2016.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-slate-100 py-16">
        <div className="container mx-auto px-4 text-center md:text-left">
          <Link
            to="/inspire/leadership"
            className="inline-block bg-blue-900 text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-blue-800 transition-colors shadow-md"
          >
            OUR LEADERSHIP
          </Link>
        </div>
      </div>
    </div>
  );
};

export default History;