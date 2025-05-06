import React, { ReactNode, HTMLAttributes } from 'react';

interface CaptionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
}

const Caption: React.FC<CaptionProps> = ({ children, className = '', ...props }) => {
  return (
    <figcaption className={`text-xs text-gray-500 ${className}`} {...props}>
      {children}
    </figcaption>
  );
};

export default Caption;
