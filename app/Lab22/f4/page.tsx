import React from 'react'

function F4page() {
  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col items-center justify-center p-6 antialiased selection:bg-emerald-100">
      
      {/* Background Decorative Element: Soft Cool Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-emerald-50/60 rounded-full blur-[100px] -z-10 animate-pulse" />

      <div className="w-full max-w-[380px] relative animate-in fade-in zoom-in-95 duration-700">
        
        {/* Main Interface Card */}
        <div className="bg-white/80 backdrop-blur-xl border border-emerald-100/50 rounded-[2.5rem] shadow-[0_20px_50px_-12px_rgba(16,185,129,0.12)] overflow-hidden">
          
          {/* Header Bar: Minimalist System Info */}
          <div className="px-8 py-4 border-b border-emerald-50/50 flex items-center justify-between bg-white/40">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Node_Segment_F4</span>
            </div>
            <div className="text-[9px] font-mono text-slate-300 font-bold tracking-widest uppercase">
              Auth: 04
            </div>
          </div>

          {/* Content Body */}
          <div className="p-10">
            
            {/* Identity Group */}
            <div className="flex items-center gap-5 mb-10 pb-8 border-b border-emerald-50/50">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 flex items-center justify-center text-2xl shadow-sm rotate-3">
                📡
              </div>
              <div className="flex-1">
                <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md inline-block mb-1 tracking-tight">
                  (..)(..) Deep_Jump
                </span>
                <h1 className="text-2xl font-[1000] text-slate-900 tracking-tighter leading-none italic">
                  f4<span className="text-emerald-500">_</span>node
                </h1>
                <p className="text-[9px] font-mono text-slate-300 uppercase tracking-widest mt-1">Status: Primary_Active</p>
              </div>
            </div>

            {/* Description Block */}
            <div className="space-y-6">
              <div className="p-5 rounded-2xl bg-white/50 border border-slate-100">
                <p className="text-[13px] text-slate-600 leading-relaxed font-medium">
                  The <span className="text-slate-900 font-bold">F4 Module</span> has been loaded. This route was accessed via a double-directory interception protocol.
                </p>
              </div>

              {/* Functional Grid Detail */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex flex-col gap-1">
                  <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Protocol</span>
                  <span className="text-[11px] font-bold text-slate-700 underline decoration-emerald-200">INTERCEPT</span>
                </div>
                <div className="p-3 rounded-xl bg-emerald-50/50 border border-emerald-100 flex flex-col gap-1">
                  <span className="text-[8px] font-black text-emerald-400 uppercase tracking-widest">State</span>
                  <span className="text-[11px] font-black text-emerald-600 italic">200_RESOLVE</span>
                </div>
              </div>
            </div>
          </div>

          {/* Clean Utility Footer */}
          <div className="px-10 py-5 bg-emerald-50/30 flex justify-center">
             <span className="text-[9px] font-black text-emerald-200 uppercase tracking-[0.8em] italic">
               System.Lab22.f4
             </span>
          </div>
        </div>
      </div>

      {/* Background Floater Label */}
      <div className="mt-8 text-[10px] font-mono font-bold text-slate-300 uppercase tracking-[0.5em] italic">
        Route Intercept Visualization // 2026
      </div>
    </div>
  )
}

export default F4page