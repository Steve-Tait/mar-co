import {
  storyblokEditable,
  StoryblokServerComponent,
} from '@storyblok/react/rsc';
import { PageStoryblok } from '@/component-types-sb';
import HeroWrap from '../Shared/HeroWrap';

const Homepage = ({ blok }: PageStoryblok) => {
  const { title, animated_title, subheading, buttons, image, body } = blok;
  return (
    <HeroWrap
      type='home'
      {...{ title, animated_title, buttons, subheading, image }}
    >
      <main {...storyblokEditable(blok)}>
        {body &&
          body.map((nestedBlok: any, index: number) => (
            <StoryblokServerComponent blok={nestedBlok} key={index} />
          ))}
      </main>
    </HeroWrap>
  );
};

export default Homepage;
