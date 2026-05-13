import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "@prisma/client";


export const adapter = new PrismaMariaDb({
    host:"localhost",
    user:"root",
    password:"",
    port:3306,
    database:"next_fetch_demo",
    // connectionLimit:5
})

export const prisma = new PrismaClient({adapter})

