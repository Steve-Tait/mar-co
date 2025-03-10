import React from 'react';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import { getImageDimensionsFromUrl } from '@/lib/utils';
import { GalleryWysiwygStoryblok } from '@/component-types-sb';

const GalleryWysiwyg = ({ blok }: { blok: GalleryWysiwygStoryblok }) => {
  const { gallery } = blok;

  const images = gallery.map((image) => {
    const dimensions = getImageDimensionsFromUrl(image.filename);
    const scaleFactor = dimensions[0] / dimensions[1];
    return {
      width: dimensions[0] * scaleFactor,
      height: 320,
      filename: image.filename,
      alt: image.alt || image.title || '',
    };
  });
  return (
    <Carousel
      className='relative overflow-hidden'
      opts={{
        dragFree: true,
        loop: true,
        slidesToScroll: 'auto',
      }}
    >
      <CarouselContent>
        {images &&
          images.map((image, index) => (
            <CarouselItem
              className='min-w-0 max-w-full shrink-0 grow-0 basis-auto'
              key={index}
            >
              <Image
                src={image.filename}
                alt={image.alt}
                width={Math.floor(image.width)}
                height={image.height}
                className='h-80 w-auto'
              ></Image>
            </CarouselItem>
          ))}
      </CarouselContent>
    </Carousel>
  );
};

export default GalleryWysiwyg;
