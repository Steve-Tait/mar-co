import Section from '../Shared/Section';
import Container from '../Shared/Container';
import { Suspense } from 'react';
import Link from 'next/link';
import Heading from '../Shared/Heading';
import { IndustryOverviewStoryblok } from '@/component-types-sb';
import { getIndustries } from '@/lib/storyblok';
import SkeletonGrid from '../Shared/SkeletonGrid';
import HeroWrap from '../Shared/HeroWrap';
import SectionBuilder from '../Shared/SectionBuilder';
import CaseStudies from '../Shared/CaseStudies';

const IndustryOverview = async ({
  blok,
  searchParams,
}: IndustryOverviewStoryblok) => {
  const industries = await getIndustries();
  const { heading, description, image, body } = blok;
  return (
    <HeroWrap
      title={heading ?? 'Industries'}
      excerpt={description}
      image={image}
    >
      <Section>
        <Container className='grid grid-cols-1 gap-8 md:grid-cols-3 md:items-start lg:grid-cols-4'>
          <aside className='rounded-2xl bg-primary p-6 text-primary-foreground md:sticky md:top-28'>
            <Heading heading='Sort by' level={4} />
            <ul>
              {industries.map((industry) => (
                <li key={industry.content.slug}>
                  <Link
                    href={`?${new URLSearchParams({ id: industry.uuid })}`}
                    replace
                    scroll={false}
                    className={
                      searchParams?.id && industry.uuid === searchParams.id
                        ? 'font-bold'
                        : ''
                    }
                  >
                    {industry.content.name}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
          <div className='md:col-span-2 lg:col-span-3'>
            <Suspense fallback={<SkeletonGrid tiles={3} />}>
              <CaseStudies industry={searchParams?.id && [searchParams.id]} />
            </Suspense>
          </div>
        </Container>
      </Section>
      <SectionBuilder body={body} />
    </HeroWrap>
  );
};

export default IndustryOverview;
