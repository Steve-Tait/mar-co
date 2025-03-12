import { ButtonStoryblok } from '@/component-types-sb';
import React from 'react';
import Button from '../Block/Button';
import { cn } from '@/lib/utils';

type TButtonGroup = {
  buttons?: ButtonStoryblok[];
  size?: 'sm' | 'default';
  className?: string;
};

const ButtonGroup = ({
  buttons,
  size = 'default',
  className,
  ...props
}: TButtonGroup) => {
  if (!(buttons && buttons.length)) return;
  return (
    <div
      className={cn(
        'flex flex-col flex-wrap gap-2 sm:flex-row sm:group-[.text-center]:items-center',
        className
      )}
      {...props}
    >
      {buttons?.map((button) => (
        <Button key={button.uuid} blok={button} size={size} />
      ))}
    </div>
  );
};
export default ButtonGroup;
