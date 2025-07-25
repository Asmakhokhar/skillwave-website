import React, { useState, useEffect } from 'react';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample images for the slideshow
  const slides = [
    "/images/students-learning.jpg",
    "/images/classroom.jpg",
    "/images/online-course.jpg",
    "/images/graduation.jpg",
  ];

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Fallback images if the main ones fail to load
  // const fallbackImages = [
  //   "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  //   "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  //   "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  //   "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  // ];

  return (
    <div
      className="relative min-h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-white text-black dark:bg-[#0f172a] dark:text-white transition-colors duration-500 mt-25"
      id="home"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl w-full gap-8 md:gap-12 z-10">
        {/* Left: Image Slideshow */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-inter leading-tight tracking-tight">
            Transform Your Career with{' '}
            <span className="text-[#2ca903]">SkillWave Institute</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            Join our community of <strong>1000+ successful graduates</strong> who've launched careers in tech.
            Our industry-aligned programs give you the skills employers actually want.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={() => window.location.href = '#contact'}
              className="px-8 py-4 bg-[#2ca903] text-white font-semibold rounded-lg hover:bg-[#248a02] transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Start Your Journey Today
            </button>
            <button
              onClick={() => window.location.href = '#allcourses'}
              className="px-8 py-4 border-2 border-[#2ca903] text-[#2ca903] font-semibold rounded-lg hover:bg-[#2ca903]/10 transition-all duration-300"
            >
              Explore Courses
            </button>
          </div>

          
        </div>

        {/* Right: Text Content */}
        <div className="w-full lg:w-1/2 h-[400px] md:h-[500px] relative rounded-xl overflow-hidden shadow-xl mt-10">
        {/* Slide indicators */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-[#2ca903]' : 'bg-white/50'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            >
              <img
                src={slide}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = fallbackImages[index];
                }}
              />
            </div>
          ))}
        </div>


        {/* <div className="pt-4 flex flex-wrap justify-center lg:justify-start gap-4">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-[#2ca903]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="ml-2">Industry Expert Instructors</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-[#2ca903]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="ml-2">Job Placement Support</span>
            </div>
          </div> */}
      </div>
    </div>

  );
}