import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';
import { PageStoryblok } from '@/component-types-sb';
import HeroHome from '../Shared/HeroHome';

const Homepage = ({ blok }: PageStoryblok) => {
  const { title, animated_title, subheading, excerpt, image, body } = blok;
  return (
    <>
      <HeroHome {...{ title, animated_title, subheading, excerpt, image }} />
      <main {...storyblokEditable(blok)}>
        {body &&
          body.map((nestedBlok: any, index: number) => (
            <StoryblokComponent blok={nestedBlok} key={index} />
          ))}
      </main>
    </>
  );
};

export default Homepage;
