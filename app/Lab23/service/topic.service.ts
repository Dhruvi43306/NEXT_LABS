interface Topic{
   topic_id:number;
    topic_name:string;
    topic_description:string;
    icon:string,
    order_no:number,
    difficulty:string,
    slug:string,
   theme?: string | null;
    
}

import { ResultSetHeader } from "mysql2";
import { DeleteTopic, getAllTopic, getTopicById, InsertTopic, UpdateTopic } from "../model/topic.model";

export async function listTopic():Promise <Topic[]>{
    return await getAllTopic()
}

export async function getTopicDetail(id:number):Promise<Topic | null>{
    return await getTopicById(id)
}

export async function CreateTopic(formdata:Topic):Promise<ResultSetHeader>{
    return await InsertTopic(formdata)
}

export async function editTopic(formdata:Topic,id:number):Promise<ResultSetHeader>{
    return await UpdateTopic(formdata,id)
}

export async function removeTopic(id:number):Promise<ResultSetHeader>{
    return await DeleteTopic(id)
}

module.exports = {listTopic,getTopicDetail,CreateTopic,editTopic,removeTopic}