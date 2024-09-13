import React, { ReactNode } from 'react';
import Heading from './Heading';
import { render } from 'storyblok-rich-text-react-renderer';
import { cn } from '@/lib/utils';
import { RichtextStoryblok } from '@/component-types-sb';

class IProps {
  children: ReactNode;
  className?: string;
  eyebrow?: string;
  heading?: string;
  body?: string | RichtextStoryblok;
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
      {(eyebrow || heading || body) && (
        <div className='mb-6 sm:mb-10'>
          {eyebrow && (
            <h6 className='mb-1 text-sm uppercase tracking-wide text-pink sm:mb-2'>
              {eyebrow}
            </h6>
          )}
          {heading && <Heading className='mb-4 sm:mb-6' heading={heading} />}
          {body && (
            <div className='prose sm:prose-lg'>
              {typeof body === 'string' ? body : render(body)}
            </div>
          )}
        </div>
      )}
      {children}
    </div>
  );
};
export default SectionWrap;
