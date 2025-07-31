import React from "react";
import Navbar from "./Commponents/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import AllCourses from "./Pages/AllCourses";
import Connect from "./Pages/Connect";
import Footer from "./Commponents/Footer";

function App() {
  return (
    <div className="text-black bg-white space-y-4">
      <Router>
        <Navbar />
        <div className="pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/courses" element={<AllCourses />} />
            <Route path="/contact" element={<Connect/>} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}
export default App;