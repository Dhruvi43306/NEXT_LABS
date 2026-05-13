"use client"
import React, { use } from 'react';
import { 
  ArrowLeft, Timer, HelpCircle, Trophy, 
  Play, ShieldCheck, Zap, BookOpen 
} from 'lucide-react';

const StartQuizPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const resolvedParams = use(params);
  
  // Example data based on your database "topics" and "tasks"
  const quizInfo = {
    title: "Next.js Fundamentals",
    module: "Module 01",
    questions: 10,
    timeLimit: "15 Minutes",
    passingScore: "80%",
    difficulty: "Intermediate",
    description: "This assessment covers Server Components, Routing, and Data Fetching basics in the App Router architecture."
  };

  return (
    <div className="min-h-screen bg-[#FBFBFC] text-slate-900 font-sans antialiased">
      {/* --- TOP NAV --- */}
      <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-slate-200/50 px-8 py-4 flex items-center justify-between">
        <button onClick={() => window.history.back()} className="p-2.5 rounded-xl hover:bg-slate-100 transition-colors text-slate-500">
          <ArrowLeft size={20} />
        </button>
        <div className="flex flex-col items-center">
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Assessment Mode</span>
          <span className="text-xs font-bold text-slate-900">{quizInfo.module}</span>
        </div>
        <div className="w-10" /> {/* Spacer */}
      </nav>

      <main className="max-w-4xl mx-auto px-6 pt-32 pb-24 flex flex-col items-center">
        {/* --- HEADER --- */}
        <div className="w-20 h-20 rounded-3xl bg-indigo-600 flex items-center justify-center text-white shadow-xl shadow-indigo-100 mb-8">
          <HelpCircle size={40} />
        </div>
        
        <h1 className="text-4xl font-bold tracking-tight text-center mb-4">{quizInfo.title}</h1>
        <p className="text-slate-500 text-center max-w-lg mb-12 text-lg leading-relaxed">
          {quizInfo.description}
        </p>

        {/* --- STATS GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mb-12">
          {[
            { label: "Questions", value: quizInfo.questions, icon: <BookOpen className="text-blue-500" /> },
            { label: "Duration", value: quizInfo.timeLimit, icon: <Timer className="text-amber-500" /> },
            { label: "Requirement", value: quizInfo.passingScore, icon: <Trophy className="text-emerald-500" /> }
          ].map((stat, i) => (
            <div key={i} className="bg-white border border-slate-200 p-6 rounded-[24px] flex flex-col items-center shadow-sm">
              <div className="p-3 bg-slate-50 rounded-2xl mb-3">{stat.icon}</div>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{stat.label}</span>
              <span className="font-bold text-slate-900">{stat.value}</span>
            </div>
          ))}
        </div>

        {/* --- GUIDELINES --- */}
        <div className="w-full bg-white border border-slate-200 rounded-[32px] p-8 mb-12">
          <h3 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-6">Quiz Protocols</h3>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="mt-1 text-indigo-600"><Zap size={18} /></div>
              <p className="text-sm text-slate-600 font-medium">Once started, the timer cannot be paused.</p>
            </div>
            <div className="flex gap-4">
              <div className="mt-1 text-indigo-600"><ShieldCheck size={18} /></div>
              <p className="text-sm text-slate-600 font-medium">Ensure you have a stable connection; refresh may reset progress.</p>
            </div>
          </div>
        </div>

        {/* --- ACTION --- */}
        <button className="w-full max-w-xs py-5 bg-slate-900 text-white rounded-[24px] font-black text-xs uppercase tracking-widest flex items-center justify-center gap-4 hover:bg-indigo-600 transition-all shadow-xl shadow-slate-200 active:scale-95">
          Begin Assessment <Play size={16} fill="currentColor" />
        </button>
      </main>
    </div>
  );
};

export default StartQuizPage;