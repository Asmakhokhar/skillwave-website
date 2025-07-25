import React from 'react'

function CoursesSection() {
  return (
    <section className="p-10 bg-gray-50">
  <h2 className="text-2xl font-bold mb-4">Our Courses</h2>
  <div className="grid md:grid-cols-3 gap-4">
    <div className="bg-white shadow p-4">Digital Marketing</div>
    <div className="bg-white shadow p-4">YouTube Automation</div>
    <div className="bg-white shadow p-4">SEO</div>
    <div className="bg-white shadow p-4">Graphic Designing</div>
    <div className="bg-white shadow p-4">Forex Trading</div>
    <div className="bg-white shadow p-4">Crypto Trading</div>
  </div>
</section>

  )
}

export default CoursesSection
