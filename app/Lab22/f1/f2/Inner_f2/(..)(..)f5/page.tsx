import React from 'react'

function InterseptingF5page() {
  return (
    <div className="fixed inset-0 z-[1100] flex items-center justify-center p-6 bg-slate-950/90 backdrop-blur-2xl">
      <div className="relative w-full max-w-md bg-slate-900 border border-white/10 rounded-[2.5rem] p-12 text-center shadow-[0_0_100px_rgba(79,70,229,0.2)]">
        
        {/* Animated Background Ring */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-indigo-500 rounded-full animate-ping" />
        </div>

        <div className="relative z-10">
          <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/20 text-indigo-400 text-[10px] font-black uppercase tracking-widest border border-indigo-500/30 mb-8">
            Deep Intercept Target
          </div>

          <h2 className="text-5xl font-black text-white tracking-tighter mb-4">
            (...)Intersepting <br/>
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">F5 page</span>
          </h2>

          <p className="text-slate-400 text-sm font-medium leading-relaxed mb-10 px-4">
            Navigation intercepted at the <span className="text-white">Inner_f2</span> boundary. 
            Level depth: 2 tiers upward from current context.
          </p>

          <button className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-black shadow-[0_10px_30px_rgba(79,70,229,0.4)] hover:bg-indigo-500 transition-all active:scale-95 uppercase tracking-widest text-xs">
            Acknowledge Jump
          </button>
        </div>
      </div>
    </div>
  )
}

export default InterseptingF5page