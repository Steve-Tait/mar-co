'use client';

import React, { forwardRef } from 'react';
import { Lenis, ReactLenis } from '@studio-freight/react-lenis';

export * from '@studio-freight/react-lenis';
import useWindowDimensions from '@/lib/hooks/useWindowDimension';
import { cn } from '@/lib/utils';

type IProps = {
  children?: React.ReactNode;
  root?: boolean;
  className?: string;
  style?: React.CSSProperties;
};
type Ref = typeof Lenis | null;
const SmoothScroller = forwardRef<Ref, IProps>(
  ({ children, root = false, className, ...props }, ref) => {
    const { width } = useWindowDimensions();
    const classes = cn('overflow-y-auto w-full', className);

    return (
      <ReactLenis
        root={root}
        // @ts-ignore-next-line
        ref={ref}
        className={classes}
        options={{
          lerp: width && width >= 1024 ? 0.1 : 1,
          autoResize: true,
        }}
        {...props}
      >
        {children}
      </ReactLenis>
    );
  }
);

SmoothScroller.displayName = 'SmoothScroller';
export default SmoothScroller;
