"use client"
import React from 'react'
import { 
  Fingerprint, 
  Sparkles, 
  BookOpen, 
  Layers, 
  ChevronRight,
  MonitorSmartphone,
  Compass
} from 'lucide-react'
import Link from 'next/link'
function LAB_2Page() {
  return (
    <div className="min-h-screen bg-[#FDFEFF] flex items-center justify-center p-8 font-sans selection:bg-emerald-100">
      
      {/* --- AMBIENT LAYERED BACKGROUND --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[20%] w-[400px] h-[400px] bg-emerald-50/50 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] right-[20%] w-[400px] h-[400px] bg-blue-50/40 rounded-full blur-[100px]" />
      </div>

      {/* --- MEDIUM-LARGE PORTAL CONTAINER --- */}
      <div className="relative w-full max-w-xl animate-in fade-in zoom-in duration-1000">
        
        {/* PREMIUM FLOATING ANCHOR */}
        <div className="absolute -top-6 right-10 z-30">
          <div className="w-16 h-16 bg-white rounded-[1.8rem] shadow-[0_20px_40px_-10px_rgba(16,185,129,0.1)] border border-emerald-50 flex items-center justify-center text-emerald-500">
            <Fingerprint size={28} strokeWidth={1} />
          </div>
        </div>

        {/* MAIN GLASS CARD */}
        <div className="relative bg-white/80 backdrop-blur-3xl rounded-[3.5rem] border border-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.03)] p-12 lg:p-16 flex flex-col items-center text-center overflow-hidden">
          
          {/* TOP DECORATIVE ACCENT */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-emerald-100 via-teal-100 to-blue-100 opacity-60" />

          {/* PAGE TAG */}
          <div className="mb-10">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-emerald-50/40 border border-emerald-100/50 rounded-full">
              <Sparkles size={12} className="text-emerald-500" />
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-emerald-600/70">
                Academic Module
              </span>
            </div>
          </div>

          {/* ICON STACK */}
          <div className="relative mb-8">
            <div className="w-20 h-20 bg-slate-50 rounded-[2rem] border border-slate-100 flex items-center justify-center relative z-10">
              <Layers size={36} className="text-slate-900" strokeWidth={1} />
            </div>
            {/* Soft Shadow Glow */}
            <div className="absolute inset-0 bg-emerald-200 blur-2xl rounded-full opacity-20 scale-150" />
          </div>

          {/* CORE TYPOGRAPHY */}
          <div className="space-y-4 mb-12">
            <h1 className="text-5xl lg:text-6xl font-black text-[#0F172A] tracking-tighter leading-tight">
              This is <br />
              <span className="italic font-serif text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-500">
                LAB_20Page
              </span>
            </h1>
            <p className="max-w-[280px] mx-auto text-slate-400 text-sm font-medium leading-relaxed">
              Explore the student directory and management interface within the Aura Lab ecosystem.
            </p>
          </div>

          {/* MINI NAVIGATION PREVIEW (Adds visual depth) */}
          <div className="flex flex-wrap gap-4">
                   <Link href = "/Lab20/home"> <button className="px-8 py-3 bg-slate-900 text-white rounded-xl font-bold shadow-lg shadow-slate-200 transition-all hover:-translate-y-1 hover:bg-slate-800 active:scale-95">
                      Enter Lab
                    </button></Link>
                    <button className="px-8 py-3 bg-white border border-slate-200 text-slate-600 rounded-xl font-bold hover:bg-slate-50 transition-colors">
                      Protocols
                    </button>
                  </div>
         

          {/* SYSTEM STATUS FOOTER */}
          <div className="flex items-center gap-6 opacity-40 mt-6">
            <div className="flex items-center gap-2">
              <Compass size={14} />
              <span className="text-[8px] font-black uppercase tracking-[0.4em]">Navigation Node</span>
            </div>
            <div className="w-1 h-1 bg-slate-400 rounded-full" />
            <span className="text-[8px] font-black uppercase tracking-[0.4em]">v2.0.1</span>
          </div>

        </div>
      </div>

      {/* BACKGROUND DECORATIVE LABEL */}
      <div className="absolute bottom-10 left-10 hidden lg:block">
        <span className="text-[10px] font-black text-slate-200 uppercase tracking-[1em] [writing-mode:vertical-rl]">
          LABORATORY_SECTION_01
        </span>
      </div>
    </div>
  )
}

export default LAB_2Page