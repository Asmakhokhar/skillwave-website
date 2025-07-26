import React from "react";
import Navbar from "./Commponents/Navbar"; 
import HeroSection from "./Commponents/HeroSection";
import About from "./Commponents/About";
import CoursesSection from './Commponents/CoursesSection'
import ContactSection from './Commponents/ContactSection';
import Footer from "./Commponents/Footer";

function App() {
  return (
    <div className="text-black bg-white space-y-4">
      <Navbar />
      <HeroSection />
      <About />
      <CoursesSection />
      <ContactSection />
      <Footer />
      {/* Add other components or sections as needed */}
    </div>
  );
}
export default App;