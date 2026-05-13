import React from 'react'
import { Layout } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] h-full rounded-[2.5rem] bg-gradient-to-br from-slate-50 to-white border border-slate-100 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] p-12 text-center group transition-all duration-500 hover:shadow-xl hover:shadow-slate-200/40">
      
      {/* Decorative Icon Circle with Violet Accent */}
      <div className="mb-6 w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center border border-slate-50 group-hover:scale-105 transition-transform duration-500">
        <div className="w-12 h-12 rounded-full bg-violet-500/10 flex items-center justify-center">
          <Layout className="text-violet-500" size={24} strokeWidth={2.5} />
        </div>
      </div>

      {/* Text Content */}
      <h2 className="text-3xl font-black text-slate-800 tracking-tight mb-2">
        Home <span className="text-violet-500">Workspace</span>
      </h2>
      
      <p className="text-sm font-medium text-slate-400 max-w-[320px] leading-relaxed">
        Welcome to your central hub. Monitor your activities, access tools, and manage your PureStyle ecosystem.
      </p>

      {/* Visual Design Element (Triple Dot Style) */}
      <div className="mt-8 flex items-center gap-2">
        <div className="h-2 w-2 bg-violet-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
        <div className="h-2 w-2 bg-violet-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
        <div className="h-2 w-2 bg-violet-300 rounded-full animate-bounce" />
      </div>

      {/* Floating Status Badge */}
      <div className="mt-6 flex items-center gap-2 px-4 py-1.5 bg-emerald-50 rounded-full border border-emerald-100/50">
        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
        <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">
          All Systems Live
        </span>
      </div>
    </div>
  )
}