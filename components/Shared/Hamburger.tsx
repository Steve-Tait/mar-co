import { cn } from '@/lib/utils';

export default function Badge({
  isOpen,
  className,
  ...props
}: {
  isOpen: boolean;
  className?: string;
}) {
  return (
    <button
      type='button'
      className={cn(
        'flex size-6 flex-col items-center justify-center',
        className
      )}
      {...props}
    >
      <span
        className={`h-0.5 w-full rounded-sm bg-white transition-all duration-300 ease-out ${
          isOpen ? 'translate-y-1 rotate-45' : '-translate-y-0.5'
        }`}
      />
      <span
        className={`my-0.5 h-0.5 w-full rounded-sm bg-white transition-all duration-300 ease-out ${
          isOpen ? 'opacity-0' : 'opacity-100'
        }`}
      />
      <span
        className={`h-0.5 w-full rounded-sm bg-white transition-all duration-300 ease-out ${
          isOpen ? '-translate-y-1 -rotate-45' : 'translate-y-0.5'
        }`}
      />
    </button>
  );
}
