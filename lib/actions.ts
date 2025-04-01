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
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      phone: formData.get('phone'),
      agree: formData.get('agree'),
    });

    //issue with Zod typescript
    if (validatedFields.success === false) {
      throw validatedFields.error.format();
    }

    if (!process.env.BREVO_API_KEY || !process.env.BREVO_LIST_ID)
      throw 'Brevo API Key or List ID not configured properly';
    const res = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        'api-key': process.env.BREVO_API_KEY,
      },

      body: JSON.stringify({
        updateEnabled: true,
        email: validatedFields.data.email,
        listIds: [7],
        attributes: {
          FIRSTNAME: validatedFields.data.firstName,
          LASTNAME: validatedFields.data.lastName,
          SMS: validatedFields.data.phone || '',
        },
      }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw errorData;
    }
    // await fetch('https://api.brevo.com/v3/smtp/email', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'api-key': process.env.BREVO_API_KEY,
    //   },
    //   body: JSON.stringify({
    //     sender: { name: 'System Notification', email: 'info@mar-co.digital' },
    //     to: [{ email: 'info@mar-co.digital', name: 'MAR-CO Digital' }],
    //     subject: 'New Contact Added to Your List',
    //     htmlContent: `
    //       <p>A new contact has been added to your Brevo list:</p>
    //       <ul>
    //         <li><b>First Name:</b> ${validatedFields.data.firstName}</li>
    //         <li><b>Last Name:</b> ${validatedFields.data.lastName}</li>
    //         <li><b>Email:</b> ${validatedFields.data.email}</li>
    //         <li><b>Phone:</b> ${validatedFields.data.phone}</li>
    //       </ul>
    //     `,
    //   }),
    // });
    const data = await res.text();
    console.log('data', data);
    response = {
      wasSuccessful: true,
      data: data,
    };
  } catch (e) {
    response = {
      wasSuccessful: false,
      error: e,
    };
  }
  return response;
}
