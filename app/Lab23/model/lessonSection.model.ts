import db from "../config/db"
import { ResultSetHeader } from "mysql2";

export interface LessonSection {
    section_id?: number;
    lesson_id: number;
    heading: string;
    content: string;
    image?: string | null;
    code_block?: string | null;
    order_no: number;
}

export async function getSectionsByLessonId(lessonId: number): Promise<LessonSection[]> {
    try {
        const [rows] = await db.query(
            `SELECT * FROM lesson_sections
             WHERE lesson_id = ?
             ORDER BY order_no ASC`,
            [lessonId]
        );
        return rows as LessonSection[];
    } catch (err) {
        console.log("Error:", err);
        throw err;
    }
}

export async function InsertSection(formdata: LessonSection): Promise<ResultSetHeader> {
    try {
        const [data] = await db.query<ResultSetHeader>(
            `INSERT INTO lesson_sections
            (lesson_id, heading, content, image, code_block, order_no)
            VALUES (?, ?, ?, ?, ?, ?)`,
            [
                formdata.lesson_id,
                formdata.heading,
                formdata.content,
                formdata.image ?? null,
                formdata.code_block ?? null,
                formdata.order_no
            ]
        );
        return data;
    } catch (err) {
        console.log("Error:", err);
        throw err;
    }
}

export async function UpdateSection(formdata: LessonSection, id: number): Promise<ResultSetHeader> {
    try {
        const [data] = await db.query<ResultSetHeader>(
            `UPDATE lesson_sections SET
                heading = ?,
                content = ?,
                image = ?,
                code_block = ?,
                order_no = ?
            WHERE section_id = ?`,
            [
                formdata.heading,
                formdata.content,
                formdata.image ?? null,
                formdata.code_block ?? null,
                formdata.order_no,
                id
            ]
        );
        return data;
    } catch (err) {
        console.log("Error:", err);
        throw err;
    }
}

export async function DeleteSection(id: number): Promise<ResultSetHeader> {
    try {
        const [data] = await db.query<ResultSetHeader>(
            `DELETE FROM lesson_sections WHERE section_id = ?`,
            [id]
        );
        return data;
    } catch (err) {
        console.log("Error:", err);
        throw err;
    }
}

module.exports = {
    getSectionsByLessonId,
    InsertSection,
    UpdateSection,
    DeleteSection
}