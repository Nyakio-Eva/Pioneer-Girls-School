export default function DancingLife() {
  return (
    <section className="min-h-screen bg-[#f9fafb] flex items-center justify-center py-16 px-4">
      <div className="md:max-w-9xl  mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Image with overlay */}
        <div className="relative w-full h-100 md:h-[700px]">
          <img
            src="/dormlife.webp"
            alt="dorm-life"
            className="w-full h-full md:object-cover object-contain rounded-lg shadow-lg"
          />
          
        </div>

        {/* Right: Text */}
        <div className="text-gray-800">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-6 text-yellow-500">
          We are committed to fostering a home-away-from-home atmosphere which ensures that students can focus on their academic and personal growth while enjoying a well-balanced lifestyle.
          </h2>
          <p className="text-lg md:text-xl font-semibold leading-relaxed">
           We ensure that there is top most privacy in the dorm area.
            <br /><br />
           We also take care of our students laundry so that they can focus more.
          </p>
        </div>


      </div>
    </section>
  );
}
