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
    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
    whileHover={{ scale: 1.02 }}
    transition={{ type: 'spring', stiffness: 300 }}
  >
    <img
      src={imageSrc}
      alt={title}
      className="w-full h-60 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-[#093056] mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#e58700] hover:bg-[#d17900] text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
        >
          Click for More →
        </a>
      )}
    </div>
  </motion.div>
);

const SocialSciencesPathway: React.FC = () => {
  const subjects = [
    {
      title: "Advanced English",
      description: "Develop advanced English language skills including literature analysis, critical writing, and communication. This course prepares students for higher education and careers requiring strong English proficiency.",
      imageSrc: "/english.webp",
      link: "https://kicd.ac.ke/wp-content/uploads/2024/07/English-Grade-10-June-2024.pdf"
    },
    {
      title: "Literature in English",
      description: "Explore classic and contemporary literature, develop analytical skills, and understand literary devices. Students engage with poetry, prose, and drama from diverse cultural backgrounds.",
      imageSrc: "/literature.webp",
      link: "https://kicd.ac.ke/wp-content/uploads/2024/07/Literature-in-English-Grade-10-June-2024.pdf"
    },
    {
      title: "Kiswahili Kipevu",
      description: "Advanced Kiswahili language studies focusing on grammar, composition, and oral communication. Strengthen proficiency in Kenya's national language through comprehensive language practice.",
      imageSrc: "/kiswahili.webp",
      link: "https://kicd.ac.ke/wp-content/uploads/2024/07/Fasihi-ya-Kiswahili-Grade-10-June-2024.pdf"
    },
    {
      title: "Fasihi ya Kiswahili",
      description: "Study Swahili literature including traditional and modern works. Analyze poetry, novels, and plays while developing appreciation for East African literary traditions.",
      imageSrc: "/fasihi.webp",
      link: "https://kicd.ac.ke/wp-content/uploads/2024/07/Fasihi-ya-Kiswahili-Grade-10-June-2024.pdf"
    },
    {
      title: "Foreign Languages",
      description: "Choose from Arabic, French, German, or Mandarin. Develop international communication skills and cultural awareness through comprehensive language learning programs.",
      imageSrc: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&h=300&fit=crop",
      link: "https://kicd.ac.ke/wp-content/uploads/2024/07/Mandarin-Grade-10-June-2024.pdf"
    },
    {
      title: "History and Citizenship",
      description: "Explore historical events, understand civic responsibilities, and develop critical thinking about society. Learn about local and global history while building citizenship awareness.",
      imageSrc: "/history2.webp",
      link: "https://kicd.ac.ke/wp-content/uploads/2024/07/History-and-Citizenship-Grade-10-June-2024.pdf"
    },
    {
      title: "Geography",
      description: "Study physical and human geography, environmental systems, and spatial relationships. Develop map skills and understanding of global geographical processes.",
      imageSrc: "/geography3.webp",
      link: "https://kicd.ac.ke/wp-content/uploads/2024/07/Geography-Grade-10-June-2024.pdf"
    },
    {
      title: "Religious Education",
      description: "Choose from Christian, Islamic, or Hindu Religious Education. Explore moral values, religious teachings, and ethical principles that guide personal and social conduct.",
      imageSrc: "/biblecomp.webp",
      link: "https://kicd.ac.ke/wp-content/uploads/2024/07/CRE-Grade-10-June-2024-1.pdf"
    },
    {
      title: "Business Studies",
      description: "Learn fundamental business concepts, entrepreneurship, economics, and management principles. Develop practical skills for the modern business environment.",
      imageSrc: "/business.webp",
      link: "https://kicd.ac.ke/wp-content/uploads/2024/07/Business-Studies-Grade-10-June-2024.pdf"
    }
  ];

  const additionalLanguageLinks = [
    { name: "French", link: "https://kicd.ac.ke/wp-content/uploads/2024/07/French-Grade-10-June-2024.pdf" },
    { name: "Arabic", link: "https://kicd.ac.ke/wp-content/uploads/2024/07/Arabic-Grade-10-June-2024.pdf" },
    { name: "German", link: "https://kicd.ac.ke/wp-content/uploads/2024/07/German-Grade-10-June-2024.pdf" },
    { name: "HRE", link: "https://kicd.ac.ke/wp-content/uploads/2024/07/HRE-Grade-10-June-2024.pdf" },
    { name: "IRE", link: "https://kicd.ac.ke/wp-content/uploads/2024/07/IRE-Grade-10-June-2024.pdf" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Hero Section */}
      <div 
        className="relative h-96 bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(6, 26, 63, 0.4), rgba(22, 46, 97, 0.4)), url('')`
        }}
      >
        <motion.div 
          className="text-center text-white px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            SOCIAL SCIENCES PATHWAY
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Pioneer Girls School senior students interested in Social Sciences careers will be required to select 2 subjects below, including the 4 compulsory subjects.
          </p>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Introduction */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#093056] mb-6">
            Choose Your Academic Journey
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            The Social Sciences pathway opens doors to careers in education, journalism, law, diplomacy, 
            social work, and public service. Select subjects that align with your interests and career goals.
          </p>
        </motion.div>

        {/* Subject Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {subjects.map((subject, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <InfoCard
                title={subject.title}
                description={subject.description}
                imageSrc={subject.imageSrc}
                link={subject.link}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Resources */}
        <motion.div 
          className="bg-white rounded-2xl shadow-lg p-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-[#093056] mb-6 text-center">
            Additional Resources
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {additionalLanguageLinks.map((resource, index) => (
              <a
                key={index}
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#e58700] hover:bg-[#d17900] text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 transform hover:scale-105"
              >
                {resource.name} program
              </a>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-[#093056] to-[#e58700] rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Explore Other Pathways?
            </h3>
            <p className="text-lg mb-6">
              Discover more career pathways and find the perfect fit for your interests and goals.
            </p>
            <a
              href="/Inspired-Path/Art-Sports-Science-Pathway"
              className="inline-block bg-white text-[#093056] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105 border border-slate-200"
            >
              ARTS & SPORTS SCIENCE →
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SocialSciencesPathway;