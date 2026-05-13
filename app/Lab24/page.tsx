"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

function Lab24page() {
  const router = useRouter()
  const [view, setView] = useState('home'); // 'home' or 'app'

  // --- HOMEPAGE UI ---
  const HomePage = () => (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-indigo-50 to-transparent -z-10" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-50" />
      <div className="absolute top-1/2 -right-24 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-50" />

      <div className="max-w-3xl text-center space-y-8 animate-in fade-in zoom-in duration-700">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-4">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
          </span>
          <span className="text-xs font-bold text-slate-600 tracking-widest uppercase">Version 2.4 Live</span>
        </div>

        <h1 className="text-6xl md:text-7xl font-black text-slate-900 tracking-tighter leading-tight">
          Manage Students with <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-400">
            MockAPI Precision.
          </span>
        </h1>

        <p className="text-lg text-slate-500 max-w-xl mx-auto font-medium leading-relaxed">
          The ultimate simulation environment for college administrators. Connect your endpoints, manage student records, and visualize data in real-time.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button 
            onClick={() => router.push(`/Lab24/Student`)}
            className="group relative px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-slate-200"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative flex items-center gap-2">
              Launch Student Lab 
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </span>
          </button>
          
          <button className="px-8 py-4 bg-white border border-slate-200 text-slate-600 rounded-2xl font-bold hover:bg-slate-50 transition-all">
            Documentation
          </button>
        </div>

        <div className="pt-12 flex items-center justify-center gap-12 opacity-40 grayscale">
            <span className="font-black text-2xl italic tracking-tighter">MockAPI</span>
            <span className="font-black text-2xl italic tracking-tighter">ReactJS</span>
            <span className="font-black text-2xl italic tracking-tighter">Tailwind</span>
        </div>
      </div>
    </div>
  );

  // --- STUDENT LAB (MOCKAPI PAGE) UI ---
  const AppPage = () => (
    <div className="min-h-screen bg-[#F8FAFC] animate-in slide-in-from-bottom-4 duration-700">
      {/* Navbar */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200 px-8 py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <button onClick={() => setView('home')} className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white shadow-lg group-hover:rotate-12 transition-transform">
              <span className="font-bold text-lg">M</span>
            </div>
            <span className="font-black text-slate-800 tracking-tight">STUDENT.LAB</span>
          </button>
          <button onClick={() => setView('home')} className="text-sm font-bold text-slate-400 hover:text-red-500 transition-colors">
            Exit Lab
          </button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Main Table Area */}
          <div className="flex-1 space-y-6">
            <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden">
                <div className="p-8 border-b border-slate-100 flex justify-between items-center">
                    <h3 className="text-xl font-black text-slate-800">Student Directory</h3>
                    <span className="px-3 py-1 bg-emerald-50 text-emerald-600 text-[10px] font-black rounded-full border border-emerald-100 uppercase">Live Feed</span>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-slate-50 text-slate-400 text-[10px] uppercase font-black tracking-[0.1em]">
                            <tr>
                                <th className="px-8 py-4">Student Name</th>
                                <th className="px-8 py-4">Course</th>
                                <th className="px-8 py-4">Performance</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {[
                                { name: "Aarav Mehta", course: "Computer Science", gpa: "3.9", color: "bg-blue-500" },
                                { name: "Sanya Iyer", course: "UX Research", gpa: "3.7", color: "bg-purple-500" },
                                { name: "Kabir Singh", course: "Data Analytics", gpa: "3.8", color: "bg-cyan-500" },
                            ].map((s, i) => (
                                <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                                    <td className="px-8 py-5">
                                        <div className="flex items-center gap-3">
                                            <div className={`w-8 h-8 ${s.color} rounded-full flex items-center justify-center text-white font-bold text-[10px]`}>{s.name.charAt(0)}</div>
                                            <span className="font-bold text-slate-700">{s.name}</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-5 text-sm text-slate-500 font-medium">{s.course}</td>
                                    <td className="px-8 py-5 font-bold text-slate-900">{s.gpa}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
          </div>

          {/* Sidebar Area */}
          <div className="w-full lg:w-80 space-y-6">
            <div className="bg-white p-6 rounded-[2rem] border border-slate-200 shadow-sm">
                <h4 className="font-black text-slate-800 mb-4">API Controls</h4>
                <div className="space-y-3">
                    <button className="w-full py-3 bg-indigo-50 text-indigo-600 rounded-xl font-bold text-sm hover:bg-indigo-100 transition-all">+ Create Record</button>
                    <button className="w-full py-3 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-slate-800 transition-all">Refresh Sync</button>
                </div>
            </div>

            <div className="bg-slate-900 p-6 rounded-[2rem] text-cyan-400 font-mono text-[11px] leading-relaxed">
                <p className="mb-2 text-slate-500">// Last API Response</p>
                <p>{"{"}</p>
                <p className="ml-4">"status": 200,</p>
                <p className="ml-4">"data": "records_fetched"</p>
                <p>{"}"}</p>
            </div>
          </div>

        </div>
      </main>
    </div>
  );

  return view === 'home' ? <HomePage /> : <AppPage />;
}

export default Lab24page;








// import React from 'react'
// import Link from 'next/link'
// function Lab24Page() {
//   return (
//     <>
//     <div>Lab24Page</div>
//     <Link href="/Lab24/Student"><button style={{color:"blue"}}>Mocapi</button></Link>
//     </>
//   )
// }

// export default Lab24Page