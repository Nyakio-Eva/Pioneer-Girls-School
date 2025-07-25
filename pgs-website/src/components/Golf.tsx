export default function Golf() {
  return (
    <section className="min-h-screen bg-slate-200 flex items-center justify-center py-16 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Image with overlay */}
        <div className="relative w-full h-82 md:h-[600px]">
          <img
            src="/golf-course.webp"
            alt="golf"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Right: Text */}
        <div className="text-gray-800">
            <h2 className="text-2xl md:text-4xl font-extrabold mb-6 text-yellow-500">
                Our golf program cultivates precision, patience, and performance
            </h2>
            <p className="text-lg md:text-xl font-semibold leading-relaxed">
                Golf is an emerging sport in our school, offering students a unique opportunity to develop focus, discipline, and strategic thinking on the course.
                <br /><br />
                Through partnerships with local golf clubs and certified instructors, our students train regularly and have participated in junior tournaments, with some earning recognition in national youth golf rankings.
            </p>
        </div>
      </div>
    </section>
  );
}
