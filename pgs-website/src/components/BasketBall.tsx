export default function BasketBall() {
  return (
    <section className="min-h-screen bg-[#f9fafb] flex items-center justify-center py-16 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Image with overlay */}
        <div className="relative w-full h-82 md:h-[600px]">
          <img
            src="/basketball1.webp"
            alt="basketball"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Right: Text */}
        <div className="text-gray-800">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-6 text-yellow-500">
            Our indoor court and expert coaching elevate basketball talent to the next level
          </h2>
          <p className="text-lg md:text-xl font-semibold leading-relaxed">
            Basketball is a fast-growing sport at our school, with students participating in district and regional competitions throughout the academic year.
            <br /><br />
            In recent years, our basketball teams have consistently reached the finals, and several players have been selected for elite training camps and youth leagues across Kenya, proving our commitment to excellence in sports.
          </p>
        </div>
      </div>
    </section>
  );
}
