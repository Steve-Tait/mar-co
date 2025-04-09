import React from 'react';
import { CaseStudyStoryblok } from '@/component-types-sb';
import { getCaseStudies } from '@/lib/storyblok';
import TileCaseStudy from './TileCaseStudy';
import Heading from './Heading';

type TArticlesGrid = {
  caseStudies?: CaseStudyStoryblok[];
  industry?: string[];
  limit?: number;
  toExclude?: string;
};

const CaseStudies = async ({
  caseStudies = [],
  industry = [],
  limit,
  toExclude = '',
  ...props
}: TArticlesGrid) => {
  if (!caseStudies?.length) {
    caseStudies = await getCaseStudies(industry, limit, toExclude);
  }

  if (!caseStudies?.length)
    return (
      <Heading
        className='text-center'
        level={6}
        heading='Sorry, no results found'
      />
    );

  return (
    <div
      className='no-scrollbar grid snap-x snap-mandatory auto-cols-[minmax(75vw,_1fr)] grid-flow-col gap-4 overflow-x-auto overflow-y-clip sm:grid-flow-row sm:grid-cols-2 sm:gap-8 lg:grid-cols-3'
      {...props}
    >
      {caseStudies.map((caseStudy) => (
        <TileCaseStudy
          caseStudy={{ ...caseStudy.content, slug: caseStudy.slug }}
          key={caseStudy.uuid}
        />
      ))}
    </div>
  );
};
export default CaseStudies;
