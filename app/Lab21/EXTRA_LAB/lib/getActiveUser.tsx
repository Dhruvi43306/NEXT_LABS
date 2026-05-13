
import React from 'react'
import users from "@/app/Lab22/EXTRA_LAB/data1/users";

function getActiveUser(pathname:string) {
    const match = pathname.match(/profile\/(\d+)/)
    if(!match){
        return null;
    }
    const id = Number(match[1])
  return users.find(u => u.id == id)
}

export default getActiveUser