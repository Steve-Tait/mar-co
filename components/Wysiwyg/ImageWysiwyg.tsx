import { ImageWysiwygStoryblok } from '@/component-types-sb';
import Container from '../Shared/Container';
import { Camera } from 'lucide-react';

const ImageWysiwyg = ({ blok }: { blok: ImageWysiwygStoryblok }) => {
  const { image, caption } = blok;
  if (!image) return;
  return (
    <div className='theme--light bg-background py-8 text-foreground md:py-12 xl:py-16'>
      <Container className='theme--light text-center'>
        <div className='inline-block max-w-full overflow-hidden rounded-xl'>
          <img
            className='block'
            src={image.filename}
            alt={image.alt || image.title || ''}
          />
          {caption && (
            <div className='flex items-center gap-x-4 bg-purple-700 px-4 py-2 text-left text-sm text-white'>
              <Camera className='shrink-0' size='20' /> {caption}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default ImageWysiwyg;
