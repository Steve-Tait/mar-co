import { TextWysiwygStoryblok } from '@/component-types-sb';
import Container from '../Shared/Container';
import RichText from '../Block/RichText';

const TextWysiwyg = ({ blok }: TextWysiwygStoryblok) => {
  const { richtext } = blok;
  return (
    <div className='theme--light bg-background py-8 text-foreground md:py-12 xl:py-16'>
      <Container>
        <RichText className='mx-auto' content={richtext} />
      </Container>
    </div>
  );
};

export default TextWysiwyg;
