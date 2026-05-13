"use client";

import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState, useCallback } from "react";
import { 
  User, Mail, Phone, Fingerprint, 
  ArrowLeft, Save, Loader2, ShieldCheck, Sparkles 
} from "lucide-react";

// Define the shape of our student data
interface Student {
  id?: string;
  name: string;
  Email: string;
  phonnumber: string;
}

// Sub-component for the high-end Input feel
// Fixed: Explicitly defined prop types to prevent TypeScript/Runtime errors
interface ModernInputProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  onChange: (val: string) => void;
  onFocus: () => void;
  onBlur: () => void;
  isActive: boolean;
  type?: string;
}

const ModernInput = ({ icon, label, value, onChange, onFocus, onBlur, isActive, type = "text" }: ModernInputProps) => {
  return (
    <div className={`
      relative p-6 rounded-[28px] border transition-all duration-300
      ${isActive ? 'bg-white border-indigo-200 shadow-xl shadow-indigo-500/5' : 'bg-slate-50 border-slate-100 hover:border-slate-200'}
    `}>
      <label className={`
        absolute left-6 transition-all duration-300 font-black uppercase tracking-widest text-[10px] pointer-events-none
        ${isActive || value ? '-top-3 px-2 bg-white text-indigo-500' : 'top-7 text-slate-400'}
      `}>
        {label}
      </label>
      <div className="flex items-center gap-4 mt-1">
        <div className={`transition-colors duration-300 ${isActive ? 'text-indigo-500' : 'text-slate-300'}`}>
          {icon}
        </div>
        <input
          type={type}
          value={value || ""}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-transparent outline-none font-bold text-slate-700 placeholder:text-transparent"
        />
      </div>
    </div>
  );
};

export default function StudentEditpage() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id as string; // Safe access to params

  const [data, setData] = useState<Student | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [activeField, setActiveField] = useState<string | null>(null);

  // Fetch Data
  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        const res = await fetch(`https://687e6a1defe65e5200869efe.mockapi.io/faculty/CollejStudent/${id}`);
        const result = await res.json();
        setData(result);
      } catch (error) {
        console.error("Failed to fetch student:", error);
      }
    };

    fetchData();
  }, [id]);

  // Update Data
  const handleUpdate = async () => {
    if (!data || !id) return;
    setIsSaving(true);
    try {
      await fetch(`https://687e6a1defe65e5200869efe.mockapi.io/faculty/CollejStudent/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      router.push("/Lab24/Student");
    } catch (error) {
      console.error("Update failed:", error);
      setIsSaving(false);
    }
  };

  if (!data) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center">
        <Loader2 className="w-10 h-10 text-indigo-600 animate-spin" />
        <p className="mt-4 text-slate-400 font-bold text-xs tracking-widest uppercase">Initializing Editor...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F4F7FA] flex items-center justify-center p-6 font-sans">
      <div className="w-full max-w-2xl relative">
        
        {/* Back Button */}
        <button 
          onClick={() => router.back()}
          className="absolute -top-14 left-0 flex items-center gap-2 text-slate-400 hover:text-indigo-600 font-bold text-xs uppercase tracking-widest transition-all group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Directory
        </button>

        <div className="bg-white rounded-[48px] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.08)] border border-white overflow-hidden">
          
          {/* Header Banner */}
          <div className="h-32 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 relative">
             <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
             <div className="absolute -bottom-12 left-10 p-2 bg-white rounded-[32px] shadow-lg">
                <div className="w-20 h-20 bg-slate-100 rounded-[24px] flex items-center justify-center text-indigo-600">
                   <User size={40} />
                </div>
             </div>
          </div>

          <div className="pt-16 px-10 pb-10">
            <div className="flex justify-between items-start mb-10">
              <div className="max-w-[70%]">
                <h1 className="text-3xl font-black text-slate-800 tracking-tight truncate">
                  {data.name || "New Student"}
                </h1>
                <p className="text-slate-400 font-medium flex items-center gap-2">
                  <ShieldCheck size={14} className="text-emerald-500" /> 
                  Academic Directory Record
                </p>
              </div>
              <div className="px-4 py-2 bg-indigo-50 rounded-2xl text-indigo-600 text-[10px] font-black uppercase tracking-tighter shadow-sm border border-indigo-100">
                REF: {id}
              </div>
            </div>

            {/* Input Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ModernInput 
                icon={<User size={18} />} 
                label="Full Name" 
                value={data.name} 
                isActive={activeField === 'name'}
                onFocus={() => setActiveField('name')}
                onBlur={() => setActiveField(null)}
                onChange={(val) => setData({ ...data, name: val })} 
              />

              <ModernInput 
                icon={<Mail size={18} />} 
                label="Email Address" 
                value={data.Email} 
                isActive={activeField === 'email'}
                onFocus={() => setActiveField('email')}
                onBlur={() => setActiveField(null)}
                onChange={(val) => setData({ ...data, Email: val })} 
                type="email"
              />

              <ModernInput 
                icon={<Phone size={18} />} 
                label="Contact Number" 
                value={data.phonnumber} 
                isActive={activeField === 'phone'}
                onFocus={() => setActiveField('phone')}
                onBlur={() => setActiveField(null)}
                onChange={(val) => setData({ ...data, phonnumber: val })} 
              />

              <div className="bg-slate-50/50 rounded-[28px] p-6 border border-slate-100 flex items-center gap-4">
                 <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-slate-300 shadow-sm border border-slate-50">
                    <Fingerprint size={20} />
                 </div>
                 <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Status</p>
                    <p className="text-slate-800 font-bold text-sm">Active Member</p>
                 </div>
              </div>
            </div>

            {/* Save Button */}
            <div className="mt-12">
              <button
                onClick={handleUpdate}
                disabled={isSaving}
                className="w-full relative group bg-slate-900 text-white py-5 rounded-[28px] font-bold text-lg overflow-hidden transition-all active:scale-[0.98] shadow-2xl shadow-slate-200 disabled:opacity-50"
              >
                <div className="absolute inset-0 bg-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative z-10 flex items-center justify-center gap-3">
                  {isSaving ? <Loader2 className="animate-spin" size={20} /> : <Save size={22} />}
                  {isSaving ? "Synchronizing..." : "Update Student Profile"}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Status Footer */}
        <div className="mt-6 flex items-center justify-center gap-3 text-slate-400 font-bold text-[10px] uppercase tracking-[0.2em]">
           <Sparkles size={14} className="text-amber-400" />
           Encrypted Session Secure
        </div>
      </div>
    </div>
  );
}