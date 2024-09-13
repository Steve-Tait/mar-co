import { replacePunctuation, underlineBetweenStars } from '@/lib/utils';
import React from 'react';

interface Heading extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: number;
  heading?: string;
  className?: string;
  children?: React.ReactNode;
}

const Heading = ({ level = 2, heading = '', children, ...props }: Heading) => {
  const CustomTag = `h${level}`;
  const html = replacePunctuation(underlineBetweenStars(heading));

  return (
    <>
      {heading ? (
        <CustomTag dangerouslySetInnerHTML={{ __html: html }} {...props} />
      ) : (
        <CustomTag {...props}>{children}</CustomTag>
      )}
    </>
  );
};
export default Heading;
