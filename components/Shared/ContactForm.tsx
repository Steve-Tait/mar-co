'use client';

import React, { useActionState } from 'react';
import { SubmitButton } from './SubmitButton';
import { subscribe } from '@/lib/actions';
import { cn } from '@/lib/utils';
import Heading from './Heading';

type FormField = {
  type?: string;
  name: string;
  placeholder?: string;
  isWide?: boolean;
  label?: string;
};

const formFields: FormField[] = [
  {
    label: 'First Name *',
    name: 'firstName',
    placeholder: 'First name',
  },
  {
    label: 'Last Name *',
    name: 'lastName',
    placeholder: 'Last name',
  },
  {
    label: 'Email *',
    type: 'email',
    name: 'email',
    isWide: true,
    placeholder: 'someone@email.com',
  },
  {
    label: 'Phone',
    type: 'tel',
    name: 'phone',
    isWide: true,
    placeholder: '07XXXXXXXXX',
  },
  {
    label: "I agree to join MAR-CO's email list and can opt-out at any time.",
    type: 'checkbox',
    name: 'agree',
    isWide: true,
  },
];

const ContactForm = ({ children }: { children: React.ReactNode }) => {
  const ref = React.useRef<HTMLFormElement>(null);
  const [state, formAction] = useActionState(subscribe, null);
  if (state?.wasSuccessful) {
    ref?.current?.reset();
    const name = state?.fields?.firstName;
    return (
      <div className='flex flex-col items-center justify-center gap-y-4 sm:justify-start'>
        <Heading level={3} heading={`Thank you${name ? `, ${name}` : null}`} />
        <p className='text-lg'>We&#34;ll be in touch within 24 hours.</p>
      </div>
    );
  } else if (state?.error) {
    console.error('error', state.error);
  }

  return (
    <>
      {children}
      <form ref={ref} action={formAction}>
        <div className='grid grid-cols-2 gap-4 py-4 md:py-8'>
          {formFields.map((field, i) => (
            <div className={cn(field.isWide && 'col-span-2')} key={field.name}>
              <>
                {field.type === 'checkbox' ? (
                  <div className='grid-cols-auto grid grid-flow-col items-center gap-x-2'>
                    <label
                      className='shink-0 order-1 text-sm'
                      htmlFor={field.name}
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.name}
                      type={field.type || 'text'}
                      name={field.name}
                      placeholder={field?.placeholder}
                      className='h-5 accent-pink'
                    />
                  </div>
                ) : (
                  <>
                    <label className='mb-1' htmlFor={field.name}>
                      {field.label}
                    </label>
                    <input
                      id={field.name}
                      type={field.type || 'text'}
                      name={field.name}
                      placeholder={field?.placeholder}
                      className='w-full min-w-0 rounded-xl bg-white px-4 py-3 text-black outline-transparent duration-300 focus:outline-pink'
                    />
                  </>
                )}
                {state?.error?.[field.name]?._errors.map(
                  (
                    e:
                      | string
                      | number
                      | bigint
                      | boolean
                      | React.ReactElement<
                          any,
                          string | React.JSXElementConstructor<any>
                        >
                      | Iterable<React.ReactNode>
                      | React.ReactPortal
                      | Promise<React.AwaitedReactNode>
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
              </>
            </div>
          ))}
        </div>
        <SubmitButton>Submit</SubmitButton>
      </form>
    </>
  );
};
export default ContactForm;
