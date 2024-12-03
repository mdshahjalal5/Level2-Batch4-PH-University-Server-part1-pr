import { NextFunction, Request, Response } from 'express';

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { password, student: studentData } = req.body;
    const result=await  ;
  } catch (error) {
    next(error);
  }
};
