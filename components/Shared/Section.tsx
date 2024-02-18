import { storyblokEditable } from '@storyblok/react/rsc';
import React, { ReactNode } from 'react';

class IProps {
  children: ReactNode;
  className?: string;
  blok?: any;
}

const Section: React.FC<IProps> = ({
  children,
  blok,
  className = '',
  ...props
}) => {
  return (
    <section
      className={`py-10 sm:py-20 ${className}`}
      {...(blok && storyblokEditable(blok))}
      {...props}
    >
      {children}
    </section>
  );
};
export default Section;
