import { NextFunction, Request, Response } from 'express';
import { createStudentIntoDB } from './user.service';

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { password, student: studentData } = req.body;
    const result = await createStudentIntoDB(password, studentData);
  } catch (error) {
    next(error);
  }
};
