import db from "../config/db"
import { ResultSetHeader } from "mysql2";

export interface TopicLesson {
    lesson_id?: number;
    topic_id: number;
    lesson_title: string;
    introduction: string;
}

export async function getLessonByTopicId(topicId: number): Promise<TopicLesson | null> {
    try {
        const [rows] = await db.query(
            `SELECT * FROM topic_lessons WHERE topic_id = ?`,
            [topicId]
        );
        const data = rows as TopicLesson[];
        return data.length > 0 ? data[0] : null;
    } catch (err) {
        console.log("Error:", err);
        throw err;
    }
}

export async function InsertLesson(formdata: TopicLesson): Promise<ResultSetHeader> {
    try {
        const [data] = await db.query<ResultSetHeader>(
            `INSERT INTO topic_lessons 
            (topic_id, lesson_title, introduction, created_at, updated_at)
            VALUES (?, ?, ?, NOW(), NOW())`,
            [
                formdata.topic_id,
                formdata.lesson_title,
                formdata.introduction
            ]
        );
        return data;
    } catch (err) {
        console.log("Error:", err);
        throw err;
    }
}

export async function UpdateLesson(formdata: TopicLesson, id: number): Promise<ResultSetHeader> {
    try {
        const [data] = await db.query<ResultSetHeader>(
            `UPDATE topic_lessons SET
                lesson_title = ?,
                introduction = ?
            WHERE lesson_id = ?`,
            [
                formdata.lesson_title,
                formdata.introduction,
                id
            ]
        );
        return data;
    } catch (err) {
        console.log("Error:", err);
        throw err;
    }
}

export async function DeleteLesson(id: number): Promise<ResultSetHeader> {
    try {
        const [data] = await db.query<ResultSetHeader>(
            `DELETE FROM topic_lessons WHERE lesson_id = ?`,
            [id]
        );
        return data;
    } catch (err) {
        console.log("Error:", err);
        throw err;
    }
}

module.exports = {
    getLessonByTopicId,
    InsertLesson,
    UpdateLesson,
    DeleteLesson
}