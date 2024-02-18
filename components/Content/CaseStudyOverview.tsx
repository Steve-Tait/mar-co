import { CaseStudyOverviewStoryblok } from '@/component-types-sb';
import { getCaseStudies } from '@/lib/storyblok';
import Link from 'next/link';

const CaseStudiesOverview = async ({ blok }: CaseStudyOverviewStoryblok) => {
  const caseStudies = await getCaseStudies();
  return (
    <div>
      <h1>{blok.heading}</h1>
      {caseStudies[0] &&
        caseStudies.map((caseStudy) => (
          <article
            className='rounded bg-white p-4 text-black'
            key={caseStudy.uuid}
          >
            <h3>{caseStudy.content.title}</h3>
            <Link href={caseStudy.full_slug}>View article</Link>
          </article>
        ))}
    </div>
  );
};

export default CaseStudiesOverview;
