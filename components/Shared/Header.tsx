'use client';
import { useEffect, useState } from 'react';
import {
  ButtonStoryblok,
  HeaderStoryblok,
  MenuLinkStoryblok,
  MenuSectionStoryblok,
} from '@/component-types-sb';
import { storyblokEditable } from '@storyblok/react/rsc';
import Container from './Container';
import MenuSectionHeader from '../Content/MenuSectionHeader';
import Button from '../Block/Button';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '../ui/navigation-menu';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { useLenis } from './SmoothScroller';
import Hamburger from './Hamburger';
import Scroll from './Scroll';
import React from 'react';
import MenuLinkHeader from '../Content/MenuLink';

export default function Header({ blok }: { blok: HeaderStoryblok }) {
  const { menu, buttons } = blok;
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const lenis = useLenis();
  useEffect(() => {
    if (!lenis) return;
    isOpen ? lenis.stop() : lenis.start();
  }, [isOpen]);

  const updateScroll = () => setHasScrolled(window.scrollY > 100);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', updateScroll);
      return () => window.removeEventListener('scroll', updateScroll);
    }
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-30 text-white duration-300',
        hasScrolled ? 'bg-purple py-3 drop-shadow sm:py-6' : 'py-4 sm:py-10'
      )}
      {...storyblokEditable(blok)}
    >
      <Container className='flex items-center justify-between gap-x-8'>
        <Link
          href='/'
          className='whitespace-nowrap font-heading text-2xl font-bold sm:text-4xl'
        >
          MAR-CO<span className='text-pink'>.</span>
        </Link>
        <div className='hidden grow items-center justify-between gap-x-8 md:flex'>
          <NavigationMenu className='grow'>
            <NavigationMenuList>
              {menu && (
                <div className='grid-cols-auto grid grid-flow-col gap-x-4'>
                  {menu.map((nestedBlok) => (
                    <React.Fragment key={nestedBlok._uid}>
                      {nestedBlok.items ? (
                        <MenuSectionHeader
                          blok={nestedBlok as MenuSectionStoryblok}
                        />
                      ) : (
                        <MenuLinkHeader
                          blok={nestedBlok as MenuLinkStoryblok}
                        />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              )}
            </NavigationMenuList>
          </NavigationMenu>
          {buttons &&
            buttons.map((nestedBlok: ButtonStoryblok) => (
              <Button size='sm' blok={nestedBlok} key={nestedBlok._uid} />
            ))}
        </div>
        {menu && (
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className='md:hidden'>
              <Hamburger isOpen={isOpen} />
            </SheetTrigger>
            <SheetContent side='left'>
              <Scroll className='max-h-full'>
                <nav className='flex flex-col gap-y-6 text-left text-primary-foreground'>
                  {menu.map((nestedBlok) => (
                    <React.Fragment key={nestedBlok._uid}>
                      {nestedBlok.items ? (
                        <div className='flex flex-col gap-y-2'>
                          <p className='text-xl font-bold underline decoration-secondary decoration-2 underline-offset-4'>
                            {nestedBlok.heading}
                          </p>
                          {nestedBlok.items &&
                            nestedBlok.items.map((item: MenuLinkStoryblok) => (
                              <Link
                                key={item._uid}
                                title={item.label}
                                href={`/${item.link.cached_url}`}
                              >
                                {item?.label}
                              </Link>
                            ))}
                        </div>
                      ) : (
                        <Link
                          title={nestedBlok.label}
                          href={`/${nestedBlok.link.cached_url}`}
                        >
                          {nestedBlok.label}
                        </Link>
                      )}
                    </React.Fragment>
                  ))}
                </nav>
              </Scroll>
            </SheetContent>
          </Sheet>
        )}
      </Container>
    </header>
  );
}
