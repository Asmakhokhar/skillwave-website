import React from 'react';

export default function About() {
  return (
    <div className='bg-white dark:bg-gray-900 text-black dark:text-white px-4 sm:px-6 lg:px-8 py-12 md:py-16'>
      <div className='sm:px-10 lg:px-20 px-10' >
        
        <div className='text-center mb-10'>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Get to Know About Us
          </h1>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#2ca903] mt-2">
            Skill Wave Institute Rahim Yar Khan
          </h2>
        </div>
        <div className='space-y-6'>
          <p className='text-lg font-medium text-[#4A6F8A] dark:text-[#8ab4d1]'>
            Welcome to World of Technical Knowledge
          </p>

          <div className='space-y-4 text-gray-700 dark:text-gray-300'>
            <p className='text-base md:text-lg'>
              Skill Wave Institute is a leading IT training center based in Rahim Yar Khan, Pakistan, committed to empowering individuals with in-demand digital skills. Our programs focus on practical, hands-on learning, designed to prepare you for real-world challenges and successfully launch your career in tech.
            </p>

            <p className='text-base md:text-lg'>
              Our comprehensive programs cover Full Stack Web Development, App Development, Graphic Design, Digital Marketing, and more. With industry-expert instructors and a project-based learning approach, we equip students with the skills and confidence to tackle real-world challenges in today’s competitive tech industry.
            </p>

            <p className='text-base md:text-lg'>
              At Skill Wave, we emphasize personalized mentorship, helping each student grow their technical skills, creative thinking, and problem-solving abilities. Our mission is to empower the next generation of tech professionals to thrive in a rapidly evolving digital world.
            </p>
          </div>      
          <button className='mt-6 px-8 py-3 bg-[#2ca903] hover:bg-[#248a02] text-white font-semibold rounded-lg transition-colors duration-300'>
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}