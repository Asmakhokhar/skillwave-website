import React from "react";
import { motion } from "framer-motion";
import { FaChalkboardTeacher, FaChartLine, FaTools, FaClock, FaCertificate, FaUsers } from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaChalkboardTeacher className="text-[#2ca903]" size={40} />,
      img: "/instructer.jpeg",
      title: "Industry-Expert Instructors",
      description: "Learn from professionals actively working in forex, crypto, and IT industries with real-world experience."
    },
    {
      icon: <FaChartLine className="text-blue-500" size={40} />,
      img: "/edge.jpeg",
      title: "Cutting-Edge Curriculum",
      description: "Stay ahead with constantly updated courses reflecting the latest market trends and technologies."
    },
    {
      icon: <FaTools className="text-amber-500" size={40} />,
      img: "/practical.jpeg",
      title: "Practical Hands-on Training",
      description: "Gain real trading experience and IT project development through our simulation labs and live projects."
    },
    {
      icon: <FaClock className="text-purple-500" size={40} />,
      img: "/flexible.jpeg",
      title: "Flexible Learning Options",
      description: "Choose from self-paced online courses, live virtual classes, or in-person training at our modern campuses."
    },
    {
      icon: <FaCertificate className="text-pink-500" size={40} />,
      img: "/Certification.jpeg",
      title: "Certification & Career Support",
      description: "Earn recognized certifications and get career guidance, portfolio reviews, and job placement assistance."
    },
    {
      icon: <FaUsers className="text-indigo-500" size={40} />,
      img: "/community.jpeg",
      title: "Vibrant Learning Community",
      description: "Join our active network of traders and tech professionals for continuous learning and collaboration."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="relative py-16 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-base font-semibold tracking-wider text-[#2ca903] uppercase">
            Why Skill Wave?
          </h2>
          <h3 className="mt-2 text-3xl font-extrabold text-[#000000] sm:text-4xl lg:text-5xl">
            The <span className="relative inline-block">
              <span className="relative z-10">Skill Wave</span>
              <span className="absolute bottom-0 left-0 w-full h-3 bg-[#2ca903] bg-opacity-30 -rotate-1"></span>
            </span> Difference
          </h3>
          <p className="mt-4 max-w-2xl text-lg text-[#252525] mx-auto">
            We don't just teach skills - we transform beginners into market-ready professionals across forex, crypto trading, and cutting-edge IT disciplines.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 h-full w-1 bg-[#2ca903] bg-opacity-20 transform -translate-x-1/2 hidden md:block"></div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-16 md:space-y-0"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} gap-8 md:gap-16`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 top-8 h-6 w-6 rounded-full bg-[#2ca903] border-4 border-white transform -translate-x-1/2 hidden md:block"></div>
                
                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} relative z-10`}>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
                  >
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </motion.div>
                </div>
                
                {/* Visual element: always show image */}
                <div className={`md:w-1/2 flex items-center justify-center ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="w-full h-48 rounded-2xl overflow-hidden flex items-center justify-center bg-gray-100 shadow-lg"
                  >
                    <img
                      src={feature.img}
                      alt={feature.title}
                      className="w-full h-full object-cover"
                      onError={e => { e.target.onerror = null; e.target.src = '/icons/default-course.png'; }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Floating CTA */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <button className="relative px-8 py-4 bg-[#2ca903] text-white font-bold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg group overflow-hidden">
            <span className="relative z-10">Start Your Skill Journey Today</span>
            <span className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
          </button>
        </motion.div> */}
      </div>
    </section>
  );
};

export default WhyChooseUs;