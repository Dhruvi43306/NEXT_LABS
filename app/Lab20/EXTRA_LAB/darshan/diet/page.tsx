import React from 'react'

function DietPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#fbfcf8] font-sans antialiased selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* Dynamic Background Accents */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-[10%] left-[20%] h-[600px] w-[600px] rounded-full bg-emerald-100/40 blur-[120px]" />
        <div className="absolute top-[40%] -right-[5%] h-[500px] w-[500px] rounded-full bg-lime-100/30 blur-[100px]" />
        <div className="absolute -bottom-[10%] left-[10%] h-[400px] w-[400px] rounded-full bg-orange-50/50 blur-[80px]" />
      </div>

      <main className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-12">
        
        {/* Floating Glass Container */}
        <div className="group relative w-full max-w-5xl rounded-[3rem] border border-white/60 bg-white/40 p-4 shadow-[0_32px_80px_-16px_rgba(0,0,0,0.08)] backdrop-blur-3xl transition-all duration-700 hover:shadow-emerald-200/20">
          
          <div className="flex flex-col overflow-hidden rounded-[2.5rem] bg-white shadow-sm lg:flex-row">
            
            {/* Left Column: Visual Impact */}
            <div className="relative flex flex-col justify-between bg-emerald-950 p-10 lg:w-1/3">
              <div className="relative z-10">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/20 backdrop-blur-lg">
                  <svg className="h-6 w-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white">Your Wellness Journey</h2>
                <p className="mt-2 text-sm leading-relaxed text-emerald-100/60">
                  Precision nutrition tracking powered by biometric data and AI analysis.
                </p>
              </div>

              {/* Minimalist Data Visualization Mockup */}
              <div className="mt-12 space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                    <div 
                      className="h-full bg-emerald-400 transition-all duration-1000" 
                      style={{ width: `${Math.random() * 60 + 20}%` }} 
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Content Section */}
            <div className="relative flex flex-col justify-center bg-white p-10 lg:w-2/3 lg:p-20">
              
              {/* Status Header */}
              <div className="mb-8 flex items-center gap-3">
                <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                  Live Dashboard v2.0
                </span>
              </div>

              {/* YOUR CONTENT START */}
              <div className="relative">
                <h1 className="text-5xl font-black tracking-tight text-slate-900 sm:text-7xl">
                  <span className="block italic text-emerald-600">This is</span>
                  <span className="relative inline-block mt-1">
                    DietPage
                    <svg className="absolute -bottom-2 left-0 h-3 w-full text-emerald-100" viewBox="0 0 100 10" preserveAspectRatio="none">
                      <path d="M0 5 Q 25 0 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="8" />
                    </svg>
                  </span>
                </h1>
              </div>
              {/* YOUR CONTENT END */}

              <p className="mt-10 text-xl leading-relaxed text-slate-500">
                Unlock your body's potential with a diet plan tailored specifically to your lifestyle and goals.
              </p>

              {/* Interaction Row */}
              <div className="mt-12 flex flex-wrap items-center gap-6">
                <button className="relative flex h-14 items-center justify-center gap-3 overflow-hidden rounded-2xl bg-emerald-600 px-10 font-bold text-white shadow-xl shadow-emerald-200 transition-all hover:bg-emerald-700 hover:shadow-emerald-300 active:scale-95">
                  Start Analysis
                </button>
                <button className="flex h-14 items-center justify-center rounded-2xl border-2 border-slate-100 bg-white px-8 font-bold text-slate-700 transition-all hover:border-emerald-100 hover:bg-emerald-50/30">
                  Settings
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Floating Micro-Nav */}
        <div className="mt-12 flex items-center gap-12 text-sm font-semibold tracking-wide text-slate-400">
          <span className="cursor-pointer transition-colors hover:text-emerald-600">Overview</span>
          <span className="cursor-pointer transition-colors hover:text-emerald-600">Nutrients</span>
          <span className="cursor-pointer transition-colors hover:text-emerald-600">History</span>
        </div>

      </main>
    </div>
  )
}

export default DietPage