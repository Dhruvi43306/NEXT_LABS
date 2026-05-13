"use client";

import React, { useState } from 'react';
import { 
  Link as LinkIcon, 
  Terminal, 
  ArrowRightLeft, 
  History, 
  Zap, 
  MousePointer2, 
  Info,
  HelpCircle
} from 'lucide-react';
import Link from 'next/link';

const navigationTopics = [
  {
    id: "link",
    title: "<Link> Component",
    icon: <LinkIcon className="w-5 h-5" />,
    color: "bg-blue-50 text-blue-600 border-blue-100",
    description: "The primary and recommended way to navigate between routes in Next.js.",
    whyUse: "Use this for standard links (like a navigation bar). It is the best choice for speed because it loads the next page in the background before the user even clicks.",
    features: ["Prefetching", "Client-side Navigation", "SEO Friendly"],
    code: `import Link from 'next/link'\n\nexport default function Page() {\n  return (\n    <Link href="/dashboard" prefetch={true}>\n      Dashboard\n    </Link>\n  )\n}`
  },
  {
    id: "router",
    title: "useRouter Hook",
    icon: <Terminal className="w-5 h-5" />,
    color: "bg-emerald-50 text-emerald-600 border-emerald-100",
    description: "Allows you to programmatically change routes from Client Components.",
    whyUse: "Use this when you need to move a user based on an 'event', such as clicking a 'Submit' button or finishing a calculation.",
    features: ["Dynamic Triggers", "Push & Replace", "Client-only"],
    code: `'use client'\nimport { useRouter } from 'next/navigation'\n\nexport default function Page() {\n  const router = useRouter()\n  return (\n    <button onClick={() => router.push('/dashboard')}>\n      Go Home\n    </button>\n  )\n}`
  },
  {
    id: "redirect",
    title: "Redirect Function",
    icon: <ArrowRightLeft className="w-5 h-5" />,
    color: "bg-amber-50 text-amber-600 border-amber-100",
    description: "Used in Server Components, Route Handlers, and Server Actions.",
    whyUse: "Use this for security. For example, if a user isn't logged in, use redirect to send them back to the login page before the page even finishes loading.",
    features: ["Server-side", "Status 307/303", "Safe Auth Flow"],
    code: `import { redirect } from 'next/navigation'\n\nexport default async function Page() {\n  const auth = await checkAuth()\n  if (!auth) redirect('/login')\n  return <div>Welcome!</div>\n}`
  },
  {
    id: "history",
    title: "Native History API",
    icon: <History className="w-5 h-5" />,
    color: "bg-purple-50 text-purple-600 border-purple-100",
    description: "Update the browser's history stack without a full page reload.",
    whyUse: "Use this when you want to change the URL (like adding a search filter) without making the user leave the current page.",
    features: ["pushState", "replaceState", "Low-level API"],
    code: `window.history.pushState(\n  { ...state },\n  '',\n  '/new-url'\n)`
  }
];

export default function NavigationLabUI() {
  const [activeTab, setActiveTab] = useState(navigationTopics[0]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Area */}
        <header className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <div className="px-3 py-1 bg-white border border-slate-200 rounded-full shadow-sm">
              <span className="text-xs font-bold text-slate-500 tracking-widest uppercase">Next.js Architecture</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-800 tracking-tight mb-4">
            Linking & <span className="text-blue-600">Navigating</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl font-medium">
            Explore the four ways to move between routes in the App Router, optimized for performance and UX.
          </p>
        </header>

        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Topic Selector Side */}
          <div className="lg:col-span-5 space-y-4">
            {navigationTopics.map((topic) => (
              <button
                key={topic.id}
                onClick={() => setActiveTab(topic)}
                className={`w-full text-left p-6 rounded-3xl transition-all border ${
                  activeTab.id === topic.id
                    ? 'bg-white border-blue-200 shadow-xl shadow-blue-900/5 ring-4 ring-blue-50'
                    : 'bg-white/60 border-slate-100 hover:border-slate-300 hover:bg-white'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-2xl ${topic.color} border shadow-sm`}>
                    {topic.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-slate-800 text-lg mb-1">{topic.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">
                      {topic.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Detailed Content Panel */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm p-8 md:p-10 sticky top-8">
              
              {/* WHY USE SECTION (Student-Focused Addition) */}
              <div className="mb-8 p-6 bg-blue-50 border border-blue-100 rounded-2xl">
                <div className="flex items-center gap-2 mb-2 text-blue-600">
                  <HelpCircle className="w-4 h-4" />
                  <span className="text-xs font-black uppercase tracking-widest">When should I use this?</span>
                </div>
                <p className="text-sm text-blue-900 font-bold leading-relaxed">
                  "{activeTab.whyUse}"
                </p>
              </div>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-2 mb-8">
                {activeTab.features.map((f, idx) => (
                  <span key={idx} className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 border border-slate-100 text-slate-600 rounded-full text-xs font-bold uppercase tracking-wider">
                    <Zap className="w-3 h-3 text-amber-500" />
                    {f}
                  </span>
                ))}
              </div>

              {/* Documentation Section */}
              <div className="mb-10">
                <h4 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                    Implementation
                </h4>
                <div className="bg-slate-900 rounded-2xl p-6 overflow-x-auto shadow-inner border-4 border-slate-800">
                  <pre className="text-blue-300 font-mono text-sm leading-relaxed">
                    <code>{activeTab.code}</code>
                  </pre>
                </div>
              </div>

              {/* Behavior Insight */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 bg-blue-50/50 border border-blue-100 rounded-2xl">
                   <div className="flex items-center gap-2 mb-2 text-blue-700">
                      <MousePointer2 className="w-4 h-4" />
                      <span className="text-xs font-black uppercase">Prefetching</span>
                   </div>
                   <p className="text-xs text-slate-600 leading-normal">
                     Automatically loads linked routes in the background when they enter the viewport.
                   </p>
                </div>
                <div className="p-5 bg-slate-50 border border-slate-100 rounded-2xl">
                   <div className="flex items-center gap-2 mb-2 text-slate-700">
                      <Info className="w-4 h-4" />
                      <span className="text-xs font-black uppercase">History API</span>
                   </div>
                   <p className="text-xs text-slate-600 leading-normal">
                     Maintains scroll position and browser state by default during navigation.
                   </p>
                </div>
              </div>

              {/* Action Button */}
         
              <div className="mt-8 pt-8 border-t border-slate-100">
                <Link href="https://nextjs.org/docs/app/getting-started/linking-and-navigating">
                <button className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-blue-600 transition-colors shadow-lg shadow-blue-900/10 active:scale-[0.98]">
                  Open Documentation Snippet
                </button>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}