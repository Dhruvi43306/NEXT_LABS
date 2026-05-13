"use client";
import React, { useState, useEffect, use } from 'react';
import Link from 'next/link';
import { FolderTree, Terminal, Globe, Code2, ArrowRight, Lightbulb,Database,Layout,MousePointer2, Fingerprint, FileIcon, FolderIcon, Info, ShieldAlert, Search, Layers, RefreshCcw, ShieldCheck, Unlock, Cpu, Locate, UserCheck, RefreshCw} from 'lucide-react';
import { motion, AnimatePresence, color } from 'framer-motion';
import { Map, Link as LinkIcon, ChevronRight, Sparkles, Clock, BarChart3, CheckCircle2, AlertCircle,Play,
Trophy
} from 'lucide-react';
import {FileJson,LayoutTemplate,EyeOff,Zap,} from 'lucide-react';
// --- DATA: ARCHITECTURE (LAB 1) ---
const architectureData = [
  {
    file: "app/",
    type: "folder",
    importance: "Critical",
    description: "The core directory of your Next.js application. Every folder created directly inside this directory automatically acts as a web route.",
    tip: "Keep page-specific components nested here. Remember: By default, everything inside the 'app/' directory runs as a Server Component for lightning-fast loading speeds.",
    code: "// App Router mapping:\n// app/page.js         -> YourHomepage.com/\n// app/about/page.js   -> YourHomepage.com/about"
  },
  {
    file: "layout.js",
    type: "file",
    importance: "Essential",
    description: "The root shell/wrapper of your application. This wraps all pages and preserves active UI states like search bars or music players during navigation.",
    tip: "Use this file for global structural elements (like your Navbar, Sidebar, and Footer) and metadata/HTML configurations.",
    code: "export default function RootLayout({ children }) {\n  return (\n    <html lang=\"en\">\n      <body>\n        <Navbar />\n        <main>{children}</main>\n        <Footer />\n      </body>\n    </html>\n  );\n}"
  },
  {
    file: "page.js",
    type: "file",
    importance: "Essential",
    description: "The unique UI and content designed specifically for a single web route.",
    tip: "Think of page.js as your index.html file for that specific route folder. Every route must have a page.js file to render.",
    code: "export default function Page() {\n  return (\n    <div className=\"p-8\">\n      <h1 className=\"text-2xl font-bold\">Welcome to Lab 19!</h1>\n    </div>\n  );\n}"
  },
  {
    file: "public/",
    type: "folder",
    importance: "Static Assets",
    description: "The folder reserved for holding local static assets like images, fonts, PDFs, and favicons.",
    tip: "Files in this folder can be referenced directly from the root URL. For example, '/public/logo.png' is loaded in your code simply as '/logo.png'.",
    code: "import Image from 'next/image';\n\n// Loads directly from /public/logo.png\n<Image src=\"/logo.png\" width={100} height={100} alt=\"Logo\" />"
  },
  {
    file: "next.config.mjs",
    type: "file",
    importance: "Advanced",
    description: "The central configuration file where you customize how Next.js compiles, optimizes, and runs your code.",
    tip: "This is where you register domain rules for loading third-party images, configure path rewrites, or set up localization rules.",
    code: "/** @type {import('next').NextConfig} */\nconst nextConfig = {\n  images: {\n    domains: ['images.unsplash.com'],\n  },\n};\n\nexport default nextConfig;"
  }
];

const videoSteps = [
  { icon: "🚀", title: "Project Launch", caption: "Run 'npx create-next-app'. This script pulls the latest framework files into your computer.", tip: "TEACHER NOTE: Ensure you have Node.js installed before running this!" },
  { icon: "🎨", title: "UI Framework", caption: "Selecting Tailwind CSS allows us to build modern layouts without writing complex CSS files.", tip: "TEACHER NOTE: Choose 'Yes' to make styling your lab projects much easier." },
  { icon: "🗺️", title: "Route Mapping", caption: "The App Router is the 'brain' that decides which folder shows which page in the browser.", tip: "TEACHER NOTE: This is the most important selection for Next.js 14/15." },
  { icon: "✅", title: "Success! Lab Live", caption: "Running 'npm run dev' opens a local portal where you can see your code change instantly.", tip: "TEACHER NOTE: Open http://localhost:3000 to see your work." }
];

// --- DATA: ROUTING (LAB 2) ---


interface Module {
  id: string;
  step: number;
  title: string;
  shortDesc: string;
  fullContent: React.ReactNode;
  icon: React.ElementType;
  time: string;
  difficulty: "Easy" | "Medium";
  xp: number;
}

const modules: Module[] = [
  {
    id: "folder-routing",
    step: 1,
    title: "Magic Folder Routing",
    shortDesc: "Turn folders into website pages instantly.",
    time: "5 mins",
    difficulty: "Easy",
    xp: 100,
    icon: FolderTree,
    fullContent: (
      <div className="space-y-8">
        <div className="bg-blue-50/50 p-6 rounded-3xl border border-blue-100/50">
          <h4 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
            <Lightbulb className="text-amber-500" size={20} />
            The Big Idea
          </h4>
          <p className="text-slate-600 leading-relaxed">
            In Next.js, you don't need a complex configuration file to create pages. 
            <strong> If you can create a folder, you can create a page.</strong> Every folder 
            inside the <code className="bg-white px-2 py-0.5 rounded border">app</code> directory 
            becomes a part of your website's URL.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-[2rem] bg-white border border-slate-100 shadow-sm">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Your Folders</p>
            <div className="space-y-2 font-mono text-sm">
              <div className="flex items-center gap-2 text-blue-600"><FolderTree size={16}/> app/</div>
              <div className="flex items-center gap-2 pl-4 text-slate-600"><FolderTree size={16}/> about/</div>
              <div className="flex items-center gap-2 pl-8 text-emerald-600"><Terminal size={14}/> page.tsx</div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center p-6 rounded-[2rem] bg-slate-50 border border-slate-100">
            <ArrowRight className="text-slate-300 mb-2 rotate-90 md:rotate-0" />
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Resulting URL</p>
            <span className="text-xl font-black text-slate-800">yourdomain.com/about</span>
          </div>
        </div>

        <div className="bg-rose-50/50 p-6 rounded-3xl border border-rose-100/50">
            <h4 className="text-lg font-bold text-rose-900 mb-2 flex items-center gap-2">
              <AlertCircle size={18} /> Common Mistake
            </h4>
            <p className="text-sm text-rose-700">
              Forgetting to name the file <code className="font-bold">page.tsx</code>. Next.js only recognizes 
              folders as pages if they contain a "page" file inside!
            </p>
        </div>
      </div>
    )
  },
  {
    id: "link-component",
    step: 2,
    title: "Smart Links",
    shortDesc: "Teleport between pages without refreshing.",
    time: "3 mins",
    difficulty: "Easy",
    xp: 80,
    icon: LinkIcon,
    fullContent: (
      <div className="space-y-6">
        <p className="text-lg text-slate-600 font-medium">
          Standard HTML links refresh the whole page. The Next.js <code className="text-blue-600 font-bold">Link</code> component 
          pre-loads the next page in the background so it feels <strong>instant</strong>.
        </p>

        <div className="p-8 rounded-[2rem] bg-slate-900 text-white overflow-hidden relative group">
           <div className="absolute top-0 right-0 p-4 opacity-20"><Sparkles size={40}/></div>
           <p className="text-blue-400 font-mono text-sm mb-4">// Use it like this:</p>
           <pre className="font-mono text-sm leading-relaxed">
             {`import Link from 'next/link';\n\n<Link href="/about">\n  Go to About Page\n</Link>`}
           </pre>
        </div>

        <div className="flex gap-4 items-center p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
          <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white shrink-0">
            <Play size={18} fill="currentColor" />
          </div>
          <p className="text-sm text-emerald-800 font-medium">
            <strong>Pro Tip:</strong> Next.js "pre-fetches" the data as soon as the link appears on the screen. 
            By the time the student clicks, the page is already there!
          </p>
        </div>
      </div>
    )
  },
  {
    id: "shared-layouts",
    step: 3,
    title: "Shared Layouts",
    shortDesc: "Design once, use everywhere.",
    time: "7 mins",
    difficulty: "Medium",
    xp: 150,
    icon: LayoutTemplate,
    fullContent: (
      <div className="space-y-6">
        <p className="text-slate-600">
          A <strong>Layout</strong> is like a picture frame. The content (pages) inside the frame 
          changes, but the frame (Header, Sidebar, Footer) stays exactly the same.
        </p>

        <div className="relative aspect-video rounded-[2rem] bg-slate-100 border-2 border-dashed border-slate-200 flex items-center justify-center overflow-hidden">
          <div className="w-4/5 h-4/5 bg-white rounded-xl shadow-2xl border border-slate-200 flex flex-col">
            <div className="h-10 bg-blue-500 flex items-center px-4 text-white text-[10px] font-bold">HEADER (LAYOUT)</div>
            <div className="flex-1 flex items-center justify-center text-slate-300 font-black text-2xl uppercase">Page Content</div>
            <div className="h-8 bg-slate-800 flex items-center px-4 text-white text-[10px] font-bold">FOOTER (LAYOUT)</div>
          </div>
          <div className="absolute top-4 left-4 bg-white/80 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold text-slate-500 border border-slate-200">
            Visual Anatomy
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-white border border-slate-100">
            <h5 className="font-bold text-slate-900 mb-2">Why use it?</h5>
            <ul className="text-sm text-slate-500 space-y-2">
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500"/> Prevents code duplication</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500"/> Maintains state on navigation</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500"/> Faster rendering</li>
            </ul>
          </div>
          <div className="p-5 rounded-2xl bg-blue-600 text-white shadow-xl shadow-blue-200">
            <h5 className="font-bold mb-2">Student Challenge</h5>
            <p className="text-xs text-blue-100 leading-relaxed">
              Try adding a <code className="bg-blue-700 px-1 rounded">layout.tsx</code> to your 
              folder. Everything inside will be shared by all sub-pages!
            </p>
          </div>
        </div>
      </div>
    )
  }
];

// --- Sub-Components ---

const StudentStat = ({ icon: Icon, label, value, color }: any) => (
  <div className="flex items-center gap-3 px-4 py-2 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/50 shadow-sm">
    <div className={`p-2 rounded-xl ${color} bg-opacity-10 text-opacity-100`}>
      <Icon size={18} className={color.replace('bg-', 'text-')} />
    </div>
    <div>
      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">{label}</p>
      <p className="text-sm font-black text-slate-800 leading-none">{value}</p>
    </div>
  </div>
);


// --- Types ---
interface StepCardProps {
  number: string;
  title: string;
  desc: string;
  icon: React.ElementType;
  isActive: boolean;
}

// --- Components ---

const Badge = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-blue-100 bg-blue-50/50 text-blue-600 ${className}`}>
    {children}
  </span>
);

const GlassCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-white/70 backdrop-blur-xl border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2.5rem] ${className}`}>
    {children}
  </div>
);

const StepCard = ({ number, title, desc, icon: Icon, isActive }: StepCardProps) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className={`p-6 rounded-[2rem] border transition-all duration-500 ${isActive ? 'bg-white border-blue-200 shadow-xl shadow-blue-500/5 scale-105' : 'bg-slate-50/50 border-transparent opacity-60'}`}
  >
    <div className={`w-12 h-12 rounded-2xl mb-4 flex items-center justify-center transition-colors ${isActive ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'bg-slate-200 text-slate-500'}`}>
      <Icon size={24} />
    </div>
    <div className="flex items-center gap-2 mb-2">
      <span className="text-[10px] font-black text-blue-500 uppercase tracking-tighter">Step {number}</span>
      {isActive && <motion.div layoutId="active-dot" className="w-1.5 h-1.5 rounded-full bg-blue-500" />}
    </div>
    <h4 className="font-bold text-slate-900 mb-2">{title}</h4>
    <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
  </motion.div>
);

const Badge1 = ({ children, color = "blue" }: { children: React.ReactNode, color?: string }) => {
  const colors: Record<string, string> = {
    blue: "bg-blue-50 text-blue-600 border-blue-100",
    emerald: "bg-emerald-50 text-emerald-600 border-emerald-100",
    amber: "bg-amber-50 text-amber-600 border-amber-100",
  };
  return (
    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${colors[color]}`}>
      {children}
    </span>
  );
};

const GlassCard1 = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <motion.div 
    whileHover={{ y: -4, shadow: "0 20px 40px rgba(0,0,0,0.04)" }}
    className={`bg-white/70 backdrop-blur-xl border border-white shadow-[0_8px_32px_rgba(0,0,0,0.02)] rounded-[2.5rem] overflow-hidden ${className}`}
  >
    {children}
  </motion.div>
);




const Badge2 = ({ children, variant = "blue" }: { children: React.ReactNode, variant?: "blue" | "emerald" | "amber" | "indigo" }) => {
  const styles = {
    blue: "bg-blue-500/10 text-blue-600 border-blue-200/50",
    emerald: "bg-emerald-500/10 text-emerald-600 border-emerald-200/50",
    amber: "bg-amber-500/10 text-amber-600 border-amber-200/50",
    indigo: "bg-indigo-500/10 text-indigo-600 border-indigo-200/50",
  };
  return (
    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.15em] border ${styles[variant]} backdrop-blur-md`}>
      {children}
    </span>
  );
};

const GlassCard2 = ({ children, className = "", hover = true }: any) => (
  <motion.div 
    whileHover={hover ? { y: -5, shadow: "0 25px 50px -12px rgba(0,0,0,0.05)" } : {}}
    className={`relative overflow-hidden bg-white/70 backdrop-blur-2xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.02)] rounded-[2.5rem] ${className}`}
  >
    {children}
  </motion.div>
);



export default function UnifiedLabPage({params}:{params:Promise<{id:string}>}) {
  const {id} = use(params);

  // LAB 1 STATES
  const [activeItem, setActiveItem] = useState(architectureData[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoStepIndex, setVideoStepIndex] = useState(0);
  const [videoProgress, setVideoProgress] = useState(0);
  const [urlInput, setUrlInput] = useState("nextjs-course");

  // LAB 2 STATES
  const [activeModule, setActiveModule] = useState<Module>(modules[0]);
  const [completedSteps, setCompletedSteps] = useState<string[]>([]);

  const handleComplete = () => {
    if (!completedSteps.includes(activeModule.id)) {
      setCompletedSteps([...completedSteps, activeModule.id]);
      setXp(prev => prev + activeModule.xp);
    }
  };

  const progressPercent = (completedSteps.length / modules.length) * 100;
  
  // const [urlInput, setUrlInput] = useState("shoes");
  const [activeStep, setActiveStep] = useState(1);
  const [isCompleted, setIsCompleted] = useState(false);

  // Auto-scrolling logic simulation
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev % 3) + 1);
    }, 4000);
    return () => clearInterval(timer);
  }, []);


  const [activeRoute, setActiveRoute] = useState<string>('dashboard');
  const [xp, setXp] = useState(0);
  const [progress, setProgress] = useState(0);

  // Folders definition
  const routes = {
    dashboard: { path: '(dashboard)/analytics', url: '/analytics', group: '(dashboard)' },
    auth: { path: '(auth)/login', url: '/login', group: '(auth)' },
    marketing: { path: '(marketing)/about', url: '/about', group: '(marketing)' },
  };

  const handleRouteClick = (key: keyof typeof routes) => {
    setActiveRoute(key);
    if (xp < 100) {
      setXp(prev => prev + 25);
      setProgress(prev => Math.min(prev + 33, 100));
    }
  };


  // LAB 1 EFFECT: Simulator logic
  useEffect(() => {
    let timer;
    if (isPlaying && id === "1") {
      timer = setInterval(() => {
        setVideoProgress((prev) => {
          if (prev >= 100) { setIsPlaying(false); return 0; }
          const nextProgress = prev + 1;
          if (nextProgress < 25) setVideoStepIndex(0);
          else if (nextProgress < 50) setVideoStepIndex(1);
          else if (nextProgress < 75) setVideoStepIndex(2);
          else setVideoStepIndex(3);
          return nextProgress;
        });
      }, 150);
    }
    return () => clearInterval(timer);
  }, [isPlaying, id]);

  const handlePlayToggle = () => {
    if (!isPlaying) { setVideoProgress(0); setVideoStepIndex(0); }
    setIsPlaying(!isPlaying);
  };


   const [hasToken, setHasToken] = useState(false);
    const [isSimulating, setIsSimulating] = useState(false);
    const [result, setResult] = useState<'idle' | 'granted' | 'denied'>('idle');
  
    const runSimulation = () => {
      setIsSimulating(true);
      setResult('idle');
      
      // Simulate Request Lifecycle
      setTimeout(() => {
        setResult(hasToken ? 'granted' : 'denied');
        setIsSimulating(false);
        setXp(prev => Math.min(prev + 20, 100));
      }, 2500);
    };

  // --- RENDER CONDITION: LAB 1 (PROJECT SETUP) ---
  if (id === "1") {
    return (
      <div className="min-h-screen bg-slate-50 font-sans text-slate-800 pb-20 selection:bg-blue-100">
        <div className="bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="flex flex-col md:flex-row justify-between items-start gap-8">
              <div className="max-w-2xl">
                <Link href="/" className="text-blue-600 font-bold mb-4 inline-block hover:underline">← Back to Roadmap</Link>
                <div className="flex items-center gap-2 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full mb-4 w-fit">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                  <span className="text-[10px] font-black uppercase tracking-wider text-blue-600">Lab Setup Module</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-950 mb-4">Project Setup & <span className="text-blue-600">Directory Scaffolding</span></h1>
                <p className="text-slate-500 text-lg leading-relaxed font-medium">Learn the foundational file architecture of Next.js 14/15. Interact with our animated setup simulator and explore each directory item below.</p>
              </div>
              <div className="bg-slate-900 text-slate-100 p-6 rounded-3xl shadow-xl w-full md:w-80 border border-slate-800 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all"></div>
                <p className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-2">CLI QUICKSTART</p>
                <code className="text-sm font-mono block bg-slate-950/50 p-2.5 rounded-lg border border-slate-800 text-slate-200 select-all cursor-pointer hover:border-slate-700 transition-colors">npx create-next-app@latest</code>
                <div className="mt-4 flex gap-1.5 items-center">
                  <span className="w-2 h-2 rounded-full bg-red-500"></span><span className="w-2 h-2 rounded-full bg-yellow-500"></span><span className="w-2 h-2 rounded-full bg-green-500"></span>
                  <span className="text-[10px] text-slate-500 font-bold font-mono ml-auto">Vercel Boilerplate</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <main className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest">Workspace Directories</h3>
                  <span className="text-[10px] font-bold bg-slate-100 text-slate-500 px-2.5 py-1 rounded-md">5 Active Paths</span>
                </div>
                <div className="space-y-2">
                  {architectureData.map((item) => (
                    <button key={item.file} onMouseEnter={() => setActiveItem(item)} onClick={() => setActiveItem(item)} className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all duration-200 ${activeItem.file === item.file ? 'bg-blue-600 text-white shadow-xl shadow-blue-200 -translate-y-0.5' : 'hover:bg-slate-100 text-slate-600 bg-slate-50/50 border border-transparent'}`}>
                      <span className="text-2xl select-none">{item.type === "folder" ? "📁" : "📄"}</span>
                      <span className="font-bold text-sm tracking-tight">{item.file}</span>
                      {activeItem.file === item.file && <span className="ml-auto text-[9px] font-black bg-white/20 px-2 py-0.5 rounded-md tracking-widest">EXPLORING</span>}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-sm overflow-hidden relative">
                <div className="flex items-center justify-between mb-4"><h3 className="text-xs font-black text-slate-400 uppercase tracking-widest text-center w-full">Virtual Setup Guide</h3></div>
                <div className="relative aspect-video bg-slate-950 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 flex flex-col items-center justify-center p-6">
                  {isPlaying ? (
                    <div className="flex flex-col items-center text-center animate-in zoom-in-95 duration-500">
                      <div className="text-7xl mb-4 drop-shadow-[0_0_20px_rgba(59,130,246,0.6)] animate-bounce">{videoSteps[videoStepIndex].icon}</div>
                      <h3 className="text-2xl font-black text-white mb-2 tracking-tight">{videoSteps[videoStepIndex].title}</h3>
                      <div className="bg-blue-600/30 border border-blue-500/40 px-4 py-1.5 rounded-full mb-12">
                        <p className="text-[10px] font-black text-blue-300 uppercase tracking-[0.2em]">{videoSteps[videoStepIndex].tip}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                      <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-[0_0_40px_rgba(37,99,235,0.5)] cursor-pointer hover:scale-110 transition-all group" onClick={handlePlayToggle}>
                        <svg className="w-10 h-10 fill-current group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                      </div>
                      <div><p className="text-md font-black text-white tracking-widest">START SIMULATOR</p><p className="text-[11px] text-slate-500 font-bold mt-1">Watch the project build in 4 steps</p></div>
                    </div>
                  )}
                  {isPlaying && <div className="absolute bottom-20 left-6 right-6 bg-slate-900/90 backdrop-blur-xl border border-white/10 text-white p-4 rounded-2xl text-center text-xs font-medium leading-relaxed shadow-2xl animate-in slide-in-from-bottom-4">{videoSteps[videoStepIndex].caption}</div>}
                  <div className="absolute bottom-0 left-0 w-full flex items-center gap-4 bg-slate-900/95 backdrop-blur-md p-4 z-10 border-t border-white/5">
                    <button onClick={handlePlayToggle} className="w-10 h-10 rounded-full bg-white text-slate-900 flex items-center justify-center text-xs font-black hover:bg-blue-50 transition-colors shrink-0 shadow-lg">{isPlaying ? "||" : "▶"}</button>
                    <div className="flex-1 bg-white/5 h-1.5 rounded-full overflow-hidden border border-white/5"><div className="bg-gradient-to-r from-blue-600 to-blue-400 h-full transition-all duration-150 ease-linear" style={{ width: `${videoProgress}%` }}></div></div>
                    <div className="flex flex-col items-end"><span className="text-[10px] font-black text-blue-500 uppercase">Stage 0{videoStepIndex + 1}</span><span className="text-[8px] font-bold text-slate-600 uppercase tracking-tighter">of 04 Steps</span></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-white border border-slate-200 rounded-[2.5rem] p-10 shadow-sm sticky top-8">
                <div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-6">
                  <div><p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Interactive Blueprint</p><h2 className="text-4xl font-black text-slate-900">{activeItem.file}</h2></div>
                  <div className="flex flex-col items-end gap-1.5">
                    <span className="px-3 py-1 bg-slate-100 rounded-full text-[9px] font-black text-slate-500 uppercase tracking-widest">Type: {activeItem.type}</span>
                    <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-wider ${activeItem.importance === 'Critical' ? 'bg-red-50 text-red-600 border border-red-200' : activeItem.importance === 'Essential' ? 'bg-blue-50 text-blue-600 border border-blue-200' : 'bg-slate-50 text-slate-600 border border-slate-200'}`}>{activeItem.importance}</span>
                  </div>
                </div>
                <div className="space-y-8">
                  <div><h4 className="text-xs font-black text-slate-400 uppercase tracking-wider mb-2">Core Purpose & Responsibility</h4><p className="text-lg text-slate-600 leading-relaxed font-medium">{activeItem.description}</p></div>
                  <div className="bg-blue-50/70 p-6 rounded-2xl border border-blue-100/50"><div className="flex items-center gap-2 mb-2"><span className="text-base select-none">💡</span><h4 className="text-xs font-black text-blue-700 uppercase tracking-widest">Student Implementation</h4></div><p className="text-sm font-semibold text-blue-900/80 leading-relaxed">{activeItem.tip}</p></div>
                  <div className="bg-slate-950 rounded-2xl p-6 relative shadow-inner border border-slate-900">
                    <div className="flex justify-between items-center mb-4 border-b border-slate-900 pb-3"><span className="text-xs font-black text-slate-500 uppercase tracking-widest">Code Implementation Preview</span></div>
                    <pre className="text-slate-300 font-mono text-xs overflow-x-auto leading-relaxed max-h-48"><code>{activeItem.code}</code></pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // --- RENDER CONDITION: LAB 2 (STATIC ROUTING) ---
  if (id === "2") {
    return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-blue-100">
      
      {/* --- PREMIUM HERO SECTION --- */}
      <section className="relative pt-24 pb-16 px-6 overflow-hidden">
        {/* Animated Background Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-[120px] -z-10 animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-[120px] -z-10" />

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center lg:text-left">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-center lg:justify-start gap-3 mb-6"
              >
                <span className="px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold border border-blue-100 flex items-center gap-2">
                  <Map size={14} /> Next.js Fundamentals
                </span>
                <span className="px-4 py-1.5 rounded-full bg-slate-100 text-slate-500 text-xs font-bold border border-slate-200 flex items-center gap-2">
                  <Clock size={14} /> 15 Min Lesson
                </span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl lg:text-7xl font-black tracking-tight text-slate-900 mb-6 leading-[1.1]"
              >
                Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Routing</span> <br /> 
                the Easy Way
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-slate-500 max-w-xl font-medium mb-10 leading-relaxed mx-auto lg:mx-0"
              >
                Say goodbye to complex setups. Learn how to build navigation, link pages, 
                and share layouts using the modern Next.js App Router.
              </motion.p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <button className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold shadow-xl shadow-blue-200 hover:bg-blue-700 hover:scale-105 transition-all flex items-center gap-2">
                  Start Learning Journey <ChevronRight size={20} />
                </button>
                <button className="px-8 py-4 bg-white text-slate-600 border border-slate-200 rounded-2xl font-bold hover:bg-slate-50 transition-all flex items-center gap-2">
                  <Play size={18} fill="currentColor" /> Watch Intro
                </button>
              </div>
            </div>

            {/* Student Experience Stats */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="lg:w-[400px] grid grid-cols-2 gap-4"
            >
              <StudentStat icon={Trophy} label="Your XP" value={`${xp} pts`} color="bg-amber-400" />
              <StudentStat icon={BarChart3} label="Progress" value={`${Math.round(progressPercent)}%`} color="bg-blue-500" />
              <StudentStat icon={CheckCircle2} label="Modules" value={`${completedSteps.length}/${modules.length}`} color="bg-emerald-500" />
              <StudentStat icon={Sparkles} label="Streak" value="2 Days" color="bg-purple-500" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- MAIN LEARNING INTERFACE --- */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT: STEP-BY-STEP PATHWAY */}
          <div className="lg:col-span-4 space-y-4">
            <div className="mb-6">
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2 px-2">Learning Path</h3>
              <div className="w-full h-1 bg-slate-200 rounded-full">
                <motion.div 
                  className="h-full bg-blue-500 rounded-full" 
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {modules.map((m) => (
              <motion.button
                key={m.id}
                whileHover={{ x: 5 }}
                onClick={() => setActiveModule(m)}
                className={`w-full text-left p-5 rounded-[2rem] border transition-all duration-300 relative overflow-hidden group
                  ${activeModule.id === m.id 
                    ? 'bg-white border-blue-100 shadow-xl shadow-blue-500/5' 
                    : 'bg-transparent border-transparent grayscale hover:grayscale-0'}`}
              >
                <div className="flex items-center gap-4 relative z-10">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors
                    ${activeModule.id === m.id ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-500'}`}>
                    <m.icon size={22} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-black text-blue-500 uppercase">Step 0{m.step}</span>
                      {completedSteps.includes(m.id) && <CheckCircle2 size={14} className="text-emerald-500" />}
                    </div>
                    <h4 className={`font-bold transition-colors ${activeModule.id === m.id ? 'text-slate-900' : 'text-slate-500'}`}>
                      {m.title}
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-1">{m.shortDesc}</p>
                  </div>
                </div>
                {activeModule.id === m.id && (
                  <motion.div layoutId="activeGlow" className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-transparent -z-10" />
                )}
              </motion.button>
            ))}

            {/* Try It Yourself Card */}
            <div className="mt-12 p-6 rounded-[2rem] bg-indigo-900 text-white shadow-2xl relative overflow-hidden">
               <div className="absolute -bottom-6 -right-6 opacity-10 rotate-12"><Terminal size={120} /></div>
               <h5 className="text-lg font-bold mb-2">Ready to Code?</h5>
               <p className="text-xs text-indigo-200 mb-4 leading-relaxed">Download our starter template and practice what you learn here.</p>
               <button className="w-full py-3 bg-white text-indigo-900 rounded-xl font-bold text-sm hover:bg-indigo-50 transition-colors">
                  Open in CodeSandbox
               </button>
            </div>
          </div>

          {/* RIGHT: CONTENT PANEL (GLASSMORPHISM) */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeModule.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-white/80 backdrop-blur-xl border border-white rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.03)] p-8 md:p-12"
              >
                <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-8 border-b border-slate-100">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                      <activeModule.icon size={28} />
                    </div>
                    <div>
                      <h2 className="text-3xl font-black text-slate-900">{activeModule.title}</h2>
                      <div className="flex gap-4 mt-1">
                         <span className="text-xs font-bold text-slate-400 flex items-center gap-1">
                           <Clock size={12} /> {activeModule.time}
                         </span>
                         <span className="text-xs font-bold text-slate-400 flex items-center gap-1">
                           <Trophy size={12} /> {activeModule.xp} XP
                         </span>
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={handleComplete}
                    className={`px-6 py-3 rounded-2xl font-bold text-sm transition-all
                      ${completedSteps.includes(activeModule.id) 
                        ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' 
                        : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200'}`}
                  >
                    {completedSteps.includes(activeModule.id) ? 'Completed ✅' : 'Mark as Done'}
                  </button>
                </div>

                {/* MODULE MAIN CONTENT */}
                <div className="prose prose-slate max-w-none">
                  {activeModule.fullContent}
                </div>

                {/* BOTTOM NAVIGATION */}
                <div className="mt-16 pt-8 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MousePointer2 className="text-blue-500 animate-bounce" size={16} />
                    <span className="text-xs font-bold text-slate-400">Interact with the examples above</span>
                  </div>
                  <div className="flex gap-2">
                     <button 
                       disabled={activeModule.step === 1}
                       onClick={() => setActiveModule(modules[activeModule.step - 2])}
                       className="p-3 bg-slate-100 text-slate-500 rounded-xl hover:bg-slate-200 disabled:opacity-30 transition-all"
                     >
                       <ChevronRight size={20} className="rotate-180" />
                     </button>
                     <button 
                       disabled={activeModule.step === modules.length}
                       onClick={() => setActiveModule(modules[activeModule.step])}
                       className="px-6 py-3 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-slate-800 disabled:opacity-30 transition-all flex items-center gap-2"
                     >
                       Next Lesson <ChevronRight size={18} />
                     </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* --- QUICK REVISION CARDS --- */}
      <section className="py-20 px-6 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-black text-slate-900 mb-2">Quick Revision</h3>
            <p className="text-slate-500">Summary of the key concepts you've mastered.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { t: "Folder = URL", d: "Creating a folder creates a path." },
              { t: "page.tsx is King", d: "No page file means no visible route." },
              { t: "Link = Speed", d: "Always use <Link> for instant transitions." }
            ].map((card, i) => (
              <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 mb-4 shadow-sm">
                  {i + 1}
                </div>
                <h4 className="font-bold text-slate-900 mb-2">{card.t}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{card.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  
    );
  }

  if(id == 3){
    return(
    <div className="min-h-screen bg-[#FDFDFF] text-slate-900 font-sans selection:bg-blue-100">
      
      {/* --- BACKGROUND BLOBS --- */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ x: [0, -40, 0], y: [0, 60, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-[10%] right-[0%] w-[600px] h-[600px] bg-purple-100/30 rounded-full blur-[140px]" 
        />
      </div>

      {/* --- HERO SECTION --- */}
      <header className="relative pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 mb-6 p-1.5 pr-4 bg-white rounded-full border border-slate-100 shadow-sm"
            >
              <div className="bg-blue-600 p-1 rounded-full text-white">
                <Sparkles size={14} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Premium Course</span>
              <div className="w-1 h-1 rounded-full bg-slate-300" />
              <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">Level: Intermediate</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] mb-8"
            >
              Learn <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Dynamic Routing</span> <br /> 
              Step-by-Step
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-500 max-w-xl font-medium mb-10 leading-relaxed mx-auto lg:mx-0"
            >
              Build smart pages that automatically change content based on the URL. 
              Learn how one template can handle thousands of different products or posts.
            </motion.p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              
              <div className="flex items-center gap-6 px-6">
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-slate-400 uppercase">Est. Time</span>
                  <span className="text-sm font-bold text-slate-800">12 Minutes</span>
                </div>
                <div className="w-px h-8 bg-slate-200" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-slate-400 uppercase">XP Reward</span>
                  <span className="text-sm font-bold text-slate-800">250 Points</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Visual: The Route Logic */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex-1 w-full max-w-xl relative"
          >
            <div className="relative z-10 p-2 rounded-[3rem] bg-gradient-to-b from-slate-200 to-slate-50 shadow-2xl">
              <div className="bg-white rounded-[2.5rem] overflow-hidden">
                <div className="p-6 border-b border-slate-50 flex items-center justify-between">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-rose-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  </div>
                  <div className="px-4 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-[10px] font-bold text-slate-400">
                    localhost:3000/shop/shoes
                  </div>
                </div>
                <div className="p-10 flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center mb-6 shadow-inner">
                    <Globe size={40} />
                  </div>
                  <h3 className="text-2xl font-black mb-2">The Magic Variable</h3>
                  <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                    Next.js takes <span className="text-blue-600 font-bold">"shoes"</span> from the URL 
                    and gives it to your code as a variable.
                  </p>
                  
                  <div className="mt-8 w-full p-4 rounded-2xl bg-slate-900 text-white font-mono text-sm flex justify-between">
                    <span className="text-slate-500">params.slug</span>
                    <span className="text-emerald-400">"shoes"</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* --- 1. VISUAL FLOW SECTION --- */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900">How the Data Flows</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center relative">
            {/* Animated Connector Line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 hidden md:block -z-10" />

            <GlassCard className="p-8 text-center relative group">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-white border border-slate-100 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <MousePointer2 className="text-blue-600" size={24} />
              </div>
              <h3 className="text-lg font-black mt-4 mb-2">User visits:</h3>
              <div className="bg-slate-50 p-3 rounded-xl font-mono text-blue-600 border border-blue-100">
                shop/<span className="bg-blue-600 text-white px-2 py-0.5 rounded">iphone</span>
              </div>
            </GlassCard>

            <motion.div 
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex justify-center"
            >
              <div className="bg-blue-600 text-white p-4 rounded-full shadow-xl">
                <ArrowRight size={32} />
              </div>
            </motion.div>

            <GlassCard className="p-8 text-center group">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-white border border-slate-100 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <FileJson className="text-purple-600" size={24} />
              </div>
              <h3 className="text-lg font-black mt-4 mb-2">Captured as:</h3>
              <div className="bg-slate-900 p-3 rounded-xl font-mono text-emerald-400">
                params.slug = "iphone"
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* --- 2. THE FOLDER STRUCTURE --- */}
      <section className="py-24 px-6 bg-slate-50/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <Badge className="mb-4">File Architecture</Badge>
            <h2 className="text-4xl font-black text-slate-900 mb-6">The Square Bracket Power</h2>
            <p className="text-lg text-slate-500 font-medium leading-relaxed mb-8">
              In the App Router, folder names wrapped in <span className="text-blue-600 font-black">[square brackets]</span> 
              are recognized as dynamic segments.
            </p>
            
            <div className="space-y-4">
              {[
                "Everything inside the folder gets the URL value.",
                "The name inside [slug] becomes the key in params.",
                "You can name it anything: [id], [username], [slug]."
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-slate-700">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100">
             <div className="space-y-3 font-mono text-sm">
                <div className="flex items-center gap-3 text-slate-400">
                  <FileJson size={18} /> app/
                </div>
                <div className="flex items-center gap-3 pl-6 text-slate-400">
                  <FileJson  size={18} /> products/
                </div>
                <motion.div 
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="flex items-center gap-3 pl-12 text-blue-600 font-bold"
                >
                  <FileJson  size={18} /> [slug]/
                </motion.div>
                <div className="flex items-center gap-3 pl-20 text-slate-900">
                  <Terminal size={18} className="text-slate-400" /> page.tsx
                </div>
             </div>

             <div className="mt-10 p-6 bg-blue-50 rounded-[2rem] border border-blue-100">
                <div className="flex items-center gap-3 text-blue-600 mb-2">
                  {/* <Info size={18} /> */}
                  <span className="text-xs font-black uppercase">Teacher's Note</span>
                </div>
                <p className="text-sm text-blue-800 leading-relaxed font-medium">
                  "Think of [slug] like a **placeholder**. It tells Next.js: 'Hey, I don't know the exact name yet, so just save whatever the user types here into a variable called slug.'"
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* --- 3. THE LIVE PLAYGROUND --- */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4">Interactive Lab</Badge>
            <h2 className="text-4xl font-black text-slate-900">Try it Live!</h2>
            <p className="text-slate-500 font-medium mt-4">Type a product name below to see the code update in real-time.</p>
          </div>

          <GlassCard className="p-10 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-bl-full" />
            
            <div className="mb-12">
              <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-4 block">Simulation Browser URL</label>
              <div className="flex items-center gap-3 p-4 bg-slate-100 rounded-2xl border border-slate-200">
                <span className="text-slate-400 font-medium">next-lab.com/products/</span>
                <input 
                  type="text" 
                  value={urlInput}
                  onChange={(e) => setUrlInput(e.target.value)}
                  className="flex-1 bg-white px-4 py-1.5 rounded-xl border border-blue-200 text-blue-600 font-bold focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                  placeholder="type-something..."
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h4 className="text-sm font-black uppercase tracking-widest text-slate-400">Next.js Data:</h4>
                <div className="p-6 bg-slate-900 rounded-[2rem] text-white font-mono shadow-xl relative group">
                  <div className="absolute top-4 right-4 text-emerald-400 opacity-50 group-hover:opacity-100 transition-opacity">
                    <Zap size={16} />
                  </div>
                  <p className="text-xs text-slate-500 mb-2">// params object</p>
                  <pre className="text-sm">
                    {`{\n  "slug": `}
                    <span className="text-emerald-400">"{urlInput || "..."}"</span>
                    {` \n}`}
                  </pre>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="text-sm font-black uppercase tracking-widest text-slate-400">Rendered UI:</h4>
                <div className="p-6 bg-white border border-slate-100 rounded-[2rem] shadow-sm flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
                    {/* <Layers size={24} /> */}
                  </div>
                  <h5 className="text-lg font-black text-slate-900">
                    Product Detail
                  </h5>
                  <p className="text-slate-500 text-sm">Now showing info for:</p>
                  <p className="text-2xl font-black text-blue-600 mt-1 capitalize">{urlInput || "Nothing yet"}</p>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* --- 4. THE CODE EXPLAINER --- */}
      <section className="py-24 px-6 bg-slate-900 text-white rounded-[4rem] mx-6 mb-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-20 opacity-10">
          <Code2 size={400} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 rounded-full text-blue-400 text-[10px] font-black uppercase tracking-widest mb-6">
                Code Walkthrough
              </div>
              <h2 className="text-4xl font-black mb-8 leading-tight">How to write it <br /> in React</h2>
              
              <div className="space-y-8">
                <div className="flex gap-6 group">
                  <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-xs font-bold group-hover:bg-blue-600 transition-colors">1</div>
                  <div>
                    <h4 className="font-bold mb-1">Destructure params</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">We extract the <code className="text-blue-400">slug</code> from the params object that Next.js automatically provides.</p>
                  </div>
                </div>
                <div className="flex gap-6 group">
                  <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-xs font-bold group-hover:bg-blue-600 transition-colors">2</div>
                  <div>
                    <h4 className="font-bold mb-1">Render Dynamically</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">Use the curly braces <code className="text-blue-400">{`{slug}`}</code> to inject the URL value into your HTML.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur rounded-[3rem] p-10 border border-white/10 shadow-2xl">
              <pre className="font-mono text-sm leading-relaxed text-blue-100">
                <span className="text-slate-500 italic">// app/products/[slug]/page.tsx</span>
                <br /><br />
                <span className="text-purple-400">export default async function</span> Page({`{ `}
                <br />
                &nbsp;&nbsp;params
                <br />
                {`}: { params: Promise<{slug: string}> }) {`}
                <br />
                &nbsp;&nbsp;<span className="text-slate-500 italic">// 1. Get value from URL</span>
                <br />
                &nbsp;&nbsp;<span className="text-purple-400">const</span> {` { slug } = `} <span className="text-blue-400">await</span> params;
                <br /><br />
                &nbsp;&nbsp;<span className="text-purple-400">return</span> (
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;{`<div>`}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-slate-500 italic">// 2. Display it!</span>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<h1>Product: `}
                <motion.span 
                  animate={{ backgroundColor: ["transparent", "rgba(59, 130, 246, 0.3)", "transparent"] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="px-1 rounded"
                >
                  {`{slug}`}
                </motion.span>
                {`</h1>`}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;{`</div>`}
                <br />
                &nbsp;&nbsp;);
                <br />
                {`}`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* --- STUDENT EXPERIENCE: XP & FOOTER --- */}
      <footer className="py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="w-20 h-20 bg-amber-50 text-amber-500 rounded-[2rem] flex items-center justify-center mx-auto mb-6 shadow-xl shadow-amber-100 border border-amber-100">
            <Trophy size={40} />
          </div>
          <h2 className="text-3xl font-black text-slate-900 mb-4">Lesson Complete?</h2>
          <p className="text-slate-500 font-medium mb-10">You've mastered the basics of Dynamic Routing. Ready to claim your points and move to the next level?</p>
          
          <button 
            onClick={() => setIsCompleted(true)}
            className={`px-12 py-5 rounded-[2rem] font-black text-xl transition-all shadow-2xl flex items-center gap-3 mx-auto
              ${isCompleted ? 'bg-emerald-500 text-white shadow-emerald-200' : 'bg-blue-600 text-white shadow-blue-200 hover:scale-105'}`}
          >
            {isCompleted ? (
              <> <CheckCircle2 /> 250 XP Claimed! </>
            ) : (
              <> Complete Lesson <Zap fill="currentColor" /> </>
            )}
          </button>

          <div className="mt-20 pt-10 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6 text-slate-400 font-bold text-[10px] uppercase tracking-widest">
            <span>© 2026 Next.js Premium Learning</span>
            <div className="flex gap-8">
              <a href="#" className="hover:text-blue-600 transition-colors">Documentation</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Student Portal</a>
              <a href="#" className="hover:text-blue-600 transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
       
   
  if(id == 4){
     return (
         <div className="min-h-screen bg-[#F8FAFC] text-slate-900 selection:bg-blue-100 selection:text-blue-700 font-sans">
      
      {/* 1. PREMIUM HERO SECTION */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Ambient Visuals */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] -z-10">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-emerald-400/10 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <Badge1>Level: Intermediate</Badge1>
            <Badge1>10 Min Read</Badge1>
            <div className="flex items-center gap-2 px-3 py-1 bg-white rounded-full border border-slate-100 shadow-sm">
              <Trophy size={14} className="text-amber-500" />
              <span className="text-[10px] font-black text-slate-500">{xp} XP Earned</span>
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-6xl lg:text-8xl font-black tracking-tight leading-[0.9] mb-8"
          >
            Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">Route Groups</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg text-slate-500 font-medium leading-relaxed mb-12"
          >
            Organize large Next.js projects beautifully without breaking your website links. 
            Learn why <span className="text-slate-900 font-bold">parentheses ( )</span> are the secret to clean folders.
          </motion.p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="https://nextjs.org/docs/app/getting-started/route-handlers">
            <button className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold shadow-xl shadow-slate-200 hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2">
              Start Journey <ChevronRight size={20} />
            </button>
            </Link>
         
          </div>
        </div>
      </section>

      {/* 2. THE VISUAL MENTAL MODEL (HOW IT WORKS) */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <Badge1 >The Mental Model</Badge1>
            <h2 className="text-4xl font-black mt-4 mb-6">Invisible Folders</h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              In Next.js, every folder usually adds a word to your URL. 
              But when you wrap a folder in <span className="text-emerald-600 font-bold">parentheses</span>, it becomes a 
              <strong> Route Group</strong>.
            </p>
            
            <div className="space-y-6">
              {[
                { title: "Clean Layouts", desc: "Share headers/footers between pages without changing the URL structure." },
                { title: "Team Organization", desc: "Group your files by feature (Auth, Shop, Admin) to keep the project neat." },
                { title: "Zero Impact", desc: "Parentheses tell Next.js: 'Ignore this folder name when building the web link'." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-5 rounded-3xl bg-white border border-slate-100 shadow-sm">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Transformation Card */}
          <GlassCard1 className="p-12 relative flex flex-col items-center justify-center min-h-[400px]">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />
            
            <div className="flex flex-col items-center gap-8 w-full">
              {/* Input */}
              <div className="w-full p-6 bg-slate-50 rounded-3xl border border-slate-100 text-center relative group">
                <div className="text-[10px] font-black text-slate-400 uppercase mb-2">Folder Path</div>
                <div className="text-2xl font-mono font-bold text-slate-800">
                  (auth)/<span className="text-blue-600">login</span>
                </div>
                <motion.div 
                  animate={{ opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 2 }}
                  className="absolute -top-3 -right-3 bg-emerald-500 text-white p-2 rounded-xl shadow-lg"
                >
                  <EyeOff size={16} />
                </motion.div>
              </div>

              <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
                <ArrowRight size={32} className="text-slate-300 rotate-90" />
              </motion.div>

              {/* Output */}
              <div className="w-full p-6 bg-emerald-600 rounded-3xl text-center shadow-2xl shadow-emerald-200">
                <div className="text-[10px] font-black text-white/60 uppercase mb-2">Resulting URL</div>
                <div className="text-2xl font-mono font-bold text-white">
                  your-site.com/<span className="underline underline-offset-8 decoration-white/30">login</span>
                </div>
              </div>
            </div>
            
            <p className="mt-8 text-xs font-bold text-slate-400 flex items-center gap-2">
              <Info size={14} /> The (auth) folder is completely skipped!
            </p>
          </GlassCard1>
        </div>
      </section>

      {/* 3. INTERACTIVE EXPLORER SECTION */}
      <section className="py-24 px-6 bg-slate-900 rounded-[4rem] mx-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4">Interactive Blueprint</h2>
            <p className="text-slate-400 font-medium">Click a file to see how Next.js resolves the URL in the browser.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* VS Code Inspired Explorer */}
            <div className="lg:col-span-4 bg-slate-800/50 rounded-3xl border border-white/10 p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/50" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
                </div>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Explorer</span>
              </div>

              <div className="space-y-3 font-mono text-sm">
                <div className="flex items-center gap-2 text-slate-500"><FolderIcon size={16} /> app/</div>
                
                {/* Dashboard Group */}
                <div className="pl-4 space-y-2">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold">
                    <FolderIcon size={16} /> (dashboard)
                  </div>
                  <motion.button 
                    onClick={() => handleRouteClick('dashboard')}
                    whileTap={{ scale: 0.98 }}
                    className={`flex items-center gap-2 pl-6 w-full text-left p-2 rounded-xl transition-all ${activeRoute === 'dashboard' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:bg-white/5'}`}
                  >
                    <FolderIcon size={16} /> analytics/
                    <span className="ml-auto opacity-40"><FileIcon size={14}/></span>
                  </motion.button>
                </div>

                {/* Auth Group */}
                <div className="pl-4 space-y-2">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold">
                    <FolderIcon size={16} /> (auth)
                  </div>
                  <motion.button 
                    onClick={() => handleRouteClick('auth')}
                    whileTap={{ scale: 0.98 }}
                    className={`flex items-center gap-2 pl-6 w-full text-left p-2 rounded-xl transition-all ${activeRoute === 'auth' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:bg-white/5'}`}
                  >
                    <FolderIcon size={16} /> login/
                    <span className="ml-auto opacity-40"><FileIcon size={14}/></span>
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Premium Browser Preview */}
            <div className="lg:col-span-8 space-y-6">
              <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-white/20">
                <div className="bg-slate-50 px-6 py-4 border-b border-slate-100 flex items-center gap-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-slate-200" />
                    <div className="w-3 h-3 rounded-full bg-slate-200" />
                  </div>
                  <div className="flex-1 bg-white border border-slate-200 rounded-xl px-4 py-2 flex items-center gap-3">
                    <Globe size={14} className="text-slate-400" />
                    <div className="text-xs font-mono flex items-center">
                      <span className="text-slate-400">localhost:3000</span>
                      <AnimatePresence mode="wait">
                        <motion.span 
                          key={activeRoute}
                          initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }}
                          className="text-blue-600 font-bold"
                        >
                          {routes[activeRoute as keyof typeof routes].url}
                        </motion.span>
                      </AnimatePresence>
                    </div>
                  </div>
                </div>

                <div className="p-12 min-h-[300px] flex flex-col items-center justify-center text-center">
                  <motion.div 
                    key={activeRoute}
                    initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                    className="space-y-4"
                  >
                    <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center text-blue-600 mx-auto shadow-inner">
                      <Layout size={40} />
                    </div>
                    <h3 className="text-3xl font-black text-slate-900 capitalize">
                      {activeRoute} Module
                    </h3>
                    <p className="text-slate-500 max-w-xs mx-auto">
                      Notice how <span className="text-emerald-600 font-bold">{routes[activeRoute as keyof typeof routes].group}</span> is missing from the URL above!
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. STUDENT REVISION BENTO GRID */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Quick Revision */}
            <GlassCard1 className="p-8 md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
                  <Terminal size={20} />
                </div>
                <h3 className="text-xl font-black">Cheat Sheet</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <code className="text-blue-600 font-bold text-sm">(folder)</code>
                  <p className="text-xs text-slate-500 mt-1">Route Group (Invisible)</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <code className="text-blue-600 font-bold text-sm">folder</code>
                  <p className="text-xs text-slate-500 mt-1">Standard Route (Visible)</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <code className="text-blue-600 font-bold text-sm">layout.tsx</code>
                  <p className="text-xs text-slate-500 mt-1">Shared within the group</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <code className="text-blue-600 font-bold text-sm">page.tsx</code>
                  <p className="text-xs text-slate-500 mt-1">The actual website page</p>
                </div>
              </div>
            </GlassCard1>

            {/* Common Mistake */}
            <div className="p-8 bg-amber-600 rounded-[2.5rem] text-white shadow-2xl shadow-amber-200">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <AlertCircle size={24} />
              </div>
              <h3 className="text-xl font-black mb-2">Naming Conflict</h3>
              <p className="text-sm text-amber-50 leading-relaxed">
                Be careful! If you have <code className="bg-amber-700/30 px-1 rounded">(auth)/login</code> and 
                <code className="bg-amber-700/30 px-1 rounded">(admin)/login</code>, Next.js won't know which to show because 
                they both resolve to <span className="font-bold underline">/login</span>.
              </p>
            </div>

            {/* Real World Example */}
            <GlassCard1 className="p-8 flex flex-col justify-between group">
              <div>
                <Badge1>Enterprise Tip</Badge1>
                <h3 className="text-xl font-black mt-4 mb-4">How Airbnb does it</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Huge apps use Groups to separate "Guest" views from "Host" views while keeping the URL 
                  simple like <strong>/messages</strong>.
                </p>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-100" />)}
                </div>
                <ArrowRight className="text-slate-300 group-hover:translate-x-2 transition-transform" />
              </div>
            </GlassCard1>

            {/* Challenge Card */}
            <GlassCard1 className="p-8 md:col-span-2 bg-gradient-to-br from-blue-600 to-indigo-700 text-white border-none shadow-blue-200">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="shrink-0 w-20 h-20 bg-white/10 rounded-full flex items-center justify-center">
                  <Fingerprint size={40} />
                </div>
                <div>
                  <h3 className="text-2xl font-black mb-2">Mini Challenge</h3>
                  <p className="text-blue-100 mb-6">You want to group all your admin pages into a folder named "Admin Controls" but you don't want the word "Admin" in the URL. What should you name the folder?</p>
                  <div className="flex gap-4">
                    <button className="px-6 py-2 bg-white text-blue-600 rounded-xl font-bold text-sm">admin-controls</button>
                    <button className="px-6 py-2 bg-blue-500 text-white rounded-xl font-bold text-sm border border-blue-400 hover:bg-blue-400 transition-all">(admin-controls)</button>
                  </div>
                </div>
              </div>
            </GlassCard1>
          </div>
        </div>
      </section>

    </div>
      );
  }

  if(id == 5){
    return(
      <div className="min-h-screen bg-[#FDFDFF] text-slate-900 selection:bg-blue-600/10 selection:text-blue-600 overflow-x-hidden">
      
      {/* BACKGROUND EFFECTS */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-100/40 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-emerald-50/40 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />
      </div>

      {/* 1. CINEMATIC HERO */}
      <section className="relative pt-32 pb-24 px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="flex justify-center gap-3 mb-10"
        >
          <Badge2 variant="indigo">Security Layer</Badge2>
          <Badge2 variant="blue">Edge Runtime</Badge2>
          <Badge2 variant="emerald">Authentication</Badge2>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
          className="text-7xl lg:text-9xl font-black tracking-tight leading-[0.85] mb-8"
        >
          Middleware: The <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-emerald-500">Gatekeeper</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
          className="max-w-2xl mx-auto text-xl text-slate-500 font-medium leading-relaxed mb-12"
        >
          Protect your routes before they even reach the browser. 
          Intercept, verify, and redirect at the <strong>Edge</strong>.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-4">
            <Link href="https://nextjs.org/docs/app/api-reference/file-conventions/proxy">
          <button className="h-16 px-10 bg-slate-900 text-white rounded-2xl font-bold text-lg shadow-2xl hover:scale-[1.03] transition-all flex items-center gap-3">
            Start Learning <ChevronRight size={20} />
          </button></Link>
          <div className="flex items-center gap-3 px-6 bg-white border border-slate-200 rounded-2xl font-bold text-slate-500">
             <Trophy className="text-amber-500" size={18} />
             <span>{xp} XP Points</span>
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE AUTH SIMULATOR (THE CORE PLAYGROUND) */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-4 space-y-6">
            <GlassCard2 className="p-8">
              <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6">Simulator Controls</h3>
              
              <div className="space-y-4">
                <div className="p-5 rounded-3xl bg-slate-50 border border-slate-100">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-bold text-slate-700">Auth Token</span>
                    <button 
                      onClick={() => setHasToken(!hasToken)}
                      className={`w-14 h-8 rounded-full transition-colors relative ${hasToken ? 'bg-emerald-500' : 'bg-slate-300'}`}
                    >
                      <motion.div 
                        animate={{ x: hasToken ? 26 : 4 }}
                        className="w-6 h-6 bg-white rounded-full absolute top-1 shadow-sm"
                      />
                    </button>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {hasToken ? "Cookie: session_id exists. User is logged in." : "No session cookies found in browser."}
                  </p>
                </div>

                <button 
                  disabled={isSimulating}
                  onClick={runSimulation}
                  className="w-full h-16 bg-blue-600 text-white rounded-[1.5rem] font-black uppercase tracking-widest shadow-xl shadow-blue-500/20 hover:bg-blue-700 disabled:opacity-50 transition-all flex items-center justify-center gap-3"
                >
                  {isSimulating ? <RefreshCw className="animate-spin" /> : <Zap size={18} fill="currentColor" />}
                  Visit /Dashboard
                </button>
              </div>
            </GlassCard2>

            <div className="p-8 bg-indigo-600 rounded-[2.5rem] text-white shadow-2xl shadow-indigo-200">
               <ShieldCheck className="mb-6" size={32} />
               <h4 className="text-xl font-black mb-2">The Guard Analogy</h4>
               <p className="text-indigo-100 text-sm leading-relaxed">
                Middleware is like a security guard at the building entrance. He checks your ID (Token) <strong>before</strong> you take the elevator to the office (Page).
               </p>
            </div>
          </div>

          {/* Visualization Column */}
          <div className="lg:col-span-8">
            <GlassCard2 className="p-2 lg:p-4 min-h-[600px] flex flex-col" hover={false}>
              
              {/* Browser Header */}
              <div className="bg-slate-50/50 rounded-t-[2rem] p-4 flex items-center gap-4 border-b border-slate-100">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <div className="flex-1 bg-white rounded-full h-9 px-4 flex items-center gap-2 border border-slate-200 text-[11px] font-mono text-slate-400">
                  <Globe size={14} /> my-app.com/dashboard
                </div>
              </div>

              {/* Simulation Stage */}
              <div className="flex-1 relative overflow-hidden bg-white flex items-center justify-between px-20">
                
                {/* User Node */}
                <div className="flex flex-col items-center gap-3 z-10">
                   <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-400 border border-slate-200">
                      <UserCheck size={32} />
                   </div>
                   <span className="text-[10px] font-black uppercase text-slate-400">Client</span>
                </div>

                {/* Middleware Shield (The Interceptor) */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <motion.div 
                    animate={isSimulating ? { scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] } : {}}
                    className={`w-40 h-40 rounded-[3rem] border-2 border-dashed flex flex-col items-center justify-center transition-colors duration-500 ${
                      result === 'granted' ? 'bg-emerald-50 border-emerald-500' : 
                      result === 'denied' ? 'bg-rose-50 border-rose-500' : 'bg-blue-50 border-blue-500'
                    }`}
                  >
                    <AnimatePresence mode="wait">
                      {isSimulating ? (
                        <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                          <Cpu className="text-blue-600 animate-spin-slow" size={40} />
                        </motion.div>
                      ) : result === 'granted' ? (
                        <motion.div key="success" initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-emerald-600">
                          <Unlock size={48} />
                        </motion.div>
                      ) : result === 'denied' ? (
                        <motion.div key="fail" initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-rose-600">
                          <Locate size={48} />
                        </motion.div>
                      ) : (
                        <motion.div key="idle" className="text-blue-600">
                          <ShieldCheck size={48} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                  <span className="mt-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Middleware Layer</span>
                </div>

                {/* Request Particle Animation */}
                <AnimatePresence>
                  {isSimulating && (
                    <motion.div 
                      initial={{ x: -250, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: result === 'granted' ? 250 : -250, opacity: 0 }}
                      transition={{ duration: 0.8, ease: "anticipate" }}
                      className="absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-blue-600 rounded-full blur-sm"
                    />
                  )}
                </AnimatePresence>

                {/* Next.js Origin Server */}
                <div className="flex flex-col items-center gap-3 z-10">
                   <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-colors duration-500 ${result === 'granted' ? 'bg-emerald-600 text-white shadow-xl shadow-emerald-200' : 'bg-slate-100 text-slate-300'}`}>
                      <Database size={32} />
                   </div>
                   <span className="text-[10px] font-black uppercase text-slate-400">Protected Page</span>
                </div>

                {/* Status Message */}
                <div className="absolute bottom-12 left-0 right-0 text-center">
                   <AnimatePresence mode="wait">
                     {result === 'granted' && (
                       <motion.p initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-emerald-600 font-bold">
                         Access Granted! Rendering /dashboard...
                       </motion.p>
                     )}
                     {result === 'denied' && (
                       <motion.p initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-rose-600 font-bold">
                         Access Denied. Redirecting to /login...
                       </motion.p>
                     )}
                   </AnimatePresence>
                </div>
              </div>

              {/* Edge Runtime Visualization */}
              
              <div className="p-8 bg-slate-50/50 rounded-b-[2rem] border-t border-slate-100">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-xl text-blue-600"><Globe size={20} /></div>
                  <div>
                    <h5 className="font-bold text-sm">Why at the "Edge"?</h5>
                    <p className="text-xs text-slate-500 leading-relaxed mt-1">
                      Middleware runs in a lightweight runtime globally distributed. This allows it to redirect unauthorized users <strong>before</strong> the request even hits your main server (Origin), saving cost and performance.
                    </p>
                  </div>
                </div>
              </div>
            </GlassCard2>
          </div>
        </div>
      </section>

      {/* 3. CODE EXPLAINER (VS CODE STYLE) */}
      <section className="py-24 px-6 bg-slate-900 rounded-[4rem] mx-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge2 variant="emerald">Live Logic</Badge2>
              <h2 className="text-4xl font-black text-white mt-4 mb-6">Inside the Code</h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Middleware is just a file named <code className="text-emerald-400">middleware.ts</code>. It exports a function that receives the request and returns a response.
              </p>

              <div className="space-y-4">
                {[
                  { icon: <Search size={18}/>, title: "Matcher", desc: "Defines which routes should trigger this middleware." },
                  { icon: <Layers size={18}/>, title: "Cookies", desc: "Reads browser cookies to find authentication tokens." },
                  { icon: <RefreshCcw size={18}/>, title: "NextResponse", desc: "Either continues the request or forces a redirect." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-5 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="text-emerald-400 shrink-0">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-white text-sm">{item.title}</h4>
                      <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl">
              <div className="p-4 bg-slate-800 flex justify-between items-center border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                </div>
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">middleware.ts</span>
              </div>
              
              <div className="p-8 font-mono text-xs md:text-sm leading-relaxed text-slate-300">
                <div className="flex gap-4">
                  <span className="text-slate-600 select-none">1</span>
                  <span><span className="text-purple-400">import</span> {`{ NextResponse }`} <span className="text-purple-400">from</span> <span className="text-emerald-400">'next/server'</span></span>
                </div>
                <div className="flex gap-4">
                  <span className="text-slate-600 select-none">2</span>
                  <span><span className="text-purple-400">export function</span> <span className="text-blue-400">middleware</span>(req) {`{`}</span>
                </div>
                <div className="flex gap-4 bg-emerald-500/10 border-l-2 border-emerald-500">
                  <span className="text-slate-600 select-none pl-4">3</span>
                  <span>&nbsp;&nbsp;<span className="text-purple-400">const</span> token = req.cookies.<span className="text-blue-400">get</span>(<span className="text-emerald-400">'token'</span>)</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-slate-600 select-none">4</span>
                  <span>&nbsp;</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-slate-600 select-none">5</span>
                  <span>&nbsp;&nbsp;<span className="text-purple-400">if</span> (!token) {`{`}</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-slate-600 select-none">6</span>
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">return</span> NextResponse.<span className="text-blue-400">redirect</span>(<span className="text-emerald-400">'/login'</span>)</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-slate-600 select-none">7</span>
                  <span>&nbsp;&nbsp;{`}`}</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-slate-600 select-none">8</span>
                  <span>{`}`}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. REVISION BENTO GRID */}
      <section className="py-32 px-6 max-w-7xl mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          
          <GlassCard2 className="md:col-span-2 p-10 flex flex-col justify-between">
            <div>
              <Badge2 variant="amber">Quick Tip</Badge2>
              <h4 className="text-2xl font-black mt-4 mb-4">The Matcher Rule</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                Always use a <span className="font-bold">matcher</span> to exclude static assets (images, fonts). If you don't, your middleware will run for every single tiny image on your page, slowing everything down!
              </p>
            </div>
            <div className="mt-8 p-4 bg-slate-50 rounded-2xl border border-slate-100 font-mono text-[11px] text-blue-600">
               matcher: ['/dashboard/:path*', '/profile']
            </div>
          </GlassCard2>

          <div className="p-15  bg-emerald-600 rounded-[2.5rem] text-white flex flex-col justify-center">
             <ShieldAlert size={42} className="mb-4" />
             <h4 className="text-xl font-black mb-2">Edge Runtime</h4>
             <p className="text-emerald-100 text-xs leading-relaxed">
               Because Middleware runs at the Edge, it doesn't support the full Node.js API (like file system access). Keep it light and fast!
             </p>
          </div>

         
        </div>
      </section>
    </div>
  );
}

// Custom styles for animation
const style = `
  @keyframes spin-slow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  .animate-spin-slow {
    animation: spin-slow 8s linear infinite;
  }
`;
    
  // --- FALLBACK ---
  return <div className="p-20 text-center">Lab Module {id} not found.</div>;
}