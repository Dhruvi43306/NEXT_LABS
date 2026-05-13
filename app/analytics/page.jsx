"use client";
import React, { useState } from 'react';
import Link from 'next/link';
const nextJsContent = {
  title: "Lab 19: Next.js Ecosystem",
  description: "Next.js is the industry-standard React framework. This lab marks your transition from 'Single Page Applications' (SPA) to 'Full-Stack Frameworks', where the server and client work together seamlessly.",
  techSpecs: [
    { label: "Architecture", value: "App Router (Next 14/15)" },
    { label: "Data Flow", value: "Server-Side Rendering (SSR)" },
    { label: "Styling", value: "Tailwind CSS Utility-First" },
    { label: "Middleware", value: "Edge Runtime Functions" }
  ],
  tasks: [
    { 
      id: "1", 
      title: "Project Setup & Directory Architecture", 
      level: "A", 
      desc: "Mastering 'create-next-app' and understanding the App Router folder hierarchy.",
      details: "Next.js uses 'Convention over Configuration'. The 'app/' folder is your routing hub. IMPORTANT: By default, components in the app folder are Server Components. Use 'use client' only when you need interactivity like onClick or useState. 'layout.js' preserves state across pages, while 'loading.js' automatically creates skeleton screens for better UX."
    },
    { 
      id: "2", 
      title: "Static Routing & Navigation", 
      level: "A", 
      desc: "Building the application skeleton with Home, About, and Contact routes.",
      details: "In the App Router, every folder (e.g., /about) must contain a 'page.js' to be accessible. Use the 'next/link' component instead of anchor <a> tags; this enables 'Pre-fetching', where Next.js loads the next page in the background as soon as the link appears in the viewport."
    },
    { 
      id: "3", 
      title: "Dynamic Routing & URL Params", 
      level: "B", 
      desc: "Creating variable routes like /product/[id] to handle dynamic data identifiers.",
      details: "Dynamic routes use square brackets [folderName]. This allows you to capture the ID from the URL as a prop. Logic Tip: Use this for 'Details Pages'. It allows one single file to render content for thousands of different database entries based on the URL parameter."
    },
    { 
      id: "4", 
      title: "Route Groups & Organization", 
      level: "A", 
      desc: "Using parentheses (group-name) to organize files without affecting the URL.",
      details: "Folders named with parentheses, like '(auth)', are ignored by the URL path. This is vital for developers to group related logic (like Login and Register) or to apply a specific layout to only a subset of pages without changing the web address."
    },
    { 
      id: "5", 
      title: "Middleware & Auth Protection", 
      level: "C", 
      desc: "Implementing middleware.js to intercept requests and verify authentication.",
      details: "Middleware acts as a 'Gatekeeper'. It runs at the Edge, meaning it executes before the page even begins to render. For students, this is where you check for a 'token' cookie; if it's missing, you redirect the user to '/login' before they ever see the protected data."
    }
  ]
};

export default function NextJsFirstPage() {
  const [selectedTask, setSelectedTask] = useState(null);

  return (
    <>
     <div className="min-h-screen bg-white text-slate-900 font-sans antialiased">
      
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <main className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        
        {/* 1. Ultra-Clean Hero Section */}
        <section className="text-center mb-32">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-8">
            <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Next Generation Web</span>
          </div>
          
          <h1 className="text-7xl md:text-[100px] font-extrabold tracking-tight leading-[0.85] text-slate-900 mb-12">
            What is <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Next.js?</span>
          </h1>

          {/* Your Content: Featured Section */}
          <div className="max-w-4xl mx-auto text-left bg-white border border-slate-200 p-10 md:p-16 rounded-[4rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)]">
            <p className="text-2xl md:text-3xl font-medium leading-snug text-slate-800 mb-10">
              Next.js is a <span className="text-blue-600 font-bold">React framework</span> for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations.
            </p>
            
            <div className="grid md:grid-cols-2 gap-12 border-t border-slate-100 pt-10">
              <div className="flex gap-4">
                <div className="h-6 w-1 bg-blue-600 shrink-0" />
                <p className="text-slate-500 leading-relaxed">
                  It also automatically configures lower-level tools like bundlers and compilers. You can instead focus on building your product and shipping quickly.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="h-6 w-1 bg-slate-200 shrink-0" />
                <p className="text-slate-500 leading-relaxed">
                  Whether you're an individual developer or part of a larger team, Next.js can help you build interactive, dynamic, and fast React applications.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Concept Cards: Refined Professional Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          
          <div className="group relative bg-white p-12 rounded-[3rem] border border-slate-100 hover:border-blue-100 transition-all duration-500">
            <div className="absolute top-0 right-10 -translate-y-1/2 bg-blue-600 text-white w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform">🏗️</div>
            <h3 className="text-2xl font-bold mb-4 tracking-tight">The Builder</h3>
            <p className="text-slate-500 leading-relaxed font-medium">
              If React is the <strong>bricks</strong>, Next.js is the <strong>blueprint and the crane</strong>. It gives you everything you need to build a full website in one package.
            </p>
          </div>

          <div className="group relative bg-white p-12 rounded-[3rem] border border-slate-100 hover:border-green-100 transition-all duration-500">
            <div className="absolute top-0 right-10 -translate-y-1/2 bg-green-500 text-white w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shadow-lg shadow-green-200 group-hover:scale-110 transition-transform">🚀</div>
            <h3 className="text-2xl font-bold mb-4 tracking-tight">The Speed</h3>
            <p className="text-slate-500 leading-relaxed font-medium">
              It makes websites <strong>fast</strong> by "pre-rendering" them. This means the page is ready to show before the user even clicks!
            </p>
          </div>

          <div className="group relative bg-white p-12 rounded-[3rem] border border-slate-100 hover:border-purple-100 transition-all duration-500">
            <div className="absolute top-0 right-10 -translate-y-1/2 bg-purple-500 text-white w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shadow-lg shadow-purple-200 group-hover:scale-110 transition-transform">🗺️</div>
            <h3 className="text-2xl font-bold mb-4 tracking-tight">The Map</h3>
            <p className="text-slate-500 leading-relaxed font-medium">
              In Next.js, <strong>Folders = Webpages</strong>. Creating a new page is as easy as creating a new folder. No complex coding required.
            </p>
          </div>
        </div>

        {/* 3. The "Cheat Sheet": Premium Dark Panel */}
        <div className="relative bg-slate-950 rounded-[4rem] p-12 md:p-20 overflow-hidden">
          {/* Abstract background light */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#3b82f633,transparent_60%)]" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-10 tracking-tight italic">Student Cheat Sheet</h2>
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center font-bold text-blue-400">1</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2">Full-Stack Capability</h4>
                    <p className="text-slate-400">You can write Backend (database) and Frontend code in the same project.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center font-bold text-blue-400">2</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2">SEO Friendly</h4>
                    <p className="text-slate-400">Google can find your site easily because Next.js helps it read your content.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Premium Code Display */}
            <div className="bg-[#050505] rounded-[2rem] p-10 border border-slate-800 shadow-2xl">
              <div className="flex gap-1.5 mb-8">
                <div className="w-3 h-3 rounded-full bg-slate-800" />
                <div className="w-3 h-3 rounded-full bg-slate-800" />
                <div className="w-3 h-3 rounded-full bg-slate-800" />
              </div>
              <div className="font-mono text-sm leading-relaxed">
                <p className="text-slate-500 mb-2">// Run this in your terminal</p>
                <div className="flex items-center gap-3">
                  <span className="text-blue-500">npx</span>
                  <span className="text-white font-bold tracking-tight">create-next-app@latest</span>
                </div>
                <div className="mt-10 h-1.5 w-full bg-slate-900 rounded-full overflow-hidden">
                  <div className="h-full w-2/3 bg-blue-600 rounded-full" />
                </div>
                <p className="text-xs text-slate-600 mt-4 uppercase font-bold tracking-tighter">Installation Progress: 67%</p>
              </div>
            </div>
          </div>
        </div>

      </main>

    </div>
    
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-blue-100">
      <header className="relative pt-24 pb-20 px-6 text-center bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full mb-8">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-600">Phase 01: Next.js Architecture</span>
          </div>
          
          <h1 className="text-7xl font-black tracking-tighter text-slate-900 mb-8 leading-[0.9]">
            The <span className="text-blue-600">Full-Stack</span> Shift.
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto font-medium">
            Next.js handles the heavy lifting of routing and optimization so you can focus on building features. Explore the core pillars of the framework below.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            {nextJsContent.techSpecs.map((spec, i) => (
              <div key={i} className="p-6 rounded-[2rem] bg-slate-50 border border-slate-100 text-left hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all cursor-default">
                <p className="text-[10px] font-black text-blue-500 uppercase mb-2 tracking-widest">{spec.label}</p>
                <p className="text-sm font-bold text-slate-800 leading-snug">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* 2. Interactive Learning Lab */}
      <main className="max-w-6xl mx-auto px-6 py-24">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Left: Interactive Roadmap */}
          <div className="lg:w-1/2">
            <div className="mb-10">
              <h3 className="text-3xl font-black text-slate-900 mb-2">Curriculum Roadmap</h3>
              <p className="text-slate-500 font-medium italic">Hover over each module to reveal the technical logic.</p>
            </div>
            
            <div className="relative space-y-6 before:absolute before:left-8 before:top-4 before:bottom-4 before:w-0.5 before:bg-slate-200">
              {nextJsContent.tasks.map((task) => (
                <div 
                  key={task.id}
                  onMouseEnter={() => setSelectedTask(task)}
                  className={`relative pl-20 pr-6 py-6 rounded-[2rem] border-2 transition-all cursor-pointer flex flex-col justify-center ${
                    selectedTask?.id === task.id 
                    ? 'border-blue-500 bg-white shadow-2xl shadow-blue-100 -translate-y-1' 
                    : 'border-transparent hover:bg-slate-100'
                  }`}
                >
                  {/* Step Indicator */}
                  <div className={`absolute left-4 w-8 h-8 rounded-full border-4 flex items-center justify-center font-black text-xs transition-all ${
                     selectedTask?.id === task.id ? 'bg-blue-600 border-blue-100 text-white scale-125' : 'bg-white border-slate-200 text-slate-400'
                  }`}>
                    {task.id.includes('.') ? task.id.split('.')[1] : task.id}
                  </div>

                  <div className="flex items-center gap-3 mb-1">
                    <span className={`text-[9px] px-2 py-0.5 rounded font-black uppercase tracking-tighter ${
                      task.level === 'A' ? 'bg-emerald-100 text-emerald-700' :
                      task.level === 'B' ? 'bg-orange-100 text-orange-700' : 'bg-rose-100 text-rose-700'
                    }`}>
                      LVL {task.level}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-800">{task.title}</h4>
                  <p className="text-sm text-slate-500 mt-1 font-medium leading-relaxed">{task.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Technical Explanation Panel */}
          <div className="lg:w-1/2">
            <div className="sticky top-24">
              {selectedTask ? (
                <div className="bg-slate-900 text-white rounded-[3rem] p-12 shadow-2xl relative overflow-hidden animate-in fade-in slide-in-from-right-8 duration-500">
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="h-px w-8 bg-blue-500"></div>
                        <span className="text-blue-400 font-black uppercase tracking-[0.3em] text-[10px]">Technical Concept</span>
                    </div>
                    
                    <h2 className="text-4xl font-bold mb-8 leading-[1.1]">{selectedTask.title}</h2>
                    
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mb-10">
                        <p className="text-slate-300 leading-relaxed text-lg font-medium italic">
                          "{selectedTask.details}"
                        </p>
                    </div>
                    
                    <div className="space-y-4">
                      <h5 className="text-slate-500 font-black text-[10px] uppercase tracking-widest mb-4">Implementation Checklist</h5>
                      <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
                        <div className="mt-1 w-5 h-5 rounded-full border-2 border-blue-500 flex items-center justify-center text-[10px] font-bold text-blue-500">1</div>
                        <p className="text-sm font-medium text-slate-200">Configure file-system paths in the <code className="text-blue-400">/app</code> directory.</p>
                      </div>
                      <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
                        <div className="mt-1 w-5 h-5 rounded-full border-2 border-blue-500 flex items-center justify-center text-[10px] font-bold text-blue-500">2</div>
                        <p className="text-sm font-medium text-slate-200">Ensure Server/Client component boundaries are strictly defined.</p>
                      </div>
                    </div>
                  </div>
                  <Link href={`/analytics/${selectedTask?.id}`}>
                  <button className="group relative w-full overflow-hidden rounded-2xl bg-white/10 p-[1px] transition-all hover:bg-white/20 active:scale-[0.98]">
                        <div className="relative flex items-center justify-center gap-3 rounded-2xl bg-slate-900 px-8 py-4 transition-all group-hover:bg-transparent">
                            <span className="text-xs font-black uppercase tracking-[0.2em] text-white">
                                Show Laboratory Details
                            </span>
                            <svg className="w-4 h-4 text-blue-500 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </div>
                    </button>
                    </Link>
                  

                  {/* Aesthetic Background Watermark */}
                  <div className="absolute -right-12 -bottom-16 text-[18rem] font-black text-white/[0.03] select-none pointer-events-none">
                    {selectedTask.level}
                  </div>
                </div>
              ) : (
                <div className="h-full min-h-[500px] border-2 border-dashed border-slate-200 rounded-[3rem] flex flex-col items-center justify-center text-center p-12 bg-slate-50/50">
                  <div className="w-20 h-20 bg-white shadow-xl rounded-3xl mb-6 flex items-center justify-center animate-bounce">
                    <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-slate-800 mb-2">Interactive Syllabus</h4>
                  <p className="text-slate-400 font-medium leading-relaxed">
                    Select a task from the roadmap to reveal <br />deep-dive technical specifications.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* 3. Global Knowledge Footer */}
      <footer className="max-w-6xl mx-auto px-6 pb-24">
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[3.5rem] p-16 text-white shadow-2xl shadow-blue-200 relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-md">
              <h2 className="text-4xl font-black mb-4">Mastering the Stack.</h2>
              <p className="text-blue-100 font-medium text-lg opacity-90">
                You are currently exploring Lab 19. Completion of this module unlocks advanced data fetching and server actions.
              </p>
            </div>
            <button className="whitespace-nowrap bg-white text-blue-600 px-12 py-5 rounded-full font-black text-sm uppercase tracking-widest hover:bg-blue-50 transition-all hover:scale-105 active:scale-95 shadow-xl">
              Initialize Project v19.0
            </button>
          </div>
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
        </div>
      </footer>
    </div>
  </>
  );
}