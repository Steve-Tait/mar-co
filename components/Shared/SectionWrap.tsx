import React, { ReactNode } from 'react';
import Heading from './Heading';

class IProps {
  children: ReactNode;
  className?: string;
  eyebrow?: string;
  heading?: string;
  body?: string;
}

const SectionWrap: React.FC<IProps> = ({
  eyebrow,
  heading,
  body,
  children,
  ...props
}) => {
  return (
    <div {...props}>
      <div className='mb-10'>
        {eyebrow && (
          <h6 className='mb-4 text-sm uppercase tracking-wide text-pink'>
            {eyebrow}
          </h6>
        )}
        {heading && <Heading className='mb-6' heading={heading} />}
        {body && <div className='prose prose-invert lg:prose-lg'>{body}</div>}
      </div>
      {children}
    </div>
  );
};
export default SectionWrap;
