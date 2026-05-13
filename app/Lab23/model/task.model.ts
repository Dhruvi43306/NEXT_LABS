import db from "@/app/Lab23/config/db"
import { ResultSetHeader } from "mysql2"

interface Task{
   task_id: number,
   topic_id:number,
   task_title:string,
   difficulty:string,

}

export async function getAllTask():Promise<Task[]>{
    try{
    const [data] = await db.query(`SELECT * FROM tasks`)
    return data as Task[]
    }
    catch(err){
        console.log("ERROR:",err)
        throw err
    }

}

export async function getTaskById(id:number):Promise<Task | null>{
    try{
        const [rows] = await db.query(`SELECT * FROM tasks where task_id = ?`,[id])
        const data = rows as Task[]
        return data.length > 0 ? data[0] : null
    }
    catch(err){
        console.log("ERROR:",err)
        throw err
    }
}

export async function InsertTask(formdata:Task):Promise<ResultSetHeader>{
    try{
        const [data] = await db.query<ResultSetHeader>(`INSERT INTO tasks 
        (task_id,topic_id,task_title,difficulty,created_at)
        VALUES(?,?,?,?,NOW())`,[
          formdata.task_id,
          formdata.topic_id,
          formdata.task_title,
          formdata.difficulty  
        ])
        return data
    }
    catch(err){
        console.log("ERROR:",err)
        throw err
    }
}


export async function UpdateTask(formdata:Task,id:number):Promise<ResultSetHeader>{
    try{
        const [data] = await db.query<ResultSetHeader>(`UPDATE SET tasks
        
        topic_id = ?,
        task_title = ?,
        difficulty = ?
        where task_id = ?`,[
          formdata.topic_id,
          formdata.task_title,
          formdata.difficulty,
          id   
        ])
        return data
    }
    catch(err){
        console.log("ERROR:",err)
        throw err  
    }
}

export async function DeleteTask(id:number):Promise<ResultSetHeader>{
    try{
        const [data] = await db.query<ResultSetHeader>(`DELETE FROM tasks where task_id = ?`,[id])
        return data
    }
    catch(err){
        console.log("ERROR:",err)
        throw err
    }
}