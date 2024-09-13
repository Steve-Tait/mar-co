'use client';
import { cn } from '@/lib/utils';
import { motion, useScroll, useTransform } from 'framer-motion';
import React, { type ReactNode, useRef } from 'react';

type IProps = {
  children: ReactNode;
  className?: string;
  strength?: number;
};

const Parallax: React.FC<IProps> = ({ className, children, strength = 10 }) => {
  const percentage = Math.min(Math.max(strength, 0), 20);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${percentage}%`, `${percentage}%`]
  );

  return (
    <div ref={ref} className={cn('relative overflow-hidden', className)}>
      <div style={{ height: `1${percentage * 2}%` }}>
        <motion.div style={{ y }} className='relative size-full'>
          {children}
        </motion.div>
      </div>
    </div>
  );
};

export default Parallax;
