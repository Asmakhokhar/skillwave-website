import React from 'react';

const courses = [
  {
    title: 'Digital Marketing',
    icon: '/Digiatl marketing-01.png',
    desc: 'Master social media marketing, email campaigns, and paid ads. Learn strategies that grow businesses and convert clicks into customers.'
  },
  {
    title: 'Graphic Designing',
    icon: '/Graphics design-01.png',
    desc: 'Design like a pro using Adobe Illustrator, Photoshop, and InPage. Learn visual storytelling, branding, and layout design.'
  },
  {
    title: 'Web Development',
    icon: '/web development-01.png',
    desc: 'Become a full-stack developer! Start with HTML, CSS, JS, then advance to React, Node.js, and real backend integrations.'
  },
  {
    title: 'App Development',
    icon: '/icon size-01.png',
    desc: 'Create mobile apps from scratch using modern frameworks. Learn UI/UX, API integration, and deploy real-world Android apps.'
  },
  {
    title: 'YouTube Automation (AI Tools)',
    icon: '/Youtube-01.png',
    desc: 'Launch and automate YouTube channels using AI! Master content strategy, voice generation, thumbnails, and monetization.'
  },
  {
    title: 'Search Engine Optimization (SEO)',
    icon: '/SEO-01.png',
    desc: 'Rank websites on Google! Learn keyword research, on-page & off-page SEO, backlinks, and analytics tools.'
  },
  {
    title: 'E-commerce (Amazon / Shopify / Daraz)',
    icon: '/Ecommerce-01.png',
    desc: 'Launch and manage online stores. Learn product research, listing optimization, order handling, and advertising.'
  },
  {
    title: 'Forex Trading',
    icon: '/Forex Trading-01.png',
    desc: 'Learn Technical and Fundamental Analysis, risk management, and profitable trading strategies in real-time markets.'
  },
  {
    title: 'Crypto Trading',
    icon: '/Crypto-01.png',
    desc: 'Understand blockchain, tokens, and charts. Trade crypto safely with smart risk strategies and market insights.'
  },
];

function CoursesSection() {
  return (
    <section className='bg-white dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-12'>
          <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3'>
            Our <span className='text-[#2ca903]'>Courses</span>
          </h2>
          <p className='text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto'>
            Industry-relevant programs designed to launch your career in tech
          </p>
        </div>

        {/* Courses Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {courses.map((course, idx) => (
            <div
              key={idx}
              className='group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border transform hover:scale-105 border-gray-100 dark:border-gray-700'
            >
              <div className='p-6'>
                {/* Icon with background */}
                <div className='w-16 h-16 mb-4 flex items-center justify-center'>
                  <img
                    src={course.icon}
                    alt={course.title}
                    className='w-18 h-18 object-contain'
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/icons/default-course.png';
                    }}
                  />
                </div>

                <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-2'>
                  {course.title}
                </h3>
                <p className='text-gray-600 dark:text-gray-400 text-sm leading-relaxed'>
                  {course.desc}
                </p>
              </div>

              {/* Hover effect border */}
              <div className='absolute inset-0 border-2 border-transparent rounded-xl pointer-events-none transition-all duration-300'></div>
            </div>
          ))}
        </div>

        {/* Optional CTA */}
        <div className='mt-12 text-center'>
          <button
            onClick={() => window.location.href = '/courses'}
            className="px-6 py-3 bg-gradient-to-r from-[#2ca903] to-[#035470] text-white font-normal rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] shadow-emerald-200 dark:shadow-emerald-900/50"
          >
            View All Courses
            <span className="ml-2">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default CoursesSection;