import { ResultSetHeader } from "mysql2";
import { DeleteTask, getAllTask, getTaskById, InsertTask, UpdateTask } from "../model/task.model";
interface Task{
   task_id: number,
   topic_id:number,
   task_title:string,
   difficulty:string,

}
export async function listTask():Promise<Task[]>{
    return await getAllTask()
}

export async function TaskDetail(id:number):Promise<Task | null>{
    return await getTaskById(id)
}

export async function createTask(formdata:Task):Promise<ResultSetHeader>{
    return await InsertTask(formdata)
}

export async function editTask(formdata:Task,id:number):Promise<ResultSetHeader>{
    return await UpdateTask(formdata,id)
}

export async function removeTask(id:number):Promise<ResultSetHeader>{
    return await DeleteTask(id)
}