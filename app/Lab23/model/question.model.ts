import db from "@/app/Lab23/config/db"
import { ResultSetHeader } from "mysql2"
interface Question{
    question_id:number,
    task_id: number,
    question_text:string,
    option_a:string,
    option_b:string,
    option_c:string,
    option_d:string,
    correct_option:string,
    explanation:string,
    marks:string 
}
export async function getAllQuestion():Promise<Question[]>{
    try{
        const [data] = await db.query(`SELECT * FROM questions`)
        return data as Question[]
    }
    catch(err){
        console.log("ERROR:",err)
        throw err
    }
}

export async function getQuestionById(id:number):Promise<Question | null>{
    try{
        const [res] = await db.query(`SELECT * FROM questions where question_id = ?`,[id])
        const data = res as Question[]
        return data.length > 0 ? data[0] : null
    }
    catch(err){
        console.log("ERROR:",err)
        throw err
    }
}

export async function InsertQuestion(formdata:Question):Promise<ResultSetHeader>{
    try{
        const [data] = await db.query<ResultSetHeader>(`INSERT INTO questions
        (task_id,question_text,option_a,option_b,option_c,
    option_d,correct_option,explanation,marks,created_at) VALUES(?,?,?,?,?,?,?,?,?,NOW())`,[
        formdata.task_id,
        formdata.question_text,
        formdata.option_a,
        formdata.option_b,
        formdata.option_c,
        formdata.option_d,
        formdata.correct_option,
        formdata.explanation,
        formdata.marks
    ])
    return data 
    }
    catch(err){
        console.log("ERROR:",err)
        throw err
    }
}

export async function UpdateQuestion(formdata:Question,id:number):Promise<ResultSetHeader>{
    try{
        const [data] = await db.query<ResultSetHeader>(`UPDATE SET questions
    task_id = ?,
    question_text = ?,
    option_a = ?,
    option_b = ?,
    option_c = ?,
    option_d = ?,
    correct_option = ?,
    explanation = ?,
    marks = ?
    where question_id = ?`,[
    formdata.task_id,
    formdata.question_text,
    formdata.option_a,
    formdata.option_b,
    formdata.option_c,
    formdata.option_d,
    formdata.correct_option,
    formdata.explanation,
    formdata.marks,
    id
    ])
    return data
    }
    catch(err){
        console.log("ERROR:",err)
        throw err
    }
}

export async function DeleteQuestion(id:number):Promise<ResultSetHeader>{
    try{
        const [data] = await db.query<ResultSetHeader>(`DELETE FROM questions where question_id = ?`,[id])
        return data
    }
    catch(err){
        console.log("ERROR:",err)
        throw err  
    }
}