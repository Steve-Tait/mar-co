import { TextWysiwygStoryblok } from '@/component-types-sb';
import Container from '../Shared/Container';
import RichText from '../Block/RichText';

const TextWysiwyg = ({ blok }: TextWysiwygStoryblok) => {
  const { richtext } = blok;
  return (
    <div className='theme--light bg-background py-8 text-foreground md:py-12 lg:py-16 xl:py-24'>
      <Container>
        <RichText
          className='prose max-w-prose lg:prose-lg'
          content={richtext}
        />
      </Container>
    </div>
  );
};

export default TextWysiwyg;
