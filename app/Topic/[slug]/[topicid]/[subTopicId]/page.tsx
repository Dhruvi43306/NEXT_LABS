"use client"

import { use, useEffect, useState } from "react";

export default function SubTopicPage({
  params
}: {
  params: Promise<{ topicid: string; subTopicId: string }>
}) {
  const { topicid, subTopicId } = use(params);

  const [section, setSection] = useState<any>(null);
  const [lesson, setLesson] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(
          `http://localhost:3000/Lab23/api/topic-lesson?topicId=${topicid}`
        );

        const json = await res.json();

        if (!json || !json.data) {
          setLoading(false);
          return;
        }

        setLesson(json.data.lesson || null);

        const sections = json.data.sections || [];

        const found = sections.find(
          (s: any) => String(s.section_id) === String(subTopicId)
        );

        setSection(found || null);
        setLoading(false);

      } catch (err) {
        console.log("Load error:", err);
        setLoading(false);
      }
    }

    load();
  }, [topicid, subTopicId]);

  // if (loading) {
  //   return <div className="p-10 text-gray-500">Loading content...</div>;
  // }

  // if (!section) {
  //   return <div className="p-10 text-red-500">Section not found</div>;
  // }

  return (
    <div className="min-h-screen bg-[#FBFBFC]">
      <main className="max-w-3xl mx-auto px-6 pt-24 pb-32">

        {lesson && (
          <>
            <h1 className="text-3xl font-bold mb-2">
              {lesson.lesson_title}
            </h1>

            <p className="text-gray-500 mb-6">
              {lesson.introduction}
            </p>

            <div className="flex gap-4 text-sm text-gray-400 mb-10">
              <span>{lesson.category}</span>
              <span>•</span>
              <span>{lesson.read_time}</span>
              <span>•</span>
              <span>{lesson.difficulty}</span>
            </div>
          </>
        )}

        {/* <section className="p-8 rounded-2xl border bg-white shadow-sm">
          <h2 className="text-xl font-semibold mb-4">
            {section.heading}
          </h2> 

          <p className="text-gray-600 leading-relaxed mb-6">
            {section.content}
          </p>

          {section.code_block && (
            <pre className="bg-slate-900 text-white p-5 rounded-xl overflow-x-auto">
              <code>{section.code_block}</code>
            </pre>
          )}
        </section> */}

      </main>
    </div>
  );
}