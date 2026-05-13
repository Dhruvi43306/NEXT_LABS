import db from "@/app/Lab26/lib/mysql"
import { User } from "@/app/Lab23/types/user.type";
import { ResultSetHeader } from "mysql2";



export async function findById(id: number): Promise<User | null> {
  try{
  const [data] = await db.query(
    "SELECT * FROM users WHERE user_id = ?",
    [id]
  );
  const users = data as User[];
  return users.length > 0 ? users[0] : null;
}

  catch(err){
    console.log("ERROR:",err)
    throw err
  }
}

export async function findAlluser(){
    try{
        const [data] = await db.query("SELECT * FROM users");
        return data
    }

  catch(err){
    console.log("ERROR:",err)
    throw err
  }
}



export async function UpdateById(id:number,formdata:User):Promise<ResultSetHeader>{
  try{
  const [data] = await db.query<ResultSetHeader>(`UPDATE users SET 
    name = ?,email = ?,password = ?,role = ? WHERE user_id = ?`,
    [formdata.name,
    formdata.email,
    formdata.password,
    formdata.role,
    id
    ]
  )
  return data
}
catch(err){
  console.log("ERROR:",err)
  throw err
}
}

export async function DeleteById(id: number): Promise<ResultSetHeader> {
  try{
  const [data] = await db.query<ResultSetHeader>(
    "DELETE FROM users WHERE user_id = ?",
    [id]
  );
  
  return data
}

  catch(err){
    console.log("ERROR:",err)
    throw err
  }
}
