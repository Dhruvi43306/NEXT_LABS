"use client";

import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { 
  ArrowLeft, Mail, Phone, Fingerprint, 
  Pencil, Share2, GraduationCap, 
  CalendarDays, Zap, Award, Globe,
  DeleteIcon
} from "lucide-react";
import { Trash2 } from "lucide-react";

interface Student {
  avatar: string;
  id: string;
  name: string;
  Email: string;
  phonnumber: string;
}

export default function StudentDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;
  const [data, setData] = useState<Student | null>(null);

  useEffect(() => {
    if (!id) return;
    fetch(`https://687e6a1defe65e5200869efe.mockapi.io/faculty/CollejStudent/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [id]);

  if (!data) return <LoadingState />;

  return (
    <div className="min-h-screen bg-[#FDFEFF] text-slate-800 p-4 md:p-10 font-sans">
      {/* Background Decor */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[10%] left-[15%] w-72 h-72 bg-purple-100/40 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] right-[10%] w-96 h-96 bg-blue-100/40 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header Actions */}
        <div className="flex justify-between items-center mb-10">
          <button 
            onClick={() => router.back()}
            className="flex items-center gap-2 px-5 py-2.5 bg-white/80 backdrop-blur-md border border-slate-200 rounded-2xl shadow-sm hover:shadow-md hover:-translate-x-1 transition-all group"
          >
            <ArrowLeft size={18} className="text-slate-400 group-hover:text-indigo-600" />
            <span className="font-semibold text-sm">Return</span>
          </button>
          <div className="flex gap-3">
            <button className="p-2.5 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
              <Share2 size={18} className="text-slate-500" />
            </button>
            <button onClick={()=>{router.push(`/Lab24/Student/StudentEdit/${data.id}`)}} className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white rounded-2xl font-bold shadow-lg shadow-indigo-200 hover:bg-indigo-700 active:scale-95 transition-all">
              <Pencil size={16} />
              Edit Profile
            </button>
            
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Identity Card (Indigo/Blue Theme) */}
          <div className="lg:col-span-5">
            <div className="group relative bg-white border border-slate-200 rounded-[40px] p-10 shadow-sm overflow-hidden hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-bl-[100px] -z-0 transition-transform group-hover:scale-110" />
              
              <div className="relative z-10 flex flex-col items-center">
                <div className="p-2 rounded-[3rem] bg-gradient-to-tr from-indigo-500 to-purple-400 shadow-xl mb-6">
                  <img
                    src={data.avatar}
                    alt={data.name}
                    className="w-40 h-40 rounded-[2.8rem] object-cover border-4 border-white"
                  />
                </div>
                <h1 className="text-3xl font-black text-slate-900 tracking-tight mb-2 text-center uppercase tracking-wide">
                  {data.name}
                </h1>
                <div className="flex items-center gap-2 px-4 py-1.5 bg-slate-100 rounded-full text-slate-500 text-xs font-bold uppercase tracking-widest">
                  <GraduationCap size={14} />
                  Senior Scholar
                </div>

                <div className="grid grid-cols-2 gap-4 w-full mt-10">
                  <div className="bg-emerald-50 p-4 rounded-3xl border border-emerald-100">
                    <p className="text-[10px] font-black text-emerald-600 uppercase mb-1">Attendance</p>
                    <p className="text-xl font-bold text-emerald-700 tracking-tighter">98.4%</p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-3xl border border-amber-100">
                    <p className="text-[10px] font-black text-amber-600 uppercase mb-1">Current GPA</p>
                    <p className="text-xl font-bold text-amber-700 tracking-tighter">3.92</p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>

          {/* Details & Features Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Quick Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <StatusCard 
                icon={<Fingerprint size={20} />} 
                label="Student ID" 
                value={data.id} 
                color="bg-blue-500" 
              />
              <StatusCard 
                icon={<Globe size={20} />} 
                label="Region" 
                value="International" 
                color="bg-purple-500" 
              />
            </div>

            {/* Contact Bento Box */}
            <div className="bg-white border border-slate-200 rounded-[40px] p-8 shadow-sm">
              <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                <Zap size={16} className="text-amber-500" /> 
                Contact Channels
              </h3>
              <div className="space-y-4">
                <ContactLink 
                  icon={<Mail />} 
                  label="Official Email" 
                  value={data.Email} 
                  theme="indigo" 
                />
                <ContactLink 
                  icon={<Phone />} 
                  label="Personal Contact" 
                  value={data.phonnumber} 
                  theme="rose" 
                />
                <ContactLink 
                  icon={<CalendarDays />} 
                  label="Enrollment Date" 
                  value="August 12, 2024" 
                  theme="emerald" 
                />
              </div>
     <button onClick={()=>{
      fetch(`https://687e6a1defe65e5200869efe.mockapi.io/faculty/CollejStudent/${data.id}`,{
        method:"DELETE",
        headers:{
          "content-type": "application/json"},
      })
      .then((res)=>(res.json()))
      .then(()=>{router.push("/Lab24/Student")
    })
  
    .catch((err) => console.log(err));
    }}
      className="
        relative group overflow-hidden
        flex items-center gap-2 px-5 py-2.5 
        rounded-[20px] transition-all duration-500
        active:scale-95 shadow-lg shadow-purple-200/40 ml-85 mt-5
      "
      style={{
        background: `radial-gradient(circle at 20% 20%, #d1e9ff 0%, transparent 40%),
                     radial-gradient(circle at 80% 10%, #b8f2ff 0%, transparent 40%),
                     radial-gradient(circle at 50% 50%, #e0c3fc 0%, transparent 60%),
                     radial-gradient(circle at 10% 90%, #fbc2eb 0%, transparent 40%),
                     radial-gradient(circle at 90% 90%, #a18cd1 0%, transparent 40%),
                     #f8f9fa`
      }}
    >
      <div className="absolute inset-1 border-[2px] border-white rounded-[16px] pointer-events-none opacity-80" />

      <Trash2 
        size={16} 
        className="relative z-10 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]" 
      />

      {/* Smaller, tighter text */}
      <span className=" relative z-10  text-white text-sm font-bold tracking-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">
        Delete Profile
      </span>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
    </button>
            </div>

            {/* Achievement Preview */}
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-[40px] p-8 text-white flex items-center justify-between overflow-hidden relative">
              <div className="relative z-10">
                <h4 className="text-lg font-bold mb-1">Dean's List 2026</h4>
                <p className="text-slate-400 text-sm">Acknowledged for academic excellence.</p>
              </div>
              <Award className="text-amber-400 relative z-10" size={40} />
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

// Sub-components for professional modularity
function StatusCard({ icon, label, value, color }: any) {
  return (
    <div className="flex items-center gap-4 p-5 bg-white border border-slate-200 rounded-[30px] hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-500/5 transition-all group">
      <div className={`w-12 h-12 rounded-2xl ${color} text-white flex items-center justify-center shadow-lg shadow-current/20 group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <div>
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1.5">{label}</p>
        <p className="text-slate-800 font-bold">{value}</p>
      </div>
    </div>
  );
}

function ContactLink({ icon, label, value, theme }: any) {
  const themes: any = {
    indigo: "bg-indigo-50 text-indigo-600 border-indigo-100 hover:bg-indigo-600",
    rose: "bg-rose-50 text-rose-600 border-rose-100 hover:bg-rose-600",
    emerald: "bg-emerald-50 text-emerald-600 border-emerald-100 hover:bg-emerald-600",
  };

  return (
    <div className="group flex items-center justify-between p-2 pl-5 bg-slate-50/50 border border-slate-100 rounded-[24px] hover:bg-white hover:border-slate-200 transition-all">
      <div className="flex items-center gap-4">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${themes[theme]} hover:text-white`}>
          {React.cloneElement(icon as React.ReactElement)}
        </div>
        <div>
          <p className="text-[9px] font-black text-slate-400 uppercase tracking-tighter leading-none mb-1">{label}</p>
          <p className="text-slate-700 font-bold text-sm tracking-tight">{value}</p>
        </div>
      </div>
      <button className="p-3 text-slate-300 hover:text-slate-600 transition-colors">
        <Globe size={16} />
      </button>
    </div>
  );
}

function LoadingState() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 border-4 border-indigo-50 rounded-full" />
        <div className="absolute inset-0 border-4 border-indigo-600 rounded-full border-t-transparent animate-spin" />
      </div>
    </div>
  );
}