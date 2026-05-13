"use client"
import React from 'react'
import { Database, Table, ArrowRight } from 'lucide-react'

function Lab26page() {
  return (
    <div className="min-h-screen bg-[#fcfcfe] bg-[radial-gradient(45%_45%_at_50%_50%,#f0f4ff_0%,#ffffff_100%)] flex flex-col items-center justify-center p-6 font-sans">
      
      {/* Soft Background Decorative Elements */}
      <div className="fixed top-[-10%] right-[-5%] w-[500px] h-[500px] bg-indigo-50/50 rounded-full blur-[120px] -z-10" />
      <div className="fixed bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-50/40 rounded-full blur-[120px] -z-10" />

      {/* Main Container Card */}
      <div className="group relative bg-white/80 backdrop-blur-xl border border-slate-200/60 shadow-[0_20px_50px_rgba(0,0,0,0.04)] rounded-[3rem] p-12 w-full max-w-3xl flex flex-col items-center transition-all duration-500 hover:shadow-[0_30px_60px_rgba(79,70,229,0.1)]">
        
        {/* Floating Decorative Icon */}
        <div className="mb-8 w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-[1.5rem] flex items-center justify-center shadow-lg shadow-indigo-200 group-hover:rotate-12 transition-transform duration-500">
           <div className="w-6 h-6 border-2 border-white/50 rounded-lg rotate-45" />
        </div>

        {/* Content Section */}
        <div className="text-center mb-10">
            <div className="inline-block px-4 py-1.5 mb-4 bg-indigo-50 text-indigo-600 text-[10px] font-black uppercase tracking-[0.3em] rounded-full border border-indigo-100/50">
                System Module
            </div>
            <h1 className="text-5xl font-black text-slate-800 tracking-tighter mb-2">
                Lab26page
            </h1>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.2em] opacity-60">
                Backend CRUD Integration
            </p>
        </div>

        {/* Action Buttons / Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            
            {/* Mongoose Button Card */}
            <button className="group/btn relative bg-white border border-emerald-100 p-6 rounded-[2rem] text-left transition-all hover:border-emerald-400 hover:shadow-xl hover:shadow-emerald-100/50">
                <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
                        <Database size={20} />
                    </div>
                    <ArrowRight size={16} className="text-emerald-300 group-hover/btn:translate-x-1 transition-transform" />
                </div>
                <h3 className="text-lg font-black text-slate-800 tracking-tight">Mongoose CRUD</h3>
                <p className="text-[11px] text-slate-500 font-medium leading-relaxed mt-1">
                    MongoDB object modeling for Next.js API routes. Schema-based backend logic.
                </p>
            </button>

            {/* MySQL Button Card */}
            <button className="group/btn relative bg-white border border-blue-100 p-6 rounded-[2rem] text-left transition-all hover:border-blue-400 hover:shadow-xl hover:shadow-blue-100/50">
                <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                        <Table size={20} />
                    </div>
                    <ArrowRight size={16} className="text-blue-300 group-hover/btn:translate-x-1 transition-transform" />
                </div>
                <h3 className="text-lg font-black text-slate-800 tracking-tight">MySQL CRUD</h3>
                <p className="text-[11px] text-slate-500 font-medium leading-relaxed mt-1">
                    Relational database management for Next.js. Structured query language integration.
                </p>
            </button>

        </div>

        {/* Modern Accent Bar */}
        <div className="mt-10 flex items-center gap-4">
            <div className="h-[1px] w-12 bg-slate-200" />
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
            <div className="h-[1px] w-12 bg-slate-200" />
        </div>

      </div>

      {/* Page Footer Info */}
      <div className="mt-12 text-slate-400 text-[10px] font-bold uppercase tracking-[0.4em] opacity-40">
        Lab Terminal • 2026 Edition
      </div>
    </div>
  )
}

export default Lab26page