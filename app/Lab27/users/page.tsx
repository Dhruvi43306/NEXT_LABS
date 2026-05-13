import { prisma } from '@/app/db/prismaConnection'
import React from 'react'
import { User, Database, ChevronRight, Hash, BadgeCheck } from 'lucide-react'

async function Userpage() {
    const data = await prisma.users.findMany()
    console.log("USER DATA:", data)

    return (
        <div className="min-h-screen bg-[#f8faff] bg-[radial-gradient(circle_at_top_right,_#f0f4ff_0%,_#ffffff_100%)] p-8 font-sans">
            
            {/* Background Decorative Element */}
            <div className="fixed -top-24 -right-24 w-96 h-96 bg-indigo-100/40 rounded-full blur-[100px] -z-10" />

            <div className="max-w-5xl mx-auto">
                {/* Top Navigation / Breadcrumb */}
                <div className="flex items-center gap-2 mb-8 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                    <Database size={12} />
                    <span>Prisma Engine</span>
                    <ChevronRight size={10} />
                    <span className="text-indigo-500">User Records</span>
                </div>

                {/* Main Header */}
                <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <h1 className="text-5xl font-black text-slate-800 tracking-tighter uppercase leading-none">
                            User Page
                        </h1>
                        <p className="mt-4 text-slate-500 font-medium max-w-md">
                            Direct stream of active database entities synchronized via Prisma ORM connection.
                        </p>
                    </div>
                    
                    {/* Status Badge */}
                    <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-2xl border border-slate-100 shadow-sm">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                        <span className="text-xs font-bold text-slate-700 uppercase tracking-widest">
                            {data.length} Total Users
                        </span>
                    </div>
                </header>

                {/* Data Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.map((user) => (
                        <div 
                            key={user.user_id} 
                            className="group relative bg-white/70 backdrop-blur-md border border-white rounded-[2.5rem] p-8 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(79,70,229,0.1)] hover:-translate-y-2"
                        >
                            {/* Decorative Background ID */}
                            <div className="absolute top-6 right-8 text-4xl font-black text-slate-100/50 group-hover:text-indigo-50 transition-colors">
                                #{user.user_id}
                            </div>

                            {/* Icon / Avatar */}
                            <div className="w-16 h-16 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl flex items-center justify-center text-indigo-500 mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                <User size={28} />
                            </div>

                            {/* Content */}
                            <div className="relative z-10">
                                <h3 className="text-2xl font-black text-slate-800 tracking-tight mb-2">
                                    {user.user_name}
                                </h3>
                                
                                <div className="flex items-center gap-2 mb-6">
                                    <BadgeCheck size={14} className="text-emerald-500" />
                                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                                        Verified Member
                                    </span>
                                </div>

                                {/* Divider & ID */}
                                <div className="flex items-center gap-3 pt-4 border-t border-slate-50">
                                    <Hash size={12} className="text-indigo-300" />
                                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-tighter">
                                        Ref: {user.user_id}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer Signature */}
                <footer className="mt-24 pt-8 border-t border-slate-100 flex justify-center items-center gap-4 text-slate-300">
                    <div className="h-[1px] w-12 bg-slate-100" />
                    <p className="text-[9px] font-black uppercase tracking-[0.5em]">
                        Lab-Terminal Terminal 2026
                    </p>
                    <div className="h-[1px] w-12 bg-slate-100" />
                </footer>
            </div>
        </div>
    )
}

export default Userpage