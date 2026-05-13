"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Zap, Bell, Search, Command, Menu, X, LayoutGrid, Database, UserPlus } from "lucide-react";
import { ArrowRight, Sparkles, Wand2,Beaker,Cpu,BookOpen,Code2,Boxes } from 'lucide-react';
export default function UniqueWorkshopPage(){
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
    
      <div className="group relative inline-block cursor-pointer">
      <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute right-0 mt-2 w-44 bg-white border border-gray-100 rounded-xl shadow-xl transition-all duration-200 z-50 overflow-hidden">
        <div className="py-1 flex flex-col">
          <Link href="/admin" className="px-4 py-2.5 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
            Admin Profile
          </Link>
          <Link href="/manager" className="px-4 py-2.5 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
            Manager Profile
          </Link>
          <Link href="/user" className="px-4 py-2.5 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
            User Profile
          </Link>
        </div>
      </div>
    </div>
             

           
     


    <div className="min-h-screen bg-[#FDFEFF] p-8 lg:p-20 relative overflow-hidden">
      
      {/* Abstract Background Blurs for Depth */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-100/40 rounded-full blur-[100px] -z-10" />

      {/* Main Header Space */}
      <header className="max-w-5xl mx-auto text-center mb-24 relative">
        {/* <div className="inline-block px-4 py-1.5 mb-6 text-[10px] font-bold tracking-[0.3em] text-indigo-500 bg-indigo-50 rounded-full uppercase">
          Innovation Protocol 2.0
        </div> */}
        <br/>
        <br/>
        <br/>
        <h1 className="text-7xl font-light text-slate-900 tracking-tight leading-tight">
          The <span className="font-serif italic">Creative </span> <br /> 
          <span className="font-black bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">NEXT Workshop Hub</span>
        </h1>
        <p className="mt-8 text-lg text-slate-500 max-w-2xl mx-auto font-medium">
          A seamless fusion of engineering and art. Select a research station to begin your next breakthrough.
        </p>
      </header>

      {/* Unique Hex-Grid Lab Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        
      <Link href="/Lab20" className="group relative p-10 bg-white rounded-[4rem] border border-slate-100 shadow-sm overflow-hidden transition-all duration-500 hover:border-emerald-200">
  <div className="absolute -bottom-6 -right-6 text-[120px] font-black text-slate-50 group-hover:text-emerald-50 group-hover:-translate-y-4 transition-all duration-700 pointer-events-none">20</div>
  <div className="relative z-10">
    <div className="w-20 h-20 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-[2rem] flex items-center justify-center text-emerald-500 mb-8 group-hover:bg-emerald-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-emerald-200/50 transition-all duration-500">
      <Beaker size={32} />
    </div>
    <h3 className="text-2xl font-black text-slate-800 mb-3 tracking-tighter">Core Logic 20</h3>
    <p className="text-sm text-slate-500 max-w-[200px] leading-relaxed mb-8 font-medium">Foundational structure and complex layout algorithms for responsive design.</p>
    <div className="flex items-center gap-3">
       <div className="h-1 w-8 bg-emerald-400 group-hover:w-16 transition-all duration-500" />
       <span className="text-[10px] font-black uppercase text-slate-900 tracking-widest">Active Research</span>
    </div>
  </div>
</Link>

<Link href="/Lab21" className="group relative p-10 bg-white rounded-[4rem] border border-slate-100 shadow-sm overflow-hidden transition-all duration-500 hover:border-sky-200">
  <div className="absolute -bottom-6 -right-6 text-[120px] font-black text-slate-50 group-hover:text-sky-50 group-hover:-translate-y-4 transition-all duration-700 pointer-events-none">21</div>
  <div className="relative z-10">
    <div className="w-20 h-20 bg-gradient-to-br from-sky-50 to-blue-50 rounded-[2rem] flex items-center justify-center text-sky-500 mb-8 group-hover:rotate-12 group-hover:shadow-lg group-hover:shadow-sky-200/50 transition-all duration-500">
      <Code2 size={32} />
    </div>
    <h3 className="text-2xl font-black text-slate-800 mb-3 tracking-tighter">Nested Layouting 21</h3>
    <p className="text-sm text-slate-500 max-w-[200px] leading-relaxed mb-8 font-medium">Advanced component engineering and dynamic Layout management modules.</p>
    <div className="flex items-center gap-3">
       <div className="h-1 w-8 bg-sky-400 group-hover:w-16 transition-all duration-500" />
       <span className="text-[10px] font-black uppercase text-slate-900 tracking-widest">Compiler Ready</span>
    </div>
  </div>
</Link>





<Link href="/Lab22/f1" className="group relative p-10 bg-white rounded-[4rem] border border-slate-100 shadow-sm overflow-hidden transition-all duration-500 hover:border-violet-200">
  <div className="absolute -bottom-6 -right-6 text-[120px] font-black text-slate-50 group-hover:text-violet-50 group-hover:-translate-y-4 transition-all duration-700 pointer-events-none">22</div>
  <div className="relative z-10">
    <div className="w-20 h-20 bg-gradient-to-br from-violet-50 to-fuchsia-50 rounded-[2rem] flex items-center justify-center text-violet-500 mb-8 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-violet-200/50 transition-all duration-500">
      <BookOpen size={32} />
    </div>
    <h3 className="text-2xl font-black text-slate-800 mb-3 tracking-tighter">Intersepting Routing 22</h3>
    <p className="text-sm text-slate-500 max-w-[200px] leading-relaxed mb-8 font-medium">Deep documentation, case studies, and historical technical repositories.</p>
    <div className="flex items-center gap-3">
       <div className="h-1 w-8 bg-violet-400 group-hover:w-16 transition-all duration-500" />
       <span className="text-[10px] font-black uppercase text-slate-900 tracking-widest">Verified Access</span>
    </div>
  </div>
</Link>   


<Link href="/Lab23/products" className="group relative p-10 bg-white rounded-[4rem] border border-slate-100 shadow-sm overflow-hidden transition-all duration-500 hover:border-rose-200">
  <div className="absolute -bottom-6 -right-6 text-[120px] font-black text-slate-50 group-hover:text-rose-50 group-hover:-translate-y-4 transition-all duration-700 pointer-events-none">23</div>
  <div className="relative z-10">
    <div className="w-20 h-20 bg-gradient-to-br from-rose-50 to-pink-50 rounded-[2rem] flex items-center justify-center text-rose-500 mb-8 group-hover:-rotate-6 group-hover:shadow-lg group-hover:shadow-rose-200/50 transition-all duration-500">
      <Sparkles size={32} />
    </div>
    <h3 className="text-2xl font-black text-slate-800 mb-3 tracking-tighter">Neural Cell 23</h3>
    <p className="text-sm text-slate-500 max-w-[200px] leading-relaxed mb-8 font-medium">Experimental AI modeling and visual generative research experiments.</p>
    <div className="flex items-center gap-3">
       <div className="h-1 w-8 bg-rose-400 group-hover:w-16 transition-all duration-500" />
       <span className="text-[10px] font-black uppercase text-slate-900 tracking-widest">Syncing Data</span>
    </div>
  </div>
</Link>


<Link href="/Lab24" className="group relative p-10 bg-white rounded-[4rem] border border-slate-100 shadow-sm overflow-hidden transition-all duration-500 hover:border-slate-300">
  <div className="absolute -bottom-6 -right-6 text-[120px] font-black text-slate-50 group-hover:text-slate-100 group-hover:-translate-y-4 transition-all duration-700 pointer-events-none">24</div>
  <div className="relative z-10">
    <div className="w-20 h-20 bg-gradient-to-br from-slate-100 to-slate-200 rounded-[2rem] flex items-center justify-center text-slate-600 mb-8 group-hover:bg-slate-900 group-hover:text-white group-hover:shadow-lg transition-all duration-500">
      <Boxes size={32} />
    </div>
    <h3 className="text-2xl font-black text-slate-800 mb-3 tracking-tighter">Admin Core 24</h3>
    <p className="text-sm text-slate-500 max-w-[200px] leading-relaxed mb-8 font-medium">Main terminal for workshop settings, deployment logs, and system health.</p>
    <div className="flex items-center gap-3">
       <div className="h-1 w-8 bg-slate-900 group-hover:w-16 transition-all duration-500" />
       <span className="text-[10px] font-black uppercase text-slate-900 tracking-widest">Auth Level 4</span>
    </div>
  </div>
</Link>

 <Link href="/Lab26" className="group relative p-10 bg-white rounded-[4rem] border border-slate-100 shadow-sm overflow-hidden transition-all duration-500 hover:border-amber-200">
  <div className="absolute -bottom-6 -right-6 text-[120px] font-black text-slate-50 group-hover:text-amber-50 group-hover:-translate-y-4 transition-all duration-700 pointer-events-none">26</div>
  <div className="relative z-10">
    <div className="w-20 h-20 bg-gradient-to-br from-amber-50 to-orange-50 rounded-[2rem] flex items-center justify-center text-amber-500 mb-8 group-hover:shadow-lg group-hover:shadow-amber-200/50 transition-all">
      <Cpu size={32} />
    </div>
    <h3 className="text-2xl font-black text-slate-800 mb-3">System Lab 26</h3>
    <p className="text-sm text-slate-500 max-w-[200px] leading-relaxed mb-8 font-medium">System integrationfor Mongoose logic, and MySQL CRUD modules..</p>
    <div className="flex items-center gap-3">
       <div className="h-1 w-8 bg-amber-400 group-hover:w-16 transition-all duration-500" />
       <span className="text-[10px] font-black uppercase text-slate-900">Live Status</span>
    </div>
  </div>
</Link> 


<Link href="/Lab27/users" className="group relative p-10 bg-white rounded-[4rem] border border-slate-100 shadow-sm overflow-hidden transition-all duration-500 hover:border-emerald-200">
  <div className="absolute -bottom-6 -right-6 text-[120px] font-black text-slate-50 group-hover:text-emerald-50 group-hover:-translate-y-4 transition-all duration-700 pointer-events-none">
    27
  </div>

  <div className="relative z-10">
    <div className="w-20 h-20 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-[2rem] flex items-center justify-center text-emerald-500 mb-8 group-hover:bg-emerald-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-emerald-200/50 transition-all duration-500">
      <Database size={32} />
    </div>
    
    <h3 className="text-2xl font-black text-slate-800 mb-3 tracking-tighter">Backend Hub 27</h3>
    <p className="text-sm text-slate-500 max-w-[200px] leading-relaxed mb-8 font-medium">
      Full-stack environment featuring Prisma ORM integration and MySQL CRUD modules.
    </p>
    <div className="flex items-center gap-3">
       <div className="h-1 w-8 bg-emerald-500 group-hover:w-16 transition-all duration-500" />
       <span className="text-[10px] font-black uppercase text-slate-900 tracking-widest">ORM Integrated</span>
    </div>
  </div>
</Link>


<Link href="/Lab28/student" className="group relative p-10 bg-white rounded-[4rem] border border-slate-100 shadow-sm overflow-hidden transition-all duration-500 hover:border-rose-200">
  <div className="absolute -bottom-6 -right-6 text-[120px] font-black text-slate-50 group-hover:text-rose-50 group-hover:-translate-y-4 transition-all duration-700 pointer-events-none">
    28</div>

  <div className="relative z-10">
    <div className="w-20 h-20 bg-gradient-to-br from-rose-50 to-pink-50 rounded-[2rem] flex items-center justify-center text-rose-500 mb-8 group-hover:bg-rose-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-rose-200 transition-all duration-500">
      <UserPlus size={32} />
    </div>
    <h3 className="text-2xl font-black text-slate-800 mb-3 tracking-tighter">Server Actions 28</h3>
    <p className="text-sm text-slate-500 max-w-[200px] leading-relaxed mb-8 font-medium">
      Secure student portal featuring Next.js Server Actions for optimized form handling and data submission.
    </p>
    <div className="flex items-center gap-3">
       <div className="h-1 w-8 bg-rose-500 group-hover:w-16 transition-all duration-500" />
       <span className="text-[10px] font-black uppercase text-slate-900 tracking-widest">Action Ready</span>
    </div>
  </div>
</Link>



  <Link href="/Lab29" className="group relative p-10 bg-white rounded-[4rem] border border-slate-100 shadow-sm overflow-hidden transition-all duration-500 hover:border-indigo-200">
  <div className="absolute -bottom-6 -right-6 text-[120px] font-black text-slate-50 group-hover:text-indigo-50 group-hover:-translate-y-4 transition-all duration-700 pointer-events-none">
    29
  </div>
<div className="relative z-10">
    <div className="w-20 h-20 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-[2rem] flex items-center justify-center text-indigo-500 mb-8 group-hover:rotate-12 group-hover:shadow-lg group-hover:shadow-indigo-200/50 transition-all duration-500">
      <LayoutGrid size={32} />
    </div>
    <h3 className="text-2xl font-black text-slate-800 mb-3 tracking-tighter">
      Multi-Action Hub 29
    </h3>
    <p className="text-sm text-slate-500 max-w-[200px] leading-relaxed mb-8 font-medium">
      Integrated suite featuring a Basic Calculator, Snake Game portal, and dynamic Count modules.
    </p>
    <div className="flex items-center gap-3">
       <div className="h-1 w-8 bg-indigo-400 group-hover:w-16 transition-all duration-500" />
       <span className="text-[10px] font-black uppercase text-slate-900 tracking-widest">
         Full Suite Ready
       </span>
    </div>
  </div>
</Link>
        {/* Unique "Magic" Card */}
        <div className="relative group cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-fuchsia-400 rounded-[3rem] blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
          <div className="relative h-full border-2 border-dashed border-slate-200 rounded-[3rem] p-10 flex flex-col items-center justify-center text-center hover:border-violet-400 transition-colors">
            <Wand2 className="text-slate-300 group-hover:text-violet-500 mb-4 group-hover:rotate-12 transition-transform" size={40} />
            <h3 className="text-lg font-bold text-slate-400 group-hover:text-violet-600">Summon New Station</h3>
          </div>
        </div>

      </div>
    </div>




    
    </>
  );
}

function NavLink({ href, label, active = false }: { href: string; label: string; active?: boolean }) {
  return (
    <Link 
      href={href}
      className={`
        px-5 py-2 rounded-full text-[11px] font-black uppercase tracking-widest transition-all duration-300
        ${active 
          ? "bg-white text-indigo-600 shadow-sm border border-slate-100" 
          : "text-slate-400 hover:text-slate-600 hover:bg-white/50"}
      `}
    >
      {label}
    </Link>
  );
}