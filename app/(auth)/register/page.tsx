"use client"
import React, { useState } from 'react';
import { useRouter } from "next/navigation";

function Registerpage() {

  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/Lab23/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          password
        })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Registration failed");
      }

      router.push("/login");

    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center p-6 relative overflow-hidden">
      
      <div className="absolute top-[-5%] left-[-5%] w-72 h-72 bg-yellow-200/40 rounded-full blur-3xl animate-bounce duration-[10s]" />
      <div className="absolute bottom-[-5%] right-[-5%] w-96 h-96 bg-rose-200/40 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-50/50 rounded-full blur-3xl" />

      <div className="relative w-full max-w-lg bg-white rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] border border-white p-8 md:p-12 overflow-hidden">
        
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-teal-300 via-rose-300 to-amber-300" />

        <div className="text-left mb-10">
          <div className="h-12 w-12 bg-gradient-to-tr from-rose-400 to-orange-300 rounded-2xl rotate-12 flex items-center justify-center mb-6 shadow-lg shadow-rose-200">
             <span className="text-white font-black text-2xl tracking-tighter">Hi</span>
          </div>
          <h1 className="text-4xl font-black text-slate-800 tracking-tight">Create Account</h1>
          <p className="text-slate-400 mt-2 font-medium">Join our colorful community today!</p>
        </div>

        {/* FORM UPDATED */}
        <form className="space-y-6" onSubmit={handleRegister}>

          <div className="group space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Full Name</label>
            <input 
              type="text" 
              placeholder="Sunny Day"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full bg-slate-50 border-2 border-transparent px-6 py-4 rounded-2xl text-slate-700 outline-none transition-all focus:bg-white focus:border-teal-300 focus:shadow-[0_0_20px_rgba(153,246,228,0.4)]"
            />
          </div>

          <div className="group space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Email</label>
            <input 
              type="email" 
              placeholder="hello@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-slate-50 border-2 border-transparent px-6 py-4 rounded-2xl text-slate-700 outline-none transition-all focus:bg-white focus:border-rose-300 focus:shadow-[0_0_20px_rgba(253,215,170,0.4)]"
            />
          </div>

          <div className="group space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Password</label>
            <input 
              type="password" 
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-slate-50 border-2 border-transparent px-6 py-4 rounded-2xl text-slate-700 outline-none transition-all focus:bg-white focus:border-amber-300 focus:shadow-[0_0_20px_rgba(253,230,138,0.4)]"
            />
          </div>

          {/*  Error Message */}
          {error && (
            <p className="text-red-500 text-sm font-semibold">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-slate-900 hover:bg-teal-400 text-white font-black py-5 rounded-[2rem] transition-all transform hover:-translate-y-1 shadow-xl shadow-slate-200 flex items-center justify-center gap-3 active:scale-95 group"
          >
            {loading ? "Creating..." : "Let's Go!"}
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </button>
        </form>

        <div className="mt-10 flex flex-col items-center gap-4">
          <div className="flex gap-2">
            <div className="h-2 w-2 rounded-full bg-teal-300" />
            <div className="h-2 w-2 rounded-full bg-rose-300" />
            <div className="h-2 w-2 rounded-full bg-amber-300" />
          </div>
          <p className="text-slate-400 text-sm font-bold tracking-tight">
            Already have an account? 
            <span 
              onClick={() => router.push("/login")}
              className="text-rose-400 cursor-pointer hover:underline ml-1"
            >
              Log in
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Registerpage;