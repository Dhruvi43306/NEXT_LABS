import db from "@/app/Lab23/config/db"
import { ResultSetHeader } from "mysql2"
interface UserAnser{
    answer_id:number,
    attempt_id:number,
    question_id:number,
    selected_option:string,
    is_correct:number,
    score:number
}
export async function getAllUserAnser():Promise<UserAnser[]>{
    try{
        const [data] = await db.query(`SELECT * FROM user_answers`)
        return data as UserAnser[]
    }
    catch(err){
        console.log("ERROR:",err)
        throw err
    }
}
export async function getAllUserAnserById(id:number):Promise<UserAnser | null>{
    try{
        const [rows] = await db.query(`SELECT * FROM user_answers where answer_id = ?`,[id])
        const data = rows as UserAnser[]
        return data.length > 0 ? data[0] : null
    }
    catch(err){
        console.log("ERROR:",err)
        throw err
    }
}

export async function InsertUserAnser(formdata:UserAnser):Promise<ResultSetHeader>{
    try{
        const [data] = await db.query<ResultSetHeader>(`INSERT INTO user_answers (attempt_id,question_id,
    selected_option,is_correct,score,answered_at)VALUES(?,?,?,?,?,NOW())`,[
        formdata.attempt_id,
        formdata.question_id,
        formdata.selected_option,
        formdata.is_correct,
        formdata.score
    ])
    return data
    }
    catch(err){
        console.log("ERROR:",err)
        throw err
    }
}

export async function UpdateUserAnser(formdata:UserAnser,id:number):Promise<ResultSetHeader>{
    try{
        const [data] = await db.query<ResultSetHeader>(`UPDATE user_answers SET
    attempt_id = ?,
    question_id = ?,
    selected_option = ?,is_correct = ?,score = ?
    where answer_id = ?`,[
        formdata.attempt_id,
        formdata.question_id,
        formdata.selected_option,
        formdata.is_correct,
        formdata.score,
        id])
        return data
    }
    
    catch(err){
        console.log("ERROR:",err)
        throw err  
    }
}

export async function DeleteUserAnser(id:number):Promise<ResultSetHeader>{
    try{
        const [data] = await db.query<ResultSetHeader>(`DELETE  FROM user_answers where answer_id = ?`,[id])
        return data
    }
    catch(err){
        console.log("ERROR:",err)
        throw err
    }
}