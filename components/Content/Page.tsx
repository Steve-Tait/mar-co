import {
  storyblokEditable,
  StoryblokServerComponent,
} from '@storyblok/react/rsc';
import { PageStoryblok } from '@/component-types-sb';
import HeroWrap from '../Shared/HeroWrap';

const Page = ({ blok }: PageStoryblok) => {
  const { title, excerpt, image, button, body } = blok;
  return (
    <main {...storyblokEditable(blok)}>
      <HeroWrap {...{ title, excerpt, image, button }}>
        {body &&
          body.map((nestedBlok: any) => (
            <StoryblokServerComponent blok={nestedBlok} key={nestedBlok.uuid} />
          ))}
      </HeroWrap>
    </main>
  );
};

export default Page;
