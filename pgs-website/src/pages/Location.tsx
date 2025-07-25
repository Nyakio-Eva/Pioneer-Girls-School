import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Location: React.FC = () => {
  return (
    <div className="bg-gray-100">
      {/* Header Section */}
      <div className="bg-[#13365e] text-[#bfd5ee] py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Discover Our Location
          </h1>
          <div className='mt-4 h-1 w-24 bg-[#bfd5ee] mx-auto'></div>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full h-96 md:min-h-screen">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.1789542583087!2d37.0830835756884!3d-1.0257503353983723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f4dd45f575959%3A0xc96943478f1f6fa4!2sPioneer%20Girls%20School!5e0!3m2!1sen!2ske!4v1753200464237!5m2!1sen!2ske" width="100%"
        height="100%"
        className="border-0 w-full h-full"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>

      {/* Contact Section */}
      <div
        className="relative bg-cover bg-center text-white py-20 h-[500px] bg-fixed"
        style={{ backgroundImage: "url('/contactpic.webp')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative container mx-auto px-4 text-center py-16 items-center justify-center">
            <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
            <div className="max-w-2xl mx-auto space-y-3">
                <p className="text-lg">
                    <span className="font-semibold">Postal Address:</span>P.O. Box 33421, 00600 <br /> Pioneer Girls School, Murang'a County, Kenya
                </p>
                <p className="text-lg">
                    <span className="font-semibold">Phone:</span>  020-503-8079
                </p>
                <p className="text-lg">
                    <span className="font-semibold">Email:</span> admissions@pioneergirlsschool.co.ke
                </p>
                <p className="text-lg">
                    <span className="font-semibold">Working Hours:</span> Monday - Friday: 8:00 AM - 5:00 PM
                </p>
            </div>
            <div className="flex justify-center mt-8 space-x-6">
                <a href="#" className="text-white hover:text-blue-400 transition-colors">
                    <FaFacebook size={28}/>
                </a>
                <a href="#" className="text-white hover:text-blue-300 transition-colors">
                    <FaTwitter size={28}/>
                </a>
                <a href="#" className="text-white hover:text-pink-400 transition-colors">
                    <FaInstagram size={28}/>
                </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Location;