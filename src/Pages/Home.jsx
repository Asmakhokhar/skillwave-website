import HeroSection from '../Commponents/HeroSection';
import About from '../Commponents/About';
import CoursesSection from '../Commponents/CoursesSection';
import ContactSection from '../Commponents/ContactSection';
import CountsSection from '../Commponents/CountsSection';
import AboutSection from '../Commponents/AboutSection';
import Testimonial from '../Commponents/Testimonial';

import React from 'react'

export default function Home() {
  return (
    <>
      <HeroSection />
      <CountsSection />
      {/* <div className='pt-15'>
        <div className='text-center'>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Get to Know About Us
          </h1>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#2ca903] mt-2">
            Skill Wave Institute Rahim Yar Khan
          </h2>
        </div>
      </div> */}
      <AboutSection />
      <About />
      <CoursesSection />
      <Testimonial />
      <ContactSection />
    </>
  )
}
