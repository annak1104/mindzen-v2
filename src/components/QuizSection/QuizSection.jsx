import { AnimatePresence, motion } from "framer-motion";

import React, { useEffect, useRef, useState } from "react";

import logoDark from "../../assets/logo-dark.svg";
import logo from "../../assets/logo.svg";
import referral from "../../assets/referral.png";
import telegram from "../../assets/telegram.svg";
import FinalThankYouPage from "../../components/FinalThankYouPage/FinalThankYouPage";
import MLMEarningsSimulator from "../../components/MLMEarningsSimulator/MLMEarningsSimulator";
import ResultsPage from "../../components/ResultsPage/ResultsPage";

// Questions for the quiz
const questions = [
  {
    question: "How often do you feel overwhelmed by your responsibilities?",
    options: [
      {
        title: "Rarely",
        description: "I hardly ever feel too stressed out by my tasks",
      },
      { title: "Sometimes", description: "I do get overwhelmed now and then" },
      {
        title: "Often",
        description: "I frequently struggle to handle everything at once",
      },
      {
        title: "Almost always",
        description:
          "I feel like I’m constantly juggling too many responsibilities",
      },
    ],
  },
  {
    question: "How would you describe your sleep quality over the last week?",
    options: [
      { title: "Excellent", description: "I feel well-rested every day." },
      { title: "Good", description: "I get enough rest most nights." },
      { title: "Fair", description: "I wake up tired sometimes." },
      { title: "Poor", description: "I struggle to get quality sleep." },
    ],
  },
  {
    question: "Have you experienced any of the following in the past week?",
    options: [
      {
        title: "Frequent headaches",
        description: "I’ve noticed consistent pain or pressure in my head",
      },
      {
        title: "Muscle tension or aches",
        description: "I’ve felt persistent strain or soreness in my muscles",
      },
      {
        title: "Fatigue or lack of energy",
        description: "I’ve been struggling with tiredness or low energy",
      },
      {
        title: "None of the above",
        description: "I haven’t experienced any of these symptoms",
      },
    ],
  },
  {
    question: "When you feel stressed, what do you usually do?",
    options: [
      {
        title: "Exercise or meditate",
        description:
          "I prefer to relieve stress with physical activity or mindfulness",
      },
      {
        title: "Talk to someone",
        description:
          "I reach out to friends, family, or a professional to share how I feel",
      },
      {
        title: "Avoid thinking about it",
        description: "I tend to distract myself or ignore the stress",
      },
      {
        title: "Other",
        description: "I have a different approach to handling stress",
      },
    ],
  },
  {
    question: "How would you rate your overall work-life balance?",
    options: [
      { title: "Excellent", description: "I feel balanced and in control." },
      { title: "Good", description: "I’m managing most days." },
      { title: "Fair", description: "I feel stretched too thin sometimes." },
      { title: "Poor", description: "It’s hard to find balance." },
    ],
  },
];

const QuizSection = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const quizRef = useRef(null);
  const resultsRef = useRef(null);

  const startQuiz = () => {
    setQuizStarted(true);
    setTimeout(() => {
      quizRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleAnswer = (answer) => {
    // Save the answer and move to the next question
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Quiz is completed, show results page
      setQuizCompleted(true);
    }
  };

  // Scroll to the top of the results page when the quiz is completed
  useEffect(() => {
    if (quizCompleted) {
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 500);
    }
  }, [quizCompleted]);

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div>
      {/* Show results, MLM earnings simulator, and thank you page after quiz completion */}
      {quizCompleted ? (
        <div ref={resultsRef}>
          {" "}
          {/* Attach ref to the results container */}
          <ResultsPage answers={answers} />
          <MLMEarningsSimulator /> 
          <FinalThankYouPage />
        </div>
      ) : (
        <>
          {/* Hero Section */}
          {!quizStarted && (
            <section className="relative h-screen bg-cover bg-center bg-[url('./assets/mindzen-2.png')]">
              <div className="absolute inset-0 backdrop-blur-sm"></div>
              <div className="relative flex flex-col items-center justify-center h-full text-gray-800 px-6">
                <div className="absolute top-6 left-6">
                  <img src={logo} alt="Main-logo" className="h-12" />
                </div>
                <motion.h1
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="font-poppins font-bold text-4xl md:text-5xl mb-6 text-center text-white"
                >
                  How Stressed Are You? <br/> Take This 60-Second Quiz!
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="font-open-sans text-lg text-[#38f1cc] mb-8 text-center"
                >
                  Find out your stress level and get personalized mindfulness
                  tips to regain balance in your life.
                </motion.p>
                <motion.button
                  onClick={startQuiz}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#3E8E7E] text-white font-open-sans text-lg font-bold py-4 px-8 rounded-full transition-all duration-300 ease-in-out"
                >
                  Start the Quiz!
                </motion.button>
              </div>
            </section>
          )}

          {/* MLM Info Section */}
          {!quizStarted && (
            <section className="bg-[#F5F5F5] p-6">
              <div className="max-w-screen-md mx-auto text-center">
                <h2 className="font-montserrat text-3xl font-bold text-[#3E8E7E] mb-6">
                  Earn While You Train
                </h2>
                <p className="font-roboto text-gray-700 text-lg mb-6">
                  Refer friends & earn commissions as they achieve their fitness
                  goals with you!
                </p>
                <div className="flex justify-center">
                  <img
                    src={referral}
                    alt="Referral Network"
                    className="w-1/2"
                  />
                </div>
              </div>
            </section>
          )}

          {/* Telegram Info Section */}
          {!quizStarted && (
            <section className="bg-white p-6">
              <div className="max-w-screen-md mx-auto text-center">
                <img
                  src={telegram}
                  className="w-12 h-12 m-auto"
                  alt="Telegram Logo"
                />
                <h2 className="font-montserrat text-3xl font-bold text-gray-800 mb-4">
                  You’ll need Telegram
                </h2>
                <p className="font-roboto text-gray-700 text-lg mb-6">
                  Get instant workout updates, nutrition guides, and start
                  earning through referrals!
                </p>
                <button className="bg-[#FB8C00] text-white font-montserrat font-bold text-lg py-4 px-8 rounded-full transition-all duration-300 ease-in-out transform hover:bg-orange-600 active:scale-95">
                  Get Telegram
                </button>
              </div>
            </section>
          )}

          {/* Quiz Section */}
          {quizStarted && (
            <div ref={quizRef} className="pt-16 h-screen pb-10 bg-gray-200">
              <div className="w-[60%] m-auto mb-9">
                <img src={logoDark} alt="Main-logo" />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="relative flex flex-col items-center justify-center bg-white px-6 rounded-lg shadow-lg"
              >
                <p className="text-lg font-semibold text-gray-700 mt-9 mb-2">
                  Step {currentQuestion + 1} of {questions.length}
                </p>
                <div className="w-full bg-gray-300 h-2 mb-8 mt-8">
                  <motion.div
                    initial={{
                      width: `${(currentQuestion / questions.length) * 100}%`,
                    }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5 }}
                    className="bg-purple-400 h-2"
                  />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center font-montserrat">
                  {questions[currentQuestion].question}
                </h2>
                <AnimatePresence mode="sync">
                  {questions[currentQuestion].options.map((option, index) => (
                    <motion.button
                      key={index}
                      onClick={() => handleAnswer(option)}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="w-full flex flex-col text-left bg-teal-500 text-white font-bold p-4 rounded-lg mb-4 shadow-md transition-all hover:bg-purple-400"
                    >
                      <span className="text-lg font-bold font-lato">
                        {option.title}
                      </span>
                      <span className="text-sm text-gray-200">
                        {option.description}
                      </span>
                    </motion.button>
                  ))}
                </AnimatePresence>
              </motion.div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default QuizSection;
