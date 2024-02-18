import { replacePunctuation, underlineBetweenStars } from '@/lib/utils';
import React from 'react';

interface Heading extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: number;
  heading: string;
  className?: string;
}

const Heading = ({ level = 2, heading = '', ...props }: Heading) => {
  const CustomTag = `h${level}`;
  const html = replacePunctuation(underlineBetweenStars(heading));

  return <CustomTag dangerouslySetInnerHTML={{ __html: html }} {...props} />;
};
export default Heading;
