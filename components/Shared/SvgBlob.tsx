import React, { useMemo, forwardRef, useId } from 'react';
import blobshape from 'blobshape';
import { SvgBlobProps } from '@/lib/types';

export const SvgBlob = ({
  color = 'currentColor',
  image,
  shapeProps,
  ...props
}: SvgBlobProps) => {
  const size = shapeProps?.size ?? 200;
  const growth = shapeProps?.growth ?? 6;
  const edges = shapeProps?.edges ?? 8;
  const seed = shapeProps?.seed;
  const id = useId();
  const { path: svgPath } = useMemo(
    () =>
      blobshape({
        size,
        growth,
        edges,
        seed,
      }),
    [size, growth, edges, seed]
  );
  const pathProps: React.SVGProps<SVGPathElement> = {
    fill: color,
  };

  const { ...svgProps } = props as any;

  return (
    <svg
      {...svgProps}
      viewBox={`0 0 ${size} ${size}`}
      xmlns='http://www.w3.org/2000/svg'
    >
      {image ? (
        <>
          <defs>
            <clipPath id={id}>
              <path d={svgPath} {...pathProps} />
            </clipPath>
          </defs>
          <image
            x='0'
            y='0'
            width='100%'
            height='100%'
            clipPath={`url(#${id})`}
            xlinkHref={image}
            preserveAspectRatio='none'
          />
        </>
      ) : (
        <path d={svgPath} {...pathProps} />
      )}
    </svg>
  );
};
