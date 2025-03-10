import {
  TestimonialStoryblok,
  TestimonialWysiwygStoryblok,
} from '@/component-types-sb';
import Testimonial from '../Block/Testimonial';
import Container from '../Shared/Container';

type TTestimonialWysiwygStoryblokWithRelations = TestimonialWysiwygStoryblok & {
  testimonial: TestimonialStoryblok;
};

const TestimonialWysiwyg = ({
  blok,
}: TTestimonialWysiwygStoryblokWithRelations) => {
  const { testimonial } = blok;
  return (
    <div className='theme--muted bg-background py-8 text-foreground'>
      <Container className='max-w-5xl'>
        <Testimonial blok={testimonial.content} />
      </Container>
    </div>
  );
};

export default TestimonialWysiwyg;
