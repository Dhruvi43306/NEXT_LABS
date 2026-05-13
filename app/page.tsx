"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Rocket, Code2, BookOpen, FlaskConical, 
  ChevronRight, Star, Users, CheckCircle2, 
  Menu, X, Search, Terminal, Database, 
  Layout, ShieldCheck, Cpu, Layers, Zap, Eye, Heart, Smartphone
} from 'lucide-react';

interface LearningBenefit {
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  badge: string;
}

// --- Data ---
const benefits: LearningBenefit[] = [
  {
    title: "Step-by-Step Learning",
    description: "Every lab is organized from beginner to advanced so students never feel confused.",
    icon: Layers,
    color: "from-blue-400 to-cyan-400",
    badge: "Guided"
  },
  {
    title: "Interactive Practice",
    description: "Hands-on coding exercises help students learn by building real applications.",
    icon: Zap,
    color: "from-amber-400 to-orange-400",
    badge: "Live Labs"
  },
  {
    title: "Real Project Experience",
    description: "Students build modern real-world projects used in industry environments.",
    icon: Layout,
    color: "from-indigo-400 to-purple-400",
    badge: "Industry"
  },
  {
    title: "Visual Explanations",
    description: "Complex Next.js concepts are explained using clean UI and easy examples.",
    icon: Eye,
    color: "from-pink-400 to-rose-400",
    badge: "Visual"
  },
  {
    title: "Beginner Friendly",
    description: "Simple explanations and organized structure make learning stress-free.",
    icon: Heart,
    color: "from-emerald-400 to-teal-400",
    badge: "For You"
  },
  {
    title: "Modern Tech",
    description: "Learn Next.js, APIs, databases, authentication, and deployment.",
    icon: Cpu,
    color: "from-violet-400 to-fuchsia-400",
    badge: "Latest"
  },
  {
    title: "Fast Learning Path",
    description: "Structured roadmap helps students learn faster without wasting time.",
    icon: Rocket,
    color: "from-blue-500 to-indigo-500",
    badge: "Efficiency"
  },
  {
    title: "Responsive Labs",
    description: "Practice on any device with beautifully responsive lab interfaces.",
    icon: Smartphone,
    color: "from-cyan-400 to-blue-500",
    badge: "Flexible"
  }
];

// --- Reusable UI Components ---

const Badge = ({ children, color = "blue" }: { children: React.ReactNode, color?: string }) => {
  const colors: Record<string, string> = {
    blue: "bg-blue-50 text-blue-600 border-blue-100",
    indigo: "bg-indigo-50 text-indigo-600 border-indigo-100",
  };
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${colors[color] || colors.blue}`}>
      {children}
    </span>
  );
};

const Card = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className={`bg-white/80 backdrop-blur-md border border-white rounded-[2rem] shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 ${className}`}
  >
    {children}
  </motion.div>
);

const FloatingBlobs = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <motion.div 
      animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute top-[10%] left-[5%] w-72 h-72 bg-blue-100/50 rounded-full blur-3xl" 
    />
    <motion.div 
      animate={{ x: [0, -40, 0], y: [0, 60, 0] }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-purple-100/40 rounded-full blur-3xl" 
    />
    <motion.div 
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-pink-50/30 rounded-full blur-3xl" 
    />
  </div>
);

const BenefitCard = ({ benefit, index }: { benefit: LearningBenefit; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="group relative"
    >
      <div className="absolute -inset-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent rounded-[2rem] group-hover:via-blue-400 transition-all duration-500 opacity-50 group-hover:opacity-100" />
      
      <div className="relative h-full p-8 bg-white/70 backdrop-blur-xl border border-white/40 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(59,130,246,0.1)] transition-all duration-300 flex flex-col items-start overflow-hidden">
        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${benefit.color} opacity-[0.03] rounded-bl-full transition-opacity group-hover:opacity-[0.07]`} />

        <div className={`mb-6 p-4 rounded-2xl bg-gradient-to-br ${benefit.color} shadow-lg shadow-blue-200/20 group-hover:scale-110 transition-transform duration-300`}>
          <benefit.icon className="w-6 h-6 text-white" strokeWidth={2.5} />
        </div>

        <span className="mb-3 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-slate-500 bg-slate-100 rounded-full group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
          {benefit.badge}
        </span>

        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
          {benefit.title}
        </h3>

        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          {benefit.description}
        </p>

        <div className="mt-auto flex items-center text-blue-500 font-bold text-xs uppercase tracking-wider opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
          Learn More <ChevronRight size={14} className="ml-1" />
        </div>
      </div>
    </motion.div>
  );
};

// --- Main Page Component ---

export default function WorkshopLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-blue-100">
      
      {/* 1. STICKY NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-lg border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
              <Code2 size={24} />
            </div>
            <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600">
              NextLab
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="/Next_Labs" className="hover:text-blue-600 transition-colors">Live Labs</a>
            <a href="/analytics" className="hover:text-blue-600 transition-colors">Workshops</a>
           
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-20 left-[10%] w-72 h-72 bg-blue-200/40 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute top-40 right-[10%] w-96 h-96 bg-purple-200/30 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-1 text-center lg:text-left"
          >
            <Badge color="blue">🚀 Version 2.0 is Live</Badge>
            <h1 className="mt-6 text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1]">
              Master Next.js with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Interactive Labs
              </span>
            </h1>
            <p className="mt-8 text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              The ultimate workshop platform for students. Learn by building real-world projects 
              with Next.js, TypeScript, and modern backend integrations.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link href="https://nextjs.org/">
              <button className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold shadow-xl shadow-blue-200 hover:scale-105 transition-transform flex items-center gap-2">
                Start Learning <ChevronRight size={20} />
              </button>
              </Link>
              <Link href="/Next_Labs">
                <button className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-2xl font-bold hover:bg-slate-50 transition-all">
                  Explore Labs
                </button>
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex-1 relative"
          >
            <div className="relative z-10 bg-white/40 backdrop-blur-2xl p-4 rounded-[2.5rem] border border-white/50 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800" 
                alt="Coding Lab"
                className="rounded-[2rem] shadow-inner"
              />
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 bg-white/90 p-6 rounded-3xl shadow-xl border border-white flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-green-600">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Lab Completed!</p>
                  <p className="text-xs text-slate-500">API Routes Mastered</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. STATISTICS SECTION */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { label: "Active Labs", value: "45+", icon: <FlaskConical className="text-blue-500" /> },
            { label: "Students", value: "12k+", icon: <Users className="text-purple-500" /> },
            { label: "Workshops", value: "18", icon: <Rocket className="text-orange-500" /> },
            { label: "Success Rate", value: "99%", icon: <Star className="text-yellow-500" /> },
          ].map((stat, i) => (
            <div key={i} className="text-center p-6 rounded-3xl bg-white border border-slate-100 shadow-sm">
              <div className="flex justify-center mb-3">{stat.icon}</div>
              <h4 className="text-3xl font-bold text-slate-900">{stat.value}</h4>
              <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FEATURES SECTION */}
      <section className="py-24 px-6 bg-blue-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge color="indigo">Core Features</Badge>
            <h2 className="mt-4 text-4xl font-bold text-slate-900">Everything you need to level up</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Real Projects", desc: "Build SaaS products, dashboards, and interactive games.", icon: <Layout /> },
              { title: "Database Ready", desc: "Learn MongoDB, Prisma, and PostgreSQL integration.", icon: <Database /> },
              { title: "Auth Systems", desc: "Master NextAuth and Clerk for secure student portals.", icon: <ShieldCheck /> },
              { title: "API Practice", desc: "Hands-on with REST and GraphQL in Next.js environment.", icon: <Terminal /> },
              { title: "Performance", desc: "Optimizing Core Web Vitals and Server Components.", icon: <Cpu /> },
              { title: "Deployment", desc: "Zero-config deployment guides for Vercel and AWS.", icon: <Rocket /> },
            ].map((feat, i) => (
              <Card key={i} className="p-8 group">
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {feat.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feat.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feat.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY STUDENTS LEARN FASTER */}
      <section className="relative py-24 px-6 overflow-hidden bg-white">
        <FloatingBlobs />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold text-blue-600 bg-blue-50 border border-blue-100 rounded-full shadow-sm"
            >
              Student-Centric Education
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight"
            >
              Why Students Learn <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600">Faster Here</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto font-medium"
            >
              Designed specially for students to understand Next.js step-by-step through interactive learning experiences.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {benefits.map((benefit, index) => (
              <BenefitCard key={index} benefit={benefit} index={index} />
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-20 pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6"
          >
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden shadow-sm">
                  <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Student" />
                </div>
              ))}
              <div className="h-10 px-4 flex items-center justify-center bg-blue-600 rounded-full text-white text-xs font-bold border-2 border-white">
                +1,200 Students
              </div>
            </div>
            <p className="text-slate-500 font-medium text-center md:text-left">
              Join the community of developers mastering <span className="text-slate-900 font-bold">Next.js 15+</span> and modern web tech.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 6. FOOTER */}
      <footer className="bg-white border-t border-slate-100 pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                <Code2 size={20} />
              </div>
              <span className="text-lg font-bold">NextLab</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Empowering the next generation of full-stack developers through hands-on learning.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6">Learning</h4>
            <ul className="space-y-4 text-sm text-slate-600">
              <li><a href="#" className="hover:text-blue-600">Documentation</a></li>
              <li><a href="#" className="hover:text-blue-600">Roadmaps</a></li>
              <li><a href="#" className="hover:text-blue-600">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Platform</h4>
            <ul className="space-y-4 text-sm text-slate-600">
              <li><a href="#" className="hover:text-blue-600">Changelog</a></li>
              <li><a href="#" className="hover:text-blue-600">Community</a></li>
              <li><a href="#" className="hover:text-blue-600">Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Subscribe</h4>
            <div className="flex gap-2">
              <input type="text" placeholder="Email" className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-sm w-full outline-none focus:ring-2 focus:ring-blue-100" />
              <button className="bg-blue-600 text-white p-2 rounded-xl hover:bg-blue-700">
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 border-t border-slate-50 text-center text-slate-400 text-xs">
          © 2026 NextLab Workshop Platform. Built for modern developers.
        </div>
      </footer>
    </div>
  );
}