import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#2ca903] to-[#035470] text-white px-6 py-10 text-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        {/* Info */}
        <div>
          <h2 className="text-xl font-bold mb-2">Most Reliable Technology Provider in the Region</h2>
          <p className="text-sm mb-4">ICR is established in the region to provide tools & resources to our students for polishing their skills, Hence making their names in the IT market.</p>
        </div>
        {/* Short Links */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Short Links</h2>
          <ul className="space-y-1 text-sm">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/courses" className="hover:underline">Courses</a></li>
            <li><a href="#team" className="hover:underline">Our Team</a></li>
            <li><a href="#success" className="hover:underline">Success Stories</a></li>
            <li><a href="/contact" className="hover:underline">Contact Us</a></li>
            <li><a href="#free" className="hover:underline">Free Opportunities</a></li>
            <li><a href="#privacy" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#terms" className="hover:underline">Terms and Conditions</a></li>
          </ul>
        </div>
        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Contact Info</h2>
          <ul className="text-sm space-y-1">
            <li><span className="font-semibold">Location:</span> East Sadiq Canal Road, Alpha STP Building Near Canal View Hotel, Rahim Yar Khan</li>
            <li><span className="font-semibold">Email:</span> <a href="mailto:info@itcentre.pk" className="hover:underline">info@itcentre.pk</a></li>
            <li><span className="font-semibold">Phone:</span> <a href="tel:03028882969" className="hover:underline">0302-8882969</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 border-t border-white/20 pt-4 text-xs text-center opacity-80">
        &copy; 2025 SkillWave Institute. All Rights Reserved.
      </div>
    </footer>
  )
}
