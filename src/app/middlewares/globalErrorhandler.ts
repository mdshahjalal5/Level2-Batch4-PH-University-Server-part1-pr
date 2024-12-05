import { NextFunction, Request, Response } from 'express';

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const statutsCode = 500;
  const message = err.message;
  return res.status(statutsCode).json({
    success: false,
    message,
    error: err,
  });
};

export default globalErrorHandler;
