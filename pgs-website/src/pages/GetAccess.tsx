import React from 'react';

const GetAccess: React.FC = () => {
  const portals = [
    {
      name: 'NEMIS PORTAL',
      href: 'https://nemis.education.go.ke/',
      color: 'bg-blue-900',
      hoverColor: 'hover:bg-blue-700',
    },
    {
      name: 'MIN OF EDUCATION',
      href: 'https://education.go.ke/',
      color: 'bg-blue-900',
      hoverColor: 'hover:bg-green-700',
    },
    {
      name: 'KNEC PORTAL',
      href: 'https://www.knec-portal.ac.ke/',
      color: 'bg-blue-900',
      hoverColor: 'hover:bg-red-700',
    },
    {
      name: 'KUCCPS PORTAL',
      href: 'https://www.kuccps.net/',
      color: 'bg-blue-900',
      hoverColor: 'hover:bg-purple-700',
    },
  ];

  return (
    <div className="bg-[#0c356a]">
      {/* Header Section */}
      <div className="container mx-auto px-4 py-16 md:text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-100 flex items-start">
          Get General Information And Resources
        </h1>
        <div className="mt-4 h-1 w-auto  bg-blue-200 opacity-80 mx-auto"></div>
      </div>

      {/* Portals Section */}
      <div
        className="relative bg-cover bg-center py-20 min-h-screen"
        style={{ backgroundImage: "url('/getaccess.webp')" }}
      >
        <div className="absolute inset-0 bg-blue-200 opacity-80"></div>
        <div className="relative container mx-auto px-4 flex items-center justify-center min-h-screen">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {portals.map((portal, index) => (
              <div key={index} className="flex justify-center">
                <a
                  href={portal.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full max-w-xs text-center font-bold text-lg text-white py-4 px-6 rounded-lg transition duration-300 ease-in-out shadow-lg transform hover:-translate-y-1 ${portal.color} ${portal.hoverColor}`}
                >
                  {portal.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetAccess;