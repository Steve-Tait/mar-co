'use client';
import { ButtonStoryblok } from '@/component-types-sb';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { DrawerTrigger } from '../ui/drawer';
import { CircleChevronRight, MessageCircleMore } from 'lucide-react';
import { cn } from '@/lib/utils';

const LABEL_CLASS =
  'transition-transform translate-x-3 group-focus:translate-x-0 group-hover:translate-x-0';
const ICON_CLASS =
  '-translate-x-2 opacity-0 transition-[opacity,transform] group-focus:translate-x-0 group-focus:opacity-100 group-hover:translate-x-0 group-hover:opacity-100';

const Button = ({
  blok,
  size,
  ...props
}: {
  blok: ButtonStoryblok;
  size: string;
}) => {
  const { link, label, variant = 'pink', form_trigger } = blok || {};
  if (form_trigger) {
    return (
      <DrawerTrigger
        className={cn(
          'btn group',
          variant && `btn--${variant}`,
          size && `btn--${size}`
        )}
      >
        <span className={LABEL_CLASS}>{label}</span>
        <MessageCircleMore className={ICON_CLASS} size={20} />
      </DrawerTrigger>
    );
  }
  switch (link?.linktype) {
    case 'story':
      return (
        <Link
          href={link.cached_url ?? link.url}
          target={link.target}
          passHref
          legacyBehavior
        >
          <motion.a
            className={cn(
              'btn group',
              variant && `btn--${variant}`,
              size && `btn--${size}`
            )}
            whileTap={{ scale: 0.9 }}
            {...props}
          >
            <span className={LABEL_CLASS}>{label}</span>
            <CircleChevronRight className={ICON_CLASS} size={20} />
          </motion.a>
        </Link>
      );
    case 'email':
      return (
        <motion.a
          href={`mailto:${link.email}`}
          className={cn(
            'btn group',
            variant && `btn--${variant}`,
            size && `btn--${size}`
          )}
          whileTap={{ scale: 0.9 }}
          {...props}
        >
          <span className={LABEL_CLASS}>{label}</span>
          <CircleChevronRight className={ICON_CLASS} size={20} />
        </motion.a>
      );
    case 'url':
      return (
        <motion.a
          href={link.url}
          className={cn(
            'btn group',
            variant && `btn--${variant}`,
            size && `btn--${size}`
          )}
          target={link.target}
          whileTap={{ scale: 0.9 }}
          {...props}
        >
          <span className={LABEL_CLASS}>{label}</span>
          <CircleChevronRight className={ICON_CLASS} size={20} />
        </motion.a>
      );
  }
};
export default Button;
