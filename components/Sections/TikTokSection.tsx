import Container from '@/components/Shared/Container';
import Section from '../Shared/Section';
import SectionWrap from '../Shared/SectionWrap';
import { TiktokSectionStoryblok } from '@/component-types-sb';

async function getFeed() {
  return null;
  const res = await fetch(
    'https://www.tiktok.com/oembed?url=https://www.tiktok.com/@marco.digital.marketing'
  );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

const TikTokSection = async ({ blok }: { blok: TiktokSectionStoryblok }) => {
  const { eyebrow, heading, body } = blok;
  const data = await getFeed();
  return (
    <Section blok={blok}>
      <Container className='max-w-4xl'>
        <SectionWrap {...{ eyebrow, heading, body }} className='text-center'>
          {data?.html && (
            <div
              className='mx-auto max-w-[780px] overflow-hidden rounded-2xl [&>blockquote]:!m-0'
              dangerouslySetInnerHTML={{ __html: data.html }}
            />
          )}
        </SectionWrap>
      </Container>
    </Section>
  );
};
export default TikTokSection;
