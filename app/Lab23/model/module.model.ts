import db from "@/app/Lab23/config/db"
import { ResultSetHeader } from "mysql2";
interface Module  {
    title_id:number;
    topic_id:number;
    title:string,
    type:string,
    icon:string,
    theme:string

}

export async function getAllModule():Promise<Module[]>{
    try{
        const [data] = await db.query(`SELECT * FROM module`)
        return data as Module[]
    }
    catch(err){
        console.log("ERROR:",err)
        throw err;
    }
}

export async function getByIdModule(id:number):Promise<Module[]>{
    try{
        const [rows] = await db.query(
            `SELECT * FROM module 
             WHERE topic_id = ?
             ORDER BY title_id ASC`,
            [id]
        );

        return rows as Module[];

    } catch(err){
        console.log("ERROR:",err)
        throw err; 
    }
}

export async function InsertModule(formdata: Module): Promise<ResultSetHeader> {
  try {

    const [data] = await db.query<ResultSetHeader>(
      `INSERT INTO module
      (topic_id, title, created_at, updated_at, type, icon, theme)
      VALUES (?, ?, NOW(), NOW(), ?, ?, ?)`,
      [
        formdata.topic_id,
        formdata.title,
        formdata.type,
        formdata.icon,
        formdata.theme
      ]
    );

    return data;

  } catch (err) {
    console.log("ERROR:", err);
    throw err;
  }
}


export async function UpdateModule(formdata:Module,id:number):Promise<ResultSetHeader>{
    try{
        const [data] = await db.query<ResultSetHeader>(`UPDATE SET module 
        
        topic_id = ?,
        title = ?,
        type = ?,
        icon = ?,theme = ?
        where title_id = ?
         `,[
        formdata.topic_id,
        formdata.title,
         formdata.type,
        formdata.icon,
        formdata.theme,
        id  
        ])
        return data
    }
    catch(err){
       console.log("ERROR:",err)
        throw err; 
    }
}
export async function DeleteModule(id:number):Promise<ResultSetHeader>{
    try{
        const [data] = await db.query<ResultSetHeader>(`DELETE FROM module where title_id = ?`,[id])
        return data

    }
    catch(err){
       console.log("ERROR:",err)
        throw err; 
    }
}