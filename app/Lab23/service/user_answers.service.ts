import { ResultSetHeader } from "mysql2"
import { DeleteUserAnser, getAllUserAnser, getAllUserAnserById, InsertUserAnser, UpdateUserAnser } from "../model/user_answers.model"
import { format } from "path"

interface UserAnser{
    answer_id:number,
    attempt_id:number,
    question_id:number,
    selected_option:string,
    is_correct:number,
    score:number
}
export async function listUserAnswer():Promise<UserAnser[]>{
    return await getAllUserAnser()
}
export async function UserAnswerById(id:number):Promise<UserAnser | null>{
    return await getAllUserAnserById(id)
}

export async function createUserAnswer(formdata:UserAnser):Promise<ResultSetHeader>{
    return await InsertUserAnser(formdata)
}

export async function editUserAnswer(formdata:UserAnser,id:number):Promise<ResultSetHeader>{
    return await UpdateUserAnser(formdata,id)
}

export async function removeUserAnswer(id:number):Promise<ResultSetHeader>{
    return await DeleteUserAnser(id)
}