import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ImCross } from 'react-icons/im';
import { FaBars } from 'react-icons/fa6';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Courses', href: '#courses' },
  { name: 'Success Stories', href: '#success-stories' },
  { name: 'Contact Us', href: '#contact' }
];

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [mobileServiceOpen, setMobileServiceOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);


  const handleNavClick = (e, href) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeInOut' }}
      className="fixed top-0 left-0 w-full h-24 z-50 shadow-lg bg-white dark:bg-gray-900 transition-colors"
    >
      <div className="container mx-auto flex justify-between items-center h-full px-6">
        <a href="#home">
          <img src='/Skillwaveogo-01.png' alt="logo" className="object-cover w-[250px] h-[250px]" />
        </a>

        <ul className="hidden lg:flex gap-12 text-[#000000] text-lg dark:text-white font-semibold relative font-inter">
          {navLinks.map((link, i) => {
            return (
              <li key={i}>
                <a href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="hover:text-[#2ca903]">
                  {link.name}
                </a>
              </li>
              
            );
          })}
        </ul>
        <button className="bg-[#2ca903] text-white px-3 py-2 rounded hover:bg-green-700 transition hidden lg:flex">
          Free Consultation
        </button>

        <div className="lg:hidden flex items-center gap-3">
          <button onClick={() => setNavOpen(!navOpen)} className="text-3xl text-[#2ca903]">
            {navOpen ? <ImCross /> : <FaBars />}
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
