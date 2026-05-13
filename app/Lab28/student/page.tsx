import React from 'react'
import { User, Lock, ArrowRight, GraduationCap } from 'lucide-react'

export async function submitdata(formdata: FormData) {
    "use server"
    console.log("Username:", formdata.get("username"))
    console.log("Password:", formdata.get("password"))
}

function Studentpage() {
    return (
        <div className="min-h-screen bg-[#fcfcfe] bg-[radial-gradient(45%_45%_at_50%_50%,#f0f4ff_0%,#ffffff_100%)] flex items-center justify-center p-6 font-sans">
            
            {/* Background Decorative Element */}
            <div className="fixed top-[-10%] right-[-5%] w-[500px] h-[500px] bg-indigo-50/50 rounded-full blur-[120px] -z-10" />

            <div className="w-full max-w-md bg-white/80 backdrop-blur-xl border border-slate-200/60 shadow-[0_20px_50px_rgba(0,0,0,0.04)] rounded-[3rem] p-12 flex flex-col transition-all duration-500 hover:shadow-[0_30px_60px_rgba(79,70,229,0.1)]">
                
                {/* Header Section */}
                <div className="flex flex-col items-center mb-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-indigo-200 mb-6 transition-transform hover:rotate-12">
                        <GraduationCap size={32} />
                    </div>
                    <h1 className="text-3xl font-black text-slate-800 tracking-tighter uppercase mb-2">
                        Studentpage
                    </h1>
                    <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">
                        Secure Portal Access
                    </p>
                </div>

                {/* Form Section */}
                <form action={submitdata} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4 block">
                            UserName
                        </label>
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-5 flex items-center text-slate-400 group-focus-within:text-indigo-500 transition-colors">
                                <User size={18} />
                            </div>
                            <input 
                                type="text" 
                                name="username"
                                placeholder="Enter your username"
                                className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-12 pr-5 py-4 text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:bg-white focus:border-indigo-300 transition-all font-medium"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4 block">
                            Password
                        </label>
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-5 flex items-center text-slate-400 group-focus-within:text-indigo-500 transition-colors">
                                <Lock size={18} />
                            </div>
                            <input 
                                type="password" 
                                name="password"
                                placeholder="••••••••"
                                className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-12 pr-5 py-4 text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:bg-white focus:border-indigo-300 transition-all font-medium"
                            />
                        </div>
                    </div>

                    <button 
                        type="submit"
                        className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-black py-4 rounded-2xl shadow-lg shadow-indigo-100 flex items-center justify-center gap-3 transition-all active:scale-95 uppercase text-xs tracking-widest"
                    >
                        <span>Submit Data</span>
                        <ArrowRight size={16} />
                    </button>
                </form>

                {/* Footer Decor */}
                <div className="mt-12 flex justify-center items-center gap-4">
                    <div className="h-[1px] w-8 bg-slate-100" />
                    <span className="text-[9px] font-bold text-slate-300 uppercase tracking-widest">Server Actions Ready</span>
                    <div className="h-[1px] w-8 bg-slate-100" />
                </div>
            </div>
        </div>
    )
}

export default Studentpage