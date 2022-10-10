import { Request, Response, NextFunction } from "express";
import { HttpException } from "../../exception/httpException";


const errorMiddleware = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("\x1b[33m%s\x1b[0m", error);
  const status = error.status || 500;
  console.log(error.status)
  const message = error.message || "Something went wrong";
  console.log("message", message);
  res.status(status).json({
    status,
    message,
  });
};

export { errorMiddleware };