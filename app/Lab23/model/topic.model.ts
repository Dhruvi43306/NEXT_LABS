import db from "../config/db"
import {ResultSetHeader } from "mysql2";

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

export async function getAllTopic():Promise<Topic[]>{
    try{
        const [data] = await db.query(`SELECT * FROM topics
                                    ORDER BY order_no ;`)
        return data as Topic[]  
    }
    catch(err){
    console.log("Error:",err)
    throw err
}
}

export async function getTopicById(id:number):Promise<Topic | null>{
    try{
        const [rows] = await db.query(`SELECT * FROM topics where topic_id = ?`,[id])
        const data = rows as Topic[]
        return data.length > 0 ? data[0] :null 
    }
    catch(err){
    console.log("Error:",err)
    throw err   
    }
}

export async function InsertTopic(formdata:Topic):Promise<ResultSetHeader>{
    try{
        const [data] = await db.query<ResultSetHeader>(`INSERT INTO topics 
        (topic_name,topic_description,
        created_at,updated_at,icon,order_no,difficulty,slug,theme) 
        VALUES(?, ?, NOW(), NOW(), ?, ?, ?,?,?)
`,[
            
            formdata.topic_name,
            formdata.topic_description,
            formdata.icon,
            formdata.order_no,
            formdata.difficulty,
            formdata.slug,
            formdata.theme
        ])
        return data;
    }
    catch(err){
    console.log("Error:",err)
    throw err   
    }
}

export async function UpdateTopic(formdata:Topic,id:Number):Promise<ResultSetHeader>{
    try{
        const [data] = await db.query<ResultSetHeader>(`UPDATE topics SET
            topic_name = ?,
            topic_description = ?,
            icon = ?,
            order_no = ?,
            difficulty = ?,
            slug = ?,
            theme = ?
            where topic_id = ?`,[
            formdata.topic_name,
            formdata.topic_description,
            formdata.icon,
            formdata.order_no,
            formdata.difficulty,
            formdata.slug,
            formdata.theme, 
            id 
            ]
        )
        return data
    }
    catch(err){
        console.log("Error:",err)
        throw err     
    }
}

export async function DeleteTopic(id:number){
    try{
        const [data] = await db.query<ResultSetHeader>("DELETE FROM topics WHERE topic_id = ?",[id]);
        return data
    }
    catch(err){
       console.log("Error:",err)
        throw err   
    }
}

module.exports = {getAllTopic,getTopicById,InsertTopic,UpdateTopic,DeleteTopic}