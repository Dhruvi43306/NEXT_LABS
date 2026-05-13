export interface Topic {
  topic_id: number;
  topic_name: string;
  slug: string;
}

export interface Lesson {
  lesson_id: number;
  topic_id: number;
  lesson_title: string;
  introduction: string;
}

export interface LessonSection {
  section_id: number;
  lesson_id: number;
  heading: string;
  content: string;
  image: string | null;
  code_block: string | null;
  order_no: number;
}