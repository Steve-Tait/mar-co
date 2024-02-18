import { TextWysiwygStoryblok } from '@/component-types-sb';
import { render } from 'storyblok-rich-text-react-renderer';

const TextWysiwyg = ({ blok }: TextWysiwygStoryblok) => {
  const { richtext } = blok;
  return (
    <div className='md:col-span-8 md:col-start-3'>
      <div className='prose lg:prose-lg'>{render(richtext)}</div>
    </div>
  );
};

export default TextWysiwyg;
