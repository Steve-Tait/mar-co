import Footer from './Footer';
import Header from './Header';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
} from '@/components/ui/drawer';
import Heading from './Heading';
import { ReactNode } from 'react';
import { FooterStoryblok, HeaderStoryblok } from '@/component-types-sb';
import ContactForm from './ContactForm';
import { getConfig } from '@/lib/storyblok';
import LayoutScaler from './LayoutScaler';

export default async function Layout({ children }: { children: ReactNode }) {
  const config = await getConfig();
  const { header, footer } = config?.content || {};
  return (
    <Drawer>
      {header &&
        header.map((nestedBlok: HeaderStoryblok) => (
          <Header blok={nestedBlok} key={nestedBlok.uuid} />
        ))}

      <LayoutScaler>{children}</LayoutScaler>
      <DrawerContent>
        <div className='mx-auto w-full max-w-lg px-6'>
          <DrawerHeader>
            <Heading heading='Contact Us' level={3} />
            <DrawerDescription>
              Register to receive monthly updates.
            </DrawerDescription>
          </DrawerHeader>
          <ContactForm />
          <DrawerFooter>
            <DrawerClose asChild>Close</DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
      {footer &&
        footer.map((nestedBlok: FooterStoryblok) => (
          <Footer blok={nestedBlok} key={nestedBlok._uid} />
        ))}
    </Drawer>
  );
}
