import React from "react";
import { Star } from "lucide-react";

const feedbacks = [
  {
    name: "Malik Adnan",
    skill: "Digital Marketing",
    profile: "adnan.jpg",
    feedback:
      "I had a great experience at skillWave Institute in the Digital Marketing course. The instructors are professional and supportive, and the course covers all the essentials like Social Media Marketing, Marketing strategy, and Google ads. The 1-month free internship helped me gain real-world experience and build my portfolio. Highly recommended for anyone looking to start a Digital Marketing Career!",
  },
  {
    name: "Mustabshira raouf",
    skill: "Business Development",
    profile: "mustabshira.jpeg",
    feedback:
      "SkillWave is the leading IT institute in RYK, offering expert faculty and a supportive, student-friendly learning environment. I recently completed Business Development training, and my experience exceeded all expectations. Highly recommended for intermediate and university students looking to enhance their IT skills.",
  },
  {
    name: "Sarim Murtaza",
    skill: "Digital Marketing",
    profile: "sarim.jpeg",
    feedback:
      "SkillWave Institute is the best training institute in RYK. I have completed my Digital Marketing course and the environment is great. The teaching staff is highly qualified and I'm completely satisfied. Highly recommend SkillWave Institute!",
  },
];

const FeedbackSlider = () => {
  const allFeedbacks = [...feedbacks, ...feedbacks];
  const duration = allFeedbacks.length * 5; 

  return (
    <div className=" py-20 bg-gradient-to-r from-[#2ca903] via-[#2a7012] to-[#035470]">
      <h2 className="text-white text-4xl font-bold text-center mb-3">
        What Our Students Say
      </h2>
      <p className="text-sm font-light text-center text-gray-200 mb-8">
        Hear from our students about their experiences at Skill Wave.
      </p>

      <div className="overflow-hidden w-full px-10">
        <div
          className="flex gap-6 animate-feedback-scroll"
          style={{
            width: `${allFeedbacks.length * 420}px`,
            animation: `feedback-scroll ${duration}s linear infinite`,
          }}
        >
          {allFeedbacks.map((item, index) => (
            <div
              key={index}
              className="min-w-[400px] max-w-[400px] bg-white text-black rounded-xl shadow-lg p-6 flex-shrink-0"
            >
              <div className="flex items-center gap-4 mb-3">
                <img
                  src={item.profile}
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold">{item.name}</h3>
                  <p className="text-blue-600 text-sm">{item.skill}</p>
                </div>
              </div>
              <p className="italic text-sm border-l-2 border-blue-500 pl-3 mb-4">
                “{item.feedback}”
              </p>
              <div className="flex gap-1 text-yellow-400">
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400" />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeedbackSlider;
