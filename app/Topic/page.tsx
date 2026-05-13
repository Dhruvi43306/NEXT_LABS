
import { Globe, ShieldCheck, Database, ArrowRight, Route } from "lucide-react";
import Link from "next/link";
type Topic = {
  topic_id: number;
  topic_name: string;
  topic_description: string;
  slug: string;
  icon?: string | null;
  theme?: string | null;
};

async function getTopics(): Promise<Topic[]> {
  try {
    const res = await fetch("http://localhost:3000/Lab23/api/topic", {
      cache: "no-store",
    });

    if (!res.ok) 
      return [];

    const json = await res.json();
    return json.data ?? [];
  } 
  catch {
    return [];
  }
}


const iconMap: Record<string, any> = {
  globe: Globe,
  route: Route,
  database: Database,
  shield: ShieldCheck,
};

const themeMap = {
    emerald: {
    card: "bg-emerald-50 border-emerald-100",
    icon: "bg-emerald-100 text-emerald-600",
    title: "text-emerald-700",
    button: "bg-emerald-600 hover:bg-emerald-700",
  },
  blue: {
    card: "bg-blue-50 border-blue-100",
    icon: "bg-blue-100 text-blue-600",
    title: "text-blue-700",
    button: "bg-blue-600 hover:bg-blue-700",
  },
  violet: {
    card: "bg-violet-50 border-violet-100",
    icon: "bg-violet-100 text-violet-600",
    title: "text-violet-700",
    button: "bg-violet-600 hover:bg-violet-700",
  },
  amber: {
    card: "bg-amber-50 border-amber-100",
    icon: "bg-amber-100 text-amber-600",
    title: "text-amber-700",
    button: "bg-amber-600 hover:bg-amber-700",
  },
  pink: {
    card: "bg-pink-50 border-pink-100",
    icon: "bg-pink-100 text-pink-600",
    title: "text-pink-700",
    button: "bg-pink-600 hover:bg-pink-700",
  },
};

//The ? means:
// This parameter is optional
//The function can run with or without this value
// ?? is called the nullish coalescing operator.
//“If the left value is null OR undefined, use the right value instead.”
function getTheme(name?: string | null) {
  const key = name?.toLowerCase() as keyof typeof themeMap;
  return themeMap[key] ?? themeMap.blue;
}

export default async function NextJsPathway() {
  const topics = await getTopics();

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans pb-20">

      <header className="py-16 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 uppercase">
          Next.js Architect Pathway
        </h1>
        <div className="w-20 h-1.5 bg-blue-600 mx-auto mb-6 rounded-full"></div>
        <p className="text-lg text-slate-500 font-medium">
          Explore Advanced Concepts & Enterprise Patterns
        </p>
      </header>

      <main className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">

          {topics.map((module) => {
            const Icon =
              iconMap[module.icon?.toLowerCase() ?? ""] || Globe;

            const theme = getTheme(module.theme);

            return (
              <div
                key={module.topic_id}
                className={`p-8 rounded-[40px] border flex flex-col items-start transition-transform hover:-translate-y-2 duration-300 ${theme.card}`}
              >
                <div className={`p-4 rounded-2xl shadow-sm mb-8 ${theme.icon}`}>
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className={`text-2xl font-black mb-3 leading-tight uppercase ${theme.title}`}>
                  {module.topic_name}
                </h3>

                <p className="text-slate-600 font-medium mb-10 leading-relaxed line-clamp-3">
                  {module.topic_description}
                </p>

                <Link
                  href={`/Topic/${module.slug}/${module.topic_id}`}
                  className={`mt-auto flex items-center gap-2 text-white px-6 py-3 rounded-full font-bold text-sm transition-all shadow-md ${theme.button}`}
                >
                  START MODULE <ArrowRight size={16} />
                </Link>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}