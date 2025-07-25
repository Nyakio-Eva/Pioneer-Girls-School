export default function DancingLife() {
  return (
    <section className="min-h-screen bg-slate-200 flex items-center justify-center py-16 px-4">
      <div className="md:max-w-9xl  mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Image with overlay */}
        <div className="relative w-full h-100 md:h-[700px]">
          <img
            src="/dancedisco.webp"
            alt="dance-life"
            className="w-full h-full md:object-cover object-contain rounded-lg shadow-lg"
          />
          
        </div>

        {/* Right: Text */}
        <div className="text-gray-800">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-6 text-yellow-500">
           Students have numerous opportunities to showcase their talents through school recitals, talent shows, and community performances. These events allow students to experience the thrill of performing on stage, develop their performance skills, and share their love of dance with others.
          </h2>
          <p className="text-lg md:text-xl font-semibold leading-relaxed">
            Dance is more than just movement—it's a powerful outlet for self-expression, teamwork, and personal growth. Our club provides a platform for students to showcase talent in traditional, contemporary, and creative dance forms.
            <br /><br />
            From school events to national competitions, our dancers consistently shine. Through regular training, cultural festivals, and mentorship, the club helps girls build confidence, discipline, and a sense of belonging in a joyful and energetic environment.
          </p>
        </div>

      </div>
    </section>
  );
}
