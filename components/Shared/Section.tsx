import { cn } from '@/lib/utils';
import { storyblokEditable } from '@storyblok/react/rsc';
import React, { forwardRef, ReactNode } from 'react';

class IProps {
  children: ReactNode;
  className?: string;
  removePadding?: boolean;
  color?: 'white' | 'muted' | 'primary' | 'none';
  blok?: any;
}

type Ref = HTMLElement;
const Section = forwardRef<Ref, IProps>(
  (
    {
      children,
      blok,
      removePadding = false,
      color = 'white',
      className = '',
      ...props
    },
    ref
  ) => {
    return (
      <section
        className={cn(
          color === 'primary' &&
            `dark bg-primary text-foreground [.bg-primary+_&]:pt-0`,
          color === 'white' &&
            `bg-white text-muted-foreground [.bg-white+_&]:pt-0`,
          color === 'muted' &&
            `bg-muted text-muted-foreground [.bg-muted_+_&]:pt-0`,
          !removePadding && 'py-16 sm:py-24 lg:py-32',
          className
        )}
        {...(blok && storyblokEditable(blok))}
        {...props}
        ref={ref}
      >
        {children}
      </section>
    );
  }
);
Section.displayName = 'Section';
export default Section;
