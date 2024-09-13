'use client';
import { ReactNode, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function LayoutScaler({ children }: { children: ReactNode }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const radius = useTransform(scrollYProgress, [0, 1], ['0rem', '4rem']);
  return (
    <motion.div
      ref={ref}
      className='relative z-1 overflow-clip bg-background text-foreground'
      style={{
        scale,
        borderBottomLeftRadius: radius,
        borderBottomRightRadius: radius,
      }}
    >
      {children}
    </motion.div>
  );
}
