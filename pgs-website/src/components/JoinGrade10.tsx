import React from 'react';

const JoinGrade10: React.FC = () => {
  const handleNavigate = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-[#d3e0f3ff] font-sans">

      {/* --- Background Banner --- */}
      <section
        className="h-96 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(rgba(60, 102, 145, 0.69), rgba(85, 98, 112, 0.69)), url('/Smartphone-with-chart-graphic-2.jpg')",
        }}
      />

      {/* --- Eligibility Requirements --- */}
      <section className="py-12 px-4 sm:px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-[#2A2C2E] mb-8">
          ELIGIBILITY REQUIREMENTS FOR JOINING GRADE 10 <br />
          <span className="text-xl font-medium">(CLASSES STARTING IN JAN 2026)</span>
        </h2>
        <div className="space-y-4 text-gray-800 text-lg">
          <p>1. Minimum score of <strong>Actual Performance Level AL5</strong> or higher on the KJSEA.</p>
          <p>2. Provide the <strong>original KJSEA certificate</strong>. (A copy will be retained by the school.)</p>
          <p>3. Provide a <strong>NEMIS & Assessment Number</strong>, or for foreigners, a valid Ministry of Education ID.</p>
          <p>4. Pass a <strong>medical examination</strong>.</p>
          <p>5. Provide a recent <strong>report form</strong>. (Original must be submitted; a copy will be kept.)</p>
          <p>6. Submit a <strong>Leaving Certificate in English</strong> before school starts. (Original retained.)</p>
          <p>7. Provide a <strong>recommendation letter</strong> from your previous principal.</p>
          <p>8. Submit a <strong>valid Birth Certificate</strong> or for foreigners, a valid <strong>passport</strong>. (Original submitted; copy retained.)</p>
        </div>
      </section>

      {/* --- How to Apply --- */}
      <section className="bg-[#f2f8ff] py-12 px-4 sm:px-8 max-w-7xl mx-auto">
        <h3 className="text-3xl font-bold text-[#2A2C2E] mb-4">HOW TO APPLY</h3>
        <p className="text-lg mb-6">
          Apply online, download the form and submit it to our offices, or visit in person to complete the application.
          <br />
          <strong>Remember to select your preferred pathway.</strong>
        </p>
        <div className="text-center">
          <button
            onClick={() =>
              handleNavigate('https://enquireto.pioneergroupofschools.co.ke/SignIn?ReturnUrl=%2F')
            }
            className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold px-8 py-4 text-xl rounded-lg shadow-md"
          >
            Enquire
          </button>
        </div>
      </section>

      {/* --- What Happens Next --- */}
      <section className="py-12 px-4 sm:px-8 max-w-7xl mx-auto">
        <h3 className="text-3xl font-bold text-[#2A2C2E] mb-4">WHAT HAPPENS NEXT?</h3>
        <div className="space-y-4 text-gray-800 text-lg">
          <p>1. Review of application forms to confirm completeness and required documents.</p>
          <p>2. Invite eligible applicants for a school tour and interview.</p>
          <p>3. Select candidates based on interview performance and internal review.</p>
          <p>4. Send <strong>Offer Letters</strong> to selected students.</p>
          <p>5. Students respond with <strong>Acceptance Letters</strong> and pay commitment fees.</p>
          <p>6. After acceptance, the student receives the <strong>Official Admission Letter</strong>.</p>
        </div>
      </section>

      {/* --- Additional Options --- */}
      <section className="py-12 px-4 max-w-7xl mx-auto flex flex-col md:flex-row gap-6 justify-center items-center">
        <button
          onClick={() => handleNavigate('/join-us/form-3')}
          className="min-w-[300px] bg-yellow-600 hover:bg-yellow-700 text-white font-bold text-3xl px-6 py-4 rounded-lg shadow-md"
        >
          Join Form Three
        </button>
        <button
          onClick={() => handleNavigate('/join-us/form-4')}
          className="min-w-[300px] bg-yellow-600 hover:bg-yellow-700 text-white font-bold text-3xl px-6 py-4 rounded-lg shadow-md"
        >
          Join Form Four
        </button>
      </section>
    </div>
  );
};

export default JoinGrade10;
