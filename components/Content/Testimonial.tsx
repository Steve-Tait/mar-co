import { storyblokEditable } from '@storyblok/react/rsc';
import Container from '../Shared/Container';
import Image from 'next/image';
import { TestimonialStoryblok } from '@/component-types-sb';

const Testimonial = ({ blok }: TestimonialStoryblok) => {
  const { role, content, author, image } = blok;
  return (
    <Container>
      <div {...storyblokEditable(blok)}>
        {image && (
          <div className='relative aspect-square w-32 overflow-hidden rounded-full'>
            <Image
              src={image.filename}
              alt={image.alt || image.title || ''}
              fill={true}
              className='object-cover'
            />
          </div>
        )}
        <h1>
          {author}{' '}
          {role && (
            <>
              - <small>{role}</small>
            </>
          )}
        </h1>
        <div>{content}</div>
      </div>
    </Container>
  );
};

export default Testimonial;
