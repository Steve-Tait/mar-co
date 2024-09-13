import Container from '@/components/Shared/Container';
import Section from '../Shared/Section';
import Image from 'next/image';
import { getImageDimensionsFromUrl } from '@/lib/utils';
import React from 'react';
import { ImageSectionStoryblok } from '@/component-types-sb';

const ImageSection = ({ blok }: { blok: ImageSectionStoryblok }) => {
  const { images } = blok || {};
  const theImages = images
    ? images.map((image) => {
        const dimensions = getImageDimensionsFromUrl(image.filename);
        const scaleFactor = dimensions[0] / dimensions[1];
        return {
          width: dimensions[0] * scaleFactor,
          height: 160,
          filename: image.filename,
          alt: image.alt || image.title || '',
        };
      })
    : [];
  return (
    <Section blok={blok}>
      <Container className='flex max-w-3xl flex-wrap items-start gap-4'>
        {theImages &&
          theImages.map((image, index) => (
            <React.Fragment key={index}>
              <Image
                src={image.filename}
                alt={image.alt}
                width={Math.floor(image.width)}
                height={image.height}
                className='rounded-lg'
              />
            </React.Fragment>
          ))}
      </Container>
    </Section>
  );
};

export default ImageSection;
