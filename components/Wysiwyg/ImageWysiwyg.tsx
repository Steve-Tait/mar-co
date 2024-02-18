import { ImageWysiwygStoryblok } from '@/component-types-sb';

const ImageWysiwyg = ({ blok }: { blok: ImageWysiwygStoryblok }) => {
  const { image, caption } = blok;
  return (
    <div className='md:col-span-12'>
      {image && (
        <div className='inline-block max-w-full overflow-hidden rounded-xl'>
          <img
            className='block'
            src={image.filename}
            alt={image.alt || image.title || ''}
          />
          {caption && (
            <div className='bg-purple-700 px-4 py-2 text-sm text-white'>
              {caption}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ImageWysiwyg;
