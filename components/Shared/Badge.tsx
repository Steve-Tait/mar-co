import { cn } from '@/lib/utils';
import Link from 'next/link';

type TBadge = {
  href: string;
  label: string;
  className?: string;
};

const Badge = ({ href, label, className, ...props }: TBadge) => {
  return (
    <Link
      className={cn(
        'pointer-events-auto rounded-xl bg-pink px-2 py-1 text-[10px] font-black uppercase text-white duration-200 hover:bg-pink-700',
        className
      )}
      href={href}
      {...props}
    >
      {label}
    </Link>
  );
};
export default Badge;
