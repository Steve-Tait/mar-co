import { storyblokEditable } from '@storyblok/react';
import Container from '@/components/Shared/Container';
import { render } from 'storyblok-rich-text-react-renderer';
import MenuSectionFooter from '../Content/MenuSectionFooter';
import { FooterStoryblok, MenuSectionStoryblok } from '@/component-types-sb';

export default function Footer({ blok }: { blok: FooterStoryblok }) {
  const { menu, body } = blok;
  return (
    <footer
      className='bg-purple-700 py-10 text-center text-white sm:text-left'
      {...storyblokEditable(blok)}
    >
      <Container className='flex flex-col gap-8'>
        <div className='sm:align-center flex flex-col items-center gap-8 sm:flex-row sm:justify-start '>
          <div className='whitespace-nowrap text-4xl font-black'>
            MAR-CO<span className='text-pink'>.</span>
          </div>
          {body && (
            <div className='text-lg [&_a]:text-pink'>{render(body)}</div>
          )}
        </div>
        {menu && (
          <div className='grid-cols-auto grid grid-flow-col'>
            {menu.map((nestedBlok: MenuSectionStoryblok) => (
              <MenuSectionFooter blok={nestedBlok} key={nestedBlok._uid} />
            ))}
          </div>
        )}

        <hr className='opacity-20' />
        <div>&copy; Copyright {new Date().getFullYear()} MAR-CO</div>
      </Container>
    </footer>
  );
}
