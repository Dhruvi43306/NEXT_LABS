import React from "react";
import { Sparkles } from "lucide-react";

export default function ScrooledPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white border-2 border-emerald-200 p-12 rounded-[3rem] shadow-xl text-center">
        <div className="flex justify-center mb-4">
          <Sparkles className="text-emerald-500" />
        </div>

        <h1 className="text-4xl font-black text-slate-800">
          You are on <span className="text-emerald-500">Scrooled Page</span>
        </h1>

        <p className="mt-4 text-slate-400 text-sm">
          Navigation worked + page was prefetched 🚀
        </p>
      </div>
    </div>
  );
}
