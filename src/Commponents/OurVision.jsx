import React from "react";

const cards = [
  {
    title: "Our Vision",
    icon: "/Vision-01.png",
    desc: "To deliver industry-aligned, hands-on IT education that builds real-world skills and career confidence. Through expert mentorship and project-based learning, we transform beginners into job-ready professionals.",
  },
  {
    title: "Our Mission",
    icon: "/Mission-01.png",
    desc: "To empower every individual in Rahim Yar Khan and beyond with digital skills that open doors to global opportunities. We envision becoming the most trusted IT training hub that shapes future-ready professionals.",
  },
  {
    title: "Our Values",
    icon: "/Values-01.png",
    desc: "At Skill Wave Institute, we value innovation, excellence, and integrity. We are committed to empowering learners with practical skills and building a strong community that grows together.",
  },
];

export default function OurVision() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 bg-white">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
          About Us
        </h1>
        <div className="w-24 h-1 bg-[#2ca903] mx-auto mt-2 mb-4 rounded"></div>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Know more about Skill Wave Institute - RYK
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <div className="p-6 flex flex-col h-full">
              <div className="w-22 h-22 mb-5 mx-auto">
                <img
                  src={card.icon}
                  alt={card.title}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-120"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/icons/default-course.png";
                  }}
                />
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-800 dark:text-white mb-3">
                {card.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed text-center">
                {card.desc}
              </p>
              <div className="mt-auto pt-6">
                <div className="h-1 w-14 mx-auto bg-[#2ca903] rounded-full group-hover:w-20 transition-all duration-300"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
