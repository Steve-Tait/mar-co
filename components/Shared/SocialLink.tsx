import { MultilinkStoryblok } from '@/component-types-sb';
import { DynamicIcon, IconName } from 'lucide-react/dynamic';

type TBadge = {
  link: MultilinkStoryblok;
  icon?: IconName;
  className?: string;
};

const SocialLink = ({
  link,
  icon = 'linkedin',
  className,
  ...props
}: TBadge) => {
  return (
    <a
      className='mt-4 flex h-8 w-8 shrink-0 rounded-full border border-secondary p-1.5 text-secondary transition-colors hover:bg-secondary hover:text-white'
      href={link.url}
      target='_blank'
      rel='noopener noreferrer'
      {...props}
    >
      <DynamicIcon name={icon} className='size-full' />
    </a>
  );
};
export default SocialLink;
