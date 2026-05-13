"use client"
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { Home, User, Info, Database, Layers, Command, Bell, Search, Sparkles, Layout,ArrowLeft, LayoutDashboard, LayoutDashboardIcon, Ticket } from "lucide-react";
 import { usePathname } from "next/navigation";
 import getActiveUser from "./lib/getActiveUser";
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Aura Lab | Design System",
//   description: "Aero-Glass Unified Interface",
// };


export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
 const activeUser = getActiveUser(pathname)
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#f5f7f9] text-slate-900 font-sans`}>
        
        <div className="flex min-h-screen p-4 lg:p-6 gap-6">
          
          {/* AERO-SIDEBAR */}
          <aside className="hidden lg:flex w-24 flex-col bg-white/60 backdrop-blur-2xl rounded-[2.5rem] p-5 transition-all duration-500 hover:w-64 group shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-white/80 sticky top-6 h-[calc(100vh-3rem)]">
            <div className="flex items-center justify-center group-hover:justify-start group-hover:px-2 mb-10">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-tr from-emerald-500 to-teal-400 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-emerald-200 group-hover:rotate-[360deg] transition-transform duration-700">
                  <Sparkles size={22} fill="currentColor" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full flex items-center justify-center">
                   <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                </div>
              </div>
              <div className="ml-4 flex flex-col opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
                <span className="font-black text-lg tracking-tighter leading-none">AURA.LAB</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Workspace v4</span>
              </div>
            </div>

            <nav className="flex flex-col gap-2">
              <NavLink href="/Lab22/EXTRA_LAB/dashboard/admin" icon={<LayoutDashboard size={20}/>} label="Admin" color="blue" vertical />
              <NavLink href="/Lab22/EXTRA_LAB/dashboard/manager" icon={<LayoutDashboardIcon size={20}/>} label="Manager" color="rose" vertical />
              <NavLink href="/Lab22/EXTRA_LAB/dashboard/user" icon={<User size={20}/>} label="User" color="amber" vertical />
            </nav>

            <div className="mt-auto group-hover:bg-white/50 rounded-3xl p-4 transition-colors border border-transparent group-hover:border-slate-100">
               <div className="flex items-center justify-center group-hover:justify-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500">
                    <Layout size={16} />
                  </div>
                  <div className="hidden group-hover:block">
                    <p className="text-[10px] font-black leading-none">Standard Tier</p>
                    <p className="text-[9px] font-bold text-emerald-500 uppercase mt-1 tracking-tighter">System Online</p>
                  </div>
               </div>
            </div>
          </aside>

          {/* MAIN WRAPPER */}
          <div className="flex-1 flex flex-col gap-6">
           
            {/* FLOATING HEADER */}
            <header className="h-20 bg-white/70 backdrop-blur-xl border border-white/80 rounded-3xl shadow-sm px-8 flex items-center justify-between">
              <div className="flex items-center gap-6">
                 
                <div className="flex items-center gap-2 bg-slate-100/50 px-4 py-2 rounded-2xl border border-slate-200/30">
                  <Search size={16} className="text-slate-400" />
                  <input type="text" placeholder="Quick search..." className="bg-transparent border-none outline-none text-xs font-medium w-32 focus:w-48 transition-all" />
                </div>
              </div>

              {/* CENTER NAV PILL */}
              <nav className="hidden xl:flex items-center gap-1 bg-slate-900/5 p-1 rounded-2xl border border-slate-900/5">
                <NavLink href="/Lab22/EXTRA_LAB/dashboard/admin/profile/1" label="Admin Profile" icon={<Ticket size={19} />} color="emerald" />
                <NavLink href="/Lab22/EXTRA_LAB/dashboard/manager/profile/2" label="Manager Profile" icon={<Ticket size={19} />} color="emerald" />
                <NavLink href="/Lab22/EXTRA_LAB/dashboard/user/profile/3" label="Member Profile" icon={<User size={19} />} color="pink" ></NavLink>
                </nav>

              <div className="flex items-center gap-4">
                <button className="relative p-2.5 bg-white rounded-xl shadow-sm border border-slate-100 text-slate-400 hover:text-emerald-500 transition-colors">
                  <Bell size={18} />
                  <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-white" />
                </button>
                <div className="flex items-center gap-3 ml-2 border-l pl-6 border-slate-200">
                  <div className="hidden sm:block text-right leading-none">
                    <p className="text-xs font-black">DHRUVI S.</p>
                    <p className="text-[9px] font-bold text-slate-400 uppercase mt-1">Admin</p>
                  </div>
                   <div className="group relative">
       {/* Avatar Trigger */}
      <div className="flex flex-col gap-1">
        <aside className="p-6">
              <h1 className="text-xl font-bold">
              {activeUser?.role === "admin" && <img src="https://du-website.s3.ap-south-1.amazonaws.com/U01/Page/4---20-06-2021-02-35-30.png"
              alt="Admin Logo"className="w-10 h-10 rounded-full"/>}
              {activeUser?.role === "manager" && <img src="https://du-website.s3.ap-south-1.amazonaws.com/U01/Page/4---20-06-2021-02-35-35.png"
              alt="Admin Logo"
              className="w-10 h-10 rounded-full"/>}{activeUser?.role === "Coustomer" && <img src="https://du-website.s3.ap-south-1.amazonaws.com/U01/Page/Dr-Nilesh-Gambhava.jpg"
              alt="Admin Logo"
              className="w-10 h-10 rounded-full"/>}
       
         </h1>
       </aside>

   </div>
 </div>
                </div>
              </div>
            </header>

            {/* CONTENT CANVAS */}
             <Link href="/" className="inline-flex items-center gap-2 text-[10px] font-black tracking-[0.15em] text-slate-400 hover:text-emerald-500 transition-colors mb-4">
                    <ArrowLeft size={12} strokeWidth={3} /> BACK TO DASHBOARD
                  </Link>
            <main className="flex-1 bg-white rounded-[2.5rem] border border-slate-200/50 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.03)] p-10 overflow-auto relative">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-emerald-400 via-blue-500 to-indigo-500" />
              {children}
            </main>

            <footer className="px-10 h-6 flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase tracking-[0.25em]">
              <span>© 2026 Aura Lab Architecture</span>
              <div className="flex gap-8">
                <span className="hover:text-emerald-500 cursor-pointer transition-colors">Safety Protocol</span>
                <span className="hover:text-emerald-500 cursor-pointer transition-colors">API Docs</span>
              </div>
            </footer>
          </div>

        </div>
      </body>
    </html>
  );
}

function NavLink({ href, icon, label, color, vertical = false }: any) {
  const themes: any = {
    blue: "hover:bg-blue-500 hover:text-white hover:shadow-lg hover:shadow-blue-100",
    rose: "hover:bg-rose-500 hover:text-white hover:shadow-lg hover:shadow-rose-100",
    amber: "hover:bg-amber-500 hover:text-white hover:shadow-lg hover:shadow-amber-100",
    indigo: "hover:bg-indigo-500 hover:text-white hover:shadow-lg hover:shadow-indigo-100",
    emerald: "hover:bg-emerald-500 hover:text-white hover:shadow-lg hover:shadow-emerald-100",
  };

  const iconColors: any = {
    blue: "text-blue-500 bg-blue-50",
    rose: "text-rose-500 bg-rose-50",
    amber: "text-amber-500 bg-amber-50",
    indigo: "text-indigo-500 bg-indigo-50",
    emerald: "text-emerald-500 bg-emerald-50",
  };

  if (vertical) {
    return (
      <Link href={href} className={`flex items-center gap-4 p-2 rounded-[1.25rem] transition-all duration-300 group/link ${themes[color]} text-slate-500`}>
        <div className={`min-w-[48px] h-[48px] rounded-2xl flex items-center justify-center transition-all duration-500 group-hover/link:bg-white/20 group-hover/link:text-white ${iconColors[color]}`}>
          {icon}
        </div>
        <span className="text-sm font-bold tracking-tight opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          {label}
        </span>
      </Link>
    );
  }

  return (
    <Link href={href} className={`flex items-center gap-2 px-5 py-2.5 rounded-xl transition-all duration-300 group/link ${themes[color]} text-slate-600`}>
      <span className="group-hover/link:text-white transition-colors">{icon}</span>
      <span className="text-xs font-bold tracking-tight group-hover/link:text-white transition-colors uppercase">
        {label}
      </span>
    </Link>
  );
}

     
   
