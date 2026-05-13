"use client"
import { useParams } from "next/navigation";

export default function RecordPage(){
    const params = useParams()
    const page = parseInt(params.pageno as string,10)
    const recordsPerPage = 10;
    const startIndex = (page-1) * recordsPerPage + 1;
    const endIndex = page * recordsPerPage
    return(
        <div>
            <h1>Page Number:{page}</h1>
            <p>Start Index:{startIndex}</p>
            <p>End Index:{endIndex}</p>
        </div>
    )
}