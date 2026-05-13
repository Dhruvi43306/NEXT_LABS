import { ResultSetHeader } from "mysql2";
import {
    getSectionsByLessonId,
    InsertSection,
    UpdateSection,
    DeleteSection,
    LessonSection
} from "../model/lessonSection.model";

export async function listSections(lessonId: number): Promise<LessonSection[]> {
    return await getSectionsByLessonId(lessonId);
}

export async function createSection(formdata: LessonSection): Promise<ResultSetHeader> {
    return await InsertSection(formdata);
}

export async function editSection(formdata: LessonSection, id: number): Promise<ResultSetHeader> {
    return await UpdateSection(formdata, id);
}

export async function removeSection(id: number): Promise<ResultSetHeader> {
    return await DeleteSection(id);
}

module.exports = {
    listSections,
    createSection,
    editSection,
    removeSection
}