"use client"

import React, { useState } from "react"

function Primepage() {
  const [range, setRange] = useState<{ start: number; end: number } | null>(null)
  const [primes, setPrimes] = useState<number[]>([])

  const isPrime = (num: number) => {
    if (num < 2) return false
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false
    }
    return true
  }

  const getPrimes = () => {
    const startInput = prompt("Enter the First Number") || "0";
    const endInput = prompt("Enter the Second Number") || "0";
    
    const start = parseInt(startInput);
    const end = parseInt(endInput);

    setRange({ start, end })

    const primeNumbers: number[] = []
    for (let i = start; i <= end; i++) {
      if (isPrime(i)) {
        primeNumbers.push(i)
      }
    }
    setPrimes(primeNumbers)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] flex items-center justify-center p-4 font-sans text-slate-800">
      <div className="w-full max-w-xl bg-white/70 backdrop-blur-2xl rounded-[3rem] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] border border-white/40 overflow-hidden">
        
        {/* Header Section */}
        <div className="pt-12 pb-8 px-8 text-center">
          <div className="w-20 h-20 bg-gradient-to-tr from-violet-200 to-pink-200 rounded-3xl rotate-12 mx-auto flex items-center justify-center shadow-inner mb-6 transition-transform hover:rotate-0 duration-500">
             <span className="text-3xl font-black text-white">P</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-800">
            Prime<span className="text-violet-500">Core</span>
          </h1>
          <p className="text-slate-400 text-sm mt-2 font-medium">Mathematical sequence extractor</p>
        </div>

        {/* Interaction Zone */}
        <div className="px-10 pb-10">
          <button 
            onClick={getPrimes}
            className="w-full py-5 bg-white rounded-2xl shadow-[6px_6px_12px_#d1d1d1,-6px_-6px_12px_#ffffff] text-slate-600 font-bold uppercase tracking-[0.15em] hover:shadow-inner hover:bg-slate-50 transition-all duration-200 active:scale-95 border border-slate-100"
          >
            Enter Range
          </button>

          {/* Range Display Badge */}
          {range && (
            <div className="mt-8 p-6 bg-gradient-to-r from-violet-50 to-pink-50 rounded-[2rem] border border-white flex justify-around items-center">
              <div className="text-center">
                <p className="text-[9px] font-black text-violet-400 uppercase mb-1">Lower</p>
                <span className="text-2xl font-black text-slate-700">{range.start}</span>
              </div>
              <div className="h-8 w-px bg-slate-200"></div>
              <div className="text-center">
                <p className="text-[9px] font-black text-pink-400 uppercase mb-1">Upper</p>
                <span className="text-2xl font-black text-slate-700">{range.end}</span>
              </div>
            </div>
          )}

          {/* Results Grid */}
          {primes.length > 0 && (
            <div className="mt-10 animate-in fade-in zoom-in duration-700">
              <div className="flex items-center justify-between mb-4 px-2">
                <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest">Primes Found</h3>
                <span className="text-xs font-bold text-violet-500 bg-violet-50 px-3 py-1 rounded-full">{primes.length}</span>
              </div>
              
              <div className="grid grid-cols-5 gap-3 max-h-[280px] overflow-y-auto p-2 custom-scrollbar">
                {primes.map((num, index) => (
                  <div 
                    key={index}
                    className="aspect-square flex items-center justify-center bg-white rounded-xl shadow-[4px_4px_8px_#dfdfdf,-4px_-4px_8px_#ffffff] text-slate-700 font-bold text-sm border border-slate-50 hover:text-violet-500 transition-colors"
                  >
                    {num}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Fallback state */}
          {!range && (
            <div className="mt-12 text-center">
              <p className="text-slate-300 text-xs font-medium tracking-tighter uppercase italic">Ready for calculation...</p>
            </div>
          )}
        </div>

        {/* Minimal Footer */}
        <div className="bg-slate-50/50 py-4 text-center">
           <div className="flex justify-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-violet-200"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-pink-200"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Primepage