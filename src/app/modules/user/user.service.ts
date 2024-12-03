import config from '../../config';
import { TStudent } from '../student/student.interface';
import { TUser } from './user.interface';
import { User } from './user.model';
import { Student } from '../student/student.model';

export const createStudentIntoDB = async (
  password: string,
  studentData: TStudent,
) => {
  //
  //
  //
  //w: Partial<T> utility type in TypeScript makes all properties of type T optional. If you add a property to userData that does not exist in TUser, TypeScript will show an error.
  //
  //
  //
  //
  const userData: Partial<TUser> = {};
  userData.password = password || (config.default_password as string);
  userData.role = 'student';
  userData.id = '2030100001';

  const newUser = await User.create(userData);
  if (Object.keys(newUser).length) {
    studentData.id = newUser.id;
    studentData.user = newUser._id;
    const newStudent = await Student.create(studentData);
    return newStudent;
  }
};
