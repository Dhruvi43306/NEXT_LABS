import React from 'react'
import Link from 'next/link'

function LAb22page() {
  const links = [
    {
      name: "Admin Dashboard",
      href: "/Lab22/Lab_22/dashboard/admin",
      desc: "Manage system users and registry records.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      color: "from-blue-400 to-indigo-500"
    },
    {
      name: "Full Dashboa rd",
      href: "/Lab22/Lab_22/fullDashboard",
      desc: "Comprehensive overview of all operations.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      ),
      color: "from-emerald-400 to-teal-500"
    },
    {
      name: "Prime Number",
      href: "/Lab22/Lab_22/Prime",
      desc: "Mathematical engine for sequence calculation.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      color: "from-violet-400 to-purple-500"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center p-6 font-sans antialiased">
      
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-sm font-black text-blue-600 uppercase tracking-[0.4em] mb-3">Laboratory 22</h1>
        <h2 className="text-5xl font-black text-slate-900 tracking-tight">Resource Center</h2>
        <div className="h-1.5 w-20 bg-blue-600 mx-auto mt-6 rounded-full"></div>
      </div>

      {/* Navigation Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {links.map((link, index) => (
          <Link key={index} href={link.href} className="group">
            <div className="h-full bg-white p-8 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-slate-100 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:border-blue-100 flex flex-col items-start">
              
              {/* Icon Badge */}
              <div className={`p-4 rounded-2xl bg-gradient-to-br ${link.color} text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {link.icon}
              </div>

              {/* Text Info */}
              <h3 className="text-2xl font-black text-slate-800 mb-2">
                {link.name}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                {link.desc}
              </p>

              {/* Action Label */}
              <div className="mt-auto flex items-center text-xs font-black text-blue-600 uppercase tracking-widest group-hover:gap-2 transition-all">
                <span>Access Module</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Background Decoration */}
      <div className="fixed top-0 right-0 -z-10 opacity-10 pointer-events-none">
        <div className="w-[600px] h-[600px] bg-blue-200 rounded-full blur-[120px] -mr-48 -mt-48"></div>
      </div>
      <div className="fixed bottom-0 left-0 -z-10 opacity-10 pointer-events-none">
        <div className="w-[600px] h-[600px] bg-purple-200 rounded-full blur-[120px] -ml-48 -mb-48"></div>
      </div>

    </div>
  )
}

export default LAb22page