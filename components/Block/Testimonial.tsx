import { cn } from '@/lib/utils';
import Image from 'next/image';
import { TestimonialStoryblok } from '@/component-types-sb';

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
        'flex flex-col items-center text-center',
        !avatar?.filename && 'gap-y-4 md:gap-y-6',
        className
      )}
      {...props}
    >
      <blockquote
        className={cn(
          'flex grow items-center text-balance rounded-2xl bg-muted p-4 text-lg italic text-muted-foreground md:p-6 md:text-xl lg:text-xl',
          avatar?.filename && 'pb-16 md:pb-20'
        )}
      >
        "{content}"
      </blockquote>
      <footer className='flex flex-col items-center gap-y-2'>
        {avatar?.filename && (
          <Image
            src={avatar.filename}
            alt={avatar.alt || avatar.title || ''}
            height={128}
            width={128}
            className='-mt-12 aspect-square w-24 shrink-0 overflow-hidden rounded-full object-cover md:-mt-16 md:w-32'
          />
        )}
        <div>
          <figcaption>
            {author && <p className='eyebrow'>{author}</p>}
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
