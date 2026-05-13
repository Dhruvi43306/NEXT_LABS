import { ResultSetHeader } from "mysql2";
import {
    getLessonByTopicId,
    InsertLesson,
    UpdateLesson,
    DeleteLesson,
    TopicLesson
} from "../model/topicLesson.model";

export async function getLesson(topicId: number): Promise<TopicLesson | null> {
    return await getLessonByTopicId(topicId);
}

export async function createLesson(formdata: TopicLesson): Promise<ResultSetHeader> {
    return await InsertLesson(formdata);
}

export async function editLesson(formdata: TopicLesson, id: number): Promise<ResultSetHeader> {
    return await UpdateLesson(formdata, id);
}

export async function removeLesson(id: number): Promise<ResultSetHeader> {
    return await DeleteLesson(id);
}

module.exports = {
    getLesson,
    createLesson,
    editLesson,
    removeLesson
}