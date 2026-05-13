"use client"
import React from 'react'
import { 
  Fingerprint, 
  Sparkles, 
  LayoutDashboard, 
  Activity, 
  ShieldCheck, 
  ArrowRight,
  Zap,
  Globe
} from 'lucide-react'
import Link from 'next/link'
export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#FDFEFF] flex items-center justify-center p-4 font-sans selection:bg-blue-100">
      
      {/* --- AMBIENT AURA BACKGROUND --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-300/40 to-transparent" />
        <div className="absolute top-[10%] left-[10%] w-80 h-80 bg-blue-50 rounded-full blur-[120px] opacity-60" />
        <div className="absolute bottom-[10%] right-[10%] w-72 h-72 bg-indigo-50 rounded-full blur-[110px] opacity-50" />
      </div>

      <div className="relative w-full max-w-xl animate-in fade-in zoom-in duration-1000">
        
        {/* THE FLOATING NAVY ANCHOR */}
        <div className="absolute -top-6 right-8 z-30 transform hover:-translate-y-1 transition-all duration-500 cursor-pointer">
          <div className="w-16 h-16 bg-[#0F172A] rounded-[1.8rem] shadow-2xl flex items-center justify-center text-white border border-slate-800">
            <Fingerprint size={28} strokeWidth={1} />
          </div>
        </div>

        {/* GLASS CONTAINER STACK */}
        <div className="relative group">
          {/* Decorative Secondary Layer (Stack Effect) */}
          <div className="absolute inset-0 bg-white/40 rounded-[4rem] translate-y-4 scale-[0.96] blur-sm -z-10 transition-transform duration-700 group-hover:translate-y-6" />

          {/* MAIN CARD */}
          <div className="bg-white rounded-[3.8rem] border border-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.03)] p-12 lg:p-20 flex flex-col items-center text-center relative overflow-hidden">
            
            {/* FOUNDATION TAG */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50/50 border border-blue-100/50 rounded-full mb-12">
              <Sparkles size={12} className="text-blue-500 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600/70">
                Central Control Layer
              </span>
            </div>

            {/* DASHBOARD ICON WELL */}
            <div className="relative mb-10 group">
              <div className="w-24 h-24 bg-white rounded-[2.5rem] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.06)] border border-slate-50 flex items-center justify-center relative z-10">
                <LayoutDashboard size={40} className="text-slate-900" strokeWidth={1} />
                {/* Dynamic Online indicator */}
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg animate-pulse" />
              </div>
              <div className="absolute inset-0 bg-blue-500/10 blur-2xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>

            {/* TYPOGRAPHY BLOCK */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-black text-[#0F172A] tracking-tighter leading-tight">
                Dashboard <br />
                <span className="italic font-serif text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500">
                  Home
                </span>
              </h1>
              
              <p className="max-w-xs mx-auto text-slate-400 text-sm font-medium leading-relaxed">
                Seamlessly orchestrate your operations <br /> through the unified Aura intelligence hub.
              </p>
            </div>

            {/* THE "ENTER DASHBOARD" ACTION */}
            
            <div className="mt-14 w-full flex flex-col gap-3">
              <Link href ="/LAB_2/dashboard/admin">
              <button className="flex items-center justify-center gap-3 w-full px-8 py-5 bg-[#0F172A] text-white rounded-2xl font-bold text-xs tracking-[0.2em] uppercase transition-all hover:bg-slate-800 hover:shadow-xl active:scale-95 group/btn shadow-lg shadow-blue-900/10">
                Enter Dashboard
                <ArrowRight size={16} className="group-hover/btn:translate-x-1.5 transition-transform" />
              </button>
              </Link>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col items-center justify-center p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Live Status</span>
                  <div className="flex items-center gap-1.5">
                    <Activity size={12} className="text-blue-500" />
                    <span className="text-xs font-bold text-slate-700">Optimal</span>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Security</span>
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck size={12} className="text-emerald-500" />
                    <span className="text-xs font-bold text-slate-700">Shielded</span>
                  </div>
                </div>
              </div>
            </div>

            {/* SYSTEM META */}
            <div className="mt-12 flex items-center gap-6">
               <div className="flex items-center gap-2">
                 <div className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                 <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">Global Node</span>
               </div>
               <div className="h-4 w-px bg-slate-100" />
               <Globe size={14} className="text-slate-200 hover:text-blue-400 cursor-pointer transition-colors" />
               <Zap size={14} className="text-slate-200 hover:text-amber-400 cursor-pointer transition-colors" />
            </div>

          </div>
        </div>

        {/* FOOTER LABEL */}
        <div className="mt-10 flex flex-col items-center gap-3">
           <div className="flex gap-1.5">
              <div className="w-1 h-1 rounded-full bg-blue-200" />
              <div className="w-1 h-1 rounded-full bg-blue-200" />
              <div className="w-1 h-1 rounded-full bg-blue-500 animate-pulse" />
           </div>
           <span className="text-[8px] font-black text-slate-300 uppercase tracking-[0.5em]">Network Aura v.10</span>
        </div>
      </div>
    </div>
  )
}