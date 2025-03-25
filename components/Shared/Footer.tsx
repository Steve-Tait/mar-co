import { storyblokEditable } from '@storyblok/react';
import Container from '@/components/Shared/Container';
import MenuSectionFooter from '../Content/MenuSectionFooter';
import { FooterStoryblok, MenuSectionStoryblok } from '@/component-types-sb';
import RichText from '../Block/RichText';
import SocialLink from './SocialLink';
import { isRichTextPopulated } from '@/lib/utils';
import Link from 'next/link';

export default function Footer({ blok }: { blok: FooterStoryblok }) {
  const { menu, body, linkedin, mandatories } = blok;
  return (
    <footer className='text-center sm:text-left' {...storyblokEditable(blok)}>
      <Container className='flex flex-col gap-8 py-10'>
        <div className='grid grid-cols-1 gap-8 sm:grid-cols-3'>
          <div className='flex flex-col items-center justify-between gap-4 sm:items-start'>
            <Link href='/' className='whitespace-nowrap text-4xl font-bold'>
              MAR-CO<span className='text-secondary'>.</span>
            </Link>
            {linkedin?.url && <SocialLink link={linkedin} />}
          </div>
          {menu && (
            <div className='md:grid-cols-auto grid grid-cols-2 gap-y-8 sm:col-span-2 sm:grid-cols-3 md:grid-flow-col'>
              {menu.map((nestedBlok: MenuSectionStoryblok) => (
                <MenuSectionFooter blok={nestedBlok} key={nestedBlok._uid} />
              ))}
            </div>
          )}
        </div>
        {body && isRichTextPopulated(body) && (
          <div className='sm:align-center flex flex-col items-center gap-8 sm:flex-row sm:justify-start'>
            <RichText className='text-lg' content={body} />
          </div>
        )}
      </Container>
      <div className='bg-purple-900 py-4 text-xs'>
        <Container className='flex flex-col items-center gap-4 sm:flex-row sm:justify-between'>
          <div>
            &copy; Copyright {new Date().getFullYear()} MAR-CO Digital Ltd
            Company <br />
            Company Number 16256681
          </div>
          {mandatories?.length && (
            <nav className='flex flex-wrap items-center gap-4'>
              {mandatories.map(({ link, _uid, label }) => (
                <Link
                  key={_uid}
                  href={link.cached_url || link.url}
                  target={link.target}
                  className='text-white hover:underline'
                >
                  {label}
                </Link>
              ))}
            </nav>
          )}
        </Container>
      </div>
    </footer>
  );
}
