"use client"
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, Lock, ArrowRight, Github, Chrome, Zap, ShieldCheck, CheckCircle2, Sparkles } from "lucide-react";

export default function AuraSplitLogin() {

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/Lab23/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          password
        })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Login failed");
      }

      router.push("/Lab23/products");

    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[#FDFEFF] font-sans selection:bg-indigo-100">

      {/* ---- Your FULL UI Remains SAME ---- */}

      <div className="relative w-full max-w-5xl h-[700px] flex overflow-hidden rounded-[3.5rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] border border-white bg-white/40 backdrop-blur-3xl">

        <div className="flex-1 flex flex-col justify-center p-10 sm:p-24 bg-white/20">
          <div className="max-w-[380px] mx-auto w-full">
            <header className="mb-12">
              <h1 className="text-3xl font-black text-slate-900 tracking-tight">Identity Access</h1>
              <p className="text-slate-400 text-sm font-medium mt-2">Securely bridge into your control panel</p>
            </header>

            {/* 🔥 FORM UPDATED */}
            <form className="space-y-6" onSubmit={handleLogin}>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">
                  Work Credentials
                </label>
                <div className="relative group">
                  <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-indigo-500 transition-colors" size={18} />
                  <input
                    type="email"
                    placeholder="name@aura.io"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full pl-14 pr-6 py-4.5 bg-white border border-slate-100 rounded-2xl outline-none focus:ring-4 focus:ring-indigo-500/5 focus:border-indigo-200 transition-all font-semibold text-slate-700 placeholder:text-slate-300 placeholder:font-normal"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center ml-1">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                    Security Key
                  </label>
                  <Link href="#" className="text-[10px] font-bold text-indigo-500 hover:text-indigo-700 transition-colors">
                    Reset Access?
                  </Link>
                </div>
                <div className="relative group">
                  <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-indigo-500 transition-colors" size={18} />
                  <input
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full pl-14 pr-6 py-4.5 bg-white border border-slate-100 rounded-2xl outline-none focus:ring-4 focus:ring-indigo-500/5 focus:border-indigo-200 transition-all font-semibold text-slate-700 placeholder:text-slate-300 placeholder:font-normal"
                  />
                </div>
              </div>

              {/* ✅ Error Message */}
              {error && (
                <p className="text-red-500 text-sm font-semibold">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-5 bg-slate-900 text-white rounded-2xl font-bold text-sm mt-6 relative overflow-hidden group shadow-xl shadow-slate-200 hover:-translate-y-1 hover:shadow-indigo-100 active:scale-[0.98] transition-all duration-300"
              >
                <span className="relative flex items-center justify-center gap-3">
                  {loading ? "Authenticating..." : "Initiate Session"}
                  <ArrowRight size={18} />
                </span>
              </button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}