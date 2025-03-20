import { z } from 'zod';
import { parsePhoneNumberFromString } from 'libphonenumber-js';

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
  phone: z
    .string()
    .optional()
    .transform((arg, ctx) => {
      if (!arg) return;
      const phone = parsePhoneNumberFromString(arg, {
        // set this to use a default country when the phone number omits country code
        defaultCountry: 'GB',

        // set to false to require that the whole string is exactly a phone number,
        // otherwise, it will search for a phone number anywhere within the string
        extract: false,
      });

      // when it's good
      if (phone && phone.isValid()) {
        return phone.number;
      }

      // when it's not
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Invalid phone number',
      });
      return z.NEVER;
    }),
  agree: z.coerce.boolean().refine((bool) => bool == true, {
    message: 'You must agree to our terms and conditions',
  }),
});
