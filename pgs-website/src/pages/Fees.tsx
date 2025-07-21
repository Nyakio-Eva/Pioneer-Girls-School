import React from 'react';
import { Link } from 'react-router-dom';

const feesData = [
  { title: 'Grade 9 Fees', url: '/fees/grade-9' },
  { title: 'Grade 10 Fees', url: '/fees/grade-10' },
  { title: 'Form Two Fees', url: '/fees/form-2' },
  { title: 'Form Three Fees', url: '/fees/form-3' },
  { title: 'Form Four Fees', url: '/fees/form-4' },
];

export default function FeesCards() {
  return (
    <section className="bg-[#dae7f5ff] text-gray-800">
      {/* Title */}
      <div className="max-w-6xl mx-auto px-4 py-12 text-start">
        <h1 className="text-3xl md:text-5xl font-extrabold text-yellow-500 mb-4">
          Pioneer Girls School Fees
        </h1>
        <p className="text-xl font-medium text-gray-600">
          Secure your daughter's future with our budget-friendly fees that provide unparalleled opportunities.
        </p>
      </div>

      {/* Banner Image */}
      <div
        className="h-[300px] md:h-[600px] bg-fixed bg-center bg-cover max-w-7xl mx-auto bg-no-repeat"
        style={{ backgroundImage: `url('/feespage.jpg')` }}
      ></div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {feesData.map((fee, index) => (
          <Link
            key={index}
            to={fee.url}
            className="block bg-yellow-500 hover:bg-gray-200 transition rounded-xl p-6 shadow-md text-center font-bold text-lg text-gray-800 hover:shadow-lg"
          >
            {fee.title}
          </Link>
        ))}
      </div>
    </section>
  );
}
