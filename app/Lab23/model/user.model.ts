import db from "../config/db"
import { User } from "@/app/Lab23/types/user.type";
import bcrypt from "bcrypt";

export async function createUser(user: User) {
  try{
  const { name, email, password, role } = user;
  const hashedPassword = await bcrypt.hash(password, 10);

  const [data] = await db.query(
    "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)",
    [name, email, hashedPassword, role]
  );

  return data;
}
catch(err){
  console.log("ERROR:",err)
  throw err
}
}

export async function findByEmail(email: string): Promise<User | null> {
  try{
  const [data] = await db.query(
    "SELECT * FROM users WHERE email = ?",
    [email]
  );
  const users = data as User[];
  return users.length > 0 ? users[0] : null;
}

  catch(err){
    console.log("ERROR:",err)
    throw err
  }
}
export async function saveResetToken(email:string,token:string,expires:string){
  try{
    const [data] = await db.query(`UPDATE users set  ResetToken = ?, ResetExpires=? WHERE email = ?`,
      [token,expires,email])

      return data
  }
  catch(err){
    console.log("ERROR:",err)
    throw err
  }
}

export async function findByResetToken(token:string){
  try{
  const [data] = await db.query(`
    SELECT * from users WHERE ResetToken=? AND ResetExpires > NOW()`,[token])

    return data
}
catch(err){
  console.log("ERROR:",err)
  throw err
}
}

export async function UpdatePasswordById(user_id:number,hashedPassword:string){
  try{
  const [data] = await db.query(`UPDATE users SET password = ?,ResetToken=NULL, ResetExpires=NULL WHERE user_id = ?`,
    [hashedPassword,user_id]
  )
  return data
}
catch(err){
  console.log("ERROR:",err)
  throw err
}
}
