import Container from '@/components/Shared/Container';
import Section from '../Shared/Section';
import Image from 'next/image';
import { getImageDimensionsFromUrl } from '@/lib/utils';
import React from 'react';
import { ImageSectionStoryblok } from '@/component-types-sb';
import { Camera } from 'lucide-react';

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
          name: image.name,
        };
      })
    : [];
  return (
    <Section blok={blok}>
      <Container className='flex max-w-3xl flex-wrap items-start gap-4'>
        {theImages &&
          theImages.map(({ filename, alt, width, height, name }, index) => (
            <div key={index} className='overflow-hidden rounded-lg'>
              <Image
                src={filename}
                alt={alt}
                width={Math.floor(width)}
                height={height}
              />
              {name && (
                <div className='flex items-center gap-x-4 bg-card px-4 py-2 text-left text-sm text-card-foreground'>
                  <Camera className='shrink-0' size='20' /> {name}
                </div>
              )}
            </div>
          ))}
      </Container>
    </Section>
  );
};

export default ImageSection;
