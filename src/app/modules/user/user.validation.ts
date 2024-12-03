import { z } from 'zod';

const userValidationSchema = z.object({
  password: z
    .string({
      invalid_type_error: 'Password must be string',
    })
    .max(20, {
      message: 'Password can not be more than 20 characters',
    })
    //p: why the pass is optional i think it must be required
    .optional(),
});

export const UserValidationSchema = {
  userValidationSchema,
};
