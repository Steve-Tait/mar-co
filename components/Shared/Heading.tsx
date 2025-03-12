import { cn, replacePunctuation, underlineBetweenStars } from '@/lib/utils';
import React from 'react';

interface Heading extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: number;
  heading?: string;
  className?: string;
  children?: React.ReactNode;
}
const CLASS_NAME = 'text-balance';

const Heading = ({
  level = 2,
  heading = '',
  className,
  children,
  ...props
}: Heading) => {
  const CustomTag = `h${level}` as React.ElementType;
  const html = replacePunctuation(underlineBetweenStars(heading));

  return (
    <>
      {heading ? (
        <CustomTag
          className={cn(CLASS_NAME, className)}
          dangerouslySetInnerHTML={{ __html: html }}
          {...props}
        />
      ) : (
        <CustomTag className={cn(CLASS_NAME, className)} {...props}>
          {children}
        </CustomTag>
      )}
    </>
  );
};
export default Heading;
