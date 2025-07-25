import React from 'react';
import { motion } from 'framer-motion';

interface InfoCardProps {
  title: string;
  description: string;
  imageSrc: string;
  link?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, description, imageSrc, link }) => (
  <motion.div 
    className="bg-slate-200 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
    whileHover={{ scale: 1.02 }}
    transition={{ type: 'spring', stiffness: 300 }}
  >
    <img src={imageSrc} alt={title} className="w-full h-64 sm:h-72 md:h-80 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-[#093056] mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-sm font-medium text-[#f4a024] hover:underline transition-colors duration-200"
        >
          Learn more →
        </a>
      )}
    </div>
  </motion.div>
);

const ArtsAndSportsSchool: React.FC = () => {
  const subjects = [
    {
      title: "Music and Dance",
      description: "Explore the world of musical performance and choreographic expression. Develop your artistic voice through comprehensive training in various musical instruments, vocal techniques, and dance styles.",
      imageSrc: "/musicprog.webp",
      link: "https://drive.google.com/file/d/1f1Koc67pBUaUL8jKVsQl_A3Y70vn9Ew0/view"
    },
    {
      title: "Theatre and Film",
      description: "Dive into the dramatic arts with comprehensive training in acting, directing, screenwriting, and film production. Learn to tell compelling stories across stage and screen.",
      imageSrc: "/theatrefilm.webp",
      link: "https://drive.google.com/file/d/1oN6aPGvWzTEBMr_mmjLqSiM11ZqqGg-3/view"
    },
    {
      title: "Fine Arts",
      description: "Express your creativity through visual mediums including painting, sculpture, drawing, and digital art. Develop technical skills while exploring your unique artistic perspective.",
      imageSrc: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
      link: "https://drive.google.com/file/d/1hsaVtYtROTH-R0zZlaBXCfiYHv0SqkJX/view"
    },
    {
      title: "Sports and Recreation",
      description: "Build physical fitness, leadership skills, and teamwork through comprehensive sports training and recreational activities. Focus on both individual performance and team dynamics.",
      imageSrc: "/sportsrecreation.webp",
      link: "https://drive.google.com/file/d/1T-TglBSTph-kMCPtrPij2OKm3o3PExWO/view"
    }
  ];

  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed" style={{ 
          backgroundImage: `url('/artandsports.webp')`
        }}>
      {/* Hero Section */}
      <motion.div 
        className="relative min-h-screen  flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#bfd5ee] mb-4"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            SCHOOL OF ARTS & SPORTS SCIENCES 
          </motion.h1>
          {/* <motion.div
            className="w-24 h-1 bg-[#f4a024] mx-auto"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          ></motion.div> */}
        </div>
      </motion.div>

      {/* Message Section */}
      <div className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-300">
        <div className="max-w-7xl mx-auto">
          <div className="items-center">
           
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-[#093056] leading-tight">
                MESSAGE FROM THE HEAD OF THE ARTS & SPORT SCIENCES
              </h2>
              <div className="w-16 h-1 bg-[#f4a024]"></div>
              <div className="text-lg text-gray-700 space-y-4">
                <p>
                  Pioneer Girls school senior students interested in Arts or Sports Sciences careers, 
                  will be required to select 2 subjects below.
                </p>
                <p>Details of each subject area are provided below.</p>
                <p className="font-medium">Best regards,</p>
                <p className="font-semibold text-[#093056]">Head of School</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Subjects Section */}
      <div className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-9xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#093056] mb-4">
              Choose Your Path
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive programs designed to nurture your talents and prepare you for a successful career in arts and sports sciences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
            {subjects.map((subject, index) => (
              <motion.div
                key={subject.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <InfoCard
                  title={subject.title}
                  description={subject.description}
                  imageSrc={subject.imageSrc}
                  link={subject.link}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Aviation Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-[#bfd5ee]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-400 mb-8">
              Explore Additional Opportunities
            </h2>
            <motion.a
              href="/aviation"
              className="inline-block bg-[#f4a024] hover:bg-[#e5900b] text-white font-bold py-4 px-8 sm:px-12 rounded-lg text-xl sm:text-2xl transition-colors duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              AVIATION PROGRAM
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ArtsAndSportsSchool;