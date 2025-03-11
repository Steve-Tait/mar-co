import React, { ReactNode } from 'react';
import Heading from './Heading';
import { cn } from '@/lib/utils';
import { RichtextStoryblok } from '@/component-types-sb';
import RichText from '../Block/RichText';

class IProps {
  children: ReactNode;
  className?: string;
  eyebrow?: string;
  heading?: string;
  body?: string | RichtextStoryblok;
  headingLevel?: number;
}

const SectionWrap: React.FC<IProps> = ({
  eyebrow,
  heading,
  body,
  children,
  className,
  headingLevel = 2,
  ...props
}) => {
  return (
    <div
      className={cn('group flex flex-col gap-y-6 md:gap-y-10', className)}
      {...props}
    >
      {(eyebrow || heading || body) && (
        <div className='flex flex-col gap-y-1 group-[.text-center]:items-center md:gap-y-2'>
          {eyebrow && <h6 className='eyebrow'>{eyebrow}</h6>}
          <div className='flex flex-col gap-y-4 group-[.text-center]:items-center md:gap-y-6'>
            {heading && <Heading heading={heading} level={headingLevel} />}
            {body && <RichText content={body} />}
          </div>
        </div>
      )}
      {children}
    </div>
  );
};
export default SectionWrap;
