"use client"
import React, { useState } from 'react';
import { 
  CheckCircle, ArrowRight, Clock, HelpCircle, 
  Terminal, Lightbulb, Trophy, RotateCcw, 
  Target, AlertCircle 
} from 'lucide-react';

// --- DATASET (Mocking your SQL Table Structure) ---
const QUIZ_DATA = [
  {
    question_id: 1,
    question_text: "Which file convention is used for defining a layout in the App Router?",
    option_a: "main.tsx",
    option_b: "layout.js",
    option_c: "template.js",
    option_d: "page.tsx",
    correct_option: "B",
    explanation: "The layout.js file is used to create UI that is shared across multiple pages.",
    marks: 1
  },
  {
    question_id: 2,
    question_text: "By default, components in the Next.js App Router are:",
    option_a: "Client Components",
    option_b: "Static Components",
    option_c: "Server Components",
    option_d: "Library Components",
    correct_option: "C",
    explanation: "Next.js uses Server Components by default to reduce the amount of JavaScript sent to the client.",
    marks: 1
  },
  {
    question_id: 3,
    question_text: "What is the primary command to start a Next.js development server?",
    option_a: "npm start",
    option_b: "npm run dev",
    option_c: "npm build",
    option_d: "npm next",
    correct_option: "B",
    explanation: "The 'dev' script runs Next.js in development mode with Fast Refresh.",
    marks: 1
  },
  {
    question_id: 4,
    question_text: "Which hook is required to fetch URL search parameters in a Client Component?",
    option_a: "useRouter",
    option_b: "useParams",
    option_c: "usePathname",
    option_d: "useSearchParams",
    correct_option: "D",
    explanation: "useSearchParams is a client-side hook for reading the current URL's query string.",
    marks: 1
  },
  {
    question_id: 5,
    question_text: "Which folder in the project structure is used for public assets like images?",
    option_a: "/static",
    option_b: "/assets",
    option_c: "/public",
    option_d: "/images",
    correct_option: "C",
    explanation: "Files in the /public folder can be referenced by your code starting from the base URL.",
    marks: 1
  }
];

const QuizModule = () => {
  // --- STATE MANAGEMENT ---
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = QUIZ_DATA[currentIndex];
  const totalQuestions = QUIZ_DATA.length;
  const progress = ((currentIndex + 1) / totalQuestions) * 100;

  // --- LOGIC ---
  const handleVerify = () => {
    if (selectedOption === currentQuestion.correct_option) {
      setScore(prev => prev + currentQuestion.marks);
    }
    setIsAnswered(true);
  };

  const handleNext = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setShowResults(false);
  };

  // --- RESULTS SCREEN ---
  if (showResults) {
    const percentage = (score / totalQuestions) * 100;
    return (
      <div className="min-h-screen bg-[#FBFBFC] flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-white border border-slate-200 rounded-[40px] p-10 text-center shadow-2xl shadow-indigo-100/50 animate-in zoom-in-95 duration-500">
          <div className="w-24 h-24 bg-indigo-600 rounded-[32px] flex items-center justify-center text-white mx-auto mb-8 shadow-xl shadow-indigo-200">
            <Trophy size={48} />
          </div>
          <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-2">Quiz Complete</h2>
          <p className="text-slate-500 font-medium mb-8">Performance metrics for Module 01</p>
          
          <div className="grid grid-cols-2 gap-4 mb-10">
            <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
              <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Final Score</span>
              <span className="text-2xl font-black text-slate-900">{score} / {totalQuestions}</span>
            </div>
            <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
              <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Accuracy</span>
              <span className="text-2xl font-black text-slate-900">{percentage}%</span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <button onClick={resetQuiz} className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-indigo-600 transition-all">
              <RotateCcw size={16} /> Retake Lab
            </button>
            <button className="w-full py-4 bg-white text-slate-900 border border-slate-200 rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] hover:bg-slate-50 transition-all">
              Continue Learning
            </button>
          </div>
        </div>
      </div>
    );
  }

  // --- QUESTION SCREEN ---
  return (
    <div className="min-h-screen bg-[#FBFBFC] text-[#334155] font-sans antialiased pb-20">
      {/* Progress Line */}
      <div className="fixed top-0 left-0 w-full h-1.5 bg-slate-100 z-50">
        <div className="h-full bg-indigo-600 transition-all duration-700 ease-out" style={{ width: `${progress}%` }} />
      </div>

      <nav className="fixed top-1.5 w-full z-40 bg-white/80 backdrop-blur-md border-b border-slate-200/50 px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="px-3 py-1 rounded-lg bg-slate-900 text-white font-black text-[10px] uppercase tracking-widest">
            Q. {currentIndex + 1}
          </div>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Next.js Fundamentals</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-xl border border-indigo-100 font-black text-[10px] uppercase tracking-widest">
           <Target size={14} /> Score: {score}
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 pt-32">
        <header className="mb-10 animate-in fade-in slide-in-from-top-4 duration-500">
          <div className="flex items-center gap-2 text-indigo-500 mb-3">
             <HelpCircle size={18} />
             <span className="text-[10px] font-black uppercase tracking-[0.2em]">Select One Answer</span>
          </div>
          <h1 className="text-2xl font-bold text-slate-900 leading-tight">
            {currentQuestion.question_text}
          </h1>
        </header>

        <div className="grid grid-cols-1 gap-3 mb-12">
          {['A', 'B', 'C', 'D'].map((key) => {
            const optionKey = `option_${key.toLowerCase()}` as keyof typeof currentQuestion;
            const isSelected = selectedOption === key;
            const isCorrect = isAnswered && key === currentQuestion.correct_option;
            const isWrong = isAnswered && isSelected && key !== currentQuestion.correct_option;

            return (
              <button
                key={key}
                disabled={isAnswered}
                onClick={() => setSelectedOption(key)}
                className={`w-full p-5 rounded-[24px] border-2 text-left flex items-center justify-between transition-all duration-300 group
                  ${isSelected ? 'border-indigo-600 bg-indigo-50/30' : 'border-slate-100 bg-white hover:border-slate-300'}
                  ${isCorrect ? 'border-emerald-500 bg-emerald-50' : ''}
                  ${isWrong ? 'border-rose-500 bg-rose-50' : ''}
                `}
              >
                <div className="flex items-center gap-4">
                  <span className={`w-8 h-8 rounded-xl flex items-center justify-center text-[11px] font-black transition-colors
                    ${isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200'}
                    ${isCorrect ? 'bg-emerald-500 text-white' : ''}
                    ${isWrong ? 'bg-rose-500 text-white' : ''}
                  `}>
                    {key}
                  </span>
                  <span className={`font-bold text-[15px] ${isSelected ? 'text-indigo-900' : 'text-slate-600'}`}>
                    {currentQuestion[optionKey] as string}
                  </span>
                </div>
                {isCorrect && <CheckCircle size={20} className="text-emerald-500" />}
                {isWrong && <AlertCircle size={20} className="text-rose-500" />}
              </button>
            );
          })}
        </div>

        {/* Dynamic Explanation Block */}
        {isAnswered && (
          <div className="p-8 rounded-[32px] bg-slate-900 text-white mb-12 animate-in slide-in-from-bottom-6 duration-500">
            <div className="flex items-center gap-2 mb-4 text-indigo-400">
              <Lightbulb size={18} />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Scientific Explanation</span>
            </div>
            <p className="text-[15px] text-slate-300 leading-relaxed font-medium italic">
              "{currentQuestion.explanation}"
            </p>
          </div>
        )}

        {/* Footer Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-slate-200">
          <div className="flex items-center gap-2 text-slate-400 text-[10px] font-bold uppercase tracking-widest">
            <Terminal size={14} /> Value: {currentQuestion.marks} Marks
          </div>
          
          {!isAnswered ? (
            <button 
              onClick={handleVerify}
              disabled={!selectedOption}
              className="px-10 py-4 bg-indigo-600 text-white rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] shadow-xl shadow-indigo-100 transition-all active:scale-95 disabled:opacity-50"
            >
              Verify Signal
            </button>
          ) : (
            <button 
              onClick={handleNext}
              className="px-10 py-4 bg-slate-900 text-white rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] flex items-center gap-3 shadow-xl transition-all active:scale-95 hover:bg-indigo-600"
            >
              {currentIndex === totalQuestions - 1 ? 'Finalize Results' : 'Next Transmission'} 
              <ArrowRight size={16} />
            </button>
          )}
        </div>
      </main>
    </div>
  );
};

export default QuizModule;