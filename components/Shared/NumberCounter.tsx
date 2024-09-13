import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import { countDecimals } from '@/lib/utils';

type Props = {
  value: number;
  direction?: 'up' | 'down';
  decimals?: number;
  className?: string;
};

export default function NumberCounter({
  value,
  decimals,
  direction = 'up',
  className,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === 'down' ? value : 0);
  const springValue = useSpring(motionValue, { stiffness: 15, damping: 10 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(direction === 'down' ? 0 : value);
    }
  }, [motionValue, isInView]);

  useEffect(
    () =>
      springValue.on('change', (latest) => {
        if (!ref.current) return;
        ref.current.textContent = Intl.NumberFormat('en-US').format(
          Number(latest.toFixed(decimals ?? countDecimals(value)))
        );
      }),
    [springValue]
  );

  return <span className={className} ref={ref} />;
}
