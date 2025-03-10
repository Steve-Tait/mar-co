import Image from 'next/image';
import Parallax from '../Shared/Parallax';
import { FullWidthImageSectionStoryblok } from '@/component-types-sb';

const FullWidthImageSection = ({ blok }: FullWidthImageSectionStoryblok) => {
  const { image } = blok;
  return (
    <Parallax className='aspect-video'>
      <Image
        src={image.filename}
        alt={image.alt ?? ''}
        fill
        className='object-cover'
      />
    </Parallax>
  );
};

export default FullWidthImageSection;
