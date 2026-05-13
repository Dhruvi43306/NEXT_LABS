import React from 'react';
import Link from 'next/link';
export default function ActionDashboard() {
  return (
    <div className="min-h-screen bg-[#fcfcfe] bg-[radial-gradient(45%_45%_at_50%_50%,#f0f4ff_0%,#ffffff_100%)] flex flex-col items-center justify-center p-6 font-sans text-[#4a5568]">
      
      {/* Decorative Background Elements */}
      <div className="fixed top-20 left-[10%] w-[300px] h-[300px] bg-indigo-100/40 rotate-45 pointer-events-none -z-10 blur-3xl" />
      <div className="fixed bottom-20 right-[10%] w-[300px] h-[300px] bg-blue-100/40 -rotate-12 pointer-events-none -z-10 blur-3xl" />

      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-light tracking-tight text-slate-800 uppercase mb-2">
          Multi-Action Dashboard
        </h1>
        <p className="text-slate-400 text-lg">Instant Access to Key Tools</p>
      </header>

      {/* Grid of Action Cards */}
      <main className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        
        {/* Card 1: Calculator (Slate Blue) */}
        <Link href="Lab29/demo2">
        <div className="bg-[#f0f4f8] border border-slate-200/50 rounded-[2rem] p-10 flex flex-col items-center text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <div className="mb-6 p-4 bg-white rounded-2xl shadow-sm text-slate-400">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
             </svg>
          </div>
          <h2 className="text-2xl font-bold text-slate-700 mb-4 uppercase tracking-wide">Basic Calculator</h2>
          <p className="text-slate-500 text-sm mb-8 leading-relaxed">Instant access to key tools basic calculator use.</p>
          <button className="w-full py-4 bg-[#546e7a] hover:bg-[#455a64] text-white font-bold rounded-xl shadow-lg transition-all active:scale-95">
            OPEN CALCULATOR
          </button>
        </div>
        </Link>

        {/* Card 2: Game Portal (Soft Mint) */}
        <Link href="Lab29/demo3">
        <div className="bg-[#e8f7f2] border border-emerald-100 rounded-[2rem] p-10 flex flex-col items-center text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <div className="mb-6 p-4 bg-white rounded-2xl shadow-sm text-emerald-400">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4v-3a2 2 0 00-2-2H5z" />
             </svg>
          </div>
          <h2 className="text-2xl font-bold text-emerald-800 mb-4 uppercase tracking-wide">Game Portal</h2>
          <p className="text-emerald-600/70 text-sm mb-8 leading-relaxed">Play play more with your game and games like that
          snack game.</p>
          <button className="w-full py-4 bg-[#66cdaa] hover:bg-[#57b998] text-white font-bold rounded-xl shadow-lg transition-all active:scale-95">
            PLAY GAME
          </button>
        </div>
</Link>
        {/* Card 3: Count Button (Warm Peach) */}
        <Link href="/Lab29/demo1">
        <div className="bg-[#fff1e6] border border-orange-100 rounded-[2rem] p-10 flex flex-col items-center text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <div className="mb-6 p-4 bg-white rounded-2xl shadow-sm text-orange-400">
             <span className="text-3xl font-bold">1 4</span>
             <div className="text-xs -mt-1 opacity-50">× —</div>
          </div>
          <h2 className="text-2xl font-bold text-orange-800 mb-4 uppercase tracking-wide">Count Button</h2>
          <p className="text-orange-700/60 text-sm mb-8 leading-relaxed">Add count onery tallly keyword talles and add count.</p>
          <button className="w-full py-4 bg-[#ff9e80] hover:bg-[#ff8a65] text-white font-bold rounded-xl shadow-lg transition-all active:scale-95">
            ADD COUNT
          </button>
        </div>
        </Link>

      </main>

      {/* Footer */}
      <footer className="mt-20 text-slate-400 text-xs font-medium tracking-widest uppercase">
        © 2026 Multitool Dashboard. Built with Next.js & Tailwind CSS. Light Edition.
      </footer>
    </div>
  );
}