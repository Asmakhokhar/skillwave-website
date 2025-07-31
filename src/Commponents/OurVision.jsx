import React from 'react';


const cards = [
  {
    title: 'Our Vision',
    icon: '/Vision-01.png',
    desc: 'To deliver industry-aligned, hands-on IT education that builds real-world skills and career confidence. Through expert mentorship and project-based learning, we transform beginners into job-ready professionals.'
  },
  {
    title: 'Our Mission',
    icon: '/Mission-01.png',
    desc: 'To empower every individual in Rahim Yar Khan and beyond with digital skills that open doors to global opportunities. We envision becoming the most trusted IT training hub that shapes future-ready professionals.'
  },
  {
    title: 'Our Values',
    icon: '/Vision-01.png',
    desc: 'At Skill Wave Institute, we value innovation, excellence, and integrity. We are committed to empowering learners with practical skills and building a strong community that grows together.'
  }
];


export default function OurVision() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">About Us</h1>
        <div className="w-20 h-1 bg-[#2ca903] mx-auto mb-6"></div>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Know More About Skill Wave Institute - RYK
        </p>
      </div>


       {/* Courses Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {cards.map((course, idx) => (
            <div
              key={idx}
              className='group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700'
            >
              <div className='p-6'>
              
                <div className='w-21 h-21 mb-4 flex items-center justify-center'>
                  <img 
                    src={course.icon} 
                    alt={course.title} 
                    className='w-21 h-21 object-contain'
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
              
              
              <div className='absolute inset-0 border-2 border-transparent rounded-xl pointer-events-none transition-all duration-300'></div>
            </div>
          ))}
        </div>
    </div>
  );
}