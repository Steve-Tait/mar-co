import { AssetStoryblok, CategoryStoryblok } from '@/component-types-sb';
import React from 'react';
import Lava from './Lava';
import Heading from './Heading';
import Container from './Container';
import Badge from './Badge';

type THero = {
  title?: string | undefined;
  excerpt?: string;
  image?: AssetStoryblok;
  categories?: CategoryStoryblok[];
  className?: string;
};

const Hero = ({
  title,
  excerpt,
  image,
  categories,
  className = '',
  ...props
}: THero) => {
  return (
    <section
      className='relative flex aspect-video max-h-[85vh] w-full flex-col justify-center bg-purple bg-cover py-24 text-white before:absolute before:inset-0 before:bg-purple/50 before:backdrop-brightness-50 md:min-h-[50vh]'
      style={{ backgroundImage: `url(${image?.filename})` }}
      {...props}
    >
      <div className='absolute inset-0 overflow-hidden'>
        <Lava
          color1='#270965'
          color2='#420fa9'
          className='absolute -inset-1/2 h-[200%] w-[200%] mix-blend-soft-light'
        />
      </div>
      <Container className='relative text-center'>
        <div className='mx-auto max-w-prose'>
          {categories && (
            <div className='mb-4 flex flex-wrap justify-center gap-x-2'>
              {categories.map((category) => (
                <Badge
                  href={`/${category.full_slug}`}
                  label={category.name}
                  key={category.uuid}
                />
              ))}
            </div>
          )}
          {title && <Heading heading={title} level={1} />}
          {excerpt && (
            <p className='mt-8 text-lg/relaxed md:text-xl/relaxed'>{excerpt}</p>
          )}
        </div>
      </Container>
    </section>
  );
};
export default Hero;
