'use client';
import { useEffect, useState } from 'react';
import {
  ButtonStoryblok,
  HeaderStoryblok,
  MenuSectionStoryblok,
} from '@/component-types-sb';
import { storyblokEditable } from '@storyblok/react/rsc';
import Container from './Container';
import MenuSectionHeader from '../Content/MenuSectionHeader';
import Button from '../Block/Button';
import Link from 'next/link';
import { NavigationMenu, NavigationMenuList } from '../ui/navigation-menu';

export default function Header({ blok }: { blok: HeaderStoryblok }) {
  const { menu, buttons } = blok;
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () =>
        setHasScrolled(window.scrollY > 100)
      );
    }
  }, []);

  return (
    <header
      className={`${hasScrolled ? 'bg-purple py-3' : 'py-6'} fixed inset-x-0 top-0 z-30 text-white duration-200`}
      {...storyblokEditable(blok)}
    >
      <Container className='flex items-center gap-x-8'>
        <Link
          href='/'
          className='whitespace-nowrap font-heading text-2xl font-bold sm:text-4xl'
        >
          MAR-CO<span className='text-pink'>.</span>
        </Link>
        <NavigationMenu className='grow'>
          <NavigationMenuList>
            {menu && (
              <div className='grid-cols-auto grid grid-flow-col gap-x-4'>
                {menu.map((nestedBlok: MenuSectionStoryblok) => (
                  <MenuSectionHeader blok={nestedBlok} key={nestedBlok._uid} />
                ))}
              </div>
            )}
          </NavigationMenuList>
        </NavigationMenu>
        {buttons && (
          <div className='ml-auto'>
            {buttons.map((nestedBlok: ButtonStoryblok) => (
              <Button blok={nestedBlok} key={nestedBlok._uid} />
            ))}
          </div>
        )}
      </Container>
    </header>
  );
}
