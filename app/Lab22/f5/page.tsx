import React from 'react'

function F5page() {
  return (
    <div className="min-h-screen bg-[#f9fafb] flex items-center justify-center p-6 antialiased selection:bg-blue-100">
      {/* Background Decorative Element: Subtle Mesh Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

      <div className="w-full max-w-[400px] relative">
        {/* Main Interface Card */}
        <div className="bg-white border border-slate-200 shadow-[0_1px_3px_rgba(0,0,0,0.02),0_10px_40px_-12px_rgba(0,0,0,0.08)] rounded-2xl overflow-hidden">
          
          {/* Header Section: Navigation Breadcrumb */}
          <div className="px-5 py-3 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
              <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">Route_Endpoint</span>
            </div>
            <div className="flex gap-1">
              <div className="w-1 h-1 rounded-full bg-slate-200" />
              <div className="w-1 h-1 rounded-full bg-slate-200" />
            </div>
          </div>

          {/* Content Body */}
          <div className="p-8">
            {/* Identity Group */}
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-slate-50">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-900 font-bold text-xs italic">
                f5
              </div>
              <div className="flex flex-col">
                <h1 className="text-sm font-black text-slate-900 tracking-tight">F5_TERMINAL_VIEW</h1>
                <p className="text-[10px] font-mono text-slate-400 mt-0.5">./Lab22/f1/f2/inner_f2/f5</p>
              </div>
            </div>

            {/* Description Block */}
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">Intercept_Status</span>
                <p className="text-[13px] text-slate-600 leading-relaxed font-medium">
                  Protocol <span className="text-blue-600 font-bold italic">(..)(..)</span> has successfully jumped 2 levels to render this node.
                </p>
              </div>

              {/* Functional Grid Detail */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="block text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">State</span>
                  <span className="text-[11px] font-bold text-slate-700">200_SUCCESS</span>
                </div>
                <div className="p-3 rounded-xl bg-blue-50/50 border border-blue-100">
                  <span className="block text-[8px] font-black text-blue-400 uppercase tracking-widest mb-1">Method</span>
                  <span className="text-[11px] font-bold text-blue-600 italic">Interception</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Footer */}
          <div className="px-8 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
            <button className="text-[10px] font-black text-slate-400 hover:text-blue-600 transition-colors uppercase tracking-[0.2em]">
              ← Exit Route
            </button>
            <div className="px-2 py-1 bg-white border border-slate-200 rounded text-[9px] font-mono text-slate-300">
              0.02ms
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Floating Label */}
      <div className="absolute bottom-8 right-8 text-[10px] font-mono text-slate-300 font-bold uppercase tracking-widest vertical-text">
        Next.js Intercept Protocol // 2026
      </div>
    </div>
  )
}

export default F5page