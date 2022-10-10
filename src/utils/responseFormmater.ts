import { Request } from "express";

export const responseFormagger = (req: Request, response: any, statusCode: number) => {
    req.responseObject = response;
    req.statusCode = statusCode
}