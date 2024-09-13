import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react';

class IProps {
  children: ReactNode;
  className?: string;
}

const Container: React.FC<IProps> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <div className={cn('container', className)} {...props}>
      {children}
    </div>
  );
};
export default Container;
