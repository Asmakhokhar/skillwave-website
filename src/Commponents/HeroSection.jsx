
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: "/images/students-learning.jpg",
      fallback: "/hero-1.png",
    },
    {
      image: "/images/classroom.jpg",
      fallback: "/sample.jpg",
    },
    {
      image: "/images/online-course.jpg",
      fallback: "/project-img1.png",
    },
    {
      image: "/images/graduation.jpg",
      fallback: "/project-img2.png",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative min-h-[90vh] w-full flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-[#0f172a] text-black dark:text-white">
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-100 dark:bg-emerald-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-purple-100 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10 py-16">
        {/* Text Content */}
        <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-start gap-2 relative"
          >
        <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2ca903] to-[#035470]">Future-Proof</span> Your Career With Hands-On Tech Education
          </h1>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
            Join <span className="font-semibold text-[#2ca903] dark:text-emerald-400">3,500+ graduates</span> who transformed their careers with our industry-aligned programs. Get job-ready in as little as 6 months.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button
              onClick={() => window.location.href = '/courses'}
              className="px-7 py-3 bg-gradient-to-r from-[#2ca903] to-[#035470] text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] shadow-emerald-200 dark:shadow-emerald-900/50"
            >
              View Courses
              <span className="ml-2">→</span>
            </button>
          </div>
        </div>
        </motion.div>

        {/* Image Slideshow */}
        {/* <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden order-1 lg:order-2">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            >
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = slide.fallback;
                }}
              />
              {/* <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white text-lg font-medium">{slide.overlayText}</p>
              </div> 
            </div>
          ))}
          
        
          
          <button 
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-md transition-all duration-300 transform hover:scale-110"
            onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </button>
          
          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-md transition-all duration-300 transform hover:scale-110"
            onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div> */}
      </div>
    </section>
  );
}