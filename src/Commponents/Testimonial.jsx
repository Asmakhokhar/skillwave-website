import React from "react";
import { Star } from "lucide-react";

const feedbacks = [
  {
    name: "Ibrahim Ansari",
    skill: "Artificial Intelligence",
    profile: "https://i.pravatar.cc/100?img=5",
    feedback:
      "Studying at Skill Wave Institute has been a truly inspiring journey. The dynamic environment and dedicated faculty strengthened my foundation.",
  },
  {
    name: "Rida Fatima",
    skill: "Graphic Designing",
    profile: "https://i.pravatar.cc/100?img=6",
    feedback:
      "In just a few months, this institute gave me real-world project exposure. The skills and mentorship made me more confident.",
  },
  {
    name: "Muaz Ahmad",
    skill: "Wordpress",
    profile: "https://i.pravatar.cc/100?img=7",
    feedback:
      "Being a part of this journey accelerated my learning. With practical assignments, I’m developing the skills I need to grow.",
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
