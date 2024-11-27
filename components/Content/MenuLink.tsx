import { NavigationMenuLink } from '../ui/navigation-menu';
import React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { MenuLinkStoryblok } from '@/component-types-sb';

const MenuLinkHeader = ({ blok, ...props }: { blok: MenuLinkStoryblok }) => {
  const { link, label } = blok;
  return (
    <NavigationMenuLink asChild>
      <li>
        <Link
          className={cn(
            'relative h-10 w-max py-2 text-sm font-bold uppercase transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-1 after:w-full after:origin-left after:scale-x-0 after:rounded after:bg-secondary after:transition-transform hover:after:scale-x-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50'
          )}
          href={`/${link.cached_url}`}
        >
          {label}
        </Link>
      </li>
    </NavigationMenuLink>
  );
};

export default MenuLinkHeader;
