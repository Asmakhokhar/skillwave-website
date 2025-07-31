import React from 'react';

const platforms = [
  {
    name: 'Fiverr',
    url: 'https://www.fiverr.com/',
    img: 'freelancer_platform-3.png',
    // bg: 'bg-[#1dbf73]'
  },
  {
    name: 'Upwork',
    url: 'https://www.upwork.com/',
    img: 'freelancer_platform-2.png',
    bg: 'bg-[#2ca903]'
  },
  {
    name: 'Freelancer.com',
    url: 'https://www.freelancer.com/',
    img: 'freelancer_platform-1.png',
    bg: 'bg-[#29b2fe]'
  },
  {
    name: 'PeoplePerHour',
    url: 'https://www.peopleperhour.com/',
    img: 'freelancer_platform-4.png',
    bg: 'bg-[#ff9900]'
  },
];

export default function PlatformSection() {
  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-5xl font-bold font-inter text-center mb-4 text-gray-800">Exploring the Following Platforms</h2>
        <p className="text-center text-gray-600 mb-30">We are actively working and building expertise on these global freelance platforms.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {platforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group block rounded-xl shadow-lg p-6 transition-transform duration-300 hover:scale-105 hover:shadow-2xl bg-white border-t-4 border-[#2ca903]`}
            >
              <div className="flex flex-col items-center">
                {/* <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full shadow mb-4"> */}
                  <img src={platform.img} alt={platform.name + ' logo'} className="h-12  w-auto object-contain" />
                {/* </div> */}
                {/* <div className="text-lg font-semibold text-gray-800 group-hover:text-green-700 transition-colors">{platform.name}</div> */}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
