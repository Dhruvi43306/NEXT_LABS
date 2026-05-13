import React from 'react'

function InterceptingF4page() {
  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-6 bg-slate-50/80 backdrop-blur-xl">
      <div className="w-full max-w-lg bg-white border border-slate-200 rounded-[3rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] p-12 relative">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-t-full" />
        
        <div className="mb-10 text-center">
          <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl rotate-12 flex items-center justify-center mx-auto mb-6 border border-emerald-100 font-black text-xl shadow-lg">
            ↑↑
          </div>
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Global Capture Mode</span>
          <h2 className="text-4xl font-black text-slate-900 tracking-tighter mt-2">
            (..)(..)Intercepting <span className="text-emerald-500 italic">F4</span>
          </h2>
        </div>

        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 text-sm text-slate-500 font-medium leading-relaxed italic text-center">
          "Double-level jump detected. Rendering folder-level F4 logic as a standalone module."
        </div>

        <button className="w-full mt-10 py-5 bg-slate-900 text-white rounded-2xl font-black text-lg hover:shadow-2xl transition-all active:scale-95">
          Resume Flow
        </button>
      </div>
    </div>
  )
}

export default InterceptingF4page