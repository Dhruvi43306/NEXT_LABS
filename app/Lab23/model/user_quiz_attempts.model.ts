import db from "@/app/Lab23/config/db"
import { ResultSetHeader } from "mysql2"
interface UserQuizAttempts{
    attempt_id : number,
    user_id:number,
    topic_id :number,
    total_score:string,

}
export async function getAllUserAttempt():Promise<UserQuizAttempts[]>{
    try{
        const [data] = await db.query(`SELECT * FROM user_quiz_attempts`)
        return data as UserQuizAttempts[]
    }
    catch(err){
        console.log("ERROR:",err)
        throw err
    }
}

export async function getUserAttemptById(id:number):Promise<UserQuizAttempts | null>{
    try{
        const [rows] = await db.query(`SELECT * FROM user_quiz_attempts where attempt_id = ?`,[id])
        const data = rows as UserQuizAttempts[]
        return data.length > 0 ? data[0] :null
    }
    catch(err){
        console.log("ERROR:",err)
        throw err
    }
}

export async function InsertUserAttempt(formdata:UserQuizAttempts):Promise<ResultSetHeader>{
    try{
        const [data] = await db.query<ResultSetHeader>(
            `INSERT INTO user_quiz_attempts
            (user_id,topic_id,total_score,completed_at)
            VALUES(?,?,?,NOW())`,[
                formdata.attempt_id,
                formdata.user_id,
                formdata.topic_id,
                formdata.total_score]
        )
        return data
    }
    catch(err){
        console.log("ERROR:",err)
        throw err
    }
}

export async function UpadteUserAttempt(formdata:UserQuizAttempts,id:number):Promise<ResultSetHeader>{
    try{
    const [data] = await db.query<ResultSetHeader>(`UPDATE user_quiz_attempts
         SET user_id = ?,
         topic_id = ?,
         total_score = ?,
         where attempt_id = ?
        `,[formdata.user_id,
            formdata.topic_id,
            formdata.total_score,
            id
        ])
        return data
    }
    catch(err){
        console.log("ERROR:",err)
        throw err
    }
}

export async function DeleteUserAttempt(id:number):Promise<ResultSetHeader>{
    try{
        const [data] = await db.query<ResultSetHeader>(`DELETE FROM user_quiz_attempts where attempt_id = ?`,[id])
        return data
    }
    catch(err){
        console.log("ERROR:",err)
        throw err
    }
}