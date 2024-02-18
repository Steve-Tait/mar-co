import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Quote } from '../Shared/Icons';
import { TestimonialStoryblok } from '@/component-types-sb';

type TTestimonial = {
  blok: TestimonialStoryblok;
  isCard?: boolean;
  className?: string;
};

const Testimonial = ({ blok, isCard, className }: TTestimonial) => {
  const { author, role, content, avatar, company, ...props } = blok;
  const textColor = isCard ? 'text-pink' : 'text-purple';
  return (
    <figure
      className={cn(
        'flex flex-col gap-y-4',
        isCard &&
          'rounded-xl bg-purple-700/50 p-6 duration-300 hover:bg-purple-700/75 md:p-10',
        className
      )}
      {...props}
    >
      <Quote className={`h-8 w-8 rotate-180 ${textColor}`} />
      <blockquote className='grow text-lg italic'>{content}</blockquote>
      <hr className='my-2 border-purple/20' />
      <footer className='flex flex-col gap-x-8 gap-y-4 md:flex-row md:items-center'>
        <div className='flex grow items-center gap-x-4'>
          {avatar?.id && (
            <div className='relative float-right aspect-square w-16 shrink-0 overflow-hidden rounded-full'>
              <Image
                src={avatar.filename}
                alt={avatar.alt || avatar.title || ''}
                fill={true}
                className='object-cover'
              />
            </div>
          )}
          <figcaption className='grow'>
            <p className='font-heading font-black uppercase'>{author}</p>
            {role && <p className={`font-bold ${textColor}`}>{role}</p>}
          </figcaption>
        </div>
        {company?.id && (
          <Image
            src={company.filename}
            alt={company.alt || company.title || ''}
            height={48}
            width={208}
            className='h-12 w-52 self-end object-contain object-right'
          />
        )}
      </footer>
    </figure>
  );
};
export default Testimonial;
