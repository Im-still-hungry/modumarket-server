import { Request } from "express";

// userid를 전달하기 위해 Request user 프로퍼티 추가
declare global {
  namespace Express {
    interface Request {
      responseObject?: any;
      statusCode?: number;
    }
  }
}

export const responseFormagger = (req: Request, response: any, statusCode: number) => {
  req.responseObject = response;
  req.statusCode = statusCode;
};
