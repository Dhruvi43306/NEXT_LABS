// "use client"

// import { useRouter } from "next/navigation"
// import { useEffect, useState } from "react"

// export function MongoDbUserPage(){
//     const router = useRouter()
//     const [data,setData] = useState<any>([])
//     const [loading,setloading] = useState<boolean>(true)
//     const fetchData = async ()=>{
//         const res = await fetch(`/api/user`)
//         const tempdata = await res.json()
//         setData(tempdata)
//         setloading(false)
//     }
//     useEffect(()=>{
//         fetchData()
//     },[])
//     return(
//         <>
//         <table className="table">
//             <thead>
//                 <tr>
//                     <th scope="col">id</th>
//                     <th scope="col">First</th>
//                     <th scope="col">Last</th>
//                     <th scope="col">City</th>
//                     <th scope="col">Actions</th>
//                 </tr>
//             </thead>
//             <tbody>
//             {loading &&
//             <tr>
//                 <td colSpan={5}>
//                         Loading Data................!
//                 </td>
//             </tr>}
//             {data.map((d:any)=>{
//                 return(
//                     <tr key = {d._id}>
//                         <td>{d._id}</td>
//                         <td>{d.First}</td>
//                         <td>{d.Last}</td>
//                         <td>{d.city}</td>
//                         <td><button onClick={()=>{router.push(`MongoDB/${d._id}`)}}>View More</button></td>
//                     </tr>
//                 )
//             })}
//             </tbody>
//         </table>
//         </>
//     )
// }