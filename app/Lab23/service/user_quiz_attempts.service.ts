import { ResultSetHeader } from "mysql2";
import { DeleteUserAttempt, getAllUserAttempt, getUserAttemptById, InsertUserAttempt, UpadteUserAttempt } from "../model/user_quiz_attempts.model";
interface UserQuizAttempts{
    attempt_id : number,
    user_id:number,
    topic_id :number,
    total_score:string,

}
export async function listUserAttempts():Promise<UserQuizAttempts[]>{
    return await getAllUserAttempt()
}

export async function getUserAttemptDetail(id:number):Promise<UserQuizAttempts | null>{
    return await getUserAttemptById(id)
}

export async function createUserAttempts(formdata:UserQuizAttempts):Promise<ResultSetHeader>{
    return await InsertUserAttempt(formdata)
}

export async function editUserAttempts(formdata:UserQuizAttempts,id:number):Promise<ResultSetHeader>{
    return await UpadteUserAttempt(formdata,id)
}

export async function removeUserAttempts(id:number):Promise<ResultSetHeader>{
    return await DeleteUserAttempt(id)
}