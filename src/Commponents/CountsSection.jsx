import React, { useState, useEffect, useRef } from 'react';

const CounterSection = () => {
  const [countersVisible, setCountersVisible] = useState(false);
  const sectionRef = useRef(null);

  // Counter data
  const counterData = [
    { id: 1, target: 180, suffix: '+', label: 'Students Enrolled', duration: 2000 },
    { id: 2, target: 20, suffix: '+', label: 'Courses Available', duration: 2000 },
    { id: 3, target: 15, suffix: '+', label: 'Expert Instructors', duration: 2000 },
    { id: 4, target: 80, suffix: '+', label: 'Successful Alumni', duration: 2000 }
  ];

  // Intersection Observer setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCountersVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="py-16 sm:py-20 bg-gradient-to-r from-[#2ca903] to-[#035470] dark:from-gray-900 dark:to-[#0f172a]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {counterData.map((item) => (
            <CounterItem 
              key={item.id}
              target={item.target}
              suffix={item.suffix}
              label={item.label}
              duration={item.duration}
              animate={countersVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const CounterItem = ({ target, suffix, label, duration, animate }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);

  useEffect(() => {
    if (!animate) return;

    let start = 0;
    const increment = target / (duration / 16); // 60fps
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [animate, target, duration]);

  return (
    <div 
      ref={counterRef}
      className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="text-4xl sm:text-5xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-gray-600 dark:text-gray-300 font-medium">
        {label}
      </div>
    </div>
  );
};

export default CounterSection;