

export default function Form3Fees() {
  return (
    <section className="bg-slate-200 text-gray-800">
      {/* Header Section */}
      <div
        className="w-full bg-cover bg-center py-10 px-4 md:px-10"
        style={{ backgroundImage: "url('/undefined')" }}
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">FORM 3 FEES</h2>
          <p className="text-lg md:text-xl font-semibold">
            AT PIONEER GIRLS SCHOOLS, THERE ARE NO HIDDEN FEES AND CHARGES
          </p>
        </div>
      </div>

      {/* Term Fees */}
      <div className="max-w-5xl mx-auto px-4 py-10 space-y-6">
        <h3 className="text-xl font-bold text-yellow-700">Termly Fees</h3>
        {["TERM 1", "TERM 2", "TERM 3"].map((term, idx) => (
          <p key={idx} className="text-lg font-semibold text-yellow-800">
            FORM 3 - {term} - <span className="text-yellow-600">KES 126,000</span>
          </p>
        ))}
        <p className="text-lg font-bold text-yellow-800">
          ANNUAL FEES - <span className="text-yellow-600">KES 378,000</span>
        </p>
      </div>

      {/* One-off Charges */}
      <div className="bg-gray-100 py-10 px-4">
        <div className="max-w-5xl mx-auto space-y-4">
          <h3 className="text-xl font-bold text-yellow-700">For New Students Only - One-off Charges</h3>
          <ul className="list-disc pl-5 space-y-2 text-base md:text-lg font-medium text-gray-700">
            <li>Non-refundable Commitment Fee - <strong>KES 20,000</strong></li>
            <li>Extra charge for uniform, bedding and textbooks - <strong>KES 100,000</strong></li>
            <li>Free transport to and from Nyanyuki, Mombasa, and Embu</li>
          </ul>
        </div>
      </div>

      {/* Terms & Conditions */}
      <div className="py-10 px-4">
        <div className="max-w-5xl mx-auto space-y-4 text-base md:text-lg font-medium text-gray-700">
          <h3 className="text-xl font-bold text-yellow-700">Pioneer Girls School Terms and Conditions</h3>
          <p>Money paid is not refundable or transferable to another account.</p>
          <p>All fees should be paid to Pioneer Girls School accounts only.</p>
          <p>Accepted modes of payment:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Pay Bill (M-Pesa)</li>
            <li>Banker’s Cheque</li>
            <li><strong className="text-red-600">Cash, personal cheques, and post-dated cheques are NOT accepted.</strong></li>
          </ul>
          <p className="mt-4">
            For clarification, please send an email to:{" "}
            <a
              href="mailto:finance.enquiries@pioneergirlsschools.co.ke"
              className="text-blue-600 underline"
            >
              finance.enquiries@pioneergirlsschools.co.ke
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
