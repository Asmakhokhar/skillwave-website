import React, { useEffect, useState, useMemo } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaArrowUp } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const socialLinks = [
    { icon: <FaFacebook className="h-5 w-5" />, href: "https://web.facebook.com/profile.php?id=61556637118609", label: "Facebook" },
    { icon: <FaInstagram className="h-5 w-5" />, href: "https://www.instagram.com/asmak.web/", label: "Instagram" },
    { icon: <FaYoutube className="h-5 w-5" />, href: "https://www.youtube.com/@SkillWaveInstitute", label: "YouTube" },
    { icon: <FaLinkedin className="h-5 w-5" />, href: "https://www.linkedin.com/company/skillwave-institute/", label: "LinkedIn" },
  ];

  const particles = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => {
      const angle = (i * 137.5) % 360;
      const distance = 30 + (i % 20);
      return {
        id: i,
        size: `${100 + (i % 4) * 50}px`,
        left: `${50 + Math.cos(angle * Math.PI / 180) * distance}%`,
        top: `${50 + Math.sin(angle * Math.PI / 180) * distance}%`,
        blur: '60px',
        opacity: 0.08,
      };
    });
  }, []);

  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-gradient-to-r from-[#2ca903] to-[#035470] shadow-lg hover:shadow-green-500/30 transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaArrowUp className="h-5 w-5 text-white" />
        </motion.button>
      )}

      <footer className="will-change-transform relative overflow-hidden bg-gradient-to-r from-[#2ca903] to-[#035470] text-white pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute rounded-full bg-green-400"
              style={{
                width: particle.size,
                height: particle.size,
                left: particle.left,
                top: particle.top,
                filter: `blur(${particle.blur})`,
                opacity: particle.opacity,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={footerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
          >
            {/* Brand & Social Column */}
            <motion.div variants={itemVariants} className="flex flex-col items-center text-center space-y-4 lg:space-y-6">
              <div className="flex justify-center items-center w-full">
                <img 
                  src='/logo-white-01.png'
                  alt="logo" 
                  className="object-contain w-42 h-42 sm:w-40 sm:h-40 md:w-48 md:h-48 p-2" 
                />
              </div>
              <p className="text-green-100/80 text-base md:text-lg leading-relaxed max-w-xs mx-auto">
                Begin your journey with IT professionals and build your career in the IT or marketing sector!
              </p>
              <div>
                <h2 className="text-base font-semibold text-white mb-2 tracking-wide">Follow Us On</h2>
                <div className="flex justify-center space-x-3">
                  {socialLinks.map((link) => (
                    <motion.div
                      key={link.label}
                      variants={itemVariants}
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <a
                        href={link.href}
                        aria-label={link.label}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-green-200 transition-colors duration-300"
                      >
                        {link.icon}
                      </a>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Quick Links Column */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-xl font-semibold text-white">Quick Links</h3>
              <ul className="space-y-3 text-green-100/80">
                <li><a href="/" className="hover:text-white transition-colors duration-300">Home</a></li>
                <li><a href="/about" className="hover:text-white transition-colors duration-300">About Us</a></li>
                <li><a href="/courses" className="hover:text-white transition-colors duration-300">Courses</a></li>
                <li><a href="#team" className="hover:text-white transition-colors duration-300">Our Team</a></li>
                <li><a href="#success" className="hover:text-white transition-colors duration-300">Success Stories</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors duration-300">Contact Us</a></li>
              </ul>
            </motion.div>

            {/* Contact Column */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-xl font-semibold text-white">Contact Us</h3>
              <div className="space-y-4 text-green-100/80">
                <p className="flex items-start gap-3">
                  <FaMapMarkerAlt className="h-5 w-5 mt-0.5 text-green-200" />
                  <span>Al Noor, Canal View Near Aimal Academy, Rahim Yar Khan, Punjab, Pakistan</span>
                </p>
                <p className="flex items-start gap-3">
                  <FaEnvelope className="h-5 w-5 mt-0.5 text-green-200" />
                  <a href="mailto:contactus.skillwave@gmail.com" className="hover:underline hover:text-white transition-colors">
                    contactus.skillwave@gmail.com
                  </a>
                </p>
                <p className="flex items-start gap-3">
                  <FaPhone className="h-5 w-5 mt-0.5 text-green-200" />
                  <a href="tel:+92 123 456 7890" className="hover:underline hover:text-white transition-colors">
                    +92 123 456 7890
                  </a>
                </p>
              </div>
            </motion.div>

            {/* Spacer/Empty Column for layout balance on large screens */}
            <motion.div variants={itemVariants} className="hidden lg:block" />
          </motion.div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <p className="text-green-100/70 text-sm">
              &copy; {currentYear} SkillWave Institute. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#privacy" className="text-green-100/70 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-green-100/70 hover:text-white text-sm transition-colors">
                Terms & Conditions
              </a>
              <a href="#refund" className="text-green-100/70 hover:text-white text-sm transition-colors">
                Refund Policy
              </a>
            </div>
          </motion.div>
        </div>
      </footer>
    </>
  );
}