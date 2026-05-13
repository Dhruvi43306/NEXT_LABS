"use client"
import React, { useState } from 'react'

function Demo1page() {
  const [count, setcount] = useState(0)

  return (
    <div className="min-h-screen bg-[#fcfcfe] bg-[radial-gradient(45%_45%_at_50%_50%,#f0f4ff_0%,#ffffff_100%)] flex items-center justify-center p-6">
      
      {/* Decorative background blur */}
      <div className="fixed top-20 left-[10%] w-[300px] h-[300px] bg-indigo-100/40 pointer-events-none -z-10 blur-3xl" />

      <div className="bg-white/80 backdrop-blur-md border border-slate-200/60 shadow-xl rounded-[2.5rem] p-12 w-full max-w-sm flex flex-col items-center text-center transition-all hover:shadow-2xl">
        
        {/* Header Text */}
        <div className="text-slate-400 text-xs font-bold uppercase tracking-[0.2em] mb-6">
          Count page
        </div>

        {/* Counter Display */}
        <div className="mb-8">
          <h1 className="text-8xl font-light text-slate-800 tracking-tighter">
            {count}
          </h1>
        </div>

        {/* Action Button */}
        <button 
          onClick={() => setcount(count + 1)}
          className="w-full py-4 bg-[#ff9e80] hover:bg-[#ff8a65] text-white font-bold rounded-2xl shadow-lg shadow-orange-200 transition-all active:scale-95 uppercase tracking-wider"
        >
          Count Button
        </button>

      </div>
    </div>
  )
}

export default Demo1page