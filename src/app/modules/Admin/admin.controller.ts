import { Request, Response } from "express"
import { AdminService } from "./admin.service"

const getAllAdmin=async(req:Request,res:Response)=>{
    try {
       
        const result = await AdminService.getAllAdminFroDb(req.query.searchTerm)
        res.status(200).json({
            success:true,
            status:200,
            message:"All admin retrieve successfully",
            data:result
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            status:500,
            message:error?.name,
            error
        })
    }
}

export const AdminController={
    getAllAdmin
}