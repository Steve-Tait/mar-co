import Container from '@/components/Shared/Container';
import Section from '../Shared/Section';
import SectionWrap from '../Shared/SectionWrap';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import { getImageDimensionsFromUrl } from '@/lib/utils';
import { LogoCarouselSectionStoryblok } from '@/component-types-sb';

const LogoCarouselSection = ({
  blok,
}: {
  blok: LogoCarouselSectionStoryblok;
}) => {
  const { eyebrow, heading, body, logos } = blok;
  const images = logos.map((image) => {
    const dimensions = getImageDimensionsFromUrl(image.filename);
    const scaleFactor = dimensions[0] / dimensions[1];
    return {
      width: dimensions[0] * scaleFactor,
      height: 160,
      filename: image.filename,
      alt: image.alt || image.title || '',
    };
  });
  return (
    <Section blok={blok}>
      <Container>
        <SectionWrap {...{ eyebrow, heading, body }}>
          {images && (
            <Carousel
              className='relative overflow-hidden'
              opts={{
                dragFree: true,
                loop: true,
                slidesToScroll: 'auto',
              }}
            >
              <CarouselContent className='gap-x-4'>
                {images.map((image, index) => (
                  <CarouselItem
                    className='min-w-0 max-w-full shrink-0 grow-0 basis-auto'
                    key={index}
                  >
                    <Image
                      src={image.filename}
                      alt={image.alt}
                      width={Math.floor(image.width)}
                      height={image.height}
                      className='h-40 w-auto'
                    ></Image>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          )}
        </SectionWrap>
      </Container>
    </Section>
  );
};

export default LogoCarouselSection;
