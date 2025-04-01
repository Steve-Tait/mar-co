'use client';

import {
  AnimatedWordsSectionStoryblok,
  AnimatedWordStoryblok,
} from '@/component-types-sb';
import useWindowDimensions from '@/lib/hooks/useWindowDimension';
import { cn } from '@/lib/utils';
import { motion, Variants } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

const variants: Variants = {
  inactive: {
    opacity: 0,
  },
  active: {
    opacity: 1,
  },
};

const textVariants: Variants = {
  inactive: {
    opacity: 0,
    y: -5,
  },
  active: (index: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.25 + index / 10,
      duration: 0.5,
    },
  }),
};
const SentenceLoop = ({
  sentences = [],
  className,
  ...props
}: {
  sentences: AnimatedWordStoryblok[];
  className?: string;
}) => {
  const refs = useRef<HTMLParagraphElement[]>([]);
  const { width } = useWindowDimensions();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1 === sentences.length ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(id);
  }, [sentences.length]);

  useEffect(() => {
    let maxHeight = 0;

    refs.current.forEach((element) => {
      const elementHeight = element.offsetHeight;
      if (elementHeight > maxHeight) {
        maxHeight = elementHeight;
      }
      setHeight(maxHeight * 1.1);
    });
  }, [width]);

  return (
    <div
      className={cn('relative overflow-hidden', className)}
      style={{ height }}
      {...props}
    >
      {sentences.map((title, index) => {
        const length = title.word.split(' ').length;
        return (
          <motion.p
            className='absolute left-0 top-1/2 block w-full -translate-y-1/2 text-balance'
            ref={(el) => {
              if (!el) return;
              refs.current[index] = el;
            }}
            key={title._uid}
            initial={false}
            animate={index === currentSlide ? 'active' : 'inactive'}
            variants={variants}
          >
            {title.word.split(' ').map((el: string, i: number) => (
              <React.Fragment key={`${title._uid}-${i}`}>
                <motion.span
                  className='inline-block'
                  variants={textVariants}
                  custom={i}
                >
                  {el}
                </motion.span>
                {`${i + 1 === length ? '' : ' '}`}
              </React.Fragment>
            ))}
            <motion.span
              variants={textVariants}
              custom={length}
              key='dot'
              className='text-secondary'
            >
              .
            </motion.span>
          </motion.p>
        );
      })}
    </div>
  );
};
export default SentenceLoop;
