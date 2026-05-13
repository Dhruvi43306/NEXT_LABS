import React from 'react'

function F3page() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center relative overflow-hidden selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-indigo-50/50 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-sky-50/50 rounded-full blur-[100px]" />

      {/* Main Content Card */}
      <div className="relative z-10 w-full max-w-4xl px-8 flex flex-col items-center">
        
        {/* Subtle Badge */}
        <div className="mb-8 flex items-center gap-2 px-4 py-2 rounded-full border border-slate-100 bg-white/50 backdrop-blur-md shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
            Direct Path Loaded
          </span>
        </div>

        {/* Hero Title */}
        <div className="text-center space-y-2">
          <h1 className="text-[clamp(4rem,15vw,10rem)] font-[1000] tracking-tighter leading-[0.8] text-slate-900 opacity-10 absolute left-1/2 -translate-x-1/2 -top-12 select-none pointer-events-none uppercase">
            Station
          </h1>
          <h2 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tight animate-in zoom-in-95 duration-1000">
            F3<span className="text-indigo-600">.</span>page
          </h2>
        </div>

        {/* Content Divider */}
        <div className="w-12 h-1 bg-slate-900 rounded-full my-8 animate-in scale-x-0 duration-1000 delay-300 origin-center" style={{ animationFillMode: 'forwards' }} />

        {/* Description Block */}
        <div className="max-w-md text-center">
          <p className="text-slate-500 font-medium text-lg leading-relaxed">
            You have accessed the <span className="text-slate-900 font-bold underline decoration-indigo-200 underline-offset-4">Primary Route</span>. 
            Unlike the intercepted view, this is the persistent state of the component.
          </p>
        </div>

        {/* Interactive Element */}
        <div className="mt-12 group cursor-pointer">
          <div className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold shadow-2xl shadow-slate-200 group-hover:bg-indigo-600 group-hover:-translate-y-1 transition-all duration-300">
            Explore Documentation
          </div>
          <div className="mt-4 text-center">
             <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest group-hover:text-indigo-400 transition-colors">
               Press [ESC] to go back
             </span>
          </div>
        </div>
      </div>

      {/* Side Label (Vertical) */}
      <div className="hidden lg:block absolute left-12 top-1/2 -translate-y-1/2 origin-left -rotate-90">
        <span className="text-[10px] font-black text-slate-300 uppercase tracking-[1em]">
          Route // Lab21 / F3
        </span>
      </div>
    </div>
  )
}

export default F3page