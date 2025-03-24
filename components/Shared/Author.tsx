import React from 'react';
import Image from 'next/image';
import { AuthorStoryblok } from '@/component-types-sb';
import Heading from './Heading';
import { Linkedin } from 'lucide-react';
import Container from '../Shared/Container';

type TWysiwyg = {
  author: AuthorStoryblok;
  className?: string;
};

export default function Author({ author, className = '', ...props }: TWysiwyg) {
  const { name, avatar, description, linkedin } = author || {};
  if (!name) return;
  return (
    <div className='theme--light bg-background py-8 text-foreground md:py-12 xl:py-16'>
      <Container>
        <div className='mx-auto flex max-w-prose flex-col items-center gap-x-12 gap-y-4 rounded-lg bg-card p-4 text-center text-lg text-card-foreground sm:flex-row sm:items-start sm:p-8 sm:text-left'>
          {avatar?.filename && (
            <Image
              className='aspect-square size-32 shrink-0 rounded-full object-cover'
              src={avatar?.filename || ''}
              alt={name || 'Author Avatar'}
              width={128}
              height={128}
            />
          )}
          <div className='flex flex-col items-center gap-y-1 sm:items-start'>
            <p className='eyebrow'>About the Author</p>
            {name && <Heading className='mb-2' level={5} heading={name} />}
            {description && <p>{description}</p>}
            {linkedin?.url && (
              <a
                className='mt-4 h-8 w-8 shrink-0 rounded-full border border-secondary p-1.5 text-secondary transition-colors hover:bg-secondary hover:text-white'
                href={linkedin.url}
                target='_blank'
                rel='noopener noreferrer'
              >
                <Linkedin className='size-full' />
              </a>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
