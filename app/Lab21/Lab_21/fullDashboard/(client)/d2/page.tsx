"use client"
import React from 'react'
import { 
  Fingerprint, 
  Sparkles, 
  UserCircle2, 
  ShieldCheck, 
  ArrowUpRight, 
  Globe,
  Settings2
} from 'lucide-react'

export default function UserPage() {
  return (
    <div className="min-h-screen bg-[#FDFEFF] flex items-center justify-center p-4 font-sans selection:bg-indigo-100">
      
      {/* --- DESIGN SYSTEM BACKGROUND --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-300/50 to-transparent" />
        <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-indigo-50 rounded-full blur-[120px] opacity-60" />
        <div className="absolute bottom-[20%] right-[10%] w-72 h-72 bg-rose-50 rounded-full blur-[120px] opacity-60" />
      </div>

      <div className="relative w-full max-w-xl animate-in fade-in zoom-in duration-1000">
        
        {/* THE FLOATING "NAVY" ANCHOR */}
        <div className="absolute -top-6 right-8 z-30 transform hover:-translate-y-1 hover:rotate-3 transition-all duration-500 cursor-none">
          <div className="w-16 h-16 bg-[#0F172A] rounded-[1.8rem] shadow-2xl flex items-center justify-center text-white border border-slate-800">
            <Fingerprint size={28} strokeWidth={1} />
          </div>
        </div>

        {/* GLASS CONTAINER STACK */}
        <div className="relative group">
          {/* Decorative Secondary Layer (The "Ghost" Card) */}
          <div className="absolute inset-0 bg-white/40 rounded-[4rem] translate-y-4 scale-[0.96] blur-sm -z-10 transition-transform duration-700 group-hover:translate-y-6" />

          {/* MAIN CARD */}
          <div className="bg-white rounded-[3.8rem] border border-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.03)] p-12 lg:p-20 flex flex-col items-center text-center relative overflow-hidden">
            
            {/* FOUNDATION TAG */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-50 border border-slate-100 rounded-full mb-12">
              <Sparkles size={12} className="text-indigo-500 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                Identity Layer
              </span>
            </div>

            {/* MINIMALIST USER WELL */}
            <div className="relative mb-10">
              <div className="w-24 h-24 bg-white rounded-[2.5rem] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.06)] border border-slate-50 flex items-center justify-center relative z-10">
                <UserCircle2 size={44} className="text-slate-900" strokeWidth={1} />
                <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-indigo-500 rounded-full border-4 border-white shadow-lg" />
              </div>
              <div className="absolute inset-0 bg-indigo-500/10 blur-2xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>

            {/* TYPOGRAPHY BLOCK */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-black text-[#0F172A] tracking-tighter leading-tight">
                This is <br />
                <span className="italic font-serif text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500">
                  UserPage
                </span>
              </h1>
              
              <p className="max-w-xs mx-auto text-slate-400 text-sm font-medium leading-relaxed">
                Nuanced access control and profile <br /> intelligence built for the Aura ecosystem.
              </p>
            </div>

            {/* INTERACTIVE ACTIONS */}
            <div className="mt-14 w-full flex flex-col gap-3">
              {/* <button className="flex items-center justify-between w-full px-8 py-5 bg-[#0F172A] text-white rounded-2xl font-bold text-xs tracking-widest uppercase transition-all hover:bg-slate-800 hover:shadow-xl active:scale-95 group/btn">
                <span>Access Profile</span>
                <ArrowUpRight size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </button> */}
              
              <div className="grid grid-cols-2 gap-3">
                <button className="flex items-center justify-center gap-2 py-4 bg-slate-50 text-slate-500 rounded-2xl font-bold text-[10px] uppercase tracking-widest border border-slate-100 hover:bg-white hover:border-indigo-100 hover:text-indigo-600 transition-all">
                  <ShieldCheck size={14} /> Security
                </button>
                <button className="flex items-center justify-center gap-2 py-4 bg-slate-50 text-slate-500 rounded-2xl font-bold text-[10px] uppercase tracking-widest border border-slate-100 hover:bg-white hover:border-indigo-100 hover:text-indigo-600 transition-all">
                  <Settings2 size={14} /> Settings
                </button>
              </div>
            </div>

            {/* STATUS MICRO-ELEMENTS */}
            <div className="mt-12 flex items-center gap-6">
               <div className="flex items-center gap-2">
                 <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
                 <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">Authorized</span>
               </div>
               <div className="h-4 w-px bg-slate-100" />
               <Globe size={14} className="text-slate-200 hover:text-indigo-400 cursor-pointer transition-colors" />
            </div>

          </div>
        </div>

        {/* CENTRALIZED DECORATIVE FOOTER */}
        <div className="mt-10 flex flex-col items-center gap-3">
           <div className="flex gap-1">
              <div className="w-1 h-1 rounded-full bg-indigo-200" />
              <div className="w-4 h-1 rounded-full bg-indigo-500" />
              <div className="w-1 h-1 rounded-full bg-indigo-200" />
           </div>
           <span className="text-[8px] font-black text-slate-300 uppercase tracking-[0.5em]">System Core v.9</span>
        </div>
      </div>
    </div>
  )
}