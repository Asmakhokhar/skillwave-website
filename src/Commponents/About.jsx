import React from 'react'

export default function About() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8">
  <div className="w-[300px] h-[400px] border birder-black rounded-xl shadow-lg">
    <img src="/about-image.jpg" alt="About" className="rounded-xl shadow-md" />
  </div>
  <div className="w-full md:w-1/2">
    <h2 className="text-3xl font-bold mb-4">About Skill Wave Institute</h2>
    <p className="mb-2">We aim to provide quality digital education...</p>
    <ul className="list-disc pl-5">
      <li>Experienced Trainers</li>
      <li>Hands-on Projects</li>
      <li>Job-Oriented Courses</li>
    </ul>
  </div>
</div>


  )
}
