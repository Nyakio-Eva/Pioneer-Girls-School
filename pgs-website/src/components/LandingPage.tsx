import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { X } from "lucide-react"; // Optional: for close icon

export default function LandingPage() {
  const [showModal, setShowModal] = useState(true);

  // Automatically show modal on page load
  useEffect(() => {
    setShowModal(true);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center text-white"
        style={{ backgroundImage: `url('/homebg.webp')`, opacity:"90" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

        <div className=" relative z-10 text-center px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg">
            Be Inspired
          </h2>
          <button className="text-2xl md:text-5xl px-6 py-4 hover:bg-[#cfa53a] bg-transparent text-white rounded-full border border-white shadow-lg transition">
           GRADE 10 ADMISSIONS IN AUGUST 2025
          </button>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 px-4">
          <div className="bg-[#0c356a] rounded-lg max-w-md w-full p-6 relative shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-black"
            >
              <X size={24} />
            </button>

            {/* Modal Content */}
            <h1 className="text-center text-[#cfa53a] text-3xl font-bold mb-4">
              Apply Grade 10
            </h1>
            <img
              src="/admflyer.webp"
              alt="Admissions Flyer"
              className="w-full mb-4 rounded-md"
            />
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-slate-400 rounded hover:bg-gray-400 text-sm font-semibold mx-4"
              >
                Close
              </button>
              <a
                href="https://enquireto.pioneergroupofschools.co.ke/"
                className="px-4 py-2 bg-[#cfa53a] hover:bg-[#b08a2f] text-white rounded text-sm font-semibold"
                target="_blank" rel="noopener noreferrer"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
