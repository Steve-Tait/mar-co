import { MenuLinkStoryblok } from '@/component-types-sb';
import { storyblokEditable } from '@storyblok/react/rsc';
import Link from 'next/link';

interface MenuLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  blok: MenuLinkStoryblok;
}

export default function MenuLink({ blok, ...props }: MenuLinkProps) {
  const { label, link } = blok;
  return (
    <Link href={`/${link.cached_url}`} {...storyblokEditable(blok)} {...props}>
      {label}
    </Link>
  );
}
