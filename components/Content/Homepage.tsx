import {
  storyblokEditable,
  StoryblokServerComponent,
} from '@storyblok/react/rsc';
import { PageStoryblok } from '@/component-types-sb';
import HeroWrap from '../Shared/HeroWrap';
import SectionBuilder from '../Shared/SectionBuilder';

const Homepage = ({ blok }: PageStoryblok) => {
  const { title, animated_title, subheading, buttons, image, body } = blok;
  return (
    <HeroWrap
      type='home'
      {...{ title, animated_title, buttons, subheading, image }}
    >
      <main {...storyblokEditable(blok)}>
        <SectionBuilder body={body} />
      </main>
    </HeroWrap>
  );
};

export default Homepage;
