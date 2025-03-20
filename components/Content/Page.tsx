import { storyblokEditable } from '@storyblok/react/rsc';
import { PageStoryblok } from '@/component-types-sb';
import HeroWrap from '../Shared/HeroWrap';
import SectionBuilder from '../Shared/SectionBuilder';

const Page = ({ blok }: PageStoryblok) => {
  const { title, excerpt, image, button, body } = blok;
  return (
    <main {...storyblokEditable(blok)}>
      <HeroWrap {...{ title, excerpt, image, button }}>
        <SectionBuilder body={body} />
      </HeroWrap>
    </main>
  );
};

export default Page;
