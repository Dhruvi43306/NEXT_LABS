import db from "@/app/Lab23/config/db"
import { ResultSetHeader } from "mysql2"
interface Leaderboard{
    leaderboard_id:number,
    user_id:number,
    topic_id:number,
    score:number,
    rank_position:number

}

export async function getAllLeaderBoard():Promise<Leaderboard[]>{
    try{
        const [data] = await db.query(`SELECT * FROM leaderboard`)
        return data as Leaderboard[]
    }
    catch(err){
        console.log("ERROR:",err)
        throw err
    }
}

export async function getLeaderBoardById(id:number):Promise<Leaderboard | null>{
    try{
        const [rows] = await db.query(`SELECT * FROM leaderboard where leaderboard_id = ?`,[id])
        const data = await rows as Leaderboard[]
        return data.length > 0 ? data[0] : null;
    }
    catch(err){
        console.log("ERROR:",err)
        throw err
    }
}

export async function InsertLeaderBoard(formdata:Leaderboard):Promise<ResultSetHeader>{
    try{
        const [data] = await db.query<ResultSetHeader>(`INSERT INTO leaderboard(
    user_id,
    topic_id,
    score,
    rank_position,created_at) VALUES(?,?,?,?,NOW())`,[
        formdata.user_id,
        formdata.topic_id,
        formdata.score,
        formdata.rank_position
    ])
    return data
    }
    catch(err){
        console.log("ERROR:",err)
        throw err
    }
}

export async function UpdateLeaderBoard(formdata:Leaderboard,id:number):Promise<ResultSetHeader>{
    try{
        const [data] = await db.query<ResultSetHeader>(`UPDATE leaderboard SET
        user_id = ?,
        topic_id = ?,
        score = ?,
        rank_position = ?`,[
        formdata.user_id,
        formdata.topic_id,
        formdata.score,
        formdata.rank_position
        ])
        return data
    }
    catch(err){
        console.log("ERROR:",err)
        throw err
    }
}

export async function DeleteLeaderBoard(id:number):Promise<ResultSetHeader>{
    try{
        const [data] = await db.query<ResultSetHeader>(`DELETE FROM leaderboard leaderboard_id = ?`,[id])
        return data 
    }
    catch(err){
        console.log("ERROR:",err)
        throw err
    }
}