import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

// --- TYPE DEFINITIONS ---
interface Requirement {
  text: string;
}

interface ApplicationStep {
  title: string;
  description: string;
}

// --- DATA ---
const eligibilityRequirements: Requirement[] = [
  { text: 'Attain a minimum score of 350 or higher on the Kenya Certificate of Primary Education (KCPE) exam. Current Academic records for Form 1 are also required.' },
  { text: 'Provide an original Kenya Certificate of Primary Education (KCPE) certificate. (A copy will be retained by the school).' },
  { text: 'Have a NEMIS/Assessment Number. Foreign students must have a unique identification number from their country\'s Ministry of Education.' },
  { text: 'Pass a medical examination.' },
  { text: 'Provide a recent report form. (The original is required for verification; a copy will be kept by the school).' },
  { text: 'Provide a Leaving Certificate in English. (The original will be retained by the school and must be submitted before the start of the term).' },
  { text: 'Provide a recommendation letter from your previous school principal.' },
  { text: 'Provide a valid Birth Certificate or, for foreign students, a valid passport. (Originals are required for verification; copies will be retained).' },
];

const applicationProcess: ApplicationStep[] = [
    { title: '1. Review of Application Forms', description: 'All application forms are reviewed to confirm if all information has been provided and if all supporting documents have been attached.' },
    { title: '2. Invitation for Interview', description: 'Applicants that meet the minimum eligibility criteria are invited to the school for a tour and interview.' },
    { title: '3. Candidate Selection', description: 'Once you have visited the school and passed the interview, your application is submitted for further review by the admission department.' },
    { title: '4. Offer Letter', description: 'Once prospective candidates are reviewed, the admissions department will send OFFER LETTERS to successful applicants.' },
    { title: '5. Acceptance Letters', description: 'Upon receiving an OFFER LETTER, candidates are required to formally ACCEPT or REJECT it. If accepted, a commitment fee is required.' },
    { title: '6. Admission Letter', description: 'Once the ACCEPTANCE LETTER and commitment fee are submitted, the student will receive an official ADMISSION LETTER.' },
];


// --- MAIN COMPONENT ---
const JoinForm2: React.FC = () => {
  const handleNavigation = (url: string) => {
    window.location.href = url;
  };
  
  return (
    <div className="bg-[#d3e0f3ff] font-sans">
      {/* --- HERO SECTION --- */}
      <div
        className="h-96 bg-cover bg-center"
        style={{ backgroundImage: "url('/Smartphone-with-chart-graphic-2.jpg')" }}
      >
        <div className="flex items-center justify-center h-full">
            
        </div>
      </div>

      {/* --- MAIN CONTENT SECTION --- */}
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 -mt-40">
        <div className="bg-white shadow-2xl rounded-xl p-6 md:p-10">
          
          {/* --- ELIGIBILITY REQUIREMENTS --- */}
          <section className="mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-2">
              Eligibility Requirements for Joining Form 2
            </h2>
            <hr className="w-24 h-1 bg-blue-600 mb-6" />
            <div className="space-y-4">
              {eligibilityRequirements.map((req, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{req.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* --- HOW TO APPLY --- */}
          <section className="mb-12 text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-2">How to Apply</h3>
            <hr className="w-20 h-1 bg-blue-600 mx-auto mb-4" />
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
              You can apply to join Pioneer School by applying online, downloading the application form to submit at our offices, or by visiting our offices to fill out the forms in person.
            </p>
            <a
              href="https://enquireto.pioneergroupofschools.co.ke/SignIn?ReturnUrl=%2F"
              rel="noopener noreferrer"
              target="_blank"
              className="inline-block bg-yellow-500 text-white font-bold py-3 px-10 rounded-lg text-xl hover:bg-yellow-600 transition-colors duration-300 shadow-lg"
            >
              Enquire Now
            </a>
          </section>

          {/* --- WHAT HAPPENS NEXT --- */}
          <section className="mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-2">What Happens Next?</h3>
            <hr className="w-20 h-1 bg-blue-600 mb-6" />
            <div className="space-y-6">
              {applicationProcess.map((step, index) => (
                <div key={index}>
                  <h4 className="font-semibold text-xl text-gray-800">{step.title}</h4>
                  <p className="text-gray-600 ml-1">{step.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* --- CTA BUTTONS --- */}
          <section className="mt-16">
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <button
                onClick={() => handleNavigation('/join-us/form-3')}
                className="w-full md:w-auto bg-blue-600 text-white font-bold py-4 px-8 rounded-lg text-2xl hover:bg-blue-700 transition-colors duration-300 shadow-lg"
              >
                Join Form Three
              </button>
              <button
                onClick={() => handleNavigation('/join-us/form-4')}
                className="w-full md:w-auto bg-blue-600 text-white font-bold py-4 px-8 rounded-lg text-2xl hover:bg-blue-700 transition-colors duration-300 shadow-lg"
              >
                Join Form Four
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default JoinForm2;