import { storyblokEditable } from '@storyblok/react/rsc';
import { PageStoryblok } from '@/component-types-sb';
import HeroWrap from '../Shared/HeroWrap';
import SectionBuilder from '../Shared/SectionBuilder';
import HeroSecondary from '../Shared/HeroSecondary';

const Page = ({ blok }: PageStoryblok) => {
  const { title, excerpt, image, button, type, body } = blok;

  return (
    <main {...storyblokEditable(blok)}>
      {type === 'primary' ? (
        <HeroWrap {...{ title, excerpt, image, button }}>
          <SectionBuilder body={body} />
        </HeroWrap>
      ) : (
        <>
          <HeroSecondary {...{ title, excerpt, image, button }} />
          <SectionBuilder body={body} />
        </>
      )}
    </main>
  );
};

export default Page;
