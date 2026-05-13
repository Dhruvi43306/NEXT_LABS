"use client";

import React, { useEffect, useState } from "react";
import {
  ArrowLeft,
  PlayCircle,
  ChevronRight,
  ArrowRight,
  Sparkles,
  Info,
  Zap,
  History,
  Terminal,
  Layout,
  Cpu,
  ShieldAlert
} from "lucide-react";
import { useParams } from "next/navigation";
import { title } from "process";

/* ---------------- ICON MAP ---------------- */

const iconMap: Record<string, any> = {
  info: Info,
  zap: Zap,
  history: History,
  terminal: Terminal,
  layout: Layout,
  cpu: Cpu,
  shieldalert: ShieldAlert
};

/* ---------------- THEME MAP ---------------- */

const themeMap = {
  blue: { color: "bg-blue-50/80", border: "border-blue-200", text: "text-blue-700", accent: "bg-blue-600" },
  emerald: { color: "bg-emerald-50/80", border: "border-emerald-200", text: "text-emerald-700", accent: "bg-emerald-600" },
  pink: { color: "bg-pink-50/80", border: "border-pink-200", text: "text-pink-700", accent: "bg-pink-600" },
  orange: { color: "bg-orange-50/80", border: "border-orange-200", text: "text-orange-700", accent: "bg-orange-600" },
  rose: { color: "bg-rose-50/80", border: "border-rose-200", text: "text-rose-700", accent: "bg-rose-600" },
  cyan: { color: "bg-cyan-50/80", border: "border-cyan-200", text: "text-cyan-700", accent: "bg-cyan-600" },
  violet: { color: "bg-violet-50/80", border: "border-violet-200", text: "text-violet-700", accent: "bg-violet-600" },
  amber: { color: "bg-amber-50/80", border: "border-amber-200", text: "text-amber-700", accent: "bg-amber-600" },
  teal: { color: "bg-teal-50/80", border: "border-teal-200", text: "text-teal-700", accent: "bg-teal-600" }
};

function getTheme(name?: string | null) {
  const key = name?.toLowerCase() as keyof typeof themeMap;
  return themeMap[key] ?? themeMap.blue;
}


async function getTopics(moduleId: number) {
  try {
    const res = await fetch(`/Lab23/api/module/${moduleId}`, {
      cache: "no-store"
    });

    if (!res.ok) return [];

    const json = await res.json();
    return json.data ?? [];
  } catch {
    return [];
  }
}


const LinearSubTopicPage = () => {

  const params = useParams();
  const moduleId = Number(params.topicid);

  const [topics, setTopics] = useState<any[]>([]);

  useEffect(() => {
    if (!moduleId) return;

    getTopics(moduleId).then(setTopics);
  }, [moduleId]);

  return (
    <div className="min-h-screen bg-[#FDFDFF] text-slate-900 font-sans pb-24">

      <nav className="bg-white/70 backdrop-blur-xl border-b border-slate-100 px-8 py-5 sticky top-0 z-50 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-4">
          <button className="p-2 bg-slate-50 hover:bg-slate-100 rounded-2xl transition-all active:scale-90">
            <ArrowLeft size={18} className="text-slate-600" />
          </button>

          <div className="flex flex-col">
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
              <span>Pathway</span>
              <ChevronRight size={10} />
              <span className="text-slate-900">Module {moduleId}</span>
            </div>
            <span className="font-black text-sm tracking-tight">
              Introduction to Next.js
            </span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-3 bg-slate-900 text-white px-5 py-2.5 rounded-2xl shadow-lg shadow-slate-200">
          <Sparkles size={14} className="text-amber-400" />
          <span className="text-[10px] font-black uppercase tracking-widest">
            Available Now
          </span>
        </div>
      </nav>
    {/* --- HERO --- */}
      <header className="max-w-5xl mx-auto pt-20 pb-16 px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6 leading-none">
          Explore <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Lessons</span>
        </h1>
        <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto italic">
          All sub-topics in  are unlocked. Choose any lesson to begin.
        </p>
      </header>
      <main className="max-w-4xl mx-auto px-6 relative">
         <div className="absolute left-[43px] top-4 bottom-4 w-1.5 bg-slate-100 -z-10 rounded-full overflow-hidden">
            <div className="absolute top-0 left-0 w-full bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 h-full rounded-full opacity-20" />
        </div>

        <div className="space-y-8">
          {topics.map((title: any, index: number) => {
            const Icon = iconMap[title.icon?.toLowerCase()] || Info;
            const theme = getTheme(title.theme);

            return (
              <div key={title.title_id} className="relative flex gap-8 group">

                <div className="relative pt-3">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center border-2 bg-white border-slate-200 text-slate-600">
                    <Icon size={18} />
                  </div>
                </div>

                <div className={`flex-1 p-8 rounded-[40px] border-2 ${theme.color} ${theme.border}`}>
                  <div className="flex justify-between items-center mb-4">
                    <span className={`text-[10px] font-black uppercase ${theme.text}`}>
                      Step {index + 1}
                    </span>

                    <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase bg-white ${theme.text}`}>
                      {title.type}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black tracking-tight uppercase mb-4 text-slate-900">
                    {title.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default LinearSubTopicPage;
