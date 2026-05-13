"use client"
import React from 'react'
import { 
  Sparkles, 
  Fingerprint, 
  LayoutGrid,
  Zap,
  ArrowRight
} from 'lucide-react'
import Link from 'next/link'
export default function AdminPage() {
  return (
    <>
     
    <div className="min-h-screen bg-[#F8F9FB] flex items-center justify-center p-6 font-sans selection:bg-orange-100">
      
      {/* --- AMBIENT BACKGROUND AURA --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-100/40 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-indigo-100/30 rounded-full blur-[100px]" />
      </div>

      {/* --- COMPACT HERO UNIT --- */}
      <div className="relative w-full max-w-2xl animate-in fade-in zoom-in duration-1000">
        
        {/* FLOATING ACCENT: THE FINGERPRINT (Scaled down) */}
        <div className="absolute -top-6 -right-6 z-20">
          <div className="w-14 h-14 bg-slate-900 rounded-2xl shadow-2xl flex items-center justify-center text-white rotate-12 hover:rotate-0 transition-transform duration-500">
            <Fingerprint size={24} strokeWidth={1.5} />
          </div>
        </div>

        {/* MASTER GLASS CARD */}
        <div className="bg-white/60 backdrop-blur-3xl rounded-[3rem] p-1.5 border border-white shadow-[0_32px_64px_-16px_rgba(0,0,0,0.04)]">
          <div className="bg-white rounded-[2.8rem] p-10 lg:p-16 flex flex-col items-center text-center relative overflow-hidden">
            
            {/* SUBTLE LOGO GLOW */}
            <div className="absolute top-0 inset-x-0 h-1 w-full bg-gradient-to-r from-transparent via-orange-200 to-transparent opacity-50" />

            {/* FOUNDATION TAG */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50/50 border border-orange-100/50 rounded-full">
                <Sparkles size={10} className="text-orange-400" />
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-orange-500/70">
                  Foundation v1.0
                </span>
              </div>
            </div>

            {/* MINIMAL ICON ASSEMBLY */}
            <div className="relative mb-10">
              <div className="w-20 h-20 bg-slate-50 rounded-[1.8rem] border border-slate-100 flex items-center justify-center group cursor-help transition-all duration-500 hover:border-orange-200 hover:bg-white hover:shadow-xl hover:shadow-orange-100">
                <LayoutGrid size={32} className="text-slate-900 group-hover:text-orange-500 transition-colors" strokeWidth={1.2} />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-400 rounded-full border-[3px] border-white shadow-sm animate-bounce" />
              </div>
            </div>

            {/* COMPACT TYPOGRAPHY */}
            <div className="space-y-4 max-w-sm">
              <h1 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter leading-none">
                This is <br />
                <span className="italic font-serif text-transparent bg-clip-text bg-gradient-to-br from-orange-400 via-rose-500 to-indigo-600">
                  AdminPage
                </span>
              </h1>
              
              <p className="text-slate-400 text-sm font-medium leading-relaxed opacity-80">
                Engineering nuance through a refined <br /> high-performance interface.
              </p>
            </div>

            {/* MICRO-ACTION AREA */}
            <div className="mt-12 w-full pt-8 border-t border-slate-50 flex flex-col items-center gap-6">
              

              {/* SYSTEM STATUS DOTS */}
              <div className="flex items-center gap-4">
                 <div className="flex items-center gap-1.5">
                    <div className="w-1 h-1 rounded-full bg-orange-400 animate-pulse" />
                    <span className="text-[8px] font-black text-slate-300 uppercase tracking-widest text-center">System Live</span>
                 </div>
                 <div className="h-3 w-px bg-slate-100" />
                 <Zap size={12} className="text-slate-200" />
              </div>
            </div>

          </div>
        </div>

        {/* DECORATIVE FLOATING LABEL */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white px-4 py-1.5 rounded-full border border-slate-100 shadow-sm">
          <span className="text-[8px] font-bold text-slate-400 uppercase tracking-[0.4em]">Aura Lab Design</span>
        </div>
      </div>
    </div>
    </>
  )
}