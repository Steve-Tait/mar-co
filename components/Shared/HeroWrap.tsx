'use client';

import React, { useRef } from 'react';
import Hero, { THero } from './Hero';
import HeroHome, { THeroHome } from './HeroHome';
import { motion, useScroll, useTransform } from 'framer-motion';
import LayoutScaler from './LayoutScaler';

type THeroWrap = THero & {
  type?: 'default' | 'home';
  children: React.ReactNode;
};

const HeroWrap = ({ type = 'default', children, ...props }: THeroWrap) => {
  const ref = useRef(null);
  const HeroTag = type === 'home' ? HeroHome : Hero;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start start'],
  });
  const y = useTransform(scrollYProgress, [0.99, 1], ['0%', '-100%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 0.7]);
  return (
    <>
      <motion.div className='sticky top-0' style={{ y }}>
        <HeroTag animated_title={[]} {...props} />
        <motion.div
          className='pointer-events-none absolute inset-0 z-10 size-full bg-[black]'
          style={{
            opacity,
          }}
        ></motion.div>
      </motion.div>
      <div className='relative z-10' ref={ref}>
        <LayoutScaler>{children}</LayoutScaler>
      </div>
    </>
  );
};
export default HeroWrap;
