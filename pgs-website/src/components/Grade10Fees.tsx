

export default function Grade10Fees() {
  return (
    <section
      className="text-white text-start"
      style={{
        backgroundImage:
          "linear-gradient(0deg, rgba(75, 118, 160, 0.51), rgba(42, 44, 46, 0.51)), url('/shutterstock2257850531.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-4 py-32">
        {/* Left Column: Title and Description */}
        <div className="w-full lg:w-2/3 mb-10 lg:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-center lg:text-left text-yellow-400">
            GRADE 10 FEES
          </h1>
          <p className="text-lg md:text-xl font-semibold mt-4 text-center lg:text-left text-gray-100">
            AT PIONEER GIRLS, THERE ARE NO HIDDEN FEES AND CHARGES
          </p>
        </div>

        {/* Right Column: Action Buttons */}
        <div className="w-full lg:w-1/3 flex flex-col items-center gap-6">
          <a
            href="https://www.pioneergirlsjunioracademy.co.ke/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-900 hover:bg-blue-800 text-white font-bold text-xl md:text-2xl py-3 px-6 rounded-lg transition shadow-md text-center"
          >
            Book a Visit
          </a>

          <a
            href="https://enquireto.pioneergroupofschools.co.ke/SignIn?ReturnUrl=%2F"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-900 hover:bg-blue-800 text-white font-bold text-xl md:text-2xl py-3 px-6 rounded-lg transition shadow-md text-center"
          >
            APPLY GRADE 10
          </a>
        </div>
      </div>
    </section>
  );
}
