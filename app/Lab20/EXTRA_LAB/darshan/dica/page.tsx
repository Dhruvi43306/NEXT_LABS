import React from 'react'

function DicaPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      {/* Main Decorative Container */}
      <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl transition-all hover:shadow-cyan-100/50">
        
        {/* Background Accent Gradients */}
        <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-cyan-100/50 blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-indigo-100/50 blur-3xl"></div>

        <div className="relative px-12 py-20 text-center">
          {/* Subtle Icon/Graphic Element */}
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-indigo-600 shadow-lg">
            <svg 
              className="h-8 w-8 text-white" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>

          {/* Your Original Content */}
          <h1 className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl">
            This is DicaPage
          </h1>

          <p className="mt-4 text-lg text-slate-500">
            Welcome to your new workspace. Modern, clean, and ready for development.
          </p>

          {/* Action Button for Visual Balance */}
          <div className="mt-10">
            <button className="rounded-full bg-slate-900 px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-slate-800 hover:ring-4 hover:ring-slate-900/10">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DicaPage