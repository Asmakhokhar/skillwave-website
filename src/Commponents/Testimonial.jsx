import React from "react";

const feedbacks = [
  {
    name: "Ali Khan",
    feedback: "Skill Wave Institute helped me become a confident frontend developer!",
    profile: "https://i.pravatar.cc/100?img=1",
  },
  {
    name: "Sara Ahmed",
    feedback: "The teachers are amazing and the learning experience was great!",
    profile: "https://i.pravatar.cc/100?img=2",
  },
  {
    name: "Usman Tariq",
    feedback: "The best institute to learn practical coding skills.",
    profile: "https://i.pravatar.cc/100?img=3",
  },
  {
    name: "Hira Shah",
    feedback: "I got my first internship after completing my course here.",
    profile: "https://i.pravatar.cc/100?img=4",
  },
];

const FeedbackSlider = () => {
  const allFeedbacks = [...feedbacks, ...feedbacks];

  const duration = allFeedbacks.length * 3; 

  return (
    <div className="py-20 bg-gradient-to-r from-[#2ca903] via-[#2a7012] to-[#035470]">
      <h2 className="text-white text-3xl font-bold text-center mb-8">
        What Our Students Say
      </h2>
      <div className="overflow-hidden w-full p-10">
        <div
          className="flex gap-6 animate-feedback-scroll px-10"
          style={{
            width: `${allFeedbacks.length * 320}px`,
            animation: `feedback-scroll ${duration}s linear infinite`,
          }}
        >
          {allFeedbacks.map((item, index) => (
            <div
              key={index}
              className="min-w-[400px] max-w-[400px] bg-white text-black rounded-lg shadow-lg p-6 flex-shrink-0"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={item.profile}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="font-semibold">{item.name}</div>
              </div>
              <p className="text-sm">{item.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeedbackSlider;
