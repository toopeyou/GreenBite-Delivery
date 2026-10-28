import { NextFunction } from "express";
import { Request, Response } from "express"
import jwt from "jsonwebtoken";

const auth = (req:Request, res: Response, next: NextFunction)=> {
    try{
        const authHeader = req.headers.authorization;
        if (!auth || !authHeader?.startsWith('Baerer')) {
            return res.status(401).json({message: 'No token provided auth denied'})
        }
        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {id: string}

        req.user = {id: decoded.id}

        next()
    }catch(error) {
        console.log(error)
        return res.status(401).json({message: ' token is not valid'})
    }
}


export default auth;