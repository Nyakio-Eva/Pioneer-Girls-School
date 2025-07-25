export default function Swimming() {
  return (
    <section className="min-h-screen bg-slate-200 flex items-center justify-center py-16 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Image with overlay */}
        <div className="relative w-full h-100 md:h-[700px]">
          <img
            src="/poolside.webp"
            alt="Swimming Facility"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
          
        </div>

        {/* Right: Text */}
        <div className="text-gray-800">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-6 text-yellow-500">
            Our facilities and warm weather allow for year‑round swimming for our students
          </h2>
          <p className="text-lg md:text-xl font-semibold leading-relaxed">
            Our girls regularly participate and top in the yearly county and regional swimming games.
            <br /><br />
            In the last 5 years, we have contributed a minimum of 6 students to compete in the Kenya National Swimming Competition.
          </p>
        </div>
      </div>
    </section>
  );
}
