import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

// --- TYPE DEFINITIONS ---
interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

interface FaqData {
  question: string;
  answer: React.ReactNode;
}

// --- DATA ---
const faqData: FaqData[] = [
  {
    question: 'How do I apply to Pioneer Girls School?',
    answer: 'The Pioneer Girls School application process is free, transparent, and open to all eligible students regardless of race, religion, and socio-economic class.',
  },
  {
    question: 'How do I get my child admitted to Pioneer Girls School?',
    answer: 'Admission to Pioneer Girls School is transparent and merit-based, solely on a review of academic performance and talent.',
  },
  {
    question: 'When do I apply to Pioneer Girls School?',
    answer: (
      <div className="space-y-2">
        <p>Applications to Pioneer Girls School are open throughout the year.</p>
        <p>However, new students' applications for Form 2 positions are open from the 3rd week of November every year until the last week of January the following year.</p>
        <p>If there are still spaces for students available, applications can be submitted at any time throughout the calendar year.</p>
      </div>
    ),
  },
];

// --- REUSABLE ACCORDION ITEM COMPONENT ---
const AccordionItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => (
  <div className="border-b border-gray-200 py-4">
    <button
      onClick={onClick}
      className="w-full flex justify-between items-center text-left text-lg font-medium text-gray-800 hover:text-blue-600 focus:outline-none"
    >
      <span>{question}</span>
      <ChevronDownIcon className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
    </button>
    <div
      className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}
    >
      <div className="text-gray-600">
        {answer}
      </div>
    </div>
  </div>
);

// --- MAIN FAQ COMPONENT ---
const JoinUs: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleAccordionClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-200 font-sans">
      {/* --- HEADER SECTION --- */}
      <div
        className="relative bg-cover bg-center py-40 px-4 text-center text-white"
        style={{ backgroundImage: "(rgba(200, 225, 248, 0.94), url('/team1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative">
            
          <h1 className="text-4xl md:text-5xl font-bold">
            General Details Of Joining Pioneer Girls School
          </h1>
        </div>
      </div>

      {/* --- FAQ AND ACTIONS SECTION --- */}
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-8">
          {/* --- ACCORDION --- */}
          <div>
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => handleAccordionClick(index)}
              />
            ))}
          </div>

          {/* --- ACTION BUTTONS --- */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <a
              href="https://www.pioneergirlsjunioracademy.co.ke/Join-Us/Join-Grade-9/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-yellow-600 text-white font-bold py-4 px-6 rounded-lg text-xl hover:bg-[#0c356a] transition-colors duration-300"
            >
              Join Grade 9
            </a>
            <a
              href="/join-us/form-2"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-yellow-600 text-white font-bold py-4 px-6 rounded-lg text-xl hover:bg-[#0c356a] transition-colors duration-300"
            >
              Join Form 2
            </a>
            <a
              href="https://enquireto.pioneergroupofschools.co.ke/SignIn?ReturnUrl=%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-yellow-600 text-white font-bold py-4 px-6 rounded-lg text-xl hover:bg-[#0c356a] transition-colors duration-300"
            >
              Enquire
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;