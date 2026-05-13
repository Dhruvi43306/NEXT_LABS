"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { 
  User, 
  Mail, 
  Phone, 
  Eye, 
  Search, 
  GraduationCap, 
  ChevronRight,
  ArrowUpDown
} from "lucide-react";

interface Student {
  id: string;
  name: string;
  Email: string;
  phonnumber: string;
}

export default function StudentPage() {
  const [data, setData] = useState<Student[]>([]);
  const router = useRouter();

  const apiurl = "https://687e6a1defe65e5200869efe.mockapi.io/faculty/CollejStudent";

  useEffect(() => {
    fetch(apiurl)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-4 md:p-10 font-sans text-slate-900">
      {/* Background accents */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="p-2 bg-indigo-600 rounded-lg text-white">
                <GraduationCap size={24} />
              </div>
              <h1 className="text-3xl font-black tracking-tight text-slate-800">
                Student Directory
              </h1>
            </div>
            <p className="text-slate-500 font-medium">
              Manage and view detailed profiles of enrolled students.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors" size={18} />
              <input 
                type="text" 
                placeholder="Quick search..." 
                className="pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-2xl w-full md:w-64 outline-none focus:ring-4 focus:ring-indigo-500/5 focus:border-indigo-500 transition-all shadow-sm"
              />
            </div>
          </div>
        </div>

        {/* Desktop Table Header */}
        <div className="hidden md:grid grid-cols-12 px-8 py-4 bg-slate-100/50 rounded-t-[24px] border-x border-t border-slate-200 text-[11px] font-black uppercase tracking-widest text-slate-500">
          <div className="col-span-1">ID</div>
          <div className="col-span-4 flex items-center gap-1 cursor-pointer hover:text-indigo-600 transition-colors">
            Student Name <ArrowUpDown size={12} />
          </div>
          <div className="col-span-3">Email Address</div>
          <div className="col-span-3">Phone Number</div>
          <div className="col-span-1 text-right">Action</div>
        </div>

        {/* Data List */}
        <div className="flex flex-col gap-3 md:gap-0">
          {data.length === 0 ? (
             <div className="bg-white border border-slate-200 rounded-[24px] p-20 text-center">
                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                   <User className="text-slate-300" />
                </div>
                <p className="text-slate-400 font-medium">Syncing student database...</p>
             </div>
          ) : (
            data.map((d, index) => (
              <div 
                key={d.id}
                className={`
                  group bg-white border border-slate-200 md:border-t-0 p-6 md:px-8 md:py-5 flex flex-col md:grid md:grid-cols-12 items-center gap-4 transition-all duration-300 hover:z-10
                  ${index === data.length - 1 ? 'md:rounded-b-[24px] border-b' : 'border-b-0'}
                  md:hover:bg-indigo-50/30 hover:shadow-xl hover:shadow-indigo-500/5
                `}
              >
                {/* ID Column */}
                <div className="col-span-1 w-full md:w-auto">
                  <span className="md:hidden text-[10px] font-bold text-slate-400 uppercase mr-2 tracking-tighter">ID:</span>
                  <span className="font-mono text-sm font-bold text-slate-500 bg-slate-50 px-2 py-1 rounded-md border border-slate-100">
                    {d.id}
                  </span>
                </div>

                {/* Name Column */}
                <div className="col-span-4 w-full flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-100 to-blue-50 flex items-center justify-center text-indigo-600 font-bold border border-indigo-100">
                    {d.name.charAt(0)}
                  </div>
                  <span className="font-bold text-slate-800 text-lg md:text-base group-hover:text-indigo-700 transition-colors">
                    {d.name}
                  </span>
                </div>

                {/* Email Column */}
                <div className="col-span-3 w-full flex items-center gap-2 text-slate-600">
                  <Mail size={16} className="text-slate-300 shrink-0" />
                  <span className="text-sm truncate">{d.Email}</span>
                </div>

                {/* Phone Column */}
                <div className="col-span-3 w-full flex items-center gap-2 text-slate-600">
                  <Phone size={16} className="text-slate-300 shrink-0" />
                  <span className="text-sm font-medium">{d.phonnumber}</span>
                </div>

                {/* Action Column */}
                <div className="col-span-1 w-full flex justify-end mt-4 md:mt-0">
                  <button
                    onClick={() => router.push(`/Lab24/Student/StudentDetail/${d.id}`)}
                    className="w-full md:w-auto flex items-center justify-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-700 font-bold text-sm shadow-sm hover:bg-indigo-600 hover:text-white hover:border-indigo-600 active:scale-95 transition-all group/btn"
                  >
                    <Eye size={16} className="group-hover/btn:scale-110 transition-transform" />
                    <span>View</span>
                    <ChevronRight size={14} className="md:hidden ml-auto" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Statistics */}
        <div className="mt-8 px-6 py-4 bg-white/50 border border-slate-200 rounded-[20px] flex items-center justify-between">
           <span className="text-sm text-slate-500 font-medium">
             Showing <span className="text-slate-900 font-bold">{data.length}</span> active students
           </span>
           <div className="flex gap-1">
              {[1, 2, 3].map(i => (
                <div key={i} className={`w-2 h-2 rounded-full ${i === 1 ? 'bg-indigo-600' : 'bg-slate-200'}`} />
              ))}
           </div>
        </div>
      </div>
    </div>
  );
}