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
    <div className={`container ${className}`} {...props}>
      {children}
    </div>
  );
};
export default Container;
