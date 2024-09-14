import { cn } from '@/lib/utils';
import Image from 'next/image';
import { TestimonialStoryblok } from '@/component-types-sb';
import { Quote } from 'lucide-react';

type TTestimonial = {
  blok: TestimonialStoryblok;
  isCard?: boolean;
  className?: string;
};

const Testimonial = ({ blok, isCard, className }: TTestimonial) => {
  const { author, role, content, avatar, company, ...props } = blok;
  return (
    <figure className={cn('flex flex-col items-center', className)} {...props}>
      {avatar?.id && (
        <Image
          src={avatar.filename}
          alt={avatar.alt || avatar.title || ''}
          height={256}
          width={256}
          className='relative mb-6 aspect-square w-48 shrink-0 overflow-hidden rounded-full object-cover md:w-64'
        />
      )}
      <div
        className={cn(
          'flex w-full flex-col gap-y-2 sm:gap-y-4',
          isCard &&
            'rounded-xl bg-muted px-6 pb-6 text-muted-foreground md:px-10 md:pb-10',
          avatar?.id ? '-mt-24 pt-24 md:-mt-32 md:pt-32' : 'pt-6 md:pt-10',
          className
        )}
      >
        <Quote className='size-6 rotate-180 text-purple sm:size-8' />
        <blockquote className='grow italic sm:text-lg'>{content}</blockquote>
        <hr className='my-2 border-purple/20' />
        <footer className='flex flex-col gap-x-8 gap-y-2 sm:gap-y-4 md:flex-row md:items-center'>
          <div className='flex grow items-center gap-x-4'>
            <figcaption className='grow'>
              <p className='font-heading font-black uppercase text-purple'>
                {author}
              </p>
              {role && <p className='font-bold'>{role}</p>}
            </figcaption>
          </div>
          {company?.id && (
            <Image
              src={company.filename}
              alt={company.alt || company.title || ''}
              height={48}
              width={208}
              className='h-8 w-52 self-end object-contain object-right sm:h-12'
            />
          )}
        </footer>
      </div>
    </figure>
  );
};
export default Testimonial;
