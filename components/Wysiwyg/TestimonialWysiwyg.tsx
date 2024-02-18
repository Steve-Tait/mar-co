import {
  TestimonialStoryblok,
  TestimonialWysiwygStoryblok,
} from '@/component-types-sb';
import Testimonial from '../Block/Testimonial';

type TTestimonialWysiwygStoryblokWithRelations = TestimonialWysiwygStoryblok & {
  testimonial: TestimonialStoryblok;
};

const TestimonialWysiwyg = ({
  blok,
}: TTestimonialWysiwygStoryblokWithRelations) => {
  const { testimonial } = blok;
  return (
    <div className='md:col-span-8 md:col-start-3'>
      <Testimonial blok={testimonial.content} />
    </div>
  );
};

export default TestimonialWysiwyg;
