export default function NursingCare() {
  return (
    <section className="min-h-screen bg-slate-200 flex items-center justify-center py-16 px-4">
      <div className="md:max-w-9xl  mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Image with overlay */}
        <div className="relative w-full h-100 md:h-[700px]">
          <img
            src="/chaplaincy.webp"
            alt="chaplaincy"
            className="w-full h-full md:object-cover object-contain rounded-lg shadow-lg"
          />
          
        </div>

        {/* Right: Text */}
        <div className="text-gray-800">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-6 text-yellow-500">
           Our chaplaincy program plays a vital role in nurturing the spiritual and emotional well-being of students. Chaplains provide guidance, support, and pastoral care, fostering a sense of community and belonging.
          </h2>
          <p className="text-lg md:text-xl font-semibold leading-relaxed">
            It offers a safe and inclusive space where students explore their faith, engage in prayer and worship, and reflect on their values. Weekly devotions, mentorship, and spiritual retreats form a core part of our calendar.
            <br /><br />
            Rooted in Christian principles, we guide our girls to grow spiritually while embracing respect and tolerance for diverse beliefs — fostering a supportive environment where moral grounding and empathy thrive.
          </p>
        </div>


      </div>
    </section>
  );
}
