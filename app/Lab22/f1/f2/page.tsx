import React from 'react'
import Link from 'next/link'

function F2page() {
  return (
    <div className="mt-8 p-10 bg-white border border-slate-200 rounded-[2.5rem] shadow-xl animate-in fade-in slide-in-from-bottom-5 duration-700">
      <header className="flex items-center justify-between mb-8">
        <div>
          <span className="text-[10px] font-mono text-emerald-500 font-bold uppercase tracking-[0.3em]">Node: Level 1</span>
          <h2 className="text-4xl font-black text-slate-900 tracking-tighter italic">F2<span className="text-emerald-400">.page</span></h2>
        </div>
        <div className="h-10 w-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 font-bold border border-emerald-100">
          ./
        </div>
      </header>

      <div className="grid gap-4">
        <Link href="/Lab22/f4" className="group flex items-center justify-between p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:border-emerald-500/40 hover:bg-emerald-50/30 transition-all duration-300">
          <div>
            <p className="text-slate-800 font-bold">Trigger F4 Intercept</p>
            <p className="text-slate-400 text-[10px] font-mono uppercase tracking-widest">(..)(..) Double Level Up</p>
          </div>
          <span className="text-emerald-500 group-hover:translate-x-1 transition-transform">→</span>
        </Link>

        <Link href="/Lab22/f1/f2/Inner_f2" className="group flex items-center justify-between p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:border-indigo-500/40 hover:bg-indigo-50/30 transition-all duration-300">
          <div>
            <p className="text-slate-800 font-bold">Drill Down: Inner F2</p>
            <p className="text-slate-400 text-[10px] font-mono uppercase tracking-widest">Deeper Segment Path</p>
          </div>
          <span className="text-indigo-500 group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  )
}

export default F2page