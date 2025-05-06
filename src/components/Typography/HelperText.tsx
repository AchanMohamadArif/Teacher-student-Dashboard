import React, { ReactNode, HTMLAttributes } from 'react';

interface HelperTextProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  className?: string;
}

const HelperText: React.FC<HelperTextProps> = ({ children, className = '', ...props }) => {
  return (
    <span className={`text-xs text-gray-400 ${className}`} {...props}>
      {children}
    </span>
  );
};

export default HelperText;
