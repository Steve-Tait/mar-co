'use client';

import React from 'react';
import { SubmitButton } from './SubmitButton';
import { subscribe } from '@/lib/actions';
import { useFormState } from 'react-dom';

type FormField = {
  type?: string;
  name: string;
  placeholder?: string;
  isWide?: boolean;
  label?: string;
};

const formFields: FormField[] = [
  {
    name: 'firstName',
    placeholder: 'First name',
  },
  {
    name: 'lastName',
    placeholder: 'Last name',
  },
  {
    type: 'email',
    name: 'email',
    isWide: true,
    placeholder: 'someone@email.com',
  },
  {
    type: 'tel',
    name: 'phone',
    isWide: true,
    placeholder: '07XXXXXXXXX',
  },
  {
    type: 'checkbox',
    name: 'agree',
    isWide: true,
    label: 'I agree to the terms and conditions',
  },
];

const ContactForm = () => {
  const ref = React.useRef<HTMLFormElement>(null);
  const [state, formAction] = useFormState(subscribe, null);
  if (state?.wasSuccessful) {
    ref?.current?.reset();
    return <h2>Thank you for subscribing</h2>;
  }

  return (
    <form ref={ref} action={formAction}>
      <div className='grid grid-cols-2 gap-4 py-4 md:py-8'>
        {formFields.map((field, i) => (
          <div className={field.isWide ? 'col-span-2' : ''} key={field.name}>
            <input
              type={field.type || 'text'}
              name={field.name}
              placeholder={field?.placeholder}
              className={
                field.type === 'checkbox'
                  ? 'accent-pink'
                  : 'w-full min-w-0 rounded-xl bg-white px-4 py-3 text-black outline-transparent duration-300 focus:outline-pink'
              }
            />
            {state?.error?.[field.name]?._errors.map(
              (
                e:
                  | string
                  | number
                  | boolean
                  | React.ReactElement<
                      any,
                      string | React.JSXElementConstructor<any>
                    >
                  | Iterable<React.ReactNode>
                  | React.ReactPortal
                  | React.PromiseLikeOfReactNode
                  | null
                  | undefined,
                i: React.Key | null | undefined
              ) => (
                <p
                  className='mt-1 text-xs/none text-destructive-foreground'
                  key={i}
                >
                  {e}
                </p>
              )
            )}
          </div>
        ))}
      </div>
      <SubmitButton>Submit</SubmitButton>
    </form>
  );
};
export default ContactForm;
