import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';
import Hero from '../Shared/Hero';
import { PageStoryblok } from '@/component-types-sb';

const Page = ({ blok }: PageStoryblok) => {
  const { title, excerpt, image, body } = blok;
  return (
    <main {...storyblokEditable(blok)}>
      <Hero {...{ title, excerpt, image }} />
      {body &&
        body.map((nestedBlok: any) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok.uuid} />
        ))}
    </main>
  );
};

export default Page;
