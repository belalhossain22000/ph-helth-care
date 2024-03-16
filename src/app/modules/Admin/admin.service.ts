import { PrismaClient } from "@prisma/client"

const prisma= new PrismaClient()
const getAllAdminFroDb=async(params:any)=>{
    const result = await prisma.admin.findMany({
        where:{
            OR:[
                {
                    name:{
                        contains:params,
                        mode:"insensitive"
                    }
                },
                {
                    email:{
                        contains:params,
                        mode:"insensitive"
                    }
                }
            ]
        }
    })
    return result
}

export const AdminService={
    getAllAdminFroDb
}