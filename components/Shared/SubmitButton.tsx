'use client';

import { ReactNode } from 'react';
import { useFormStatus } from 'react-dom';

export function SubmitButton({ children, ...props }: { children: ReactNode }) {
  const { pending } = useFormStatus();

  return (
    <button
      className='btn btn--primary mx-auto block'
      type='submit'
      aria-disabled={pending}
      disabled={pending}
      {...props}
    >
      {children}
    </button>
  );
}
