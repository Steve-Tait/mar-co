import { z } from 'zod';

export const subscribeSchema = z.object({
  email: z
    .string({ required_error: 'Email is required' })
    .min(1, { message: 'Email is required' })
    .email({ message: 'Invalid email address' }),
  firstName: z
    .string({ required_error: 'First name is required' })
    .min(1, { message: 'First name is required' }),
  lastName: z
    .string({ required_error: 'Last name is required' })
    .min(1, { message: 'Last name is required' }),
  phone: z.string(),
  agree: z.coerce.boolean().refine((bool) => bool == true, {
    message: 'You must agree to our terms and conditions',
  }),
});
