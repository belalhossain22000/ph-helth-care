import { Request, Response } from "express";
import { userService } from "./user.sevice";

const createAdmin = async (req: Request, res: Response) => {
   try {
     //console.log(req.body);
     const result = await userService.createAdmin(req.body);
     res.status(200).json({
        success:true,
        status:200,
        message:"Admin is created successfully",
        data:result
     })
   } catch (error) {
    res.status(500).json({
        success:false,
        status:500,
        message:error?.name,
        error:error
    })
   }
};

export const userController = {
    createAdmin
}