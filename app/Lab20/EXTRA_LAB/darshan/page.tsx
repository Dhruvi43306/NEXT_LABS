import MyButton from "../ui/mybutton";
import { ShieldCheck, Server, MonitorSmartphone } from "lucide-react";

export default function DarshanPage() {
  console.log("Rendered on SERVER");

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[80vh] gap-10">
      
      {/* HEADER SECTION */}
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <div className="p-3 bg-rose-50 rounded-2xl text-rose-500 shadow-sm border border-rose-100">
            <ShieldCheck size={32} strokeWidth={1.5} />
          </div>
        </div>
        <h1 className="text-5xl font-black text-slate-900 tracking-tighter">
          This is <span className="text-rose-500">Darshan Page</span>
        </h1>
        <p className="text-slate-400 font-medium text-sm">Hybrid Rendering Environment v4.0</p>
      </div>

      {/* COMPONENT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
        
        {/* SERVER COMPONENT CARD */}
        <div className="bg-white border border-slate-100 p-8 rounded-[2.5rem] shadow-sm flex flex-col items-center text-center gap-6 group hover:border-slate-300 transition-all">
          <div className="flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full text-[10px] font-bold text-slate-500 uppercase tracking-widest">
            <Server size={12} />
            Static Context
          </div>
          
          <p className="text-xs text-slate-400 px-4">This element is pre-rendered on the server for maximum performance.</p>
          
          {/* Your Server-rendered static button */}
          <button className="w-full rounded-2xl bg-slate-800 px-6 py-4 text-white font-bold text-sm shadow-lg shadow-slate-200 hover:bg-slate-700 hover:-translate-y-1 transition-all">
            Regular Button (Server Rendered)
          </button>
        </div>

        {/* CLIENT COMPONENT CARD */}
        <div className="bg-gradient-to-b from-white to-rose-50/30 border border-rose-100 p-8 rounded-[2.5rem] shadow-sm flex flex-col items-center text-center gap-6 group hover:shadow-xl hover:shadow-rose-50 transition-all">
          <div className="flex items-center gap-2 px-3 py-1 bg-rose-100 text-rose-600 rounded-full text-[10px] font-bold uppercase tracking-widest">
            <MonitorSmartphone size={12} />
            Active Context
          </div>

          <p className="text-xs text-slate-400 px-4">This component handles real-time user interactions and state.</p>

          {/* Your Client-side interactive button */}
          <div className="w-full transform group-hover:scale-105 transition-transform">
            <MyButton />
          </div>
        </div>

      </div>

      {/* BACKGROUND DECORATION */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl -z-10 opacity-40">
        <div className="absolute top-0 right-0 w-64 h-64 bg-rose-200 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100 rounded-full blur-[100px]" />
      </div>
    </div>
  );
}