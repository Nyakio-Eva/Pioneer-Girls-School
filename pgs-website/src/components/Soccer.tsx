export default function Soccer() {
  return (
    <section className="min-h-screen bg-[#f9fafb] flex items-center justify-center py-16 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Image with overlay */}
        <div className="relative w-full h-100 md:h-[700px]">
          <img
            src="/soccerball.webp"
            alt="Soccer"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Right: Text */}
        <div className="text-gray-800">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-6 text-yellow-500">
            Our expansive fields and supportive environment nurture top-tier soccer talent
          </h2>
          <p className="text-lg md:text-xl font-semibold leading-relaxed">
            Soccer is one of the most celebrated sports at our school, with students participating actively in inter-school tournaments across the region.
            <br /><br />
            Over the past five years, our school has produced several players who have gone on to represent their counties and even joined national youth teams, showcasing the strength of our sports program.
          </p>
        </div>
      </div>
    </section>
  );
}
