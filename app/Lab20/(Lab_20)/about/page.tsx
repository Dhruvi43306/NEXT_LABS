import React from 'react'
import { Sparkles } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] h-full rounded-[2.5rem] bg-gradient-to-br from-slate-50 to-white border border-slate-100 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] p-12 text-center group transition-all duration-500 hover:shadow-xl hover:shadow-slate-200/40">
      
      {/* Decorative Icon Circle with Sky Blue Accent */}
      <div className="mb-6 w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center border border-slate-50 group-hover:rotate-12 transition-transform duration-500">
        <div className="w-12 h-12 rounded-full bg-sky-500/10 flex items-center justify-center">
          <Sparkles className="text-sky-500" size={24} strokeWidth={2.5} />
        </div>
      </div>

      {/* Text Content */}
      <h2 className="text-3xl font-black text-slate-800 tracking-tight mb-2">
        About <span className="text-sky-500">Us</span>
      </h2>
      
      <p className="text-sm font-medium text-slate-400 max-w-[320px] leading-relaxed">
        Discover our journey, mission, and the creative team behind the PureStyle ecosystem.
      </p>

      {/* Visual Progress/Design Element */}
      <div className="mt-8 flex items-center gap-3">
        <div className="h-1.5 w-2 bg-slate-200 rounded-full" />
        <div className="h-1.5 w-12 bg-sky-500 rounded-full shadow-lg shadow-sky-200" />
        <div className="h-1.5 w-2 bg-slate-200 rounded-full" />
      </div>

      {/* Floating Badge (Subtle Detail) */}
      <div className="mt-6 px-4 py-1.5 bg-slate-100/50 rounded-full border border-slate-200/40 text-[10px] font-black text-slate-400 uppercase tracking-widest group-hover:text-sky-600 transition-colors">
        Est. 2026
      </div>
    </div>
  )
}