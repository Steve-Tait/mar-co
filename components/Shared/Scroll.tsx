import SmoothScroller from '@/components/Shared/SmoothScroller';

export default function Scroll({
  root,
  children,
  className,
  ...props
}: {
  root?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <SmoothScroller root={root} className={className} {...props}>
      {children}
    </SmoothScroller>
  );
}
