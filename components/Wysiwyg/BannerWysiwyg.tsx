import { BannerWysiwygStoryblok } from '@/component-types-sb';
import { render } from 'storyblok-rich-text-react-renderer';
import Container from '../Shared/Container';
import RichText from '../Block/RichText';

const BannerWysiwyg = ({ blok }: { blok: BannerWysiwygStoryblok }) => {
  const { background = 'purple', richtext } = blok;
  if (!richtext) return;
  return (
    <div
      className={`bg-${background} dark relative py-8 md:py-12 lg:py-16 xl:py-24`}
    >
      <Container>
        <RichText
          className='prose relative max-w-prose lg:prose-lg'
          content={richtext}
        />
      </Container>
    </div>
  );
};

export default BannerWysiwyg;
