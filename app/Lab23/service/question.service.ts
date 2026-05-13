import { ResultSetHeader } from "mysql2";
import { DeleteQuestion, getAllQuestion, getQuestionById, InsertQuestion, UpdateQuestion } from "../model/question.model";
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
export async function listQuestion():Promise<Question[]>{
    return await getAllQuestion()
}

export async function getQuestionDetail(id:number):Promise<Question  | null>{
    return await getQuestionById(id)
}

export async function createQuestion(formdata:Question):Promise<ResultSetHeader>{
    return await InsertQuestion(formdata)
}

export async function editQuestion(formdata:Question,id:number):Promise<ResultSetHeader>{
    return await UpdateQuestion(formdata,id)
}

export async function removeQuestion(id:number):Promise<ResultSetHeader>{
    return await DeleteQuestion(id)
}