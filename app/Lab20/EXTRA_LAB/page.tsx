"use client";
import React from 'react'
import Link from 'next/link'
function Lab_1Page() {
  return (
    <div className="min-h-screen bg-[#fcfdff] text-slate-800 font-sans selection:bg-indigo-100">
      
      {/* Soft Background Accents */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-50/50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50/50 rounded-full blur-[100px] translate-y-1/4 -translate-x-1/4" />
      </div>

      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center p-6">
        
        {/* Main Lab Container */}
        <div className="w-full max-w-4xl bg-white/70 backdrop-blur-2xl border border-white rounded-[2.5rem] p-2 shadow-[0_20px_50px_rgba(0,0,0,0.04)]">
          
          <div className="border border-indigo-50/50 rounded-[2.2rem] overflow-hidden bg-gradient-to-br from-white to-slate-50/50">
            
            <div className="flex flex-col md:flex-row">
              {/* Left Sidebar: Lab Info */}
              <div className="w-full md:w-72 bg-slate-50/80 p-8 border-b md:border-b-0 md:border-r border-slate-100/80">
                <div className="flex items-center gap-2 mb-8">
                  <div className="h-3 w-3 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Research Hub</span>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <p className="text-[10px] uppercase tracking-tighter text-slate-400 font-bold mb-1">Station</p>
                    <p className="text-sm font-mono text-indigo-600">LAB-UNIT-01</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-tighter text-slate-400 font-bold mb-1">Status</p>
                    <p className="text-sm text-slate-600">Ready for testing</p>
                  </div>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="flex-1 p-10 md:p-16 relative">
                {/* Subtle Grid Pattern in background */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                     style={{ backgroundImage: 'radial-gradient(#4f46e5 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />

                <div className="relative">
                  {/* Content starts here */}
                  <span className="text-xs font-bold text-indigo-500 tracking-widest uppercase mb-4 block">Experimental View</span>
                  
                  <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-6">
                    This is <span className="bg-gradient-to-r from-indigo-600 to-violet-500 bg-clip-text text-transparent">Lab_1Page</span>
                  </h1>

                  <p className="text-slate-500 text-lg leading-relaxed max-w-md mb-10">
                    Your digital sandbox for modern experimentation and component analysis.
                  </p>

                  <div className="flex flex-wrap gap-4">
                   <Link href = "/LAB_1/home"> <button className="px-8 py-3 bg-slate-900 text-white rounded-xl font-bold shadow-lg shadow-slate-200 transition-all hover:-translate-y-1 hover:bg-slate-800 active:scale-95">
                      Enter Lab
                    </button></Link>
                    <button className="px-8 py-3 bg-white border border-slate-200 text-slate-600 rounded-xl font-bold hover:bg-slate-50 transition-colors">
                      Protocols
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Footer */}
        <div className="mt-8 flex gap-8">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">System Nominal</span>
          </div>
          <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest underline decoration-indigo-200 underline-offset-4 cursor-help">Documentation</span>
        </div>
      </main>
    </div>
  )
}

export default Lab_1Page