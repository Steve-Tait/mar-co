import Footer from './Footer';
import Header from './Header';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';
import Heading from './Heading';
import { ReactNode } from 'react';
import {
  CookieConsentStoryblok,
  FooterStoryblok,
  HeaderStoryblok,
} from '@/component-types-sb';
import ContactForm from './ContactForm';
import { getConfig } from '@/lib/storyblok';
import Scroll from './Scroll';
import CookieConsentBanner from './CookieConsentBanner';

export default async function Layout({ children }: { children: ReactNode }) {
  const config = await getConfig();
  const { header, footer, cookie, contact } = config?.content || {};
  return (
    <>
      <Scroll root>
        <Drawer>
          {header &&
            header.map((nestedBlok: HeaderStoryblok) => (
              <Header blok={nestedBlok} key={nestedBlok._uid} />
            ))}

          {children}
          {footer &&
            footer.map((nestedBlok: FooterStoryblok) => (
              <Footer
                blok={nestedBlok}
                key={nestedBlok._uid}
                contact={contact?.[0]}
              />
            ))}
          <DrawerContent>
            <div className='mx-auto w-full max-w-lg px-6'>
              <ContactForm>
                <DrawerHeader>
                  <DrawerTitle asChild>
                    <Heading heading='Get in touch with us' level={3} />
                  </DrawerTitle>
                  <DrawerDescription>
                    Fill in the form below and we will contact you within 24
                    hours.
                  </DrawerDescription>
                </DrawerHeader>
              </ContactForm>
              <DrawerFooter>
                <DrawerClose asChild>Close</DrawerClose>
              </DrawerFooter>
            </div>
          </DrawerContent>
        </Drawer>
      </Scroll>
      {cookie &&
        cookie.map((nestedBlok: CookieConsentStoryblok) => (
          <CookieConsentBanner key={nestedBlok._uid} blok={nestedBlok} />
        ))}
    </>
  );
}
