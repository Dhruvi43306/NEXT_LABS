import React from 'react'
import Link from 'next/link'

function F1page() {
  return (
    <div className="min-h-screen bg-[#fafafa] flex items-center justify-center p-8 font-sans">
      <div className="w-full max-w-2xl bg-white border border-slate-200 rounded-3xl shadow-[0_20px_70px_-10px_rgba(0,0,0,0.05)] overflow-hidden">
        <div className="p-12">
          <header className="mb-12 border-b border-slate-100 pb-8 flex justify-between items-end">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Router.Root</span>
              <h1 className="text-5xl font-black text-slate-900 tracking-tighter mt-2 underline decoration-indigo-500/20 underline-offset-8">F1 Dashboard</h1>
            </div>
            <div className="text-right font-mono text-[10px] text-slate-300">PATH: /Lab22/f1</div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/Lab22/f1/f2" className="group relative p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-indigo-500/50 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-xl">
              <div className="flex justify-between items-start mb-4">
                <span className="p-2 rounded-lg bg-white border border-slate-200 text-lg shadow-sm group-hover:scale-110 transition-transform">📍</span>
                <span className="text-[10px] font-bold text-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity tracking-widest uppercase">Intercept (.)</span>
              </div>
              <h3 className="font-bold text-slate-800 text-xl tracking-tight">Access F2</h3>
              <p className="text-slate-400 text-xs mt-1">Local segment interception</p>
            </Link>

            <Link href="/Lab22/f3" className="group relative p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-indigo-500/50 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-xl">
              <div className="flex justify-between items-start mb-4">
                <span className="p-2 rounded-lg bg-white border border-slate-200 text-lg shadow-sm group-hover:scale-110 transition-transform">🚀</span>
                <span className="text-[10px] font-bold text-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity tracking-widest uppercase">Level Up (..)</span>
              </div>
              <h3 className="font-bold text-slate-800 text-xl tracking-tight">Jump to F3</h3>
              <p className="text-slate-400 text-xs mt-1">Higher level interception</p>
            </Link>
          </div>
        </div>
        
        <div className="bg-slate-900 p-4 text-center">
          <p className="text-slate-500 text-[10px] font-mono tracking-[.5em] uppercase italic">Component Loaded: F1page.tsx</p>
        </div>
      </div>
    </div>
  )
}

export default F1page