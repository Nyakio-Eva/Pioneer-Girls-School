import React from 'react';

// A single button component for reusability with proper typing
const AccessButton: React.FC<{ text: string }> = ({ text }) => (
  <a
    href="#"
    role="button"
    className="block bg-amber-500 text-slate-800 hover:bg-slate-300 font-bold uppercase text-sm px-6 py-4 rounded-md shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-opacity-75 transition-all duration-300 ease-in-out text-center"
  >
    {text}
  </a>
);

const StaffAccess: React.FC = () => {
  return (
    <div className="min-h-screen font-sans">
      <section className="bg-slate-200 shadow-md w-full">
            <div>
                <img
                src="/staffaccess.webp"
                alt="staff only"
                className="w-full object-cover"
                />
            </div>
        </section>


      {/* Main Content - Navigation Buttons */}
      <section className="bg-slate-800 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Top row of buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
              <AccessButton text="Staff Email Access" />
              <AccessButton text="Staff E-Learning Access" />
              <AccessButton text="Staff Online Library" />
            </div>

            {/* Separator Line */}
            <div className="h-1 bg-white opacity-20 w-full mx-auto my-12"></div>

            {/* Bottom row of buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <AccessButton text="Staff Online Classes" />
              <AccessButton text="Staff Portal Access" />
              <AccessButton text="Clinic Staff Access" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StaffAccess;