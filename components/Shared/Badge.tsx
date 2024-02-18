import Link from 'next/link';

type TBadge = {
  href: string;
  label: string;
};

export default function Badge({ href, label, ...props }: TBadge) {
  return (
    <Link
      className='pointer-events-auto rounded-xl bg-pink px-2 py-1 text-[10px] font-black uppercase text-white duration-200 hover:bg-pink-700'
      href={href}
      {...props}
    >
      {label}
    </Link>
  );
}
