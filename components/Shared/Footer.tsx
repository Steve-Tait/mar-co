import { storyblokEditable } from '@storyblok/react';
import Container from '@/components/Shared/Container';
import { render } from 'storyblok-rich-text-react-renderer';
import MenuSectionFooter from '../Content/MenuSectionFooter';
import { FooterStoryblok, MenuSectionStoryblok } from '@/component-types-sb';
import RichText from '../Block/RichText';

export default function Footer({ blok }: { blok: FooterStoryblok }) {
  const { menu, body } = blok;
  return (
    <footer
      className='py-10 text-center sm:text-left'
      {...storyblokEditable(blok)}
    >
      <Container className='flex flex-col gap-8'>
        <div className='sm:align-center flex flex-col items-center gap-8 sm:flex-row sm:justify-start'>
          {body && <RichText className='text-lg' content={body} />}
        </div>
        {menu && (
          <div className='grid-cols-auto grid grid-flow-col'>
            {menu.map((nestedBlok: MenuSectionStoryblok) => (
              <MenuSectionFooter blok={nestedBlok} key={nestedBlok._uid} />
            ))}
          </div>
        )}

        <div className='self-end whitespace-nowrap text-4xl font-bold'>
          MAR-CO<span className='text-secondary'>.</span>
        </div>
        <div>&copy; Copyright {new Date().getFullYear()} MAR-CO</div>
      </Container>
    </footer>
  );
}
