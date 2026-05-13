import React from 'react'

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] h-full rounded-[2.5rem] bg-gradient-to-br from-slate-50 to-white border border-slate-100 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] p-12 text-center group transition-all duration-500 hover:shadow-xl hover:shadow-slate-200/40">
      {/* Decorative Icon Circle */}
      <div className="mb-6 w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center border border-slate-50 group-hover:scale-110 transition-transform duration-500">
        <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center">
          <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
        </div>
      </div>

      {/* Text Content */}
      <h2 className="text-3xl font-black text-slate-800 tracking-tight mb-2">
        Contact <span className="text-emerald-500">Page</span>
      </h2>
      
      <p className="text-sm font-medium text-slate-400 max-w-[280px] leading-relaxed">
        This section is ready for your custom contact forms or information.
      </p>

      {/* Subtle Bottom Accent */}
      <div className="mt-8 flex gap-1">
        <div className="w-8 h-1 bg-emerald-500 rounded-full" />
        <div className="w-2 h-1 bg-slate-200 rounded-full" />
        <div className="w-2 h-1 bg-slate-200 rounded-full" />
      </div>
    </div>
  )
}