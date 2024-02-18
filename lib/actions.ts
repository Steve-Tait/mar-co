'use server';

import { subscribeSchema } from './schema';
import { TSubscribeResponse } from './types';

export async function subscribe(
  prevState: any,
  formData: FormData
): Promise<TSubscribeResponse> {
  let response = {} as TSubscribeResponse;
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const validatedFields = subscribeSchema.safeParse({
      email: formData.get('email'),
      firstName: formData.get('firstname'),
      lastName: formData.get('lastname'),
      phone: formData.get('phone'),
      agree: formData.get('agree'),
    });
    if (validatedFields.success) {
      validatedFields;
      response = {
        wasSuccessful: true,
        data: validatedFields.data,
      };
    }
    //issue with Zod typescript
    if (validatedFields.success === false) {
      throw validatedFields.error.format();
    }
  } catch (e) {
    response = {
      wasSuccessful: false,
      error: e,
    };
  }
  return response;
}
