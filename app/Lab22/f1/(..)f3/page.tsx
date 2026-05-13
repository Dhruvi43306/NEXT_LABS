import React from 'react'

function InterseptingF3page() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-slate-900/5 backdrop-blur-md transition-all">
      <div className="bg-white rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-slate-100 p-12 max-w-sm w-full text-center relative overflow-hidden animate-in zoom-in-95 duration-300">
        
        {/* Soft Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-24 bg-gradient-to-b from-indigo-50 to-transparent"></div>

        <div className="relative">
          <div className="w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <div className="w-10 h-10 bg-indigo-600 rounded-2xl rotate-12 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-indigo-200">
              (..)
            </div>
          </div>

          <h2 className="text-2xl font-black text-slate-800 tracking-tight leading-tight">
            (.)Intersepting F3 page
          </h2>
          
          <p className="text-slate-500 mt-4 mb-8 text-sm leading-relaxed px-4">
            You just intercepted a route from a higher level! The underlying UI is still preserved.
          </p>

          <button className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-indigo-600 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-slate-200">
            Got it!
          </button>
        </div>
      </div>
    </div>
  )
}

export default InterseptingF3page