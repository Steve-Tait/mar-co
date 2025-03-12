import { storyblokEditable } from '@storyblok/react';
import MenuLink from '../Block/MenuLink';
import { MenuSectionStoryblok } from '@/component-types-sb';
import Heading from '../Shared/Heading';

export default function MenuSectionFooter({
  blok,
  ...props
}: {
  blok: MenuSectionStoryblok;
}) {
  const { heading, items } = blok;
  return (
    <div {...storyblokEditable({ blok })} {...props}>
      {heading && <Heading level={5} className='mb-2' heading={heading} />}

      {items && (
        <div className='flex flex-col gap-1'>
          {items.map((nestedBlok) => (
            <MenuLink
              blok={nestedBlok}
              key={nestedBlok._uid}
              className='underline decoration-transparent underline-offset-4 duration-200 hover:decoration-pink hover:underline-offset-2'
            />
          ))}
        </div>
      )}
    </div>
  );
}
