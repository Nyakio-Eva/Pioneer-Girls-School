import React from 'react';

const JoinGrade9: React.FC = () => {
  const handleExternalNavigation = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-white font-sans">
      {/* --- Announcement Banner --- */}
      <section className="bg-[#f2f8ff] py-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900">
          WE ARE PROUD TO ANNOUNCE, GRADE 9 AT PIONEER GIRLS JUNIOR ACADEMY
        </h1>
      </section>

      {/* --- Eligibility & Details --- */}
      <section
        className="bg-cover bg-center bg-no-repeat py-16 px-4 sm:px-8"
        style={{
          backgroundImage:
            "linear-gradient(0deg, rgba(60, 102, 145, 0.69), rgba(85, 98, 112, 0.69)), url('/shutterstock2257850531.jpg')",
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 text-gray-100">
          {/* --- Left Text Content --- */}
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold">Eligibility Requirements for Joining Grade 9</h2>
            <p>
              Eligible Grade 8 students can apply to join <b>Pioneer Girls Junior Academy</b> by applying online, downloading the application form and submitting it at our offices, or visiting the school to fill out the forms in person.
            </p>
            <p>
              The transition from Form 1 to Grade 9 under Kenya's Competency-Based Curriculum (CBC) involves several significant changes:
            </p>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold">1. Structure and Duration:</h4>
                <p>
                  The 2-6-3-3-3 structure replaces 8-4-4. Students spend 3 years in junior secondary (Grades 7–9).
                </p>
              </div>
              <div>
                <h4 className="font-bold">2. Assessment Methods:</h4>
                <p>
                  CATs (Continuous Assessment Tests) reduce focus on final exams and better track progress.
                </p>
              </div>
              <div>
                <h4 className="font-bold">3. Curriculum Content:</h4>
                <p>
                  Practical subjects like Integrated Science and Pre-Technical Studies are emphasized.
                </p>
              </div>
              <div>
                <h4 className="font-bold">4. Learning Areas:</h4>
                <p>
                  Nine core subjects including English, Kiswahili, and Religious Education.
                </p>
              </div>
              <div>
                <h4 className="font-bold">5. Life Skills and Values:</h4>
                <p>
                  Stronger emphasis on emotional, social, and ethical development.
                </p>
              </div>
              <div>
                <h4 className="font-bold">6. Digital Literacy:</h4>
                <p>
                  Technology is integrated into learning to ensure digital competency.
                </p>
              </div>
            </div>
          </div>

          {/* --- Right Buttons --- */}
          <div className="flex-1 flex flex-col justify-center items-center space-y-6">
            <button
              onClick={() => handleExternalNavigation('https://www.pioneergirlsjunioracademy.co.ke/')}
              className="bg-yellow-700 text-white font-bold px-8 py-4 text-lg md:text-xl rounded-lg shadow-lg hover:bg-yellow-600 transition"
            >
              Visit Pioneer Girls Junior Academy
            </button>

            <button
              onClick={() => handleExternalNavigation('https://www.pioneergirlsjunioracademy.co.ke/Join-Us/Join-Grade-9/')}
              className="bg-yellow-700 text-white font-bold px-8 py-4 text-lg md:text-xl rounded-lg shadow-lg hover:bg-yellow-600 transition"
            >
              Join Grade 9
            </button>

            <button
              onClick={() => handleExternalNavigation('https://enquireto.pioneergroupofschools.co.ke/SignIn?ReturnUrl=%2F')}
              className="bg-yellow-700 text-white font-bold px-8 py-4 text-lg md:text-xl rounded-lg shadow-lg hover:bg-yellow-600 transition"
            >
              Enquire to Join
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinGrade9;
