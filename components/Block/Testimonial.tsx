import { cn } from '@/lib/utils';
import Image from 'next/image';
import { TestimonialStoryblok } from '@/component-types-sb';
import { Quote } from 'lucide-react';

type TTestimonial = {
  blok: TestimonialStoryblok;
  className?: string;
};

const Testimonial = ({ blok, className }: TTestimonial) => {
  const { author, role, content, avatar, company, ...props } = blok || {};
  if (!content) return;
  return (
    <figure
      className={cn(
        'flex flex-col items-center gap-y-4 text-center md:gap-y-6',
        className
      )}
      {...props}
    >
      <blockquote className='flex grow items-center text-balance rounded-2xl bg-muted p-4 text-lg italic text-muted-foreground sm:p-6 sm:text-xl lg:text-xl'>
        "{content}"
      </blockquote>
      <footer className='flex flex-col items-center gap-y-2'>
        {avatar?.id && (
          <Image
            src={avatar.filename}
            alt={avatar.alt || avatar.title || ''}
            height={128}
            width={128}
            className='aspect-square w-24 shrink-0 overflow-hidden rounded-full object-cover md:w-32'
          />
        )}
        <div>
          <figcaption>
            {author && (
              <p className='font-heading font-black uppercase text-secondary'>
                {author}
              </p>
            )}
            {role && <p className='font-bold'>{role}</p>}
          </figcaption>
        </div>
        {company?.id && (
          <Image
            src={company.filename}
            alt={company.alt || company.title || ''}
            height={48}
            width={208}
            className='h-8 w-52 object-contain sm:h-12'
          />
        )}
      </footer>
    </figure>
  );
};
export default Testimonial;
