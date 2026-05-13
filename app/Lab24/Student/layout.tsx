import React from 'react'
import Link from 'next/link'

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 flex flex-col">
      
      {/* --- REFINED NAVIGATION --- */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
          
          {/* Logo with a modern accent */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative">
              <div className="w-6 h-6 bg-indigo-600 rounded-md rotate-12 group-hover:rotate-0 transition-transform duration-300"></div>
              <div className="absolute inset-0 w-6 h-6 bg-indigo-400/30 rounded-md -rotate-12 group-hover:rotate-0 transition-transform duration-300"></div>
            </div>
            <span className="text-lg font-black tracking-tight uppercase">
              Student<span className="text-indigo-600">MocAPI</span>
            </span>
          </Link>

          {/* Clean Nav Links */}
          <div className="hidden sm:flex items-center gap-1">
            <Link href="/StudentAdd" className="px-4 py-2 text-xs font-bold text-slate-500 hover:text-indigo-600 hover:bg-slate-50 rounded-lg transition-all tracking-widest uppercase">
              Add Student
            </Link>
            <Link href="/Directory" className="px-4 py-2 text-xs font-bold text-slate-500 hover:text-indigo-600 hover:bg-slate-50 rounded-lg transition-all tracking-widest uppercase">
              Directory
            </Link>
          </div>

          {/* Live Status Badge */}
          <div className="flex items-center gap-2 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
             <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
             <span className="text-[10px] font-bold text-indigo-700 uppercase tracking-tighter">MockAPI Syncing</span>
          </div>
        </div>
      </nav>

      {/* --- MAIN DYNAMIC CONTENT --- */}
      <main className="flex-grow max-w-6xl mx-auto w-full px-6 py-12">
        <div className="relative">
          {/* Subtle side-accent to make the content feel "framed" */}
          <div className="absolute -left-4 top-0 bottom-0 w-[1px] bg-gradient-to-b from-indigo-100 via-transparent to-transparent hidden lg:block"></div>
          
          <div className="animate-in fade-in slide-in-from-top-1 duration-700">
            {children}
          </div>
        </div>
      </main>

      {/* --- CLEAN MONOCHROME FOOTER --- */}
      <footer className="bg-slate-50 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-1">
                Student Management System
              </p>
              <p className="text-[10px] text-slate-300 font-medium">
                Powered by MockAPI & Next.js Framework
              </p>
            </div>
            
            <div className="flex items-center gap-8">
               <div className="text-right">
                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Status</p>
                 <p className="text-xs font-bold text-emerald-500 tracking-tighter">Stable Environment</p>
               </div>
               <div className="h-8 w-[1px] bg-slate-200"></div>
               <p className="text-xs font-black text-slate-900">2026</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout