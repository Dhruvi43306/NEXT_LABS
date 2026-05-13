"use client"
import React, { useState } from 'react'

function Demo2page() {
    const [A, setA] = useState(0)
    const [B, setB] = useState(0)
    const [result, setresult] = useState(0)

    return (
        <div className="min-h-screen bg-[#fcfcfe] bg-[radial-gradient(45%_45%_at_50%_50%,#f0f4ff_0%,#ffffff_100%)] flex items-center justify-center p-6">
            
            {/* Background Decoration */}
            <div className="fixed top-10 right-[10%] w-[400px] h-[400px] bg-blue-50/50 rounded-full blur-3xl -z-10" />

            <div className="bg-white/90 backdrop-blur-lg border border-slate-200/60 shadow-2xl rounded-[2.5rem] p-10 w-full max-w-md flex flex-col items-center">
                
                {/* Header */}
                <h1 className="text-2xl font-light text-slate-700 uppercase tracking-[0.2em] mb-8">
                    Basic Calculator
                </h1>

                {/* Input Section */}
                <div className="w-full space-y-4 mb-8">
                    <div className="relative">
                        <label className="text-[10px] font-bold text-slate-400 uppercase ml-4 mb-1 block">Value A</label>
                        <input 
                            type='text' 
                            placeholder="Enter number"
                            className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-200 transition-all"
                            onChange={(e) => setA(Number(e.target.value))}
                        />
                    </div>
                    <div className="relative">
                        <label className="text-[10px] font-bold text-slate-400 uppercase ml-4 mb-1 block">Value B</label>
                        <input 
                            type='text' 
                            placeholder="Enter number"
                            className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-200 transition-all"
                            onChange={(e) => setB(Number(e.target.value))}
                        />
                    </div>
                </div>

                {/* Grid of Buttons */}
                <div className="grid grid-cols-2 gap-3 w-full mb-10">
                    <button 
                        onClick={() => setresult(A + B)}
                        className="py-3 bg-slate-700 hover:bg-slate-800 text-white text-sm font-bold rounded-xl shadow-md transition-all active:scale-95 uppercase tracking-wider"
                    >
                        Add
                    </button>
                    <button 
                        onClick={() => setresult(A - B)}
                        className="py-3 bg-slate-100 hover:bg-slate-200 text-slate-600 text-sm font-bold rounded-xl transition-all active:scale-95 uppercase tracking-wider"
                    >
                        Substract
                    </button>
                    <button 
                        onClick={() => setresult(A * B)}
                        className="py-3 bg-slate-100 hover:bg-slate-200 text-slate-600 text-sm font-bold rounded-xl transition-all active:scale-95 uppercase tracking-wider"
                    >
                        Multiplication
                    </button>
                    <button 
                        onClick={() => setresult(A / B)}
                        className="py-3 bg-slate-100 hover:bg-slate-200 text-slate-600 text-sm font-bold rounded-xl transition-all active:scale-95 uppercase tracking-wider"
                    >
                        Division
                    </button>
                </div>

                {/* Result Footer */}
                <div className="w-full bg-slate-50 rounded-2xl p-6 border border-slate-100 text-center">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">Total Result</span>
                    <h1 className="text-4xl font-light text-slate-800 tracking-tighter">
                        {result}
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Demo2page