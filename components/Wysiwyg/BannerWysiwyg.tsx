import { BannerWysiwygStoryblok } from '@/component-types-sb';
import { render } from 'storyblok-rich-text-react-renderer';

const BannerWysiwyg = ({ blok }: { blok: BannerWysiwygStoryblok }) => {
  const { background, richtext } = blok;

  return (
    <div
      className={`bg-${background} relative py-8 before:absolute before:left-1/2 before:top-0 before:block before:h-full before:w-screen before:-translate-x-1/2 before:bg-inherit md:col-span-8 md:col-start-3 md:py-12 lg:py-16 xl:py-24`}
    >
      {richtext && (
        <div className='prose prose-invert relative lg:prose-lg'>
          {render(richtext)}
        </div>
      )}
    </div>
  );
};

export default BannerWysiwyg;
