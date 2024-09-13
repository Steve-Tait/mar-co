import { storyblokEditable } from '@storyblok/react';
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from '../ui/navigation-menu';
import React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { MenuSectionStoryblok } from '@/component-types-sb';

const MenuSectionHeader = ({
  blok,
  ...props
}: {
  blok: MenuSectionStoryblok;
}) => {
  const { heading, items } = blok;
  return (
    <NavigationMenuItem {...storyblokEditable({ blok })} {...props}>
      {heading && <NavigationMenuTrigger>{heading}</NavigationMenuTrigger>}
      <NavigationMenuContent>
        <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2'>
          {items &&
            items.map((item) => (
              <ListItem
                key={item.label}
                title={item.label}
                href={`/${item.link.cached_url}`}
              >
                {item?.description}
              </ListItem>
            ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, href, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          href={href || ''}
          {...props}
        >
          <div className='text-sm font-black'>{title}</div>
          <p className='line-clamp-2 text-xs leading-snug opacity-90'>
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';

export default MenuSectionHeader;
