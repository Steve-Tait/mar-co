import { ButtonStoryblok } from '@/component-types-sb';
import Link from 'next/link';
import { DrawerTrigger } from '../ui/drawer';

const Button = ({ blok, ...props }: { blok: ButtonStoryblok }) => {
  const { link, label, variant = 'pink', form_trigger } = blok || {};
  if (form_trigger) {
    return (
      <DrawerTrigger className={`btn btn--${variant}`}>{label}</DrawerTrigger>
    );
  }
  switch (link?.linktype) {
    case 'story':
      return (
        <Link
          href={link.url}
          className={`btn btn--${variant}`}
          target={link.target}
          {...props}
        >
          {label}
        </Link>
      );
    case 'email':
      return (
        <a
          href={`mailto:${link.email}`}
          className={`btn btn--${variant}`}
          {...props}
        >
          {label}
        </a>
      );
    case 'url':
      return (
        <a
          href={link.url}
          className={`btn btn--${variant}`}
          target={link.target}
          {...props}
        >
          {label}
        </a>
      );
  }
};
export default Button;
