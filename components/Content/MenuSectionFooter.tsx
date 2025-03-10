import { storyblokEditable } from '@storyblok/react';
import MenuLink from '../Block/MenuLink';
import { MenuSectionStoryblok } from '@/component-types-sb';

export default function MenuSectionFooter({
  blok,
  ...props
}: {
  blok: MenuSectionStoryblok;
}) {
  const { heading, items } = blok;
  return (
    <div {...storyblokEditable({ blok })} {...props}>
      {heading && (
        <p className='mb-2 text-lg font-bold'>
          {blok.heading}
          <span className='text-eyebrow'>.</span>
        </p>
      )}

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
