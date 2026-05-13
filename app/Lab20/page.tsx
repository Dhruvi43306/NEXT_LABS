import React from 'react';
import Link from 'next/link';
function Lab20page() {
  return (
    <div className="min-h-screen w-full bg-[#fdfcff] flex items-center justify-center p-6 font-sans selection:bg-violet-100">
      
      {/* BACKGROUND: Soft Geometric Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-5%] left-[-5%] w-[40%] h-[40%] bg-violet-50 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] right-[5%] w-[30%] h-[50%] bg-lime-50/60 rounded-full blur-[110px]" />
      </div>

      <div className="relative w-full max-w-4xl">
        
        {/* HEADER: Minimalist Glass Bar */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 px-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white border border-violet-100 rounded-3xl flex items-center justify-center shadow-sm">
              <div className="w-6 h-6 bg-gradient-to-br from-violet-400 to-fuchsia-400 rounded-lg rotate-12" />
            </div>
            <div>
              <h1 className="text-3xl font-black text-slate-800 tracking-tighter leading-none">
                Lab20<span className="text-violet-500 italic">.</span>page
              </h1>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mt-1">Instance: X-99022</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 bg-white/50 backdrop-blur-md p-1.5 rounded-2xl border border-white shadow-sm">
            {['Overview', 'Docs', 'Settings'].map((item, i) => (
              <button key={item} className={`px-5 py-2 rounded-xl text-[11px] font-black uppercase tracking-wider transition-all ${i === 0 ? 'bg-violet-500 text-white shadow-md shadow-violet-100' : 'text-slate-400 hover:text-slate-600'}`}>
                {item}
              </button>
            ))}
          </div>
        </header>

        {/* MAIN DISPLAY: Stacked Bento Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* PRIMARY CARD: Content & Action */}
          <div className="bg-white rounded-[3.5rem] p-10 md:p-12 border border-slate-50 shadow-[0_30px_60px_-15px_rgba(100,100,150,0.05)] relative overflow-hidden flex flex-col justify-between min-h-[400px]">
            {/* Top Badge */}
            <div className="flex justify-between items-start relative z-10">
              <div className="w-14 h-14 bg-lime-50 rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="bg-slate-50 text-slate-400 text-[9px] font-black px-3 py-1 rounded-full border border-slate-100 uppercase tracking-widest">Stable Release</span>
            </div>

            <div className="relative z-10 mt-8">
              <h2 className="text-4xl font-black text-slate-900 tracking-tight leading-tight mb-4">
                Initialize <br />Module
              </h2>
              <p className="text-slate-400 font-medium leading-relaxed text-base">
                Start the Lab20 core process to begin the real-time data stream.
              </p>
            </div>
            <Link href = "/Lab20/home">
            <button className="group mt-10 w-full bg-purple-600 hover:bg-purple-600 text-white py-5 rounded-3xl font-black uppercase tracking-widest text-xs transition-all shadow-xl shadow-violet-200 flex items-center justify-center gap-3">
              Enter Lab20
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            </Link>

             <Link href = "/Lab20/EXTRA_LAB/home">
            <button className="group mt-10 w-full  bg-purple-600 hover:bg-purple-600 text-white py-5 rounded-3xl font-black uppercase tracking-widest text-xs transition-all shadow-xl shadow-violet-200 flex items-center justify-center gap-3">
              Extra Lab20
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            </Link>
          </div>

          {/* SECONDARY STACK: Analytics & Security */}
          <div className="flex flex-col gap-8">
            
            {/* METRICS: Real-time Tracking */}
            <div className="flex-1 bg-violet-50/30 rounded-[3rem] p-10 border border-violet-100/50 flex flex-col justify-between group">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-black text-slate-700 uppercase text-[10px] tracking-widest">Real-time Metrics</h3>
                  <span className="text-xs font-black text-violet-500 bg-white px-2 py-1 rounded-lg border border-violet-100">v2.2</span>
                </div>
                <p className="text-sm font-bold text-slate-400 italic">Latency Tracking</p>
              </div>

              <div className="flex items-end gap-2 h-24 mt-6">
                {[30, 50, 40, 80, 55, 70, 45, 90].map((h, i) => (
                  <div key={i} className="flex-1 bg-violet-200 rounded-full group-hover:bg-violet-400 transition-all duration-700" style={{ height: `${h}%` }}></div>
                ))}
              </div>
            </div>

            {/* SECURITY: Small Highlight Card */}
            <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center shadow-lg shadow-slate-200">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Security</p>
                  <p className="text-sm font-black text-slate-800 tracking-tight">AES-256 Protocol</p>
                </div>
              </div>
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-lime-400 shadow-[0_0_8px_rgba(163,230,53,1)]" />
              </div>
            </div>

          </div>
        </div>

        {/* REFINED FOOTER */}
        <footer className="mt-12 flex justify-center">
           <div className="px-8 py-3 bg-white/60 backdrop-blur-sm border border-white rounded-full flex gap-10 items-center text-[9px] font-black text-slate-400 uppercase tracking-[0.4em]">
              <span className="hover:text-violet-500 cursor-help transition-colors">Initialize Module</span>
              <span className="hover:text-violet-500 cursor-help transition-colors">Real-time Metrics</span>
              <span className="hover:text-violet-500 cursor-help transition-colors">Stable Release</span>
           </div>
        </footer>

      </div>
    </div>
  );
}

export default Lab20page;