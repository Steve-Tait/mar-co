'use client';
import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

import {
  HeaderStoryblok,
  MenuLinkStoryblok,
  MenuSectionStoryblok,
} from '@/component-types-sb';
import { storyblokEditable } from '@storyblok/react/rsc';
import MenuSectionHeader from '../Content/MenuSectionHeader';
import Link from 'next/link';
import { NavigationMenu, NavigationMenuList } from '../ui/navigation-menu';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { useLenis } from './SmoothScroller';
import Hamburger from './Hamburger';
import Scroll from './Scroll';
import React from 'react';
import MenuLinkHeader from '../Content/MenuLink';
import ButtonGroup from './ButtonGroup';
import { Phone } from 'lucide-react';

export default function Header({ blok }: { blok: HeaderStoryblok }) {
  const { menu, buttons, phone } = blok;
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
      updateScroll();
      window.addEventListener('scroll', updateScroll);
      return () => window.removeEventListener('scroll', updateScroll);
    }
  }, []);

  const pathname = usePathname();
  const searchParams = useSearchParams();
  useEffect(() => {
    setIsOpen(false);
  }, [pathname, searchParams]);

  return (
    <header
      className={cn(
        'theme--dark fixed inset-x-0 top-0 z-30 px-4 text-foreground duration-300 sm:px-8',
        hasScrolled ? 'bg-background py-3 drop-shadow sm:py-6' : 'py-4 sm:py-10'
      )}
      {...storyblokEditable(blok)}
    >
      <div className='flex items-center justify-between gap-x-5 lg:gap-x-8'>
        <Link
          href='/'
          className='whitespace-nowrap font-heading text-2xl font-bold sm:text-4xl'
        >
          MAR-CO<span className='text-secondary'>.</span>
        </Link>
        <div className='flex grow items-center justify-between gap-x-8'>
          <NavigationMenu className='hidden grow lg:block'>
            <NavigationMenuList>
              {menu && (
                <div className='grid-cols-auto grid grid-flow-col gap-x-4 xl:gap-x-8'>
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
          {phone && (
            <a
              className='group ml-auto inline-flex items-center gap-x-2 transition-colors hover:text-secondary'
              href={`tel:${phone.replace(/\s/g, '')}`}
            >
              <span className='h-8 w-8 shrink-0 rounded-full border border-secondary p-1.5 text-secondary transition-colors group-hover:bg-secondary group-hover:text-white'>
                <Phone className='size-full' />
              </span>
              <span className='hidden xl:block'>{phone}</span>
            </a>
          )}
          <ButtonGroup className='hidden lg:flex' buttons={buttons} size='sm' />
        </div>
        {menu && (
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className='lg:hidden'>
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
      </div>
    </header>
  );
}
