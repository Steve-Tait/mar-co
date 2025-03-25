import { cn } from '@/lib/utils';
import { storyblokEditable } from '@storyblok/react/rsc';
import React, { forwardRef, ReactNode } from 'react';

class IProps {
  children: ReactNode;
  className?: string;
  removePadding?: boolean;
  blok?: any;
}

type Ref = HTMLElement;
const Section = forwardRef<Ref, IProps>(
  (
    { children, blok, removePadding = false, className = '', ...props },
    ref
  ) => {
    const theme = blok?.theme || 'light';
    return (
      <section
        className={cn(
          'section bg-background text-foreground',
          theme && `theme--${theme}`,
          !removePadding && 'py-24 lg:py-32',
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
