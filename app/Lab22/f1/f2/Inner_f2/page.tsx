import React from 'react'
import Link from 'next/link'

function InnerF2page() {
  return (
    <div className="mt-16 relative max-w-2xl mx-auto p-1">
      {/* Decorative Outer Ring */}
      <div className="absolute -inset-8 bg-[radial-gradient(circle_at_center,_#e0f2fe_0%,_transparent_70%)] opacity-40 -z-10 animate-pulse" />
      
      <div className="relative bg-white/60 backdrop-blur-3xl border border-white rounded-[3rem] shadow-[0_32px_80px_-16px_rgba(186,230,253,0.4)] overflow-hidden">
        
        {/* Top Status Header */}
        <div className="bg-slate-50/50 border-b border-slate-100 px-10 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_#22d3ee]" />
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Directory.Deep_Scan</span>
          </div>
          <span className="font-mono text-[10px] text-slate-300">ID: F2_INTERNAL_01</span>
        </div>

        <div className="p-12">
          {/* Main Title with unique layout */}
          <div className="flex items-start gap-6 mb-12">
            {/* <div className="bg-white shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] border border-slate-100 w-24 h-24 rounded-3xl flex items-center justify-center text-4xl group hover:rotate-6 transition-transform duration-500"> */}
              {/* <span className="drop-shadow-sm group-hover:scale-110 transition-transform">🧬</span> */}
            {/* </div> */}
            
            <div className="flex-1 pt-2">
              <h3 className="text-5xl font-[1000] text-slate-900 tracking-tighter leading-none mb-4">
                Inner <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                  F2_Segment
                </span>
              </h3>
              <p className="text-slate-400 text-sm font-medium leading-relaxed max-w-xx">
              This is a nested route segment. Intercepting a route from here will jump two levels up in the hierarchy              </p>
            </div>
          </div>

          {/* Action Module */}
          <div className="relative pt-10 border-t border-dashed border-slate-200">
            {/* The "Bridge" Line */}
            <div className="absolute -top-[1px] left-12 w-12 h-[2px] bg-cyan-500 shadow-[0_0_10px_#22d3ee]" />

            <Link 
              href="/Lab22/f5" 
              className="group relative flex items-center justify-between w-full p-2 bg-slate-50 rounded-[2rem] border border-slate-100 transition-all hover:bg-white hover:shadow-2xl hover:shadow-cyan-100 hover:-translate-y-1 active:scale-[0.98]"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white rounded-[1.5rem] shadow-sm flex items-center justify-center text-cyan-600 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                  </svg>
                </div>
                <div>
                  <span className="block text-[10px] font-black text-cyan-600 uppercase tracking-widest mb-0.5">Initialize Intercept</span>
                  <span className="text-lg font-black text-slate-800 tracking-tight">Launch F5 Module</span>
                </div>
              </div>

              <div className="pr-6">
                <span className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-[10px] font-mono text-slate-400 group-hover:border-cyan-200 group-hover:text-cyan-600 transition-colors">
                  (..)(..)
                </span>
              </div>
            </Link>
          </div>
        </div>

        {/* Footer Technical Detail */}
        <div className="bg-slate-50/80 px-10 py-6 text-center">
           <p className="text-[9px] font-mono text-slate-400 uppercase tracking-[0.6em]">
             System: Lab22 // Protocol: Intercept_Route
           </p>
        </div>
      </div>

      {/* Background Floater */}
      <div className="absolute -top-12 -right-8 w-32 h-32 bg-cyan-100/30 rounded-full blur-3xl -z-10" />
    </div>
  )
}

export default InnerF2page