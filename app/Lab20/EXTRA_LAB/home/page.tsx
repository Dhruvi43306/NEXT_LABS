import Image from "next/image";
import React from "react";
import { ArrowDown, MousePointer2, Sparkles } from "lucide-react";
import Link from "next/link";
export default function Home() {
  return (
    <div className="relative flex flex-col items-center min-h-screen">
      
      <section className="flex flex-col items-center justify-center pt-20 pb-32 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 text-[10px] font-black uppercase tracking-widest mb-6 animate-bounce">
          <Sparkles size={12} fill="currentColor" />
          <span>Welcome Back</span>
        </div>

        <h1 className="text-6xl font-black text-slate-900 tracking-tighter mb-4">
          This is <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">Home Page</span>
        </h1>
        
        <div className="bg-slate-50 border border-slate-100 px-6 py-2 rounded-2xl text-sm font-bold text-slate-400">
          Top of Home
        </div>

        <div className="mt-20 flex flex-col items-center gap-3 text-slate-300">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em]">Scroll to Explore</p>
          
          <div>This is Scrooled and Prefeatch Demo Below Here!</div>
            <div className="w-6 h-10 border-2 border-slate-200 rounded-full flex justify-center p-1">

      <div className="w-1 h-2 bg-slate-300 rounded-full animate-bounce" />
      </div>
        </div>
      </section>

      <div  className="w-full relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-50 rounded-full blur-[120px] opacity-50 -z-10" />
      </div>

      <section 
        id="target" 
        className="mb-0 group cursor-default"
      >
        <div className="bg-white border-2 border-slate-100 p-12 rounded-[3rem] shadow-xl shadow-slate-200/50 flex flex-col items-center gap-6 transition-all duration-500 hover:border-emerald-200 hover:scale-105">
          <div className="w-20 h-20 bg-emerald-500 rounded-3xl flex items-center justify-center text-white shadow-lg shadow-emerald-200 group-hover:rotate-12 transition-transform">
            <MousePointer2 size={32} />
          </div>
          {/*Prefeached :{true} means like that i given one example if any mobile inside only hover the video then video are play dont clik it and prefeact request are uniqe for compre any request you can show prefetchr request network inside*/}
        <Link href="/Lab20/EXTRA_LAB/scrolled" scroll={false}>
                <h2 className="text-2xl font-black text-slate-800 tracking-tight cursor-pointer">
          You scrolled here
        </h2>
        </Link>

          <p className="text-slate-400 text-sm font-medium max-w-[200px] text-center">
            You have successfully reached the target destination.
          </p>
        </div>
      </section>
      
    </div>
  );
}