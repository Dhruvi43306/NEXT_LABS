import { ResultSetHeader } from "mysql2";
import { DeleteLeaderBoard, getAllLeaderBoard, getLeaderBoardById, InsertLeaderBoard, UpdateLeaderBoard } from "../model/leaderboard.model";
interface Leaderboard{
    leaderboard_id:number,
    user_id:number,
    topic_id:number,
    score:number,
    rank_position:number

}
export async function listLeaderBoard():Promise<Leaderboard[]>{
    return await getAllLeaderBoard()
}

export async function getLeaderBoardDetail(id:number):Promise<Leaderboard | null>{
    return await getLeaderBoardById(id)
}

export async function createLeaderBoard(formdata:Leaderboard):Promise<ResultSetHeader>{
    return await InsertLeaderBoard(formdata)
}

export async function editLeaderBoard(formdata:Leaderboard,id:number):Promise<ResultSetHeader>{
    return await UpdateLeaderBoard(formdata,id)
}

export async function removeLeaderBoard(id:number):Promise<ResultSetHeader>{
    return await DeleteLeaderBoard(id)
}