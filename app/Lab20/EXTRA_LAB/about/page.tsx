import React from 'react'
import { Info, Fingerprint, Globe, Shield, Sparkles, MoveRight } from 'lucide-react'

function AboutPage() {
  return (
    <div className="relative min-h-[75vh] w-full flex flex-col items-center justify-center overflow-hidden rounded-[3rem]">
      
      {/* 1. ANIMATED AMBIENT LAYER */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-gradient-to-br from-amber-100/40 to-transparent rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-gradient-to-tl from-indigo-100/40 to-transparent rounded-full blur-[120px] animation-delay-2000" />
        {/* Grain Overlay for Texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      {/* 2. THE FLOATING STAGE */}
      <div className="relative z-10 w-full max-w-3xl">
        
        {/* TOP BADGE */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-slate-100 shadow-sm transition-transform hover:scale-105 cursor-default">
            <Sparkles size={12} className="text-amber-500" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Foundation Layer</span>
          </div>
        </div>

        {/* MAIN CONTENT BOX */}
        <div className="bg-white/60 backdrop-blur-2xl border border-white rounded-[4rem] p-12 lg:p-20 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.05)] relative group">
          
          {/* FLOATING DECORATIVE ICON */}
          <div className="absolute -top-10 -right-4 w-20 h-20 bg-slate-900 rounded-3xl flex items-center justify-center text-white shadow-2xl rotate-12 group-hover:rotate-0 transition-all duration-500">
             <Fingerprint size={32} />
          </div>

          <div className="flex flex-col items-center text-center gap-10">
            {/* LARGE CENTER ICON */}
            <div className="relative">
              <div className="w-28 h-28 bg-gradient-to-b from-slate-50 to-white rounded-[2.5rem] shadow-xl flex items-center justify-center text-slate-800 border border-white">
                <Info size={44} strokeWidth={1.2} />
              </div>
              <div className="absolute -bottom-1 -left-1 w-8 h-8 bg-amber-400 rounded-full border-4 border-white shadow-lg animate-bounce" />
            </div>

            {/* THE HEADLINE (Content Preserved) */}
            <div className="space-y-6">
              <h1 className="text-7xl font-black text-slate-900 tracking-tight leading-[0.9]">
                This is <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500">
                  AboutPage
                </span>
              </h1>
              
              <p className="text-slate-400 text-sm font-medium max-w-md mx-auto leading-relaxed">
                Experience the intersection of nuance and high-performance engineering through our refined design interface.
              </p>
            </div>

           
</div>
</div>
       
      </div>
    </div>
  )
}

export default AboutPage