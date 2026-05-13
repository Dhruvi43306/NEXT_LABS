import React from 'react';

function Managerpage() {
  return (
    <div className="min-h-screen bg-[#fafcfe] flex flex-col items-center justify-center p-6 relative overflow-hidden">
      
      {/* Decorative Floating Elements (Parallax Effect) */}
      <div className="absolute top-20 left-[15%] w-64 h-64 bg-emerald-100/40 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-[15%] w-72 h-72 bg-blue-100/40 rounded-full blur-3xl" />

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl">
        
        {/* Status Badge */}
        <div className="mb-8 transform transition-transform hover:scale-105 cursor-default">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-emerald-100 shadow-[0_4px_12px_rgba(16,185,129,0.08)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-emerald-600">
              System Live
            </span>
          </div>
        </div>

        {/* Hero Text */}
        <h1 className="text-5xl md:text-7xl font-black text-slate-800 tracking-tight leading-[1.1] mb-6">
          Management <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-500">Workspace</span>
        </h1>
        
        <p className="text-slate-500 text-lg md:text-xl font-medium max-w-xl mb-12 leading-relaxed">
          Oversee projects, manage team performance, and track real-time analytics from your personalized dashboard.
        </p>

        {/* Action Buttons */}
        

        {/* Scroll Indicator (Refined) */}
        <div className="mt-24 flex flex-col items-center gap-4">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">
            Insights Await
          </span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-emerald-400 to-transparent" />
        </div>
      </div>

      {/* Subtle Background Iconography */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 opacity-[0.03] rotate-12 pointer-events-none hidden xl:block">
        <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M3 3v18h18M7 16l4-4 4 4 5-5" />
        </svg>
      </div>
    </div>
  );
}

export default Managerpage;