import React from 'react';
import { CaseStudyStoryblok } from '@/component-types-sb';
import { getCaseStudies } from '@/lib/storyblok';
import TileCaseStudy from './TileCaseStudy';

type TCaseStudiesCarousel = {
  caseStudies?: CaseStudyStoryblok[];
  categories?: string[];
  limit?: number;
  toExclude?: string;
};

const CaseStudiesCarousel = async ({
  caseStudies = [],
  categories = [],
  limit,
  toExclude = '',
  ...props
}: TCaseStudiesCarousel) => {
  if (!caseStudies?.length) {
    caseStudies = await getCaseStudies(limit, toExclude);
  }
  return (
    <div
      className='no-scrollbar grid snap-x snap-mandatory auto-cols-[minmax(75vw,_1fr)] grid-flow-col gap-4 overflow-x-auto sm:grid-flow-row sm:grid-cols-2 sm:gap-8 lg:grid-cols-3'
      {...props}
    >
      {caseStudies.map((caseStudy, index) => (
        <TileCaseStudy
          caseStudy={caseStudy.content}
          index={index}
          key={caseStudy.uuid}
        />
      ))}
    </div>
  );
};
export default CaseStudiesCarousel;
