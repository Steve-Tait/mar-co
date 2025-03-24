import { BannerWysiwygStoryblok } from '@/component-types-sb';
import Container from '../Shared/Container';
import RichText from '../Block/RichText';

const BannerWysiwyg = ({ blok }: { blok: BannerWysiwygStoryblok }) => {
  const { background = 'purple', richtext } = blok;
  if (!richtext) return;
  return (
    <div className={`bg-${background} dark relative py-8 md:py-12 xl:py-16`}>
      <Container>
        <RichText className='mx-auto' content={richtext} />
      </Container>
    </div>
  );
};

export default BannerWysiwyg;
