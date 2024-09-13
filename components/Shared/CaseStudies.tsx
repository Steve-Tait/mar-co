import React from 'react';
import { CaseStudyStoryblok } from '@/component-types-sb';
import { getCaseStudies } from '@/lib/storyblok';
import TileCaseStudy from './TileCaseStudy';

type TArticlesGrid = {
  caseStudies?: CaseStudyStoryblok[];
  categories?: string[];
  limit?: number;
  toExclude?: string;
};

const CaseStudies = async ({
  caseStudies = [],
  limit,
  toExclude = '',
  ...props
}: TArticlesGrid) => {
  if (!caseStudies?.length) {
    caseStudies = await getCaseStudies(limit, toExclude);
  }
  return (
    <div
      className='no-scrollbar grid snap-x snap-mandatory auto-cols-[minmax(75vw,_1fr)] grid-flow-col gap-4 overflow-x-auto sm:grid-flow-row sm:grid-cols-2 sm:gap-8 lg:grid-cols-3'
      {...props}
    >
      {caseStudies.map((caseStudy) => (
        <TileCaseStudy caseStudy={caseStudy.content} key={caseStudy.uuid} />
      ))}
    </div>
  );
};
export default CaseStudies;
