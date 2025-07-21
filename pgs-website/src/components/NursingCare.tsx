export default function NursingCare() {
  return (
    <section className="min-h-screen bg-[#f9fafb] flex items-center justify-center py-16 px-4">
      <div className="md:max-w-9xl  mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Image with overlay */}
        <div className="relative w-full h-100 md:h-[700px]">
          <img
            src="/nursingcare.webp"
            alt="nursing care"
            className="w-full h-full md:object-cover object-contain rounded-lg shadow-lg"
          />
          
        </div>

        {/* Right: Text */}
        <div className="text-gray-800">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-6 text-yellow-500">
           We are aware that a healthy student is better equipped to succeed academically and personally that is why we prioritize our students mental wellbeing.
          </h2>
          <p className="text-lg md:text-xl font-semibold leading-relaxed">
            Our on-campus nursing team provides round-the-clock medical care, ensuring that students receive immediate attention whenever needed. A full-time pediatrician oversees our health protocols to maintain the highest standards of student wellness.
            <br /><br />
            In addition to physical health, our staff supports students' emotional and mental well-being through counseling, regular wellness check-ins, and health education programs that empower girls to take charge of their overall health.
          </p>
        </div>

      </div>
    </section>
  );
}
