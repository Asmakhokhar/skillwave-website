import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ImCross } from 'react-icons/im';
import { FaBars, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const navLinks = [
  { name: 'About', to: '/about' },
  { name: 'Courses', to: '/courses' },
  { name: 'Success Stories', to: '/success-stories' },
  { name: 'Contact Us', to: '/contact' }
];

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeInOut' }}
      className="fixed top-0 left-0 w-full h-23 z-50 shadow-lg bg-white dark:bg-gray-900 transition-colors"
    >
      <div className="container mx-auto flex justify-between items-center h-full px-4 sm:px-6">
        <Link to="/">
          <img
            src='/Skillwaveogo-01.png'
            alt="logo"
            className="object-contain w-[240px] h-[240px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex gap-8 xl:gap-12 text-gray-800 dark:text-white text-lg font-normal relative font-inter">
          {navLinks.map((link, i) => (
            <li key={i} className="relative group">
              <Link
                to={link.to}
                className="px-2 py-1 hover:text-[#2ca903] transition-colors duration-300 font-inter"
              >
                {link.name}
                <span className="absolute left-2 bottom-0 h-0.5 w-0 bg-[#2ca903] transition-all duration-300 group-hover:w-[90%]"></span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={() => window.location.href = '/contact'}
            className="bg-gradient-to-r from-[#2ca903] to-[#035470] text-white px-6 py-2 rounded-md hover:bg-green-700 transition-all duration-300 shadow-md hover:shadow-lg">
            Free Consultation
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setNavOpen(!navOpen)}
          className="lg:hidden text-2xl text-[#2ca903] z-50"
          aria-label="Toggle menu"
        >
          {navOpen ? <ImCross /> : <FaBars />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {navOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden fixed top-20 left-0 w-full h-screen bg-white dark:bg-gray-900 shadow-lg pt-8 px-6 overflow-y-auto"
            >
              <ul className="flex flex-col gap-6 text-gray-800 dark:text-gray-200">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      to={link.to}
                      className="block py-3 text-lg font-medium border-b border-gray-200 dark:border-gray-700 hover:text-[#2ca903] transition-colors"
                      onClick={() => setNavOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                  className="mt-4"
                >
                  <button
                    className="w-full bg-[#2ca903] text-white py-3 rounded-md hover:bg-green-700 transition-colors"
                    onClick={() => setNavOpen(false)}
                  >
                    Free Consultation
                  </button>
                </motion.li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;