import { ResultSetHeader } from "mysql2";
import { DeleteModule, getAllModule, getByIdModule, InsertModule, UpdateModule } from "../model/module.model";

type Module ={
    title_id:number;
    topic_id:number;
    title:string,
    type:string,
    icon:string,
    theme:string
}

export async function listModule():Promise<Module[]>{
    return await getAllModule() 
}
export async function getModuleById(id:number):Promise<Module[]>{
    return await getByIdModule(id)
}

export async function createModule(formdata:Module):Promise<ResultSetHeader>{
    return await InsertModule(formdata)
}

export async function editModule(formdata:Module,id:number):Promise<ResultSetHeader>{
    return await UpdateModule(formdata,id)
}

export async function removeModule(id:number):Promise<ResultSetHeader>{
    return await DeleteModule(id)
}