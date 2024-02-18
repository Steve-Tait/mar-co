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
import { ConfigStoryblok, HeaderStoryblok } from '@/component-types-sb';
import ContactForm from './ContactForm';

type Props = {
  children: ReactNode;
  blok: ConfigStoryblok;
};

const Layout = ({ children, blok }: Props) => {
  const { header, footer } = blok;
  return (
    <Drawer>
      {header &&
        header.map((nestedBlok: HeaderStoryblok) => (
          <Header blok={nestedBlok} key={nestedBlok.uuid} />
        ))}
      {children}

      <DrawerContent>
        <div className='mx-auto w-full max-w-lg px-6'>
          <DrawerHeader>
            <Heading heading='Contact Us' level={2} />
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
        footer.map((nestedBlok) => (
          <Footer
            blok={nestedBlok}
            key={nestedBlok._uid}
            component={'footer'}
            _uid={''}
          />
        ))}
    </Drawer>
  );
};

export default Layout;
