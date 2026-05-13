import React from 'react'

function Interceptingf2page() {
  return (
    <div className="mt-8 relative animate-in fade-in slide-in-from-top-4 duration-500">
      {/* Decorative "Intercept Line" */}
      <div className="absolute -top-6 left-12 w-[1px] h-6 bg-slate-200 border-l border-dashed border-slate-400" />
      
      <div className="bg-white/60 backdrop-blur-md border-2 border-dashed border-slate-200 rounded-[2.5rem] p-10 flex flex-col md:flex-row items-center gap-8 shadow-inner">
        <div className="relative">
          <div className="w-20 h-20 rounded-2xl bg-indigo-600 rotate-3 shadow-2xl flex items-center justify-center text-white font-black text-2xl">
            (.)
          </div>
          <div className="absolute inset-0 w-20 h-20 rounded-2xl border-2 border-indigo-600 animate-ping opacity-20" />
        </div>

        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-indigo-500" />
            <span className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-widest">Route Intercepted Successfully</span>
          </div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tighter">
            (.)Intercepting <span className="text-indigo-600 italic">f2</span> page
          </h2>
          <p className="text-slate-500 text-sm mt-2 font-medium">Rendered via the local directory segment without full page navigation.</p>
        </div>
      </div>
    </div>
  )
}

export default Interceptingf2page