import React from "react";

import telegram from "../../assets/telegram.svg";

const ResultsPage = ({ answers }) => {
  if (!answers || answers.length === 0) {
    return (
      <p className="text-center text-gray-700">
        No results available. Please complete the quiz.
      </p>
    );
  }

  const stressMapping = {
    Rarely: "Low",
    Sometimes: "Moderate",
    Often: "High",
    "Almost always": "Extreme",
  };

  const stressLevel = answers[0]?.title;
  const stressCategory = stressMapping[stressLevel] || "Unknown";

  return (
    <div className="bg-gray-100 flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
        Your Stress Level: <br /> {stressCategory} – Here’s Your Personalized
        Plan!
      </h1>

      <div className="max-w-lg w-full flex flex-col gap-6">
        {/* Meditation Suggestion */}
        <div className="bg-teal-500 text-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">Meditation Suggestion 🧘‍♀️</h2>
          <p>Start with a 5-minute daily guided meditation.</p>
        </div>

        {/* Mindfulness Tip */}
        <div className="bg-purple-400 text-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">Mindfulness Tip 🍃</h2>
          <p>Take mindful breaks during your day to ground yourself.</p>
        </div>

        {/* Sleep Tip */}
        <div className="bg-gray-500 text-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">Sleep Tip 😴</h2>
          <p>Try a nighttime relaxation routine to improve your rest.</p>
        </div>
      </div>

      {/* CTA Button */}
      <button className="mt-8 bg-teal-600 text-white font-bold text-lg py-4 px-4 rounded-full hover:bg-teal-700 transition active:scale-95">
        Find peace with MindZen
      </button>

      {/* Telegram Info */}
      <div className="mt-6 flex flex-col items-center">
        <img src={telegram} className="w-12 h-12 mb-2" alt="Telegram Logo" />
        <p className="text-gray-700 text-center">
          You need Telegram installed to enjoy our app
        </p>
      </div>
    </div>
  );
};

export default ResultsPage;
